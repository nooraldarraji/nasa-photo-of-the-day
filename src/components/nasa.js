import React, { useState, useEffect } from 'react';
import { NasaInfo } from './nasaInfo';
import axios from 'axios';

// https://api.nasa.gov/planetary/apod?api_key=A4VLWyldR2X1z5WyknQp2Zq54D4nJ1Dc5NOb6maH
// For additional support, please contact us. When contacting us, please tell us what API you're accessing and provide the following account details so we can quickly find you:

function Nasa() {
    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=A4VLWyldR2X1z5WyknQp2Zq54D4nJ1Dc5NOb6maH')
            .then(data => {
                const getAnswer = data.data;
                setInfo(getAnswer)
                console.log(getAnswer);
            })
            .catch(error => { console.log('ERROR OCCURRED: ', error); })
    }, []);

    return (
        <div>
            <NasaInfo date={info.date} explanation={info.explanation} url={info.url} title={info.title} media_type={info.media_type} />
            {/* {info.map(i => <NasaInfo date={i.date} explanation={i.explanation} url={i.url} title={i.title} media_type={i.media_type} />)} */}
        </div>
    )
}

export default Nasa; 
