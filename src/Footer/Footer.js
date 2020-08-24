import React from 'react'
import styles from './Footer.module.css'
import { RiWhatsappFill as WhatsAppIcon } from 'react-icons/ri'
import { TiMail as EmailIcon } from 'react-icons/ti'
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FBIcon } from 'react-icons/ai'
import { SiTripadvisor as TripAdvisorIcon } from 'react-icons/si'
import { contactEmail, contactNumberShop, contactNumberOscar } from '../constants'

export const PhoneNumber = ({ number }) => (
  <a href={`tel:${number.replace(/\s/g, '')}`}>{number}</a>
)

export const PhoneNumberWithIcon = ({ number }) => (
  <>
    <WhatsAppIcon className={styles.whatsappIcon} />
    <PhoneNumber number={number} />
  </>
)

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <section>
        <h1>Contact us</h1>
        <ul className={styles.contactList}>
          <div style={{marginBottom: 25}}>
            <li><PhoneNumberWithIcon number={contactNumberShop} /> (shop)</li>
            <li><PhoneNumberWithIcon number={contactNumberOscar} /> (Oscar)</li>

          <div style={{marginBottom: 25}}>
            <li><EmailIcon className={styles.icon} />{contactEmail}</li>
          </div>

          <li>Malecón, Mahahual (Costa Maya), Q. Roo,<br /> Mexico (click to open <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/ZaVuSB8Z3XEeJ9EG6">Google Maps</a>)</li>
          </div>
        </ul>
      </section>

      <section>
        <h1>Keep in touch!</h1>
        <ul className={styles.socialIcons}>
          <li><InstagramIcon className={styles.socialIcon} /></li>
          <li><FBIcon className={styles.socialIcon} /></li>
          <li><TripAdvisorIcon className={styles.socialIcon} /></li>
        </ul>
      </section>

      <section>
        <h1>Opening hours</h1>
        <ul>
          <li>Monday – Sunday</li>
          <li>8:30 AM – 6 PM</li>
        </ul>
      </section>
    </footer>
  )
}
