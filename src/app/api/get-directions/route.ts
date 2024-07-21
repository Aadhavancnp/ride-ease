import { DirectionResult } from "@/types/directions";
import { NextRequest, NextResponse } from "next/server";

const DIRECTION_API_URL = process.env.MAPBOX_DIRECTION_API!;
const MAPBOX_API_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const src = searchParams.get("src");
  const dst = searchParams.get("dst");
  if (!src || !dst) return NextResponse.json(null);
  const url = `${DIRECTION_API_URL}/${src};${dst}?geometries=geojson&language=en&overview=full&steps=false&&access_token=${MAPBOX_API_TOKEN}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });
  const data: DirectionResult = await res.json();
  return NextResponse.json({ data });
}
