import React from "react";




function GifList ({data}){
    return(
<div className="Gif-list">
    <ul>
        {data.map((gif)=>(

            <li key={gif.id}>

                <img src={gif.images.original.url}alt={gif.slug}/>
            </li>
        ))}
       
    </ul>
</div>

    );
}

export default GifList

