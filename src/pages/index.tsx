import {OptionsType} from "cookies-next/lib/types";
import {GetServerSidePropsContext} from "next";
import {jwtToken} from "../Utils";
import clientApi from "../api.helpers/client.api";
import useSWR from "swr";
import App from "../components/App";
const fetcher = (key:string) => {  return clientApi.getPhotos()}

function Home() {

    const { data, error, isLoading } = useSWR('getPhotos',fetcher )
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <div>
            <App dbPhotos={data ?? [] } />
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const data: OptionsType = {res: context.res, req: context.req}
    if (!jwtToken.isTokenValid(data)) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}

