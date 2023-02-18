import React, { useEffect } from 'react'
import {useState} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import { Col, useAccordionButton } from 'react-bootstrap';
import { RestListAction} from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';



function Restaurantlist() {
    const[restaurantlist,setRestaurantlist]=useState([])
    //create a function for API call
    // const getRestaurant=async()=>{
    //     //async await
    //    await fetch ('/restaurants (2).json')//async call
    //    .then((data)=>
    //     data.json()
    //     .then((result)=>
    //        setRestaurantlist(result.restaurants))
    //    )
    //    }
    //    console.log(restaurantlist);
//to create a function for API call
       const dispatch=useDispatch()

       const result=useSelector(state=>state.restReducer)
       console.log(result);//restlist:Array(10)


      //  const {restaurantlist}=result
    useEffect(()=>{
        // getRestaurant()
        dispatch(RestListAction())
    },[])

    
  return (
    <Row> 
      {
       
         result.restList.map((item)=>(
      <Restcard restaurant={item}/>
        
         ))
}
        
         </Row>
   
  )
}

export default Restaurantlist
