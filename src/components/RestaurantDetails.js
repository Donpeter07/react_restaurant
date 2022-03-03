import React, { useEffect, useState } from 'react';
import {Link,useParams} from 'react-router-dom'
import{Row,Col,Image,Card,ListGroup} from 'react-bootstrap'
// import Rating from './Rating'; 
function RestaurantDetails() {

const [data,setData] = useState([])
const Params = useParams()
const {id} = Params;

  useEffect(() => {
    const fetchData= async() =>{
      await fetch("/restaurants.json")
      .then((res) => res.json())
      .then((data) => setData(data.restaurants))
    }
    fetchData()
  },[])

  const details= data.find((i) => i.id == Params.id)  // find method
  return (
   <>
   <Link className='btn btn-outline-dark ms-2 my-3 rounded bt-sm' to="/">Back</Link>
   {details ? (
   <Row className="my-2">
     <Col md={3}>
       <Image className="img ms-2 " src={details.photograph} alt={details.name} fluid/>

     </Col>

     <Col md={4}>
       <ListGroup.Item>
       <h2>{details.name}</h2>
         <p>{details.neighborhood}</p>
       </ListGroup.Item>
        <ListGroup.Item>
     <p>Cuisine: {details.cuisine_type}</p>
       </ListGroup.Item>
       <ListGroup.Item>
     <p>Address: {details.address}</p>
       </ListGroup.Item>    
      </Col>
      <Col md={4}>
        <ListGroup.Item>
          <h4>operating hours:</h4>
          <p>Monday: {details.operating_hours.Monday}</p>
          <p>Tueday: {details.operating_hours.Tuesday}</p>
          <p>wednesday: {details.operating_hours.Wednesday}</p>
          <p>Thursday: {details.operating_hours.Thursday}</p>
          <p>Friday: {details.operating_hours.Friday}</p>
          <p>Saturday: {details.operating_hours.Saturday}</p>
          <p>Sunday: {details.operating_hours.Sunday}</p>
        </ListGroup.Item>
      </Col>
      {/* <Row>
        <Card className='my-3 mx-3 p-3 rounded card'>
       <Rating/>
        
        </Card>
      </Row> */}
   </Row>
   
   
 

   ):null}
   
   </>
  )
}

export default RestaurantDetails;

