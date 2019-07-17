import React from 'react';

export function nasaInfo({ date, explanation, title, url, media_type }) {

    return (

        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
            <video width="400" controls>
                <source src="{url}" type="{media_type}" />
            </video>
        </div>

    )

}