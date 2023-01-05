import axios from "axios";
import {Moments, Post, PostSummary} from "./models";


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

const tokenId = //window.$IdToken;
 'eyJraWQiOiJpY1A4WExhT3B3cVlxQkdOXC9Bd1V1TFwvRU9BQVFHXC9Ic0hpSGZCMjFBbERFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNWU3YWY1OS03N2ZlLTQ1OGMtYjk5ZC01ZjI5ODEyMjUzMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJDb2duaXRvTmV3U2lnbnVwIl0sInByZXNjaG9vbHNfdWlkIjoiYTZiMDdjMDUtODY1MS00ZTZkLWJiMGItZTkxOGYzYTVhZTMxIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVG1Iem9RNjlqIiwiY29nbml0bzp1c2VybmFtZSI6IjE1ZTdhZjU5LTc3ZmUtNDU4Yy1iOTlkLTVmMjk4MTIyNTMxNiIsImdpdmVuX25hbWUiOiJNYXJhIiwib3JpZ2luX2p0aSI6ImMxMzRlZWU4LTMxZWYtNDYzYS05MTE5LTZiMTc1MGRjYTBhYiIsImF1ZCI6InQ4b2lpZjUybWVjZTZibGVlYXMycG9mMG4iLCJ1c2VyX3R5cGUiOiJBQ1QiLCJldmVudF9pZCI6IjdiYTc1NzllLTAxMWEtNDY0Yy1iYTZkLTEzNTg0MGFiYjFmZSIsInNmbHlfdWlkIjoiMDI0MDYwNjA1MjU5IiwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6InByb2ZpbGUgdXNlciIsImF1dGhfdGltZSI6MTY3MjkwNjgzMiwiZXhwIjoxNjcyOTEwNDMyLCJpYXQiOjE2NzI5MDY4MzIsImZhbWlseV9uYW1lIjoiTWNGYWtlcnRvbiIsImp0aSI6IjlkM2E2YzgxLTBjNDMtNGNlZS1hMzQ2LTI3MzFlODYyYzkzZiIsImVtYWlsIjoiZmFrZXllbWFpbEB3aGF0ZXZlci5jb20ifQ.eic-xIjNz-he9lP1fAJYub9ec8--GuItJZHDbLyJZAdEcDul3Doi5MjjC3kEy12KPeWZYVPoKgWaP2bni2BA6Yg6CPFSmk1WuS-fm9kzVCvQo63cmaTZdpuvLb_qNJzHJE5U8Y6Ld7-kgU7OOlUo-1a9OEUksFguo9Fx21zkGN17rS-3zlIQp7uIO3cSD_NhhwfxXcZqYp6BH9MHdf6c15wB4lbCi8oZebyBBad4w9tUG7qdQjRqJS5DZ7HhoyfZPE8nOtai9RTESOVwEZ-HhE3EVQs9dQtLUOodBQfPLDJKkt-yCBvBBYIwmAYS00_7apKdkHzgeK1WTZP4GmqFxA';



        const thisLifeParams ={
            method : "moment.getRecentMomentsForLifetouch",
            params : [
                tokenId,
                200,
                null,
                true],
            id: null
        }

