export interface Tweet extends TweetBody {
    _id: string
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}