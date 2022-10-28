import React, { useState, useEffect } from 'react';
import './../Pages/StagePage.css';
import { getStageData } from '../utils/getContent';
import { getCoordsData } from '../utils/getContent';
import './LocationPage.css';
import ImageMapper from "react-image-mapper";
import { Routes, Route, useNavigate } from "react-router-dom";
import LocationPage from './LocationPage';


export default function StagePage({user, stageID, setStageID, locationIDParam, locationSetter} ) {
  




  const [mySwitch,setMySwitch] = useState(false);
  const [unclicked,setUnclicked] = useState(true);
  const navigate = useNavigate();
  const navigateLocationPage = () => {
    navigate('/locationPage')
}
  const [stageData,setStageData] = useState(
    {stageData: [
        {
        ID: 1,
        stageName: "Name of the Stage",
        stageDistanceInMetres: 23000,
        stageTimeInMinutes: 300,
        stageStartLocationID: 1,
        stageFinishLocationID: 99,
        stageMapURL: "https://res.cloudinary.com/dbylfmnac/image/upload/v1660376617/caminoAppImages/roncesvalles2zubiri90_gq7q7p.jpg",
        stageElevationChartURL: null,
        Locations: [
          {
            locationIDParam: 999,
            locationName: "Location Name",
            latitude : "43.16350",
            longitude: "-1.23502",
            locationPic1URL: null,
            locationPic2URL: null,
            locationPic3URL: null,
            locationPic4URL: null,
            Stage2locations: {
              stageID: 1,
              locationID: 1,
              distanceFromPriorLocationInMetres: 4000,
              timeFromPriorLocationInMinutes: 70,
              StageID: 1,
              LocationID: 1,
            }}
          ]
        }
            ]}
    );
  const [isLoading,setIsLoading] =useState(true);
  const [isLoadingMapCoords,setIsLoadingMapCoords] =useState(true);
  const [coordsData,setCoordsData] = useState();
  const [MAP,setMAP] =useState({name:"MAP",
  areas: [
        {name: 'A', shape: "rect", coords: [855,4,1021,63]},
        {name: '1', shape: "rect", coords: [801,90,973,150]},
        {name: '2', shape: "rect", coords: [620,156,757,219]},
        {name: '3', shape: "rect", coords: [410,246,534,310]},
        {name: '4', shape: "rect", coords: [481,382,601,447]},
        {name: '5', shape: "rect", coords: [411,527,563,559]},
        {name: '6', shape: "rect", coords: [150,589,358,654]}
            ]});

  useEffect(() => {
      if (unclicked==false) {
      navigateLocationPage();
    }},[locationIDParam]);

  useEffect(() => {
    getCoordsData(setCoordsData)
    .then((data) => {
      setIsLoadingMapCoords(false)     
      })},[unclicked]);

  useEffect(() => {
    setIsLoading(true);
    getStageData(setStageData).then((data) => {
    setIsLoading(false)})}, []);

  useEffect(() => {
      setMySwitch(true);
      let coords = isLoadingMapCoords ?  [
          {
            "ID": 1,
            "stageID": 2,
            "locationID": 9,
            "topLeftX": 855,
            "topLeftY": 4,
            "bottomRightX": 1021,
            "bottomRightY": 63
          }]
      : coordsData.coordData.filter((item, index, array) => {  
        return item.stageID === stageID+1;});
      let tmpMAP = {name:"MAP",
      areas: []};
      const myAreas = coords.map((item,index)=>{
        const myarray =[item.topLeftX,item.topLeftY,item.bottomRightX,item.bottomRightY];
          const myObj ={
          name:index.toString(),
          shape:"rect",
          coords: myarray,
          locationID: item.locationID
        };
          tmpMAP.areas.push(myObj);
      setMAP(tmpMAP);  
      });
    },[isLoadingMapCoords,stageID,locationIDParam]);



      const mainStageData = isLoading ? stageData.stageData[0] : stageData.stageData[stageID];
      const previousStage = isLoading || stageID === 0 ? stageData.stageData[0] : stageData.stageData[stageID-1];
      const thisStage = isLoading ? stageData.stageData[0] : stageData.stageData[stageID];
      const stageName = mainStageData.stageName;
      const stageMapURL =mainStageData.stageMapURL;
      const stageElevationChartURL =mainStageData.stageElevationChartURL;
      const stageDestinationID = mainStageData.Locations.length-1;
      const stageDestinationLatitude = parseFloat(mainStageData.Locations[stageDestinationID].latitude); 
      const stageDestinationLongitude = parseFloat(mainStageData.Locations[stageDestinationID].longitude);
      const startLatitude = parseFloat(mainStageData.Locations[0].latitude);
      const startLongitude = parseFloat(mainStageData.Locations[0].longitude);
      const distance = Math.round(mainStageData.stageDistanceInMetres/100)/10;
      const distanceInMiles = Math.round((mainStageData.stageDistanceInMetres/1609.34)*10)/10
      const hours = Math.floor(mainStageData.stageTimeInMinutes/60);
      const minutes = mainStageData.stageTimeInMinutes - (hours*60);
      const hrefText1 = "https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+startLatitude+","+startLongitude;
      const hrefText2 = "https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+stageDestinationLatitude+","+stageDestinationLongitude;

  return (

<div className='table1'>
      <h1>Stage Page </h1>
      <h2>{stageName}</h2>
      <p className="important">Overall distance = {distance} kilometres or {distanceInMiles} miles</p>
      <p className="important">Estimated duration = {hours} hours and {minutes} minutes</p>
      <p className="important">Starting GPS location = <u><a href={hrefText1}>{startLatitude},{startLongitude}</a></u></p>
      <p className="important">Destination GPS location = <u><a href={hrefText2}>{stageDestinationLatitude},{stageDestinationLongitude}</a></u></p>

      <br></br>
      
      <h4>Stage distances</h4>
  <table>
  <thead>
  <tr>
    <th>From</th>
    <th>To</th>
    <th>Distance in Kms</th>
    <th>Distance in Miles</th>
    <th>Expected Duration</th>
  </tr>
  </thead>
  <tbody>
    {
      thisStage.Locations.map((nestedItem, nestedIndex) => {
                const locationData = {nestedItem};
                const kmDistance = Math.round(locationData.nestedItem.Stage2locations.distanceFromPriorLocationInMetres/100)/10;
                const distanceInMiles = Math.round(locationData.nestedItem.Stage2locations.distanceFromPriorLocationInMetres/1609.34*10)/10;
                const hours = Math.floor(locationData.nestedItem.Stage2locations.timeFromPriorLocationInMinutes/60);
                const minutes = Math.floor(locationData.nestedItem.Stage2locations.timeFromPriorLocationInMinutes-(hours*60));
                const toLocation = locationData.nestedItem.locationName;
                let myIndex = nestedIndex-1;
                const locationIndex = isLoading ? 0 : previousStage.Locations.length - 1;
                const fromLocation = myIndex > -1 ? thisStage.Locations[myIndex].locationName : previousStage.Locations[locationIndex].locationName;
                const notFirstEntry = kmDistance > 0;
                
                const walkingTime = hours+" hours and "+minutes+" minutes";


              return (
                  
                
                  <tr key={nestedIndex}>
                
                  <td>{fromLocation}</td>
                  <td>{toLocation}</td>
                  <td>{kmDistance}</td>
                  <td>{distanceInMiles}</td>
                  <td>{walkingTime}</td>
                </tr>
      
                
              );
            })}

        ;
      
    
      </tbody>
      </table>
            { mySwitch &&
        <div className='container'>
        <ImageMapper src={stageMapURL} map={MAP} width={1125}
        onClick={area => {
          locationSetter(area.locationID -1);
          setUnclicked(false);
        }}
        /> 
        </div>
}
        <br></br>
        <img className='SPimg'src={stageElevationChartURL} alt="Elevation Chart" width="2000" />
        <br></br>
        <button className='nextButtons' onClick={() => {
          if (stageID===0){setStageID(0);setMySwitch(false);} else {setStageID(stageID-1);setMySwitch(false);}; 
        }
          }>Previous Stage</button>
        <button  className='nextButtons'onClick={() => {
          if (stageID===3){setStageID(3);setMySwitch(false);} else {setStageID(stageID+1);setMySwitch(false);}}
        }>Next Stage</button>
        <div>
        <Routes>

        <Route exact path="/locationPage" element={<LocationPage user={user} locationIDParam={locationIDParam} locationSetter={locationSetter} />} />
        </Routes>
        </div>
  </div>


  );
};