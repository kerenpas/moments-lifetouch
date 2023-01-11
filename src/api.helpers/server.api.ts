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

const thisLifeParams1 = ()  : object => {
    // const tokenId = testApi.test();
    const thisLifeParams ={
        method : "moment.getRecentMomentsForLifetouch",
        params : [
            "eyJraWQiOiJpY1A4WExhT3B3cVlxQkdOXC9Bd1V1TFwvRU9BQVFHXC9Ic0hpSGZCMjFBbERFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNWU3YWY1OS03N2ZlLTQ1OGMtYjk5ZC01ZjI5ODEyMjUzMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJDb2duaXRvTmV3U2lnbnVwIl0sInByZXNjaG9vbHNfdWlkIjoiYTZiMDdjMDUtODY1MS00ZTZkLWJiMGItZTkxOGYzYTVhZTMxIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVG1Iem9RNjlqIiwiY29nbml0bzp1c2VybmFtZSI6IjE1ZTdhZjU5LTc3ZmUtNDU4Yy1iOTlkLTVmMjk4MTIyNTMxNiIsImdpdmVuX25hbWUiOiJNYXJhIiwib3JpZ2luX2p0aSI6ImUzMDU0MjVlLTJiZjgtNDNhMi1iY2M2LWU3M2ViMzk0M2FlZSIsImF1ZCI6InQ4b2lpZjUybWVjZTZibGVlYXMycG9mMG4iLCJ1c2VyX3R5cGUiOiJBQ1QiLCJldmVudF9pZCI6Ijg5YTExMzk4LWMxY2ItNDRjMy1iMWEzLWE2YzgwMmE0MDNhNSIsInNmbHlfdWlkIjoiMDI0MDYwNjA1MjU5IiwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6InByb2ZpbGUgdXNlciIsImF1dGhfdGltZSI6MTY3MzQzODg1MywiZXhwIjoxNjczNDQyNDUzLCJpYXQiOjE2NzM0Mzg4NTMsImZhbWlseV9uYW1lIjoiTWNGYWtlcnRvbiIsImp0aSI6IjlkZmFiMGExLTI5YTQtNGVkYy1iZTk2LWRhMGExNTNlYmJhNSIsImVtYWlsIjoiZmFrZXllbWFpbEB3aGF0ZXZlci5jb20ifQ.DOJJOUvIqAa2wL9HK2rU_CzfyBqpqnDI5swfV38Fot5PUhLxeF-qAc9qUPB8V_8IedC0feZ4BDhwlnYhy-ado4Xx7MCnSbSChpn1XIrzSPUv8Vqaum2B4UYNeqc4cst5l0GIb8I8sxUbasChMuowGymFnpeWr4aW8gfEeoDyRbgEqfrGLG8HWF-ssuOL4i-RK9jJYgII_rM5KICt727hpSgMpJbv8DeTLkiB8uxje8rd3Z1FwzugJzV_ff_woFDE1rf85St-dSlheUnU4L0u-3r0ZKEhfChY5FPbJKhAtwHhMT3glzZXZITmyrp8qR0I9mBf5Xdk7tHQfZ1zjvGVqg",
            200,
            null,
            true],
        id: null
    }
    return thisLifeParams;
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
        const params = thisLifeParams1();
        const {data} = await thisLife.post('?method=moment.getRecentMomentsForLifetouch', params);
        return data.result.payload.moments;
    }
}