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
            "eyJraWQiOiJpY1A4WExhT3B3cVlxQkdOXC9Bd1V1TFwvRU9BQVFHXC9Ic0hpSGZCMjFBbERFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNWU3YWY1OS03N2ZlLTQ1OGMtYjk5ZC01ZjI5ODEyMjUzMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJDb2duaXRvTmV3U2lnbnVwIl0sInByZXNjaG9vbHNfdWlkIjoiYTZiMDdjMDUtODY1MS00ZTZkLWJiMGItZTkxOGYzYTVhZTMxIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVG1Iem9RNjlqIiwiY29nbml0bzp1c2VybmFtZSI6IjE1ZTdhZjU5LTc3ZmUtNDU4Yy1iOTlkLTVmMjk4MTIyNTMxNiIsImdpdmVuX25hbWUiOiJNYXJhIiwib3JpZ2luX2p0aSI6IjIzZjg5ZGM0LTFjYzYtNDNmNS1hZjgyLTBmMTNiMjlhMzkxNiIsImF1ZCI6InQ4b2lpZjUybWVjZTZibGVlYXMycG9mMG4iLCJ1c2VyX3R5cGUiOiJBQ1QiLCJldmVudF9pZCI6ImRjYmYwZTNjLWRkM2UtNDdmOS05MmViLWI2Yzc3ZjBiZDViZSIsInNmbHlfdWlkIjoiMDI0MDYwNjA1MjU5IiwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6InByb2ZpbGUgdXNlciIsImF1dGhfdGltZSI6MTY3MzQyOTAyNCwiZXhwIjoxNjczNDMyNjIzLCJpYXQiOjE2NzM0MjkwMjQsImZhbWlseV9uYW1lIjoiTWNGYWtlcnRvbiIsImp0aSI6Ijg3M2M2Y2ZkLTJmNmYtNGYzZC04Y2E0LTdkMWM0OTkxMWQ5ZCIsImVtYWlsIjoiZmFrZXllbWFpbEB3aGF0ZXZlci5jb20ifQ.BFd6oPICDWTvCCwfM41HVamBt7hXu6oxuBZ-vYN4RzFtKwyePLH8woG8bDWerN7l1Q38cbVRkXqgzF0kIKSNUTFUl5_K7E5ZjWP57YRp6n5GYxB3CrabOLxBKTR6WPCXeRwf6UNzK96deyt1keXJ-1t6-9fpZp0nR1Z-JEOjYBxSDdbRMSqDK6paCUKO3TQO7r9bmXJgFpvZu3Ki6LMLY84R-ykP-g76s-ZcGMCDiBIQDwbdN4iz8mKb2XMGfYQJ9r_sZyGyxuzNVcQpqmCGWdG0Ob8HSrftjl626b-1KLrZfPXol3fQ5ZRzM30nrobvNALx7oVuRKyCrt1JS1El9Q",
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