import App from '../components/App';
import {Moment} from "../api.helpers/models";
import {serverApi} from "../api.helpers/server.api";
import {clientApi} from "../api.helpers/client.api";
import {useState, useEffect} from "react";
import { GetServerSideProps } from 'next';


// export default function Home() {
//
//     const [dbPhotos, setDbPhotos] = useState<Moment[]>([]);

export default function Home(props : {photos : Moment[]}) {

    const [dbPhotos, setDbPhotos] = useState(props.photos);

    // useEffect(() => {
    //         clientApi.getPhotos().then(photosArr => {
    //                 setDbPhotos(photosArr);
    //             }
    //         );
    //     }, []
    // );
    
    return (
      <div>
        <App dbPhotos={dbPhotos} />
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const photos = await serverApi.getAllPhotos();
    console.log(photos)
    return {
        props: {photos: photos}
    }
}
