import React, { useState } from "react";

import useFetch from "../../useFetch";
import "./tabs.css";

const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const { data, loading } = useFetch(url);
  const [index, setIndex] = useState(0);
  const { title, dates, company, duties } = data[index];

  const handleTab = (order) => {
    setIndex(order)
  }

  if (loading) {
    return <h1 className='t-head'>Loading ...</h1>;
  }

  return (
    <>
      <h1 className='head'>Exprience</h1>
      <div className='tab-container'>
        <div className='tab-btn'>
          {data.map(item => {
            const { company, order, id} = item
            return <button className={order === index? 'active': ''} key={id} onClick={()=>handleTab(order)}>{company}</button>
          })}
        </div>
        <div className="tab-box">
          <h1>{title}</h1>
          <h4>{company}</h4>
          <p>{dates}</p>
          <div className="tab-duty">
            {duties.map((duty, index) => {
              <p key={index}>
                {duty}
                </p>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
