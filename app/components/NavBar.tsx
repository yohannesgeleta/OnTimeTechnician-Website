"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavBar.module.css'

import { ChevronDown,
  Home,
  Info,
  Mail,
  Menu,
  Snowflake,
  ThermometerSun,
  Wind,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Heating',
    href: '/heating',
    icon: ThermometerSun,
    links: [
      { label: 'Heating Install', href: '/heating/install' },
      { label: 'Heating Repair', href: '/heating/repair' },
    ],
  },
  {
    label: 'Cooling',
    href: '/cooling',
    icon: Snowflake,
    links: [
      { label: 'Cooling Install', href: '/cooling/install' },
      { label: 'Cooling Repair', href: '/cooling/repair' },
    ],
  },
  {
    label: 'Electrical',
    href: '/electrical',
    icon: Zap,
    links: [
      { label: 'Wiring', href: '/electrical/wiring' },
      { label: 'Repair', href: '/electrical/repair' },
    ],
  },
  {
    label: 'Indoor Air Quality',
    href: '/iaq',
    icon: Wind,
    links: [
      { label: 'Filtering', href: '/iaq/filtering' },
      { label: 'Repair', href: '/iaq/repair' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact/message',
    icon: Mail,
    links: [
      { label: 'Send us a message', href: '/contact/message' },
      { label: 'Schedule an appointment', href: '/contact/schedule' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    icon: Info,
  },
]

const NavBar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  const closeMenu = () => {
    setIsOpen(false)
    setOpenSection(null)
  }

  return (
    <nav className="relative border-t border-blue-900 bg-blue-950 shadow-md">
      <div className={styles.navContainer}>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span>Menu</span>
        </button>

        <ul id="primary-navigation" className={`${styles.navList} ${isOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item) => {
            const Icon = item.icon
            const hasDropdown = item.links && item.links.length > 0
            const hasWideDropdown = item.label === 'Heating' || item.label === 'Cooling'

            return (
              <li key={item.label} className={`${styles.servicesMenu} group`}>
                <div className={styles.navItemRow}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={`${styles.navLink} ${hasWideDropdown ? styles.wideNavLink : ''}`}
                  >
                    <Icon className="h-5 w-5 text-blue-200" />
                    <span>{item.label}</span>
                    {hasDropdown && <ChevronDown className={styles.desktopChevron} />}
                  </Link>
                  {hasDropdown && (
                    <button
                      type="button"
                      className={styles.submenuButton}
                      aria-label={`Show ${item.label} links`}
                      aria-expanded={openSection === item.label}
                      onClick={() => setOpenSection((current) => current === item.label ? null : item.label)}
                    >
                      <ChevronDown className={openSection === item.label ? styles.chevronOpen : ''} />
                    </button>
                  )}
                </div>

                {hasDropdown && (
                  <div
                    className={`${styles.servicesDropdown} ${openSection === item.label ? styles.servicesDropdownOpen : ''} ${item.label === 'Contact' ? styles.contactDropdown : ''}`}
                  >
                    {item.links?.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={styles.servicesDropdownLink}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
