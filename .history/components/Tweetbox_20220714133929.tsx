import React, { useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function Tweetbox() {

    const [input, setInput] = useState<string>('')

    return (
        <div className='flex space-x-2 p-5'>
            <img className='h-14 w-14 object-cover rounded-full border mt-4' src='https://links.papareact.com/gll' alt='' />
            <div className='flex  items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input onChange={e => setInput(e.target.value)} value={input} type='text' placeholder="What's Happening?" className='h-24 w-full text-xl outline-none placeholder:text-xl' />
                    <div className='flex items-center'>
                        <div className='flex space-x-2 text-twitter flex-1'>
                            <PhotographIcon className='curson-pointer transition-transform duration-150 ease-out hover:scale-150 h-5 w-5' />
                            <SearchCircleIcon className='h-5 w-5' />
                            <EmojiHappyIcon className='h-5 w-5' />
                            <CalendarIcon className='h-5 w-5' />
                            <LocationMarkerIcon className='h-5 w-5' />
                        </div>
                        <button disabled={!input} className='bg-twitter disabled:opacity-40 px-5 py-2 font-bold text-white rounded-full'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Tweetbox