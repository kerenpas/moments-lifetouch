import axios from "axios";
import {LoginJWTData, Moment} from "./models";
import {CookieValueTypes} from "cookies-next/src/types";
import {jwtToken} from "../Utils";
import {OptionsType} from "cookies-next/lib/types";

const iam = axios.create({
    baseURL: 'https://iam.shutterfly.com/',
    headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
        'Origin': 'https://accounts.shutterfly.com',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'X-Amz-User-Agent': 'aws-amplify/5.0.4 js',
        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'Cookie': 'ak_bmsc=BC7FDD044F87ACCC5EE46C0261780123~000000000000000000000000000000~YAAQG2IoF2G36TqFAQAAm0klkRL37ylqwhBjKRavdohLWyOpHf12ziqdjPzNfFpFXtgwY+63ksFQuy0r/MOmRCk83W+OlcF6+TMTcgFFd8r/tlapNBN2lR5VeThXmdAGsl60yNWCNuwWiUifim3xsjaz+2w2eBQPb2FT/JESQuBs0Ku7EqsH0PRKN49cjo4tJbXQF/5ObIJuaabFxM4+Mjo7IZrcgW0PrEKqnuXu6eecZAymKpSGnAsGVgrGTbG2eTRckVrB+1lXULvd6AGYs/BBH9PE9/37QRip2PHDHBjER8byibNkQ5vBsb0y+woQG0UyWYAGMInCAx6CtiXXhRAxMo+UHqiSVicllZG5yW2POuw5UT+ABnoLT3NMGDMC'
    }
})

const thisLife = axios.create({
    baseURL: 'https://cmd.thislife.com/json',
    headers: {
        'x-api-key': '020e46c2-864c-46b5-9ca9-db6367317b3c'
    }
})

const thisLifeParams = (token: CookieValueTypes) => {
    return {
        method: "moment.getRecentMomentsForLifetouch",
        params: [
            token,
            200,
            null,
            true],
        id:null
    }

}


    export const serverApi = {
        login: async (user: string, password: string, optionsType: OptionsType): Promise<LoginJWTData|string> => {
            const aimData = '{\n    "AuthFlow": "USER_PASSWORD_AUTH",\n   ' +
                ' "ClientId": "t8oiif52mece6bleeas2pof0n",\n   ' +
                ' "AuthParameters": {\n       ' +
                ` "USERNAME": "${user}",\n       ` +
                ` "PASSWORD": "${password}"\n    }\n}`
            try {
                console.log(`call to serverApi  login keren keren`);
                const result = await iam.post('/', aimData);
                const data = result.data
                console.log(`call to iam.post the rsult is ${result.status} `);
                console.log(`call to iam.post the rsult is ${data} `);
                console.log("call to iam.post");
                console.log(`The Login result data is ${data}`);
                if (typeof data.AuthenticationResult === "undefined") {
                    return data.message;
                }
                console.log(`data.AuthenticationResult.IdToken: ${data.AuthenticationResult.IdToken}`);
                const loginJWTData: LoginJWTData = {
                    ExpiresIn: data.AuthenticationResult.ExpiresIn,
                    IdToken: data.AuthenticationResult.IdToken,
                    authTime: Date.now() / 1000 | 0
                }
                jwtToken.setTokenDataInCookies(loginJWTData, optionsType)
                return loginJWTData
            } catch (e:any) {
                console.error(`error on login method ${e}`)
                return "Error"
            }

        },
        getAllPhotos: async (token: CookieValueTypes): Promise<Moment[] | string> => {
            console.log(`getAllPhotos token ${token}`)
            const params = thisLifeParams(token);
            console.log(`getAllPhotos params: ${JSON.stringify(params)}`);
            const {data, status} = await thisLife.post('?method=moment.getRecentMomentsForLifetouch', params);
            console.log(`getAllPhotos status: ${status}`);
            debugger
            console.log(`getAllPhotos data: ${JSON.stringify(data)}`);
            console.log(`getAllPhotos data.result: ${JSON.stringify(data.result)}`);
            return data.result.payload.moments;
        }
    }
