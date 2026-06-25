import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

import {  ChevronDown,
  Home,
  Info,
  Mail,
  Snowflake,
  ThermometerSun,
  Wind,
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
  return (
    <nav className="border-t border-blue-900 bg-blue-950 shadow-md">
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-center px-6">
        <ul className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const hasDropdown = item.links && item.links.length > 0

            return (
              <li key={item.label} className={styles.servicesMenu}>
                <Link
                  href={item.href}
                  className="flex h-14 items-center gap-2 px-5 text-base font-semibold text-slate-200 transition hover:bg-blue-900 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-blue-200" />
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-blue-200 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {hasDropdown && (
                  <div className={styles.servicesDropdown}>
                    {item.links?.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
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


