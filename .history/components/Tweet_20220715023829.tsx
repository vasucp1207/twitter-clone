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
        </div>
    </div>
  )
}

export default Tweet