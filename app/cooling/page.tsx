import React from 'react'
import Image from 'next/image'
import cooling from '../images/cooling.jpg'
import Link from 'next/link'
import {PackagePlus, BoxSelect, Wrench, Nut, Hammer, Drill} from 'lucide-react'

const page = () => {
  return (
    <div className='bg-[hsla(0,1%,71%,0.929)]'>
      <div className='text-5xl ml-12 pt-6 pb-2'>
          <Link className='text-white-300 hover:text-blue-700 hover:underline' href={'/'}>OnTimeTechnician</Link><span> | Cooling</span>
      </div>
      <div className='p-10 text-lg'>
        Unlike heating systems where hot air is pumped thoughout the house, cooling system do not 
        pump cool air. Instead they bring the internal temperture down by sucking heat out of the 
        house to. It relies on a continuous cycle of a chemical compound called refrigerant
        shifting back and forth between a liquid and a gas state to absorb and release heat energy.
        A standard central AC is a split system, meaning it has components both inside and outside 
        the house.
      </div>
      <div className='grid grid-cols-2 p-4'>
        <div className='p-7'>
          <h3 className='text-3xl font-medium'>Internal Unit</h3>
          <div className='text-lg pt-4'>
            The indoor unit's primary job is to absorb heat from your indoor air and circulate 
            the newly cooled air back into your rooms.
          </div>
          <ul className='list-disc pl-5 text-lg pt-4 space-y-2'>
            <li>
              Evaporator Coil: Located inside your furnace or air handler (usually in the 
              basement, attic, or a closet). This is a network of copper tubes filled with 
              freezing-cold liquid refrigerant. As warm air from your house is blown across 
              these coils, the refrigerant acts like a sponge, soaking up the heat energy from 
              the air.
            </li>
            <li>
              Blower Fan: This fan creates the airflow for your whole house. It pulls warm, 
              stagnant air into the system through your return vents, pushes it over the cold 
              evaporator coil to cool it down, and then blasts the chilled air back out through 
              your supply registers.
            </li>
          </ul>
        </div>
        <div className='p-7 '>
          <h3 className='text-3xl font-medium'>External Unit</h3>
          <div className='text-lg pt-4'>
            The outdoor unit's job is to release the heat that was just captured indoors and reset 
            the refrigerant so it can go back inside for another round.
          </div>
          <ul className='list-disc pl-5 text-lg pt-4 space-y-2'>
            <li>
              Compressor: Operates as the centerpeice of the AC system. This pump takes the warm 
              refrigerant gas coming from indoors and squeezes it. Compressing the gas packs the 
              heat molecules tightly together, drastically raising its temperature and pressure 
              until it is hotter than the outdoor air.
            </li>
            <li>
              Condenser Coil: The hot, pressurized gas flows into this large outdoor coil.
            </li>
            <li>
              Condenser Fan: This large fan sits at the top of the unit and pulls outside air 
              through the condenser coils. Because the refrigerant inside the coils is much hotter 
              than the outside air, the heat naturally transfers into the outdoor atmosphere. As 
              the refrigerant loses its heat, it cools down and turns back into a liquid, ready to 
              head back inside
            </li>
          </ul>
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
              Air Temperature is Lukewarm
            </li>
            <li>
              Ice Layering on the Units
            </li>
            <li>
              Strange Sounds or Foul Odors
            </li>
            <li>
              Short Cycling
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-2 p-10 gap-10'>
        <Link href={'cooling/install'}>
          <div className='border rounded-2xl bg-blue-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-blue-200'>
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
                <Drill className='w-12 h-12'/>
            </div>
            <div className='w-[80%] text-3xl font-bold'>
              Cooling Install
            </div>
          </div>
        </Link>
        <Link href={'heating/install'}>
          <div className='border rounded-2xl bg-red-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-red-200'>
            <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full">
                <Wrench className='w-12 h-12'/>
            </div>
            <div className='w-[80%] text-3xl font-bold'>
              Cooling Repair
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default page