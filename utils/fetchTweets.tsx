import { Tweet } from "../typings"

export const fetchTweets = async () => {
    const res = await fetch(`http://localhost:3000/api/getTweets`)

    const data = await res.json()
    // console.log(data)
    const tweets = data.tweets

    return tweets
}