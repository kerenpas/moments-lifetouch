import type { NextApiRequest, NextApiResponse } from 'next'
import {serverApi} from "../../api.helpers/server.api";
import {Moment} from "../../api.helpers/models";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    const photos = await serverApi.getAllPhotos();
    res.json(photos);
}