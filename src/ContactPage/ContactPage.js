import React, { useEffect, useContext } from 'react'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'

import { RiWhatsappFill as WhatsAppIcon } from 'react-icons/ri'
import { TiMail as EmailIcon } from 'react-icons/ti'
import { AiFillInstagram as InstagramIcon, AiFillFacebook as FacebookIcon } from 'react-icons/ai'
import { SiTripadvisor as TripAdvisorIcon } from 'react-icons/si'
import { contactEmail, contactNumberShop, contactNumberOscar, instagramURL, facebookURL, tripAdvisorURL } from '../constants'

import styles from './ContactPage.module.css'
import Map from '../Map/Map'

const translations = {
  title: [
    "Contact Mar Adentro Diving Mahahual",
    "Contactar Mar Adentro Mahahual"
  ],
  heading: ['Contact', 'Contacto'],
  shop: ['shop', 'tienda'],
  social: ['Keep in touch!', '¡Manténte en contacto!'],
  location: ['Location', 'Ubicación'],
  clickToOpen: ['click to open', 'haz click para abrir'],
  daysOpen: ['Monday – Sunday', 'Desde lunes a domingo'],
}

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

export default function ContactPage ({ lang }) {
  const { setLang, setLangFn, t } = useContext(LangContext)

  useEffect(() => {
    if (setLang !== lang) setLangFn(lang)
  })

  useTitle(t(translations.title))

  return (
    <>
      <h1>{t(translations.heading)}</h1>

      <div className={styles.main}>
        <section>
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
          Quintana Roo, Mexico<br />
          ({t(translations.clickToOpen)} <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/ZaVuSB8Z3XEeJ9EG6">Google Maps</a>)
          <ul>
            <li>{t(translations.daysOpen)}</li>
            <li>8:30 AM – 6 PM</li>
          </ul>
        </section>

        <section>
          <Map />
        </section>
      </div>
    </>
  )
}
