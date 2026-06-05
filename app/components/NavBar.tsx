import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logopic from './images/ott-logo.png'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className="flex min-h-14 items-center justify-center px-5 bg-blue-950">
      <ul className="flex space-x-20">
        <li>
          <Link href="/" className="text-gray-300">Home</Link>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/heating" className="block text-gray-300">
            Heating
          </Link>

          <div className={styles.servicesDropdown}>
            <Link href="/heating/install" className={styles.servicesDropdownLink}>
              Install
            </Link>
            <Link href="/heating/repair" className={styles.servicesDropdownLink}>
              Repair
            </Link>
          </div>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/cooling" className="block text-gray-300">
            Cooling
          </Link>

          <div className={styles.servicesDropdown}>
            <Link href="/cooling/install" className={styles.servicesDropdownLink}>
              Install
            </Link>
            <Link href="/cooling/repair" className={styles.servicesDropdownLink}>
              Repair
            </Link>
          </div>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/iaq" className="block text-gray-300">
            Indoor Air Quality
          </Link>

          <div className={styles.servicesDropdown}>
            <Link href="/iaq/filtering" className={styles.servicesDropdownLink}>
              Filtering
            </Link>
            <Link href="/iaq/repair" className={styles.servicesDropdownLink}>
              Repair
            </Link>
          </div>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/electrical" className="block text-gray-300">
            Electrical
          </Link>

          <div className={styles.servicesDropdown}>
            <Link href="/electrical/wiring" className={styles.servicesDropdownLink}>
              Wiring
            </Link>
            <Link href="/electrical/repair" className={styles.servicesDropdownLink}>
              Repair
            </Link>
          </div>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/remodeling" className="block text-gray-300">
            Remodeling
          </Link>
        </li>

        <li className={styles.servicesMenu}>
          <Link href="/contact/message" className="block text-gray-300">
            Contact
          </Link>

          <div className={styles.servicesDropdown}>
            <Link href="/contact/message" className={styles.servicesDropdownLink}>
              Send us a message
            </Link>
            <Link href="/contact/estimate" className={styles.servicesDropdownLink}>
              Request an estimate
            </Link>
            <Link href="/contact/schedule" className={styles.servicesDropdownLink}>
              Schedule an appoitment
            </Link>
          </div>
        </li>

        <li>
          <Link href="/about" className="text-gray-300">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
