import React, {useState , useEffect} from 'react';
import './App.css';
import SpaceMission from "./graphql";
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardImage,MDBContainer,MDBRow} from 'mdb-react-ui-kit';

function App() {
  const [data, setData] = useState([]);

  const loadSpaceMission= async ()=>{
    const spaceMissions = await SpaceMission.getSpaceMission(10);
    setData(spaceMissions);
  }

  useEffect(()=>{
    loadSpaceMission();
  },[])

  console.log("data",data);
  return (
   <MDBContainer style={{
    margin:"auto",
    padding: "15px",
    maxWidth:"720px",
    alignContent:"center",
   }}>

    <MDBRow>
      <h2>Space Mission</h2>
    {data.map((item,index)=>
    (
    <>
    <MDBCard  key={index} style={{maxWidth:"10rem",maxHeight:"10rem"}}>
       <MDBCardImage 
       src={
        item && item.ships[0] && item.ships[0].image
        ? item.ships[0].image : "https://www.businessinsider.com/cruise-industry-ship-staff-pandemic-celebrity-carnival-work-2021-8"}
        position="top"
        alt={item.mission_name}
        />
        <MDBCardBody>
          <MDBCardTitle>{item.mission_name}</MDBCardTitle>
          <MDBCardText>{item.launch_site.site_name_long}</MDBCardText>
        </MDBCardBody>
    </MDBCard>
    </>))}

    </MDBRow>

   </MDBContainer>
  );
}

export default App;