// const thisLifeParams =  `{"method": "moment.getRecentMomentsForLifetouch",
//     "params":
//         ["eyJraWQiOiJpY1A4WExhT3B3cVlxQkdOXC9Bd1V1TFwvRU9BQVFHXC9Ic0hpSGZCMjFBbERFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNWU3YWY1OS03N2ZlLTQ1OGMtYjk5ZC01ZjI5ODEyMjUzMTYiLCJjb2duaXRvOmdyb3VwcyI6WyJDb2duaXRvTmV3U2lnbnVwIl0sInByZXNjaG9vbHNfdWlkIjoiYTZiMDdjMDUtODY1MS00ZTZkLWJiMGItZTkxOGYzYTVhZTMxIiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfVG1Iem9RNjlqIiwiY29nbml0bzp1c2VybmFtZSI6IjE1ZTdhZjU5LTc3ZmUtNDU4Yy1iOTlkLTVmMjk4MTIyNTMxNiIsImdpdmVuX25hbWUiOiJNYXJhIiwib3JpZ2luX2p0aSI6ImMxMzRlZWU4LTMxZWYtNDYzYS05MTE5LTZiMTc1MGRjYTBhYiIsImF1ZCI6InQ4b2lpZjUybWVjZTZibGVlYXMycG9mMG4iLCJ1c2VyX3R5cGUiOiJBQ1QiLCJldmVudF9pZCI6IjdiYTc1NzllLTAxMWEtNDY0Yy1iYTZkLTEzNTg0MGFiYjFmZSIsInNmbHlfdWlkIjoiMDI0MDYwNjA1MjU5IiwidG9rZW5fdXNlIjoiaWQiLCJzY29wZSI6InByb2ZpbGUgdXNlciIsImF1dGhfdGltZSI6MTY3MjkwNjgzMiwiZXhwIjoxNjcyOTEwNDMyLCJpYXQiOjE2NzI5MDY4MzIsImZhbWlseV9uYW1lIjoiTWNGYWtlcnRvbiIsImp0aSI6IjlkM2E2YzgxLTBjNDMtNGNlZS1hMzQ2LTI3MzFlODYyYzkzZiIsImVtYWlsIjoiZmFrZXllbWFpbEB3aGF0ZXZlci5jb20ifQ.eic-xIjNz-he9lP1fAJYub9ec8--GuItJZHDbLyJZAdEcDul3Doi5MjjC3kEy12KPeWZYVPoKgWaP2bni2BA6Yg6CPFSmk1WuS-fm9kzVCvQo63cmaTZdpuvLb_qNJzHJE5U8Y6Ld7-kgU7OOlUo-1a9OEUksFguo9Fx21zkGN17rS-3zlIQp7uIO3cSD_NhhwfxXcZqYp6BH9MHdf6c15wB4lbCi8oZebyBBad4w9tUG7qdQjRqJS5DZ7HhoyfZPE8nOtai9RTESOVwEZ-HhE3EVQs9dQtLUOodBQfPLDJKkt-yCBvBBYIwmAYS00_7apKdkHzgeK1WTZP4GmqFxA",
//           200,
//           null,
//            true
//        ],
//        "id": null}`;

const loginCall = axios.create({
    baseURL: 'https://iam.shutterfly.com',
    headers: {
        'content-type': 'application/x-amz-json-1.1',
        'x-amz-target': 'AWSCognitoIdentityProviderService.InitiateAuth'
    }
})
const loginParam = '{"AuthFlow": "USER_PASSWORD_AUTH", ' +
    '"ClientId": "t8oiif52mece6bleeas2pof0n", ' +
    '"AuthParameters": { ' +
    ' "USERNAME": "fakeyemail@whatever.com", ' +
    ' "PASSWORD": "12345678aB!" }}' ;


        const aimData = '{\n    "AuthFlow": "USER_PASSWORD_AUTH",\n   ' +
            ' "ClientId": "t8oiif52mece6bleeas2pof0n",\n   ' +
            ' "AuthParameters": {\n       ' +
            ' "USERNAME": "fakeyemail@whatever.com",\n       ' +
            ' "PASSWORD": "12345678aB!"\n    }\n}'


export const testApi = {

    test: async (): Promise<void> => {
        console.log()
        const {data} = await loginCall.post('/', {loginParam});
        const tokens = data.AuthenticationResult;
        console.log(tokens);
        return tokens.idToken;
    }
}

export const photosApi = {

    getAllPhotos: async (): Promise<Moments[]> => {
        console.log(thisLifeParams);
        const {data} = await thisLife.post('?method=moment.getRecentMomentsForLifetouch', thisLifeParams);
        console.log(data)
        return data.result.payload.moments;
    }
}

//https://uniim1.shutterfly.com/render/00-mcImotG80WO8X7bQgklFPW9jK0vGxNWcwqiafoTNfDdbu-BlCVxy10TvsrLRoKTCldMTLfbtJ__wYVBQ_4iTow?cn=THISLIFE&res=small&ts=1613086567

export const serverApi = {
            
    login: async (user?: string, password?: string): Promise<string> => {
        const {data} = await iam.post('/', aimData);
        console.log(data);
        if (typeof data.AuthenticationResult === "undefined") {
            return data.message;
        }
        return data.AuthenticationResult.IdToken;
    }
}