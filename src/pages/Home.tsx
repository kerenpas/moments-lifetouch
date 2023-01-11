import App from '../components/App';
import {Moment} from "../api.helpers/models";
import {serverApi} from "../api.helpers/server.api";
import {useState, useEffect} from "react";
import { GetServerSideProps } from 'next';
import useSWR from 'swr'
import clientApi from "../api.helpers/client.api";


const fetcher = (key:string) => {  return   clientApi.getPhotos()}

export default function Home(props : {photos : Moment[]}) {


   // const fetcher = (url:string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR('/api/getPhotos',fetcher )
    console.log(`error: ${error}`)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    
    return (
      <div>
        <App dbPhotos={data ?? [] } />
      </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     const photos = await serverApi.getAllPhotos();
//     console.log(photos)
//     return {
//         props: {photos: photos}
//     }
// }
