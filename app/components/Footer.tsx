import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import logopic from '../images/ott-logo.png'
import Link from 'next/link'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const serviceLinks = [
  { label: 'Heating', href: '/heating' },
  { label: 'Cooling', href: '/cooling' },
  { label: 'Electrical', href: '/electrical' },
  { label: 'Indoor Air Quality', href: '/iaq' },
  { label: 'Contact', href: '/contact/message' },
  { label: 'About', href: '/about' },
]

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerTopBar} />

      <div className={styles.footerContainer}>
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.logoLink} aria-label="OnTimeTechnician home">
            <Image
              src={logopic}
              alt="OnTimeTechnician logo"
              placeholder="blur"
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.brandText}>
            OnTimeTechnician provides dependable HVAC, electrical, and indoor air quality service
            for homes and businesses across Central Pennsylvania.
          </p>
          <div className={styles.buttonRow}>
            <Link href="/contact/message" className={styles.secondaryButton}>
              Contact us
            </Link>
            <Link href="/contact/schedule" className={styles.primaryButton}>
              Schedule
            </Link>
          </div>
        </div>

        <nav className={styles.linkColumn} aria-label="Services and pages">
          <h2 className={styles.columnTitle}>Services</h2>
          <ul className={styles.linkList}>
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.detailsColumn}>
          <h2 className={styles.columnTitle}>Info</h2>
          <div className={styles.detailItem}>
            <MapPin className={styles.detailIcon} />
            <div>
              <div className={styles.detailLabel}>Address</div>
              <div className={styles.detailText}>304 Dohner Dr, Lancaster PA, 17602</div>
            </div>
          </div>
          <div className={styles.detailItem}>
            <Clock className={styles.detailIcon} />
            <div>
              <div className={styles.detailLabel}>Business hours</div>
              <div className={styles.detailText}>9am-7pm</div>
            </div>
          </div>
          <div className={styles.detailItem}>
            <MapPin className={styles.detailIcon} />
            <div>
              <div className={styles.detailLabel}>Areas served</div>
              <div className={styles.detailText}>Lancaster, Lititz, New Holland, Ephrata, Bird-in-Hand, and nearby communities.</div>
            </div>
          </div>
        </div>

        <div className={styles.detailsColumn}>
          <h2 className={styles.columnTitle}>Get in touch</h2>
          <div className={styles.detailItem}>
            <Phone className={styles.detailIcon} />
            <div>
              <div className={styles.detailLabel}>Phone</div>
              <div className={styles.detailText}>717-813-4896</div>
            </div>
          </div>
          <div className={styles.detailItem}>
            <Mail className={styles.detailIcon} />
            <div>
              <div className={styles.detailLabel}>Messages</div>
              <div className={styles.detailText}>Send a message or schedule a service online.</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>OnTimeTechnician</span>
        <span>Family-owned service for Central Pennsylvania.</span>
      </div>
    </footer>
  )
}

export default Footer
