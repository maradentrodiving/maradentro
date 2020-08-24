import React from 'react'
import styles from './Footer.module.css'
import { RiWhatsappFill as WhatsAppIcon } from 'react-icons/ri'
import { TiMail as EmailIcon } from 'react-icons/ti'
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon } from 'react-icons/ai'
import { SiTripadvisor as TripAdvisorIcon } from 'react-icons/si'
import { contactEmail, contactNumberShop, contactNumberOscar, instagramURL, facebookURL, tripAdvisorURL } from '../constants'

export const PhoneNumber = ({ number }) => (
  <a href={`tel:${number.replace(/\s/g, '')}`}>{number}</a>
)

export const PhoneNumberWithIcon = ({ number }) => (
  <>
    <WhatsAppIcon className={styles.whatsappIcon} />
    <PhoneNumber number={number} />
  </>
)

export const SocialIcon = ({ Icon, link, className }) => (
  <a target="_blank" rel="noopener noreferrer" href={link}>
    <Icon className={className} />
  </a>
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
          </div>

          <li><EmailIcon className={styles.icon} />{contactEmail}</li>
        </ul>
      </section>

      <section>
        <h1>Keep in touch!</h1>
        <ul className={styles.socialIcons}>
          <li><SocialIcon Icon={InstagramIcon} link={instagramURL} className={styles.socialIcon} /></li>
          <li><SocialIcon Icon={FacebookIcon} link={facebookURL} className={styles.socialIcon} /></li>
          <li><SocialIcon Icon={TripAdvisorIcon} link={tripAdvisorURL} className={styles.socialIcon} /></li>
        </ul>
      </section>

      <section>
        <h1>Location</h1>
        Malecón, Mahahual (Costa Maya),<br />
        Quintana Roo, Mexico<br />
        (click to open <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/ZaVuSB8Z3XEeJ9EG6">Google Maps</a>)
        <ul>
          <li>Monday – Sunday</li>
          <li>8:30 AM – 6 PM</li>
        </ul>
      </section>
    </footer>
  )
}
