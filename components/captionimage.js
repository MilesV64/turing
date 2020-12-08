import React from 'react';

export default function CaptionImage(props) {
    return (
        <div className="mt-14 mb-20">
          <img className="w-full border py-2 border-gray-200 rounded" src={props.img}></img>
          <p className="text-center text-sm text-gray-500 font-light mt-4">{props.children}</p>
        </div>
    )
}