
import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

//import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken="pk.eyJ1IjoidHhwbyIsImEiOiJjbDNmbHRucDEwNXg0M2NwaXl1OWQycmhxIn0.nv3Rqz4P0wx2CbuKUl3bmw";



export default function Mapp() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(18.461865);
    const [lat, setLat] = useState( -33.9572329);
    const [zoom, setZoom] = useState(17);

    const [marker, setmarker] = useState(new mapboxgl.Marker());
    
    const setStuff = () =>{
        setLat(zoom)
        setLng(0.5)
        console.log(lng)
    }

    useEffect(() => {

        if (!map.current) {
            console.log('map is not init')
             map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
            });
           
        
        marker.setLngLat( [18.462119, -33.957358] )
        marker.addTo(map.current)
        setStuff();
        
        console.log(`lng : ${lng} lat : ${lat}`)
        setTimeout(function(){
            
        console.log(`lng : ${lng} lat : ${lat}`)
            
            //   const marker1 = new mapboxgl.Marker()
            //   marker1.setLngLat( [ 18.461909, -33.958321] )
            //   marker1.addTo(map.current)
        console.log('done moving ')
        }, 3000);
  
        
        return;
        } 
       
        
    });//,[lat,lng,marker,zoom]

    


    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
        );
}

