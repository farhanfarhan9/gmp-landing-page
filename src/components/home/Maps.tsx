"use client"
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Maps = () => {
    const mapRef = React.useRef<HTMLDivElement>(null);

    const fetchMap = async () => {
        // Prepare google maps API key
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
            version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const {Marker} = await loader.importLibrary("marker")

        // Company's position
        const position = {
            lat: 3.5965593888513068,
            lng: 98.62950858023319,
        };

        // Map settings
        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 17,
            mapId: "GMP-Map",
        };

        const newMap = new Map(mapRef.current as HTMLDivElement, mapOptions);

        // Map marker
        const marker = new Marker({
            map: newMap,
            position: position
        })
    };

    useEffect(()=>{
        fetchMap()
    },[])

    return <div ref={mapRef} className="mx-auto h-96 md:max-w-7xl"/>;
};

export default Maps;
