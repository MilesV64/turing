import React from 'react';
import Ring from '../components/ring'

export default function EmergencyHelp() {
  return (
    <Ring title="Senior Citizen Safety Ring" color="bg-yellow-100" img="/alertring.png">
        The Senior Citizen Safety Ring will have the ability to contact emergency contact/authorities when emergency protocols (optional). Examples of events that would trigger a contact include unhealthy vital readings, heart-rate spikes/drops, and physical injury detection. GPS tracking will be enabled when 911 is called.
    </Ring>
  )
}