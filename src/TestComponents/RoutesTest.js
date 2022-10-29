//import {mapboxgl, MapboxDirections} from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl';
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import { lineString, along, lineDistance } from '@turf/turf';
 
const locations = [
   
                        [18.462775, -33.955731],
                        [18.462769, -33.955748],
                        [18.462736, -33.955816],
                        [18.46265, -33.956047],
                        [18.462634, -33.95611],
                        [18.462621, -33.956185],
                        [18.462607, -33.956329],
                        [18.462577, -33.956735],
                        [18.46251, -33.957313],
                        [18.462402, -33.957864],
                        [18.462378, -33.957985],
                        [18.462252, -33.958463],
                        [18.46212, -33.958883],
                        [18.462017, -33.95916],
                        [18.461926, -33.959409],
              [18.461903, -33.959505],
                        [18.461903, -33.959505],
              [18.461903, -33.959505],
                        [18.461896, -33.959534],
                        [18.461892, -33.959571],
                        [18.461893, -33.95966],
                        [18.461895, -33.959718],
              [18.461895, -33.959718],
                        [18.461837, -33.959694],
                        [18.461792, -33.959678],
                        [18.461738, -33.959666],
                        [18.46169, -33.959658],
                        [18.461639, -33.959651],
              [18.461639, -33.959651],
                        [18.461401, -33.959825],
                        [18.461218, -33.959967],
              [18.461218, -33.959967],
                        [18.461218, -33.959967],
              [18.461007, -33.960026],
                [18.460999, -33.960022],
                [18.460985, -33.960012],
                [18.460961, -33.959979],
                [18.460978, -33.959913],
                [18.460999, -33.959856],
                [18.461165, -33.959517],
                [18.461264, -33.959289],
                [18.461408, -33.958948],
                [18.461489, -33.958717],
                [18.461646, -33.958179],
                [18.461732, -33.957849],
                [18.461739, -33.95782],
                [18.461745, -33.957795],
                [18.46182, -33.957459],
                [18.46187, -33.957122],
                [18.461916, -33.956711],
                [18.461942, -33.95632],
                [18.461947, -33.956173],
                [18.461948, -33.95609],
                [18.461948, -33.956068],
                [18.461947, -33.955986],
                [18.461944, -33.955796],
                [18.461947, -33.955623],
                [18.461952, -33.9556],
                [18.461963, -33.955577],
                [18.461981, -33.955562],
                [18.461981, -33.955562],
                [18.462033, -33.955542],
                [18.462112, -33.955517],
                [18.46214, -33.955508],
                [18.462248, -33.95548],
                [18.462295, -33.955545],
                [18.462341, -33.955587],
                [18.462388, -33.955615],
                [18.462414, -33.955625],
                [18.462461, -33.955633],
                [18.462504, -33.955635],
                [18.46255, -33.955633],
                [18.462583, -33.955627],
                [18.462667, -33.955654],
                [18.462707, -33.955678],
                [18.46274, -33.955705],
                [18.462775, -33.955731],
                [18.462775, -33.955731],
                [18.462769, -33.955748],
                [18.462736, -33.955816],
                [18.46265, -33.956047],
                [18.462634, -33.95611],
                [18.462621, -33.956185],
                [18.462607, -33.956329],
                [18.462577, -33.956735],
                [18.46251, -33.957313],
                [18.462402, -33.957864],
                [18.462378, -33.957985],
                [18.462252, -33.958463],
                [18.46212, -33.958883],
                [18.462017, -33.95916],
                [18.461926, -33.959409],
                [18.461903, -33.959505],
                [18.461896, -33.959534],
                [18.461892, -33.959571],
                [18.461893, -33.95966],
                [18.461895, -33.959718],
                [18.461837, -33.959694],
                [18.461792, -33.959678],
                [18.461738, -33.959666],
                [18.46169, -33.959658],
                [18.461639, -33.959651],
                [18.461401, -33.959825],
                [18.461218, -33.959967],
 

            ]
 


//import Directions from "react-map-gl-directions";

//var MapboxDirections = require('@mapbox/mapbox-gl-directions');



//import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken="pk.eyJ1IjoidHhwbyIsImEiOiJjbDNmbHRucDEwNXg0M2NwaXl1OWQycmhxIn0.nv3Rqz4P0wx2CbuKUl3bmw";


export default function RoutesTest() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(17);

    var json = require('./RoundSmutsJson.json')
    //console.log(json)
    useEffect(() => {

      console.log("effect start")





        //const d = new mapboxgl.Directions()
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center:  [18.461865, -33.9572329],
          //zoom: zoom

          // center: [0, 0],
           zoom: 2
        });

        let point = 0 ;

        const marker = new mapboxgl.Marker({
          color: '#F84C4C' // color it red
          });

          const animateMarker = (timestamp) => {
            const radius = 50;
            point  = (point+1)%locations.length
            /* 
            Update the data to a new position 
            based on the animation timestamp. 
            The divisor in the expression `timestamp / 1000` 
            controls the animation speed.
            */
            marker.setLngLat(
              // [locations[point][0]/1000,
              // locations[point][1]/1000]
             [
              //Math.cos
              (timestamp / 1000),// * radius,
             //Math.sin
             (timestamp / 1000) // * radius
            ]
            );
             
            /* 
            Ensure the marker is added to the map. 
            This is safe to call if it's already added.
            */
            marker.addTo(map.current);
             
            // Request the next frame of the animation.
            requestAnimationFrame(animateMarker);
          }

          requestAnimationFrame(animateMarker);

        var draw = new MapboxDraw({
          displayControlsDefault: false,
          controls: {
              polygon: true,
              trash: true
          }
        });

        map.current.on('load', () => {
          map.current.addSource('route', {
          'type': 'geojson',
          'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
          'type': 'LineString',
          'coordinates':  locations
          }
          }
          });
          map.current.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
          'line-join': 'round',
          'line-cap': 'round'
          },
          'paint': {
          'line-color': '#008AD8',
          'line-width': 7
          }
          });
          });

        
 

      });
   

    return (
        <div>
        <div ref={mapContainer} className="map-container" />
        </div>
    );
}

