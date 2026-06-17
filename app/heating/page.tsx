import React from 'react'
import Image from 'next/image'
import furnacepic from '../images/furnace.png'
import Link from 'next/link'
import {PackagePlus, BoxSelect, Wrench, Nut, Hammer, Drill} from 'lucide-react'

const page = () => {
  return (
    <div className='bg-[hsla(0,1%,71%,0.929)]'>
      <div className='text-5xl ml-12 pt-6 pb-2'>
          <Link className='text-white-300 hover:text-blue-700 hover:underline' href={'/'}>OnTimeTechnician</Link><span> | Heating</span>
      </div>
      <div className='grid grid-cols-2 p-4'>
        <div className='p-3 text-lg'>
          <div>
            Within all central heating systems there are three core components, the source, the 
            distribution, and the control.
          </div>
          <div className='p-1'>
            <ul className='list-disc p-3'>
              <li>
                Source: The applicance that either generates or captures the heat.
              </li>
              <li>
                Distribution: The network used to deliver heat thought the home.
              </li>
              <li>
                Control: The thermostat which detects the temperature and signals the source to turn 
                it on or off.
              </li>
            </ul>
          </div>
          <div>
            Modern home heating typically relies on one of three main technologies: Furnaces are the most common in, burning fuel to heat air and using a blower fan to push 
            it through a network of ducts. Boilers, by contrast, heat water rather than air, circulating 
            that hot liquid through pipes to radiators or under-floor tubing to provide a steady, "radiant"
            warmth. Heat pumps offer a high-efficiency alternative; instead of burning fuel to create heat,
            they use electricity and a refrigerant cycle to physically move heat from the outdoor air 
            into your home. While furnaces and boilers are masters of extreme cold, heat pumps are prized 
            for their versatility, as they can reverse their operation in the summer to act as a central 
            air conditioner.
          </div>
        </div>
        <div className='flex justify-center'>
          <Image src = {furnacepic} alt='furnace' width={300} height={100} />
        </div>
      </div>
      <div className="border-t border-dotted border-black my-8 w-full" />

      <div className='p-10'>
        <span className='text-xl font-bold'>How you know when to get a services</span>
        <div className='mt-5 text-lg'>
          There are a specific set of circumstances when you can tell when you get service done:
          <ul className='list-disc pl-5 pt-3'>
            <li>
              Weak airflow
            </li>
            <li>
              Uneven heating
            </li>
            <li>
              Unusual sounds
            </li>
            <li>
              Ghost thermostat
            </li>
            <li>
              Unexplained spike in energy bills
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-2 p-10 gap-10'>
        <Link href={"heating/install"}>
        <div className='border rounded-2xl bg-blue-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-blue-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
              <Drill className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Heating Install
          </div>
        </div>
        </Link>
        <Link href={"heating/repair"}>
        <div className='border rounded-2xl bg-red-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-red-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full">
              <Wrench className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Heating Repair
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default page