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
    <MDBCard  key={index} style={{maxWidth:"22rem",maxHeight:"24rem"}}>
       <MDBCardImage 
       src={
        item && item.ships[0] && item.ships[0].image
        ? item.ships[0].image : "https://cdn.pixabay.com/photo/2016/08/08/15/08/cruise-1578528__480.jpg"}
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
