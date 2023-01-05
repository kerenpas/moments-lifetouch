export interface PostSummary {
    id: string,
    title : string,
    updateAt: number,
    createdAt: number
}

export interface Post extends PostSummary{
    details : string
}

export interface Tokens {
    AccessToken: string,
    IdToken : string,
    RefreshToken: string
}

export interface Moments{
    uid : string,
    encrypted_id: string
}