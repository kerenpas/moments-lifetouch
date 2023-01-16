import axios from "axios";
import {Moment} from "./models";

const iam = axios.create({
    baseURL: 'https://iam.shutterfly.com/',
    headers: {
        'Content-Type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth'
    }
})

const thisLife = axios.create({
    baseURL: 'https://cmd.thislife.com/json',
    headers: {
        'x-api-key': '020e46c2-864c-46b5-9ca9-db6367317b3c'
    }
})

const thisLifeParams1 = {
    method: "moment.getRecentMomentsForLifetouch",
    params: [
        "eyJraWQiOiJpY1A4WExhT3B3cVlxQkdOXC9Bd1V1TFwvRU9BQVFHXC9Ic0hpSGZCMjFBbERFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNWU3YWY1OS03N2ZlLTQ1OGMtYjk5ZC01ZjI5ODEyMjUzMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJDb2duaXRvTmV3U2lnbnVwIl0sInByZXNjaG9vbHNfdWlkIjoiYTZiMDdjMDUtODY1MS00ZTZkLWJiMGItZTkxOGYzYTVhZTMxIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVG1Iem9RNjlqIiwiY29nbml0bzp1c2VybmFtZSI6IjE1ZTdhZjU5LTc3ZmUtNDU4Yy1iOTlkLTVmMjk4MTIyNTMxNiIsImdpdmVuX25hbWUiOiJNYXJhIiwib3JpZ2luX2p0aSI6IjliYWUxYzlmLTdhOGItNDdjNy04MGE2LWZjN2U0NmJkY2EzYSIsImF1ZCI6InQ4b2lpZjUybWVjZTZibGVlYXMycG9mMG4iLCJ1c2VyX3R5cGUiOiJBQ1QiLCJldmVudF9pZCI6IjlmMmFhMzFjLTk2YzMtNDEyYi1hNDJkLWZjOGY1ZDY1MGYxNyIsInNmbHlfdWlkIjoiMDI0MDYwNjA1MjU5IiwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6InByb2ZpbGUgdXNlciIsImF1dGhfdGltZSI6MTY3MzUyNTYyMywiZXhwIjoxNjczNTI5MjIzLCJpYXQiOjE2NzM1MjU2MjMsImZhbWlseV9uYW1lIjoiTWNGYWtlcnRvbiIsImp0aSI6ImI2NTQxYzYwLWJjNjktNDk4Mi05ZGE3LTVmNDMzYWE2Njc3MyIsImVtYWlsIjoiZmFrZXllbWFpbEB3aGF0ZXZlci5jb20ifQ.IPJUsS_MtOYPOiqYwkIqUtiE2r_3i7gUx2ZauWMsYpn0RgA-c3Gbc90zAnMGdmZ250D2srLwbEMsf94uhQRozjc-u5pQln28aocBaWcc1l7XIdn2Bjs1sqtVIiF-AOHlLZbMaugbUdVSbQ93-ZvoGsUQngMuwy-agiqe87GY4WJqee0MeJ3UA8hc6S_w0bIUZJkfbdh1-NAcbLcOet7XdxpuEXg6MX8QqvZAGax2nTDsMGc4tQVCOFPf3GfmjXhzmXfZ4B6WfGqDi1gzahe_p_wgVGNeM-fSZ7eX56_hiRRzDTTcXmmnD7vtj4lSeak8UPb9iIi_k85h3QS5XO3D3A",
        200,
        null,
        true],
    id: null
}

const loginCall = axios.create({
    baseURL: 'https://iam.shutterfly.com',
    headers: {
        'content-type': 'application/x-amz-json-1.1',
        'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth'
    }
})


        const aimData = '{\n    "AuthFlow": "USER_PASSWORD_AUTH",\n   ' +
            ' "ClientId": "t8oiif52mece6bleeas2pof0n",\n   ' +
            ' "AuthParameters": {\n       ' +
            ' "USERNAME": "fakeyemail@whatever.com",\n       ' +
            ' "PASSWORD": "12345678aB!"\n    }\n}'


export const serverApi = {
            
    login: async (user?: string, password?: string): Promise<string> => {
        const {data} = await iam.post('/', aimData);
        console.log(data.AuthenticationResult.IdToken);
        if (typeof data.AuthenticationResult === "undefined") {
            return data.message;
        }
        return data.AuthenticationResult.IdToken;
    },
    getAllPhotos: async (): Promise<Moment[]> => {
        const params = thisLifeParams1;
        console.log(params);
        const {data} = await thisLife.post('?method=moment.getRecentMomentsForLifetouch', params);
        return data.result.payload.moments;
    }
}