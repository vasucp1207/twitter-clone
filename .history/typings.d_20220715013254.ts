export interface Tweet extends TweetBody {
    _id: string
    _created
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}