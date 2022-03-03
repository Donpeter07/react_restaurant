import { useEffect, useState } from "react";
import React from 'react';
import { Row, Col } from "react-bootstrap"
import Restaurants from "./Restaurants";
import {useDispatch,useSelector} from 'react-redux'
import {listRestaurants} from '../actions/restaurantAction'

function Home() {

    // const [hotels, setHotels] = useState([])
    const [search,setSearch] =useState("")
    const dispatch = useDispatch();
    const restaurantsData =useSelector(state => state.restaurantReducer)
    const {restaurants}= restaurantsData

    useEffect(() => {
        dispatch(listRestaurants())
    }, [])





    return (
        <>
            <Row>
                <input value={search} type="text" placeholder="Type here" onChange={event => setSearch(event.target.value)} class="my-3 mx-4 form-control rounded"/>
                {restaurants ? (
                    restaurants.filter(item =>{
                        if(search === ""){
                            return item
                        }
                        else if(item.neighborhood.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }
                    })
                    .map(item => (
                       <Col sm={12} md={8} lg={6} xl={3}>
                        <Restaurants item ={item}/>
                       </Col>
                    ))
                ) : ("error")}
            </Row>
        </>
    )
}

export default Home;

//life cycle methods
//1- mounting - componenttDidMount()?
//2- updating - compomentDidUpdate() ?
//3- unmounting - componentWillMount()