"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logopic from '../images/ott-logo.png'
import styles from './Header.module.css'
import {useRouter} from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact/schedule')
  };

    return (
      <nav className={styles.headerWrapper}>
      <nav className={styles.headerContainer}>
        <nav>
          <Link href = "/">
            <Image 
            src = {logopic} 
            alt = "OTT logo" 
            placeholder="blur"
            width={300}
            height={150}
            />
          </Link>
        </nav>
        <nav className={styles.contactInfo}>
          Contact us @717xxxxxx
        </nav>
        <nav>
          <button className ="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition" 
          type="button"
          onClick={handleClick}
          >
            Schedule
          </button>
        </nav>
      </nav>
      </nav>
    )
};
