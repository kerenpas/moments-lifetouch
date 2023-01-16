import type { NextApiRequest, NextApiResponse } from 'next'
import {serverApi} from "../../api.helpers/server.api";
import {jwtToken} from "../../Utils"


export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    const photos = await serverApi.getAllPhotos(jwtToken.getJwtToken({req,res}));
    res.json(photos);
}