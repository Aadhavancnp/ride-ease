"use client";
import { DestinationCoordsContext } from "@/context/DestinationCoordsContext";
import { SourceCoordsContext } from "@/context/SourceCoordsContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { Coordinates } from "@/types/coords";
import { AutoCompleteRetrieveResponse } from "@/types/retrieve";
import { AutoCompleteResponse, Suggestion } from "@/types/search";
import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";

export default function TaxiForm() {
  const { setUserCoordinates } = useContext(UserLocationContext);
  const [source, setSource] = useState("");
  const [sourceChanged, setSourceChanged] = useState(false);
  const [destinationChanged, setDestinationChanged] = useState(false);
  const [destination, setDestination] = useState("");
  const [addressList, setAddressList] = useState<Suggestion[]>([]);
  const { setSrcCoordinates } = useContext(SourceCoordsContext);
  const { setDestCoordinates } = useContext(DestinationCoordsContext);

  function requestGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const userCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      setUserCoordinates(userCoordinates);
      setSrcCoordinates(userCoordinates);
      setSource("Your Location");
    });
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, destination]);

  async function getAddressList() {
    setAddressList([]);
    const query = sourceChanged ? source : destination;
    const res = await fetch("/api/search-address?q=" + query, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });
    const data = await res.json();
    if (!data) return;
    const addressLists: AutoCompleteResponse = data.data;
    // console.log(addressLists);
    setAddressList(addressLists.suggestions);
  }

  async function onSourceAddressChange(suggestion: Suggestion) {
    setSource(suggestion.full_address || suggestion.place_formatted);
    setAddressList([]);
    setSourceChanged(false);
    const res = await fetch(
      "/api/retrieve-address?id=" + suggestion.mapbox_id,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      },
    );
    const data = await res.json();
    if (!data) return;
    const addressLists: AutoCompleteRetrieveResponse = data.data;
    const sourceCoordinates: Coordinates = {
      latitude: addressLists.features[0].geometry.coordinates[1],
      longitude: addressLists.features[0].geometry.coordinates[0],
    };
    setSrcCoordinates(sourceCoordinates);
  }

  async function onDestinationAddressChange(suggestion: Suggestion) {
    setDestination(suggestion.full_address || suggestion.place_formatted);
    setAddressList([]);
    setDestinationChanged(false);
    const res = await fetch(
      "/api/retrieve-address?id=" + suggestion.mapbox_id,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      },
    );
    const data = await res.json();
    if (!data) return;
    const addressLists: AutoCompleteRetrieveResponse = data.data;
    const destinationCoordinates: Coordinates = {
      latitude: addressLists.features[0].geometry.coordinates[1],
      longitude: addressLists.features[0].geometry.coordinates[0],
    };
    setDestCoordinates(destinationCoordinates);
  }

  return (
    <>
      <div className="relative">
        <div className="mt-3 flex items-center gap-4 rounded-lg bg-slate-200 p-3 focus-within:ring focus-within:ring-black">
          <Image src="/pickup.png" width={15} height={15} alt="Pickup" />
          <input
            type="text"
            name="pickup"
            placeholder="Enter Location"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
              setSourceChanged(true);
            }}
            className="w-full bg-transparent outline-none"
            required
          />
          <Image
            src="/navigation.png"
            width={20}
            height={20}
            alt="Navigate"
            className="cursor-pointer"
            onClick={requestGeolocation}
          />
        </div>
        {addressList.length > 0 && sourceChanged && (
          <div className="absolute z-[9999] w-full rounded-md bg-white p-1 shadow-md">
            {addressList?.map((suggestion: Suggestion) => (
              <h2
                key={suggestion.mapbox_id}
                className="cursor-pointer bg-gray-100 p-3"
                onClick={() => onSourceAddressChange(suggestion)}
              >
                {suggestion.full_address || suggestion.place_formatted}
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <div className="mt-3 flex items-center gap-4 rounded-lg bg-slate-200 p-3 focus-within:ring focus-within:ring-black">
          <Image
            src="/destination.png"
            width={15}
            height={15}
            alt="Destination"
          />

          <input
            type="text"
            name="destination"
            placeholder="Enter Destination"
            className="w-full bg-transparent outline-none"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              setDestinationChanged(true);
            }}
            required
          />
        </div>
        {addressList.length > 0 && destinationChanged && (
          <div className="absolute z-[9999] w-full rounded-md bg-white p-1 shadow-md">
            {addressList?.map((suggestion: Suggestion) => (
              <h2
                key={suggestion.mapbox_id}
                className="cursor-pointer bg-gray-100 p-3"
                onClick={() => onDestinationAddressChange(suggestion)}
              >
                {suggestion.full_address || suggestion.place_formatted}
              </h2>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
