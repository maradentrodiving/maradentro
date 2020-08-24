/*
 * Initial version generated by https://www.embedgooglemap.net
 */

import React from 'react'
import styles from './Map.module.css'

export default function Map () {
  return (
    <div className={styles.mapOuter}>
      <div className={styles.gmapCanvas}>
        <iframe
          width="445"
          height="276"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Mar%20Adentro%20Diving%2C%20Mahahual%2C%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>
      </div>
    </div>
  )
}