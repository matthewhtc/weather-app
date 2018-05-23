import React, { Component } from 'react'; 

class GoogleMap extends Component {
  componentDidMount() { //lifeCycle method, gets called when this method gets rendered to screen. 
    // this is generally how we integrate with 3rd party libraries. there will be more info on this later in the course. 
    /*takes reference to HTML node it'll want to append the map to (this.refs.map part). */
    new google.maps.Map(this.refs.map, { // how we created embedded google maps. 
      // second argument is a 'options' object
      zoom: 12, 
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render() {
    // makes use of 'ref' system in react: allows us to get a reference to an HTML element that has been rendered
    // to the page. so, you can say: this.refs.map, and you will get access to <div ref='map' /> . 
    return <div ref='map' /> 
  }
}

export default GoogleMap; 