export interface Tweet extends TweetBody 

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}