import type { NextApiRequest, NextApiResponse } from 'next'
import {serverApi} from "../../api.helpers/server.api";

export default async function handler( req: NextApiRequest, res: NextApiResponse){
    const {user, password} = req.body;
    const post = await serverApi.login(user, password);
    res.json(post);
}