import React, { Component } from 'react';

import './App.css';
import Map from './component/Map';
import SquareAPI from "./API/"

class App extends Component {
  constructor(){
    super();
    this.state ={
      venues:[],
      markers:[],
      center: [],
      zoom: 12
    };
  }

closeAllMarkers = () => {
  const markers = this.state.markers.map(marker => {
    marker.isOpen = false;
    return marker;
  });
  this.setState({markers: Object.assign(this.state.markers, markers)});
}; 
  
handleMarkerCLick = (marker) => {
  this.closeAllMarkers();
  marker.isOpen = true;
  this.setState({markers: Object.assign(this.state.markers, marker) });
}

  componentDidMount(){
    SquareAPI.search({
      near:"San Diego, CA",
      query:"sushi",
      limit: 10
    }).then(results => {
      const {venues} = results.response;
      const {center} = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen:false,
          isVisible:true
        };
      });
      this.setState({venues, center, markers})
      console.log(results)
    });
  }
  
  render() {
    return (
      <div className="App">
        <Map {...this.state} handleMarkerCLick={this.handleMarkerCLick} />
      </div>
    );
  }
}

export default App;
