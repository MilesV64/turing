import React from 'react';
import Ring from '../components/ring'
import CaptionImage from '../components/captionimage'

export default function Covid() {
  return (
    <Ring title="Covid-19 Ring" color="bg-blue-100" img="/covidring.png">
        <p>The COVID-19 ring will contain safety features to help specifically with COVID-19. The design of the ring will alert users if they are within six feet of someone else - this will be especially important for blind/disabled users. The ring will contain an in-house mechanic that dispenses hand sanitizer when physical buttons have been interacted with, and the hand sanitizer will be refilled in a home docking station/charger. As the hand sanitizer is applied, the ring will be able to detect the cleanliness of your hands. </p>
        
        <CaptionImage img="/storyboard.png">
          Storyboard showing how the Covid-19 ring could be used
        </CaptionImage>
        
        <CaptionImage img="/drawing1.png">
          Design of the Covid-19 ring
        </CaptionImage>

        <CaptionImage img="/drawing2.png">
          Charging and reloading
        </CaptionImage>
    
    </Ring>
  )
}