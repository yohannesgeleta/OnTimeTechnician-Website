"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logopic from '../images/ott-logo.png'
import styles from './Header.module.css'
import {useRouter} from 'next/navigation';
import { Phone } from 'lucide-react'

export default function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact/schedule')
  };

    return (
      <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink} aria-label="OnTimeTechnician home">
            <Image 
            src = {logopic} 
            alt = "OTT logo" 
            placeholder="blur"
            width={240}
            height={120}
            className={styles.logoImage}
            />
        </Link>

        <div className={styles.headerActions}>
          <div className={styles.serviceNote}>
            Family-owned HVAC, electrical, and indoor air quality service
          </div>

          <div className={styles.phoneBlock}>
            <Phone className={styles.phoneIcon} />
            <div>
              <div className={styles.phoneLabel}>Call us today</div>
              <a href="tel:717-813-4896" className={styles.phoneNumber}>717-813-4896</a>
            </div>
          </div>

          <button className={styles.scheduleButton}
          type="button"
          onClick={handleClick}
          >
            Schedule
          </button>
        </div>
      </div>
      </header>
    )
};
