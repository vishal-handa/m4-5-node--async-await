import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Joke=()=>{
    const [joke, setJoke]=useState('');
    const {type}=useParams();
    //console.log(type);
    useEffect(() => {
        fetch(`/joke/${type}`)
        .then((res)=>res.json())
        .then((data)=>setJoke(data.message))
    }, []);
    
    console.log(joke);
    return(
        <>
            <Para>🤣DED🤣</Para>
            <section>
                {joke&&(   
                    <Main>{joke}</Main>
                )}  
            </section>
        </>
    )
};

export default Joke;

const Para=styled.h1`
    text-align:center;
    padding:70px;
    background-color:#ffd1dc;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size:3em;
`;

const Main=styled.p`
    text-align:center;
    padding:50px;

    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    font-size:2em;
`;

