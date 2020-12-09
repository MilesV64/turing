import React from 'react';
import Ring from '../components/ring'
import CaptionImage from '../components/captionimage'

export default function SelfDefense() {
  return (
    <Ring title="Self-Defense Ring" color="bg-pink-100" img="/defensering.png">
        The self defense ring is for people who would benefit from extra safety when walking alone at night for example. The ring will contain an in-house mechanic similar to the COVID-19 ring that shoots pepper spray when physical buttons have been interacted with. Pepper spray will be refilled in a home docking station/charger. The ring will also enable the option for GPS tracking which will be constantly shared with a selected emergency contact.
    
        <CaptionImage img="/defensestoryboard.png" className="px-4 pb-0 pt-4">
          A storyboard of the defense ring being used for protection
        </CaptionImage>

        <CaptionImage img="/defensedrawing.jpeg">
          The self-defense ring in action
        </CaptionImage>
    
    </Ring>
  )
}