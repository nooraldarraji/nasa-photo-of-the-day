import React, { useState, useEffect } from 'react';
import { NasaInfo } from './nasaInfo';
import axios from 'axios';


function Nasa() {
    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=A4VLWyldR2X1z5WyknQp2Zq54D4nJ1Dc5NOb6maH')
            .then(data => {
                const getAnswer = data.data;
                console.log(data.data)
                setInfo(getAnswer)
                console.log(getAnswer);
            })
            .catch(error => { console.log('ERROR OCCURRED: ', error); })
    }, []);

    return (
        <div>
            <NasaInfo date={info.date} explanation={info.explanation} url={info.url} title={info.title} media_type={info.media_type} />
        </div>
    )
}

export default Nasa; 
