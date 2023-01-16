export interface Tokens {
    AccessToken: string,
    IdToken : string,
    RefreshToken: string
}

export interface Moment {
    uid : string,
    encrypted_id: string
}

export interface LoginJWTData {
    ExpiresIn : number,
    IdToken: string,
    authTime:number
}