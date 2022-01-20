import React, { useState, useEffect } from 'react';

import Tour from '../../components/Tour.js';
import './tours.css';

const Tours = () => {

    const url = 'https://course-api.com/react-tours-project';

    const[tours, setTours] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=> {
        fetchTour();
    },[]);
    
    const fetchTour = async() =>{
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setTours(tours)
            setLoading(false)
            } 
        catch (error) {
            console.log(error)
        }
    }
      
    const handleRemove = (name) => {
        setTours(tours.filter(tour => tour.name !== name));
    };

    if(loading){
        return <h1 className='t-head'>Loading ...</h1>
    }

    if(tours.length === 0){
        return <h1 className='t-head'>Sorry, we have no tours left</h1>
    }

    return (
        <div className='t-main'>
            <h1 className='head'>Tour</h1>
            {tours.map(tour => {
                return (
                    <Tour key={tour.id} {...tour} handleRemove={handleRemove}/>
                )
            })}
        </div>
    )
}

export default Tours;
