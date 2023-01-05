import {MDBContainer, MDBCol, MDBRow} from "mdb-react-ui-kit";
import {Moment} from "../api.helpers/models";
import {GetServerSideProps} from "next";
import clientApi from "../api.helpers/client.api";
import {useState, useEffect} from "react";


export default function PhotosGrid() {

    const [photos, setPhotos] = useState(Array<Moment>);
    useEffect ( () => {
             const p = clientApi.getPhotos();
             p.then( photosArr => setPhotos(photosArr));
        },
        [clientApi.getPhotos]
    )
    
    const printList = () => photos.map(p => {
        return (
            <MDBCol className="pt-1 image-grid d-flex align-items-center" key = {p.uid} size={12} sm={6} md={3} >
                <img src={'https://uniim1.shutterfly.com/render/' + p.encrypted_id + '?cn=THISLIFE&res=small&ts=1613086567'}
                     className='img-thumbnail'
                />
            </MDBCol>
        )
    })

    return (
        <MDBContainer className="grid">
            <MDBRow className='mb-3'>
                {printList()}
            </MDBRow>
        </MDBContainer>
    )
}


