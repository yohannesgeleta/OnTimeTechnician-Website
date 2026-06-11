import Image from 'next/image'
import Link from 'next/link'
import hvac from './images/hvac.png'

export default function Home() {
  return (
    <main> 
      <div className="grid grid-cols-2 gap-1 items-center">
        {/* Left Column: Image */}
        <div className="bg-blue-500">
          <Image 
            src={hvac} 
            alt='hvac stock picture'
            width={900}
            height={450}
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Right Column: Stacked Text Blocks */}
        <div className="flex flex-col gap-4 bg-green-300">
          <div className='bg-blue-200'>
            This is a text description of what it does.
          </div>
          <div className='bg-amber-700'>
            Extra text talking about the company.
          </div>
        </div>

      </div>
    </main>
  )
}
