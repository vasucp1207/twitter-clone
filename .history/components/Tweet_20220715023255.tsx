import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

function Tweet(props: Props) {
  return (
    <div>
        <img src={Tweet.profileImg} />

        <div>
            <div>
                <p>{Tweet.username}</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Tweet