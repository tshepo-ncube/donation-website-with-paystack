import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import MapGL from 'react-map-gl'

//import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken="pk.eyJ1IjoidHhwbyIsImEiOiJjbDNmbHRucDEwNXg0M2NwaXl1OWQycmhxIn0.nv3Rqz4P0wx2CbuKUl3bmw";


class Mapp extends React.Component{


	// Set up states for updating map 
	constructor(props){
		super(props);
		
		const popup = new mapboxgl.Popup({ offset: 25 }).setText(
			'Claremont AntiClockwise'
		);
		
		const popup_upper = (val) => {
			return  new mapboxgl.Popup({ offset: 25 }).setText(
				`Upper Campus ${val}`
			);
		}
		
		
		this.state = {
            lat:  -33.9572329,
            lng: 18.4618654, 
			long:18.461773,
			lati:-33.958752,
			zoom: 17,
			marker: new mapboxgl.Marker(),
			markers:[ 
				new mapboxgl.Marker({draggable: true}).setPopup(popup),
				new mapboxgl.Marker().setPopup(popup),
				new mapboxgl.Marker().setPopup(popup),
				// upper campus markers
				new mapboxgl.Marker({ "color": "#b40219" }).setPopup(popup_upper(" 3rd index")),
				new mapboxgl.Marker({ "color": "#b40219" }).setPopup(popup_upper(" 4th index")),
				new mapboxgl.Marker({ "color": "#b40219" }).setPopup(popup_upper(" 5th index")),
				
			],
			pointer:0,
			// path:[
			// 	[-33.95743699878917, 18.461820953228933],
			// 	[-33.957463695972145, 18.46196176919435],
			// 	[-33.95750819125846, 18.462107949577494],
			// 	[-33.95766837409653, 18.462094538533165],
			// 	[-33.95787305172851, 18.462048940982463],
			// 	[-33.95803100912961, 18.462014072267213],
			// 	[-33.95821788792965, 18.461976521343107],
			// 	[-33.958200089966375, 18.46178340230482],
			// 	[-33.95815781978869, 18.461630516399516],
			// 	[-33.95798651411672, 18.461673431741357],
			// 	[-33.957815208099824, 18.46172975812752],
			// 	[-33.95760830556759, 18.461759262425037],
			// 	[-33.9575526865215, 18.461778037887093],
			// ],
			path: [
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
				[18.461007, -33.960026],
                    [18.460999, -33.960022],
                    [18.460985, -33.960012],
                    [18.460961, -33.959979],
					[18.461981, -33.955562],
                    [18.461981, -33.955562],
					[18.461981, -33.955562],
                    [18.461981, -33.955562],
					[18.461981, -33.955562],
                    [18.462033, -33.955542],
                    [18.462112, -33.955517],
                    [18.46214, -33.955508],
                    [18.462248, -33.95548],
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
					 [18.462707, -33.955678],
                    [18.46274, -33.955705],
                    [18.462775, -33.955731],
					[18.462775, -33.955731],
                    [18.462775, -33.955731],
					//go get from line 652
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
			
		}

	}
	
	componentDidMount() {
		let point = 0;
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [18.461865, -33.9572329],
			zoom:  17
		})
 
		const startMarkers = () =>{
			// this.state.markers[2].setLngLat([this.state.path[this.state.pointer][1]+0.0001,this.state.path[this.state.pointer][0]+0.0001])
			// .addTo(map);
		
			// this.state.markers[1].setLngLat([this.state.path[this.state.pointer][1]+0.0002,this.state.path[this.state.pointer][0]+0.0002])
			// .addTo(map);

			// const marker = new mapboxgl.Marker();
			// marker.setLngLat([18.460961, -33.959979]);
			// marker.addTo(map)
			
			
			//let requestDirection = "https://api.mapbox.com/directions/v5/mapbox/driving/ 18.460955,-33.960104;18.461972,-33.955645?geometries=geojson&access_token=pk.eyJ1IjoidHhwbyIsImEiOiJjbDNmbXh2bm4wYzhuM2tuMG1hbW4xenNiIn0.f0lWDvFM1cG_yBfZHXA9bg			"

			// const endPoints = [
			// 	//these 3 coordinates are from a route than is ciruluar
			// 	//we move from index 0 to index 1
			// 	// then index 1 to index 2
			// 	// from index 2 back to index 0
			// 	{lng: 18.460955528096548, lat: -33.96010447086488},
			// 	{lng: 18.461972200472132, lat: -33.9556450978042},
			// 	{lng: 18.46272807540217, lat: -33.955835384729355},

			// ];


			// const onDragEnd = () => {
			// 	console.log("marker dragged...")
			// 	const lngLat = this.state.markers[0].getLngLat();
			// 	console.log(lngLat);
			// }

			// this.state.markers[0].on('dragend', onDragEnd)
			//this.state.markers[0].setLngLat([this.state.path[this.state.pointer][1],this.state.path[this.state.pointer][0]])
			this.state.markers[0].setLngLat([18.460961, -33.959979])
			.addTo(map);
			console.log(point)
			//set state is async so its giving us problems as pointer doesnt update atomically...
			this.setState({...this.state,pointer:(this.state.pointer+1)%this.state.path.length})
			


			//upper campus markers
			// this.state.markers[3].setLngLat([this.state.path[this.state.pointer][1]+0.0005,this.state.path[this.state.pointer][0]+0.0005])
			// .addTo(map);
		
			// this.state.markers[4].setLngLat([this.state.path[this.state.pointer][1]+0.0006,this.state.path[this.state.pointer][0]+0.0006])
			// .addTo(map);

			// this.state.markers[5].setLngLat([this.state.path[this.state.pointer][1]+0.0007,this.state.path[this.state.pointer][0]+0.0007])
			// .addTo(map);
		}

		const moveMarkers = () => {
			//async setState messing up our syncronous codebase
			this.setState({pointer:(this.state.pointer+1)%this.state.path.length})
			point  = (point+1)%this.state.path.length //so we work with variable for now
			//console.log((this.state.pointer+1)%this.state.path.length )
			// this.state.markers[2].setLngLat([this.state.path[this.state.pointer][1]+0.0001,this.state.path[this.state.pointer][0]+0.0001])
			// this.state.markers[1].setLngLat([this.state.path[this.state.pointer][1]+0.0002,this.state.path[this.state.pointer][0]+0.0002])
			//console.log(this.state.path)
			
			//this.state.markers[0].setLngLat([18.461732, -33.957849])
			//console.log([this.state.path[point][0],this.state.path[point][1]])
			this.state.markers[0].setLngLat([this.state.path[point][0],this.state.path[point][1]])

			// this.state.markers[3].setLngLat([this.state.path[this.state.pointer][1]+0.0005,this.state.path[this.state.pointer][0]+0.0005])
			// this.state.markers[4].setLngLat([this.state.path[this.state.pointer][1]+0.0006,this.state.path[this.state.pointer][0]+0.0006])
			// this.state.markers[5].setLngLat([this.state.path[this.state.pointer][1]+0.0007,this.state.path[this.state.pointer][0]+0.0007])

			//proper way to stop marker from moving
			//clearInterval(intervalId)
			console.log("---------------------------MARKERS MOVED------------------------")
			
		}

		
		startMarkers()
		let intervalId = setInterval(
			function(){
				moveMarkers()
				//clearInterval(intervalId);
		},2000)
		
		  
		
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%',height:'87vh'}} />
			</div>
		)
	}
}

export default Mapp;