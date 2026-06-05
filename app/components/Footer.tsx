import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import logopic from '../images/ott-logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={`${styles.footerWrapper} w-full bg-slate-900 text-black py-12 px-6`}>
        <div className="grid grid-cols-4 gap-8 max-w-[95%] mx-auto">
            <div>
                <Image 
                src ={logopic}
                alt ="Logopic"
                />
                <div className='font-serif text-base text-[12px]'>
                    From vital mechanical upgrades to complete property transformations, OnTimeTechnician delivers the expert HVAC, electrical, 
                    and remodeling services you need to maximize comfort and efficiency. We bring top-tier craftsmanship to your home or business, 
                    right when you expect us. 
                </div>
            </div>
            <div className='bg-amber-500 h-96' >
                <ul className='flex flex-col gap-6'>
                    <li>
                        <Link href = '/heating'>Heating</Link>
                    </li>
                    <li>
                        <Link href = '/cooling'>Cooling</Link>
                    </li>
                    <li>
                        <Link href = '/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link href = '/about'>About</Link>
                    </li>
                </ul>
            </div>
            <div className='bg-amber-500 h-96'>Map</div>
            <div className='bg-amber-500 h-96'>COntact</div>
        </div>
    </div>
  )
}

export default Footer