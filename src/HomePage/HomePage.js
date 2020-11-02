import React from 'react'
import { tripAdvisorURL } from '../constants'
import DANLogo from './DAN.png'
import PADILogo from './PADI.png'
import styles from './HomePage.module.css'

export default function HomePage ({ lang }) {
  return (
    <>
      <div className={styles.logos}>
        <div className={styles.logo}>
          <img src={DANLogo} />
        </div>

        <div className={styles.logo}>
          <img src={PADILogo} />
        </div>

        <div className={styles.logo}>
          <a target="_blank" rel="noopener noreferrer" href={tripAdvisorURL}>
            <img src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tchotel_2020_L-14348-2.png" alt="TripAdvisor" />
          </a>
        </div>
      </div>

      <h3>TODO: Add a video once I have a link to that video.</h3>
    </>
  )
}
