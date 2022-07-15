// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sanityClient} from '../../sanity'
import {Tweet} from '../../typings'
import {groq} from 'next-sanity'
import { isAwaitExpression } from 'typescript'

const feedQuery = groq`
    *[_type == 'tweet' && !blockTweet] {
        id,
        ...
    } | order(_createdAt desc)
`

type Data = {
  tweet: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets: Tweet[] = 
  res.status(200).json({ name: 'John Doe' })
}
