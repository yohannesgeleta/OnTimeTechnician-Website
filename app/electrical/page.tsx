import Image from 'next/image'
import wiringpic from '../images/wiring.jpg'
import Link from 'next/link'
import { Wrench,Cable} from 'lucide-react'

const page = () => {
  return (
    <div className='bg-[hsla(0,1%,71%,0.929)]'>
      <div className='text-5xl ml-12 pt-6 pb-2'>
          <Link className='text-white-300 hover:text-blue-700 hover:underline' href={'/'}>OnTimeTechnician</Link><span> | Electrical</span>
      </div>
      <div className='grid grid-cols-2 p-4'>
        <div className='flex justify-center'>
          <Image src = {wiringpic} alt='furnace' width={550} height={300} />
        </div>
        <div className='p-3 text-lg'>
        </div>
      </div>
      <div className='p-10'>
        <span className='text-xl font-bold'>How you know when to get a services</span>
        <div className='mt-5 text-lg'>
          There are a specific set of circumstances when you can tell when you get service done:
          <ul className='list-disc pl-5 pt-3'>
            <li>
              Flickering/Dimming lights
            </li>
            <li>
              Discolored/Chatted Outlets
            </li>
            <li>
              Sparking
            </li>
            <li>
              Buzzing or Hissing Sounds
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-2 p-10 gap-10'>
        <Link href={"electrical/repair"}>
        <div className='border rounded-2xl bg-blue-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-blue-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
              <Wrench className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Electrical Repair
          </div>
        </div>
        </Link>
        <Link href={"electrical/wiring"}>
        <div className='border rounded-2xl bg-red-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-red-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full">
              <Cable className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Electrical Wiring
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default page