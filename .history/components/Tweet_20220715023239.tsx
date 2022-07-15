import React from 'react'
import {Tweet} from '../typings'

interface Props {
    tweet: Tweet
}

function Tweet(props: Props) {
  return (
    <div>
        <img src={Tweet.profileImg} />
    </div>
  )
}

export default Tweet