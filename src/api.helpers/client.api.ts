import axios from "axios";
import {LoginJWTData, Moment} from "./models";



const instance = axios.create({
        baseURL: "/api"
    })

const clientApi = {
    login : async (user? : string, password? : string) : Promise<LoginJWTData|string> =>{
        const {data} = await instance.post('login', {user, password});
        return data;
    },
    getPhotos :  async () : Promise<Moment[]> =>{
        //TODO: Keren check should be instance.get
        const {data} = await instance.post('getPhotos')
        return data
    }
}

export default clientApi