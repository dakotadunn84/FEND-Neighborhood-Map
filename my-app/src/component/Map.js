import React, {Component} from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 32.736956, lng: -117.148605  }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 32.736956, lng: -117.148605 }} />}
  </GoogleMap>
))


export default class Map extends Component {
    render() {
        return(
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCg0xeDjQtEyAq9jyFVWuEVQYd7AXOt_kE"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}