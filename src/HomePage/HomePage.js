import React from 'react'
import { tripAdvisorURL } from '../constants'

export default function HomePage ({ lang }) {
  return (
    <>
      Home <code>{lang}</code>.
      <a target="_blank" rel="noopener noreferrer" href={tripAdvisorURL}>
        <img src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tchotel_2020_L-14348-2.png" alt="TripAdvisor" />
      </a>
    </>
  )
}
