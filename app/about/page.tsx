import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import house from '../images/house.jpg'
import { Snowflake, Flame, Plug } from 'lucide-react';
import { AirVent, Wind, Fan, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className='bg-[hsla(0,1%,71%,0.929)]'>
      <div className='w-full h-24'>
        <div className='text-5xl ml-12 pt-6'>
          <Link className='text-white-300 hover:text-blue-700 hover:underline' href={'/'}>OnTimeTechnician</Link><span> | About</span>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className='ml-12'>
          <Image 
            src = {house} 
            alt = 'Image of the house'
            placeholder='blur'
            className='rounded-lg'
            />
        </div>
        <div className='mt-4 ml-6 space-y-5'>
          <div className='text-blue-950 text-3xl font-bold'>A local family-owned buissnes</div>
          <div className=''>
            At OnTimeTechnician, we take pride in providing our neighbors in the Central Pennsylvania 
            area with services to keep their homes and businesses safe, comfortable and powered up. 
            Over the last 5 years we have worked to provide the best solutions with even better 
            customer service. We offer Heating, Cooling, Electrical, and Indoor Air Quality solutions 
            to our residential and commercial neighbors. Our vision is simple: to bring top-tier 
            technical skills with old-school dependability. 
          </div>
          <div className=''>
              <span className='text-xl'>We provide a whole host of services to our customers:</span>
              <ul className='list-disc pl-5 ml-4 mt-2 gap-5'>
                <li>Heating: Heat pump installations, furnace repairs</li>
                <li>Cooling: Routine AC maintenance, diagnostics, seasonal tune-ups.</li>
                <li>Electrical: Residential and commercial wiring, panel upgrades, lighting and smart home installations</li>
                <li>Indoor Air Quality: Humidity control, air scrubbing, filtration systems, whole-home dehumidifiers, UV air purifiers.</li>
              </ul>
          </div>
          <div className='leading-relaxed'>
            As a family run business our advantage over the larger corporations is that we don’t answer to a distant corporate 
            headquarters we answer to you. Instead of fulfilling operate quota we prioritize fulfilling the needs of the people 
            in our community.<br/>
            When you choose OneTimeTechnician you are making the choice to have cutting edge technical skill matched with committed 
            customer support. We pride ourselves on our reputation for quality work and customer service.<br/>
            Contact us today to schedule a service or request and estimate!
          </div>
        </div>
      </div>
      <div className="border-t border-dotted border-black my-8 w-full" />

      {/*Our services section */}
      <div className=''>
        <div className='flex justify-center text-4xl text-blue-950 font-bold'>
          Our Services
        </div>
        <div className="mt-2 mr-2 ml-2 grid grid-cols-2 gap-2">
          <Link href="/heating">
          <div className="flex flex-col items-center text-center bg-orange-500 p-6 rounded-lg hover:border-0 hover:bg-orange-300">
            <div className="flex items-center justify-center w-20 h-20 bg-orange-100 text-orange-600 rounded-full">
              <Flame className='w-12 h-12 text-orange-500'/>
            </div>
            <span className='font-bold mt-5'>Heating</span>
            <div className='flex justify-center'>
              Our expert team keeps your property warm and cozy all winter long through reliable furnace and heat pump repairs, 
              maintenance, and energy-efficient installations. We quickly diagnose and resolve heating issues to restore your comfort 
              and peace of mind when the temperatures drop.
            </div>
          </div>
          </Link>
          <Link href={'/cooling'}>
            <div className="flex flex-col items-center text-center p-6 bg-blue-200 rounded-lg hover:border-0 hover:bg-blue-100">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
                  <Snowflake className="w-12 h-12 text-blue-500" />
              </div>
              <span className='font-bold mt-5'>Cooling</span>
              <div>
              We keep your home or business refreshingly cool throughout the humid summer months with comprehensive air 
              conditioning repairs, tune-ups, and replacements. Our technicians install modern, high-efficiency cooling systems 
              that maximize your comfort while lowering your utility bills.
              </div>
          </div>
          </Link>
          <Link href="/electrical">
            <div className="flex flex-col items-center text-center p-6 bg-yellow-400 rounded-lg hover:border-0 hover:bg-yellow-100">
              <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-600 rounded-full">
                  <Plug className='w-12 h-12 text-yellow-800'/>
              </div>
              <span className='font-bold mt-5'>Electrical</span>
              <div>
                From minor outlet repairs and smart home installations to complete panel upgrades, our team handles your power 
                needs with a strict focus on safety. We ensure your residential or commercial electrical infrastructure is stable, 
                secure, and fully up to code.
              </div>
            </div>
          </Link>
          <Link href="/iaq">
            <div className="flex flex-col items-center text-center p-6 bg-purple-200 rounded-lg hover:border-0 hover:bg-purple-50">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 text-purple-600 rounded-full">
                  <AirVent className='w-12 h-12 text-purple-500'/>
              </div>
              <span className='font-bold mt-5'>Indoor Air Quality</span>
              <div>
                We help you breathe easier by installing advanced air filtration systems, UV purifiers, and humidity control units 
                that eliminate allergens and pollutants. Our indoor air quality solutions ensure a cleaner, healthier, and 
                fresher environment for your family or business.
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="border-t border-dotted border-black my-8 w-full" />
      <div className='grid grid-cols-3 gap-2 p-12'>
        <div className='flex flex-col'>
          <div className=''>
            <span className='text-xl text-blue-950 font-bold'>About us</span>
            <div className='leading-relaxed mt-2'>
              OnTimeTechnician is a proud, family-operated business delivering elite HVAC, 
              electrical, and indoor air quality solutions across Central Pennsylvania. We 
              built our reputation on a simple promise: arriving exactly on time and getting 
              the job done right the first time. Our team treats every home and business with 
              the utmost respect, offering straightforward, honest pricing alongside top-tier 
              craftsmanship. When you choose us, you are partnering with local experts dedicated 
              to keeping your property safe, comfortable, and running flawlessly year-round.
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 ml-20'>
          <div className=''>
            <div className='text-xl text-blue-950 font-bold'>Buisness Hours</div>
            <span className='text-green-400 mt-2'>Open </span>
            <span>24 hours</span>
          </div>
          <div className=''>
            <div className='text-xl text-blue-950 font-bold'>Languages</div>
            <div className='mt-2'>
              English, Amharic, Arabic
            </div>
          </div>
          <div className=''>
            <div className='text-xl text-blue-950 font-bold'>Payment Options</div>
            <div className='mt-2'>
              <ul className='list-disc ml-4'>
                <li>Mastercard</li>
                <li>Cash</li>
                <li>Check</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className=''>
            <div className='text-xl text-blue-950 font-bold'>Services Offered</div>
            <div className='mt-2'>
              <ul className='list-disc ml-4'>
                <li>Heating</li>
                <li>Plumbing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About