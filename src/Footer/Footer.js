import React, { useContext } from 'react'
import LangContext from '../LangContext'
import { translations } from '../ContactPage/ContactPage'

import styles from './Footer.module.css'
import { RiWhatsappFill as WhatsAppIcon } from 'react-icons/ri'
import { TiMail as EmailIcon } from 'react-icons/ti'
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon } from 'react-icons/ai'
import { SiTripadvisor as TripAdvisorIcon } from 'react-icons/si'
import { contactEmail, contactNumberShop, contactNumberOscar, instagramURL, facebookURL, tripAdvisorURL, googleMapsURL } from '../constants'

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
  const { t } = useContext(LangContext)

  return (
    <footer className={styles.footer}>
      <section>
        <h1>{t(translations.heading)}</h1>
        <ul className={styles.contactList}>
          <div style={{marginBottom: 25}}>
            <li><PhoneNumberWithIcon number={contactNumberShop} /> ({t(translations.shop)})</li>
            <li><PhoneNumberWithIcon number={contactNumberOscar} /> (Óscar)</li>
          </div>

          <li><EmailIcon className={styles.icon} />{contactEmail}</li>
        </ul>
      </section>

      <section>
        <h1>{t(translations.social)}</h1>
        <ul className={styles.socialIcons}>
          <li><SocialIcon Icon={InstagramIcon} link={instagramURL} className={styles.socialIcon} /></li>
          <li><SocialIcon Icon={FacebookIcon} link={facebookURL} className={styles.socialIcon} /></li>
          <li><SocialIcon Icon={TripAdvisorIcon} link={tripAdvisorURL} className={styles.socialIcon} /></li>
        </ul>
      </section>

      <section>
        <h1>{t(translations.location)}</h1>
        Malecón, Mahahual (Costa Maya),<br />
        Quintana Roo, {t(translations.mexico)}<br />
        ({t(translations.clickToOpen)} <a target="_blank" rel="noopener noreferrer" href={googleMapsURL}>Google Maps</a>)
        <ul>
          <li>{t(translations.daysOpen)}</li>
          <li>{t(translations.openingHours)}</li>
        </ul>
      </section>
    </footer>
  )
}
