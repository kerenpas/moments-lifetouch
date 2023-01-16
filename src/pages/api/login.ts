import type { NextApiRequest, NextApiResponse } from 'next'
import {serverApi} from "../../api.helpers/server.api";

export default async function handler( req: NextApiRequest, res: NextApiResponse){
    const {user, password} = req.body
    const loginResult = await serverApi.login(user, password,{req,res})
    console.log ("login handler server")
    res.json(loginResult)
}