import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div className='flex space-x-3'>
        <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} />

        <div>
            <div className='flex items-center space-x-1'>
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
            </div>

            {/* <TimeAgo 
                classname='text-sm text-gray-500'
                date={tweet._createdAt}
            /> */}
            <div>
                <p className='pt-1'>{tweet.text}</p>
                {tweet.image && <img src={tweet.image}  className='m-5 ml-0 mb-1 max-'/>}
            </div>
        </div>
    </div>
  )
}

export default Tweet