import React from "react";
import { useState } from "react";
import reviews from "./data";
import "./App.css"
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useEffect } from "react";
const App=()=>{
    const [people,setPeople] = useState(reviews);
    const [index,setIndex] = useState(0);
    const {image,name,job,text} = people[index];
    const goPrev=()=>{
        if(index===0){
            setIndex(()=>{
                return reviews.length-1;
            })
        }
        else{

            setIndex((prev)=>{
                return prev-1;
            })
        }
    }
    const goFor=()=>{
        if(index===reviews.length-1){
            setIndex(()=>{
                return 0;
            })
        }
        else{
            setIndex((prev)=>{
                return prev+1;
            })
        }
    }
    return(
        <div className="container">
            <div className="items">

            <div className="img-box">
                <button className="btn" onClick={goPrev}> &lt;</button>
                <img className="img-review" src={image} alt="" />
                <button className="btn" onClick={goFor}>&gt;</button>
            </div>
            <div>
                <h1>
                {name}
                </h1>
            </div>
            <div className="job">
                <p>
                {job}
                </p>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
            
            </div>
        </div>
    )
}
export default App