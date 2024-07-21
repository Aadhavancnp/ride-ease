import { AutoCompleteRetrieveResponse } from "@/types/retrieve";
import { NextRequest, NextResponse } from "next/server";

const SEARCH_API_URL = process.env.MAPBOX_SEARCH_API!;
const MAPBOX_API_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;
const SESSION_TOKEN = process.env.SESSION_TOKEN!;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) return NextResponse.json(null);
  const url = `${SEARCH_API_URL}/retrieve/${id}?session_token=${SESSION_TOKEN}&access_token=${MAPBOX_API_TOKEN}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });
  const data: AutoCompleteRetrieveResponse = await res.json();
  return NextResponse.json({ data });
}
