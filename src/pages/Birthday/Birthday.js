import React, { useState } from 'react';

import './birthday.css';
import { data } from './data';

const Birthday = () => {
    const[people, setPeople] = useState(data)

    const handleRemove = (name) => {
        setPeople(people.filter(person => person.name !== name))
    }

    return (
        <div className='b-container'>
            <h1>we have {people.length} birthdays today</h1>
            {people.map(person => {
                const { src, name, age} = person
                return (
                    <div key={name} className='b-box'>
                        <div className='b-text'>
                            <img className='b-img' alt={name} src={src}/>
                            <div>
                                <h3>{name}</h3>
                                <p>{age}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleRemove(name)} className='remove'>remove</button>
                    </div>
                )
            })}
            <button className='b-clear' onClick={()=> setPeople([])}>Clear all</button>
        </div>
    )
}

export default Birthday;
