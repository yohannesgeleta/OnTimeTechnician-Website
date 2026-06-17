import Image from 'next/image'
import Link from 'next/link'
import { Wrench,Fan} from 'lucide-react'

const page = () => {
  return (
    <div className='bg-[hsla(0,1%,71%,0.929)]'>
      <div className='text-5xl ml-12 pt-6 pb-2'>
          <Link className='text-white-300 hover:text-blue-700 hover:underline' href={'/'}>OnTimeTechnician</Link><span> | Indoor Air Quality</span>
      </div>
      
      {/**Icons at bottom */}
      <div className='grid grid-cols-2 p-10 gap-10'>
        <Link href={"iaq/repair"}>
        <div className='border rounded-2xl bg-blue-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-blue-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full">
              <Wrench className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Indoor Air Quality Repair
          </div>
        </div>
        </Link>
        <Link href={"iaq/filtering"}>
        <div className='border rounded-2xl bg-red-400 h-50 flex items-center gap-4 px-6 hover:border-0 hover:bg-red-200'>
          <div className="flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full">
              <Fan className='w-12 h-12'/>
          </div>
          <div className='w-[80%] text-3xl font-bold'>
            Indoor Air Quality Filtering
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default page