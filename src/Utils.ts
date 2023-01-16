import {OptionsType} from "cookies-next/lib/types";
import {CookieValueTypes, getCookie, setCookie} from "cookies-next";
import {LoginJWTData} from "./api.helpers/models";


export const jwtToken = {
    isTokenValid:(data: OptionsType)=>{
        debugger
        const expiresIn = getCookie("ExpiresIn", data)
        if(typeof expiresIn  ===  undefined){
            console.log("isTokenValid : false")
            return  false
        }
        const authTime = getCookie("authTime", data)
        const timeNow = Math.floor(Date.now() / 1000)
        console.log("isTokenValid :timeNow - Number(authTime) > Number(expiresIn) ")
        console.log(`${timeNow - Number(authTime) > Number(expiresIn)}`)
        console.log (` time now:  ${timeNow} `)
        console.log (` Number(authTime) :  ${Number(authTime)} `)
        console.log (` Number(expiresIn) :  ${Number(expiresIn)} `)
        console.log (` timeNow - Number(authTime) :  ${timeNow - Number(authTime)} `)
        return(timeNow - Number(authTime) < Number(expiresIn))
    },
    setTokenDataInCookies: (loginJWTData: LoginJWTData, data: OptionsType) =>{
        setCookie('IdToken', loginJWTData.IdToken, {req: data.req, res: data.res});
        setCookie('ExpiresIn', loginJWTData.ExpiresIn, {req: data.req, res: data.res});
        setCookie('authTime', loginJWTData.authTime, {req: data.req, res: data.res});
},
getJwtToken:(data: OptionsType):CookieValueTypes =>{
    return getCookie("IdToken", data)
}
}