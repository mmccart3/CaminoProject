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
  const [locationData,setLocationData] = useState(
    {
      "locationData": {
        "locationPrivateData": [
          {
            "ID": 1,
            "locationName": "Saint-Jean-Pied-de-Port",
            "latitude": "43.16350",
            "longitude": "-1.23502",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fred": [
              {
                "ID": 1,
                "privateAccommName": "Hôtel Ramuntcho",
                "privateAccommStreetAdress": "1, rue de France",
                "onedPersonRateMin": "66.00",
                "onedPersonRateMax": "98.00",
                "twoPersonRateMin": "66.00",
                "twodPersonRateMax": "98.00",
                "rateNotes": null,
                "email": null,
                "tel1CountryCode": 33,
                "tel1PhoneNumber": 559370391,
                "tel2CountryCode": null,
                "tel2PhoneNumber": null,
                "privateAccommWebsiteURL": "https://www.hotel-ramuntcho.com/",
                "privateAccommBookingDotComURL": "https://www.booking.com/hotel/fr/logis-ramuntcho.en-gb.html?&aid=1627093",
                "privateAccommAdditionalComments": null,
                "Location2privateAccomm": {
                  "locationID": 1,
                  "privateAccommDetailID": 1,
                  "LocationID": 1,
                  "PrivateAccommDetailID": 1
                }
              }
            ]
          },
          {
            "ID": 2,
            "locationName": "Huntto",
            "latitude": "43.12438",
            "longitude": "-1.24497",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fred": []
          },
          {
            "ID": 3,
            "locationName": "Orisson",
            "latitude": "43.10885",
            "longitude": "-1.23917",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fred": []
          }
        ],
        "locationAlbergueData": [
          {
            "ID": 1,
            "locationName": "Saint-Jean-Pied-de-Port",
            "latitude": "43.16350",
            "longitude": "-1.23502",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fredalbergue": [
              {
                "ID": 1,
                "albergueName": "Municipal Albergue",
                "numberOfBeds": 32,
                "numberOfDorms": 3,
                "albergueStreetAdress": "55, rue de la Citadelle",
                "onedPersonRateMin": "12.00",
                "onedPersonRateMax": null,
                "twoPersonRateMin": "30.00",
                "twodPersonRateMax": null,
                "rateNotes": "Advance reservation not permitted. One double room available.",
                "kitchenFacilitiesAvailable": true,
                "washingMachineAvailable": true,
                "dryingMachineAvailable": true,
                "communalMealAvailable": false,
                "openingPeriod": "Open all year",
                "openingTimes": "Check-in from 14:00 to 20:30",
                "email": null,
                "tel1CountryCode": 33,
                "tel1PhoneNumber": 617103189,
                "tel2CountryCode": null,
                "tel2PhoneNumber": null,
                "albergueWebsiteURL": "https://www.terresdenavarre.fr/ospitalia-refuge-municipal-les-chemins-de-st-jacques/presentation-du-refuge/",
                "albergueBookingDotComURL": null,
                "albergueAdditionalComments": null,
                "Location2albergues": {
                  "locationID": 1,
                  "albergueID": 1,
                  "LocationID": 1,
                  "AlbergueID": 1
                }
              }
            ]
          },
          {
            "ID": 2,
            "locationName": "Huntto",
            "latitude": "43.12438",
            "longitude": "-1.24497",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fredalbergue": []
          },
          {
            "ID": 3,
            "locationName": "Orisson",
            "latitude": "43.10885",
            "longitude": "-1.23917",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fredalbergue": []
          },
          {
            "ID": 4,
            "locationName": "Virgen D'Orisson",
            "latitude": "43.08137",
            "longitude": "-1.25205",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fredalbergue": []
          },
          {
            "ID": 5,
            "locationName": "Refreshments Van",
            "latitude": "43.06111",
            "longitude": "-1.26836",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "fredalbergue": []
          }
        ],
        "locationParagraphs": [
          {
            "ID": 1,
            "locationName": "Saint-Jean-Pied-de-Port",
            "latitude": "43.16350",
            "longitude": "-1.23502",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 1,
                "paragraphType": "PLAIN",
                "paragraphText": "Saint-Jean-Pied-de-Port is a popular tourist destination, as well as being the departure point for many non-Spanish pilgrims. Hotel accommodation is relatively limited but there are many chambres d’hôtes (B&B) available in addition to the growing number of auberges (albergues) catering for the pilgrim trade. If you intend to stay in a hotel or a chambre d’hôte you should book well in advance. Saint-Jean has a wide range of shops, services and a tourist information centre.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 2,
                "paragraphType": "PLAIN",
                "paragraphText": "Express Bourricot, based in Saint-Jean-Pied-de-Port, provides: a minibus service to Saint-Jean from a number of destinations, including Biarritz and Bilbao airports; a daily shuttle from Saint-Jean as far as Croix Thibault on the Route Napoléon; and to Roncesvalles on the road route for those who do not feel up to walking this first stage. Prices vary according to the numbers using the service as well as distance.",
                "tel1CountryCode": 33,
                "tel1PhoneNumber": 661960476,
                "paragraphWebsiteURL": "https://www.expressbourricot.com",
                "locationID": 1
              },
              {
                "ID": 3,
                "paragraphType": "HISTORY",
                "paragraphText": "Church and Mass - The 14th century red schist Gothic church, Notre-Dame-du-Bout-du-Pont, stands by the Porte d'Espagne (The Spanish Gate). The original was built by Sancho the Strong of Navarre to commemorate the 1212 Battle of Las Navas de Tolosa, where Moorish dominance of Spain was undermined. Mass 10:30am - but confirm time at church or Accueil Saint Jacques.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 4,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "Call first at the Accueil Saint Jacques (Pilgrims’ Office) at 39 rue de la Citadelle, which welcomes pilgrims and advises on the next day’s journey over the Pyrenees to Roncesvalles. A credencial (or pilgrim passport) can be obtained for 2€. Open all year. Opening hours are 07:30-13:00, 14:00-20:30 and Friday and Sunday from 21:00-22:30, although these may vary a little. It is staffed by pilgrims who speak a variety of languages; they will arrange albergue accommodation and provide information on weather.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": "https://www.en-pays-basque.fr/patrimoine-et-traditions/le-chemin-de-compostelle-au-pays-basque/",
                "locationID": 1
              },
              {
                "ID": 5,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "There are two routes from Saint-Jean-Pied-de-Port to Roncesvalles / Orreaga.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 6,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "a) Route Napoléon. This is harder, higher, and more spectacular but do not attempt it in bad weather. Less fit walkers, especially those on their first day, should leave early and be prepared for the route to take all day.  Cyclists should be sure of their fitness. There is no problem using a bike, but some sections will need to be walked.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 7,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "b) The Lower Route via Valcarlos was taken by most medieval pilgrims. This shadows what are today the D933 in France and the N135 in Spain. This is for less fit walkers and cyclists and it is the only feasible route in bad weather. problem using a bike, but some sections will need to be walked.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 8,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "Route Napoléon – 24.9 km (or 25.3 km by the recommended right hand / Ibañeta descent from Col Lepoeder). THIS ROUTE IS CLOSED FROM 1 NOVEMBER TO 31 MARCH – USE THE LOWER LEVEL ROUTE VIA VALCARLOS DURING THIS PERIOD",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              },
              {
                "ID": 9,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "WARNING: This is a dangerous route in the months of short daylight hours and accordingly the police may close the route. Please observe the warning signs. Check local weather forecasts. Never start off later than 10:00. Buy provisions the day before including something for lunch. Water is scarce, so carry enough with you. In spring there may be melting snow on the route. You will see red and white flashes of the GR65 as well as the yellow arrows which you will follow all the way to Santiago.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 1
              }
            ]
          },
          {
            "ID": 2,
            "locationName": "Huntto",
            "latitude": "43.12438",
            "longitude": "-1.24497",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 10,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "This village is not signposted and is the last for 20 km",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 2
              },
              {
                "ID": 11,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "After Honto the road curves to the right while the waymarked path goes left. Cyclists should stay on the road, the waymarked path re-joins it later.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 2
              }
            ]
          },
          {
            "ID": 3,
            "locationName": "Orisson",
            "latitude": "43.10885",
            "longitude": "-1.23917",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 12,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "Up to and beyond the Vierge de Biakotti/Virgin of Orisson on the left, the route then follows the road. Eventually just after the refreshments van (not always there) you veer right off the road, well-marked with a memorial cross, onto a grassy track (not well-waymarked until after the cattle grid at Roland’s fountain).",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 3
              }
            ]
          },
          {
            "ID": 4,
            "locationName": "Virgen D'Orisson",
            "latitude": "43.08137",
            "longitude": "-1.25205",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": []
          },
          {
            "ID": 5,
            "locationName": "Refreshments Van",
            "latitude": "43.06111",
            "longitude": "-1.26836",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": []
          },
          {
            "ID": 6,
            "locationName": "Roland's Fountain",
            "latitude": "43.04683",
            "longitude": "-1.26477",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 13,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "You pass through into Spain just as you exit the last set of woods before Roland’s Fountain. The ground to left of the path is still in France but the path itself at this point is in Spain. Some guidebooks indicate that the border is at the cattle grid at Roland’s Fountain or the stone marking the start of Navarra just afterwards.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 6
              }
            ]
          },
          {
            "ID": 7,
            "locationName": "Izandorre Shelter",
            "latitude": "43.03731",
            "longitude": "-1.28852",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 14,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "Emergency shelter in case of sudden onset of bad weather.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 7
              }
            ]
          },
          {
            "ID": 8,
            "locationName": "Col Lepeoder",
            "latitude": "43.02616",
            "longitude": "-1.29553",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 15,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "From here the roofs of the abbey at Roncesvalles will be just visible far below. The direct (straight ahead) route (4.1 km to Roncesvalles) is very steep and difficult. Cyclists, and definitely in bad weather please take the right route (4.5 km to Roncesvalles)  to join the road at Ibañeta.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 8
              }
            ]
          },
          {
            "ID": 9,
            "locationName": "Roncesvalles",
            "latitude": "43.01041",
            "longitude": "-1.31915",
            "locationPic1URL": null,
            "locationPic2URL": null,
            "locationPic3URL": null,
            "locationPic4URL": null,
            "paragraphs": [
              {
                "ID": 16,
                "paragraphType": "HISTORY",
                "paragraphText": "The Abbey is where the road route and the Route Napoléon merge. The monks of Roncesvalles have welcomed pilgrims since a hospital was founded here early in the 12th c.  The collegiate church of the monastery, consecrated in 1219, is a fine example of French Gothic. Museum is free to pilgrims over 65 with credenciales. Reduced rate for others. It contains religious paintings and sculpture. Open in the summer Sat, Sun and festivals 11:00-13:30 and 16:00-18:00. The 14th c. royal pantheon, the former Chapter House, contains the 13th c. tombs of Sancho the Strong and his wife Doña Clemencia of Toulouse. As well as the church and cloister, see also the Capilla de Santiago (13th c. usually locked) and the 12th c, or earlier, Capilla Sancti Spiritus, also known as the Silo de Charlemagne, where monks and villagers are still buried. Roncesvalles is full of echoes of the Song of Roland, the great medieval poem recalling the events of August 778 when Charlemagne’s rearguard was ambushed and Roland blew his horn to summon the Emperor. An ornate pilgrim cross, on the left when leaving the village, is a replica of a lost 14th c. original. Tourist Information Centre.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 9
              },
              {
                "ID": 17,
                "paragraphType": "DIRECTIONS",
                "paragraphText": "NOTE: For a pilgrim meal in either restaurant, please book and pay at the albergue or directly at the restaurant before Mass. ",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 9
              },
              {
                "ID": 18,
                "paragraphType": "HISTORY",
                "paragraphText": "Church and Mass - Mass followed by a blessing for pilgrims 20:00 Mon-Fri, 18:00 Sat, 19:00 Sun.",
                "tel1CountryCode": null,
                "tel1PhoneNumber": null,
                "paragraphWebsiteURL": null,
                "locationID": 9
              }
            ]
          }
        ]
      }
    }
  );
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
},[isLoadingLocation,locationIDParam])



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
  let albergueArray = isLoadingLocation ? [{"ID": 1,
  "albergueName": "Municipal Albergue",
  "numberOfBeds": 32,
  "numberOfDorms": 3,
  "albergueStreetAdress": "55, rue de la Citadelle",
  "onedPersonRateMin": "12.00",
  "onedPersonRateMax": null,
  "twoPersonRateMin": "30.00",
  "twodPersonRateMax": null,
  "rateNotes": "Advance reservation not permitted. One double room available.",
  "kitchenFacilitiesAvailable": true,
  "washingMachineAvailable": true,
  "dryingMachineAvailable": true,
  "communalMealAvailable": false,
  "openingPeriod": "Open all year",
  "openingTimes": "Check-in from 14:00 to 20:30",
  "email": null,
  "tel1CountryCode": 33,
  "tel1PhoneNumber": 617103189,
  "tel2CountryCode": null,
  "tel2PhoneNumber": null,
  "albergueWebsiteURL": "https://www.terresdenavarre.fr/ospitalia-refuge-municipal-les-chemins-de-st-jacques/presentation-du-refuge/",
  "albergueBookingDotComURL": null,
  "albergueAdditionalComments": null,
  "Location2albergues": {
    "locationID": 1,
    "albergueID": 1,
    "LocationID": 1,
    "AlbergueID": 1
  }}] : locationData.locationData.locationAlbergueData[locationIDParam].fredalbergue;
// console.log(locationIDParam);
// console.log(locationData.locationData.locationParagraphs);
let para = locationIDParam + 1;
let locationParagraphs = isLoadingLocation ? null : locationData.locationData.
locationParagraphs.find(l => l.ID === (para) );
let locParas = isLoadingLocation ? [{
  "ID" : 1,
  "paragraphs" : [{
    "ID" : 1,
    "paragraphType" : 'PLAIN',
    "paragraphText" : 'The quick brown fox'
  }
  ]
}] : locationParagraphs.paragraphs;
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
