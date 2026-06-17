import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import logopic from '../images/ott-logo.png'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
        <div className='bg-blue-950 w-full h-10'/>
        <div className={`${styles.footerWrapper} w-full bg-slate-900 text-black py-12 px-6`}>
            <div className="grid grid-cols-4 gap-8 max-w-[95%] mx-auto">
                <div>
                    <Image 
                    src ={logopic}
                    alt ="Logopic"
                    />
                    <div className='font-serif text-base text-[16px]'>
                        From vital mechanical upgrades to complete property transformations, OnTimeTechnician delivers the expert HVAC, electrical, 
                        and remodeling services you need to maximize comfort and efficiency. We bring top-tier craftsmanship to your home or business, 
                        right when you expect us. 
                    </div>
                </div>
                <div className='h-96' >
                    <ul className='flex flex-col gap-6 ml-10 mt-6'>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/heating'>Heating</Link>
                        </li>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/cooling'>Cooling</Link>
                        </li>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/iaq'>Indoor Air Quality</Link>
                        </li>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/electrical'>Electrical</Link>
                        </li>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/contact'>Contact</Link>
                        </li>
                        <li className='text-[20px] font-semibold font-serif hover:underline hover:text-blue-500'>
                            <Link href = '/about'>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="py-4">
                        <span className='text-serif underline font-medium ml-6'>Office</span>
                        <div className='ml-6'>304 Dohner Dr,</div>
                        <div className='ml-6'>Lancaster PA, 17602</div>
                    </div>
                    <div className="py-4">
                        <span className='text-serif underline font-medium ml-6'>Buissnes hours</span>
                        <div className='ml-6'>9am-7pm</div>
                    </div>
                    <div className="py-4">
                        <span className='text-serif underline font-medium ml-6'>Areas Served</span>
                        <div className='ml-6'>
                            Lancaster, PA<br/>
                            Littiz, PA<br/>
                            New Holland, PA<br/>
                            Ephrata, PA<br/>
                            Bird-in-Hand, PA<br/>
                            and the surrounding area.
                        </div>
                    </div>
                </div>
                <div className='h-96 gap-12'>
                    <div className='m-12'/>
                    <Link href={'/contact/message'}>
                        <div className=' rounded-2xl text-xl text-white px-6 py-3 bg-red-500  hover:bg-red-600 w-50'>
                            <span className='flex text-white justify-center'>Contact us</span>
                        </div>
                    </Link>
                    <div className='m-25'/>
                    <Link href={'/contact/schedule'}>
                        <div className=' rounded-2xl text-xl text-white px-6 py-3 bg-red-500 hover:bg-red-600 w-50'>
                            <span className='flex text-white justify-center'>Schedule</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer