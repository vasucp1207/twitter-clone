import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>
        <img src={tweet.profileImg} />

        <div>
            <div>
                <p>{tweet.username}</p>
                <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
            </div>

            <TimeAgo 
                classname='text-sm text-gray-500'
                date={tweet.}
            />
        </div>
    </div>
  )
}

export default Tweet