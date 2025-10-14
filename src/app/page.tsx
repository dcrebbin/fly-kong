"use client";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { useMapStore } from "./_state/map.store";
import { LOCATIONS } from "./common/locations";
import { addPlace } from "~/lib/custom-map";
import Appbar from "./components/appbar";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGNyZWJiaW4iLCJhIjoiY20xMjFtYnc0MHh4ZjJrb2h2NDR5MjF6YyJ9.LOAauCyTV_pfMAYd08pTmg";

export default function Home() {
  const { map, setMap } = useMapStore();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const zoom = 10;
  const center = [114.16819296950341, 22.31382741410536];

  const handleMapContainerRef = (node: HTMLDivElement | null) => {
    if (!node || map) return;
    mapContainer.current = node;

    const newMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center as mapboxgl.LngLatLike,
      zoom: zoom,
    });

    setMap(newMap);
    LOCATIONS.forEach((location) => {
      addPlace(location, newMap);
    });
  };
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Appbar />
      <div ref={handleMapContainerRef} className="map-container relative" />
      <style jsx>{`
        .map-container {
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  );
}
