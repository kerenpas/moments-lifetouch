import axios from "axios";
import { Moment } from "./models";



const instance = axios.create({
        baseURL: "/api"
    })

export const clientApi = {
    login : async (user? : string, password? : string) : Promise<String> =>{
        const {data} = await instance.post('login', {user, password});
        return data;
    },
    getPhotos :  async () : Promise<Moment[]> =>{
        const {data} = await instance.post('getPhotos');
        return data;
    }
}

export default clientApi;