import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core'; 
import { getPlacesData, getWeatherData } from '../api';
import { getLocationData } from '../utils/getContent';

import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map.jsx';
import './LocationPage.css';



const LocationPage = ({ user, locationIDParam,locationSetter }) => {
  // console.log({locationIDParam});
  const [locationData,setLocationData] = useState({});
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [locationName, setLocationName] = useState("Saint-Jean-Pied-de-Port");

  const [childClicked, setchildClicked] = useState({});
//   const [locationData, setLocationData] = useState();

  const [coordinates, setCoordinates] = useState({});
  // set google maps window boundries
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  

  const currentTemp = isLoading ? 'loading' : weatherData.current.temp ;
  const currentWindSpeed = isLoading ? 'loading' : Math.round(weatherData.current.wind_speed * 3.6);
  const gustSpeed = isLoading ? 'loading' : Math.round(weatherData.current.wind_gust * 3.6) ;
  const currentHumidity = isLoading ? 'loading' : weatherData.current.humidity;
  
useEffect(() => {
  setIsLoadingLocation(true);
  getLocationData(setLocationData).then((data) => {setIsLoadingLocation(false)}
  );
    }, []);

useEffect(()=> {
  console.log(locationIDParam);
  locationSetter(locationIDParam);
  let found = isLoadingLocation ? {latitude:"43.16350", longitude: "-1.23502", locationName:"Saint-Jean-Pied-de-Port" } : locationData.locationData.locationParagraphs.find(l => l.ID.toString() === (locationIDParam+1).toString() );
  setLocationName(found.locationName);
  let latitude = parseFloat(found.latitude);
  let longitude = parseFloat(found.longitude); 
  setCoordinates({lat: latitude, lng: longitude})
},[isLoadingLocation,locationIDParam]) // eslint-disable-line react-hooks/exhaustive-deps



  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]); // eslint-disable-line react-hooks/exhaustive-deps



  useEffect(
    () => {
            if (bounds.sw && bounds.ne) {
        setIsLoading(true);
        getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
          {setWeatherData(data);
          setIsLoading(false)}
        );

        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
        });
      }
    },
    // rerun the code everytime the map changes
    [type, bounds]);  // eslint-disable-line react-hooks/exhaustive-deps
  let albergueArray = isLoadingLocation ? [] : locationData.locationData.locationAlbergueData[locationIDParam].fredalbergue;
// console.log(locationIDParam);
// console.log(locationData.locationData.locationParagraphs);
let para = locationIDParam + 1;
let locationParagraphs = isLoadingLocation ? null : locationData.locationData.locationParagraphs.find(l => l.ID === (para) );
let locParas = isLoadingLocation ? [] : locationParagraphs.paragraphs;
// console.log(locParas);
  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} locname={locationName} latitude={coordinates.lat} longitude={coordinates.lng} />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setchildClicked={setchildClicked}
            weatherData={weatherData}
          />
        </Grid>


      </Grid>
      <div className='weather'>
      <h4>Notes</h4>
      {!isLoading && locParas.map((item, index) => {
        const paraType = item.paragraphType === "PLAIN" ? "": "DIRECTIONS" ? "=>" : "HISTORY" ? "*": "";
        const paraText = item.paragraphText; 
                return (
                  <>
                  <p>{paraType} {paraText}</p>
                  </>
                )
      })}
      <h4>Local Weather</h4>
      <p>Current temp = {currentTemp} Celsius with a humidity of {currentHumidity}%</p>
      <p>Wind speed = {currentWindSpeed} kph and gusting upto {gustSpeed}kph</p>
      
      <h4>List of local Albergues</h4>
      </div>
<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>Address</th>
    <th>Price</th>
    <th>Notes</th>
    <th>Beds</th>
    <th>Opening Period</th>
    <th>Email</th>
    <th>Booking Link</th>
    <th>Phone Number</th>
    <th>Comments</th>
  </tr>
  </thead>

  {albergueArray.map((item, index) => {
    const rate = "€"+ Math.round(item.onedPersonRateMin);
    const beds = item.numberOfBeds + "÷" + item.numberOfDorms;
    const email = item.email;
    const href1 = item.albergueWebsiteURL;
    const href2 = item.albergueBookingDotComURL+"?aid=1627093";
    const phone = "+"+item.tel1CountryCode+" "+item.tel1PhoneNumber;
    const text1 = "tel:"+phone;
    const text2 = "mailto:"+email;
            return (
          <>
          <tr key={index}>
            <td><u><a href={href1}>{item.albergueName}</a></u></td> 
            <td>{item.albergueStreetAdress}</td>
            <td>{rate}</td>
            <td>{item.rateNotes}</td>
            <td>{beds}</td>
            <td>{item.openingPeriod}</td>
            <td><u><a href={text2}>{email}</a></u></td>
            <td><u><a href={href2}>Booking</a></u></td>
            <td><u><a href={text1}>{phone}</a></u></td>
            <td>{item.albergueAdditionalComments}</td>
          </tr> 

          </>
        )})}
  </table>
  <br></br>
        <button className='nextButtons' onClick={() => locationSetter(locationIDParam-1)}>Previous Location</button>
        <button className='nextButtons' onClick={() => locationSetter(locationIDParam+1)}>Next Location</button>

    </>

  );
};

export default LocationPage;
