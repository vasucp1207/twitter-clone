import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>
        <img src={tweet.profileImg} />

        <div cl>
            <div className='flex items-center space-x-1'>
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
            </div>

            <TimeAgo 
                classname='text-sm text-gray-500'
                date={tweet._createdAt}
            />
        </div>
    </div>
  )
}

export default Tweet