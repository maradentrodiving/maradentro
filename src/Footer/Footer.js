import React from 'react'
import styles from './Footer.module.css'
import { RiWhatsappFill as WhatsAppIcon } from 'react-icons/ri'
import { TiMail as EmailIcon } from 'react-icons/ti'
import { contactEmail, contactNumberShop, contactNumberOscar } from '../constants'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        <li><WhatsAppIcon className={styles.whatsappIcon} /> {contactNumberShop}</li>
        <li><WhatsAppIcon className={styles.whatsappIcon} /> {contactNumberOscar}</li>
        <li><EmailIcon className={styles.icon} />{contactEmail}</li>
      </ul>
    </footer>
  )
}
