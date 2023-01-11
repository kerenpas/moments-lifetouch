import {MDBContainer, MDBCol, MDBRow} from "mdb-react-ui-kit";
import {Moment} from "../api.helpers/models";
import clientApi from "../api.helpers/client.api";
import {useState, useEffect} from "react";
import Image from 'next/image';
import Photo from "./Photo";


export default function PhotosGrid(props: {photos : Moment[], checkedPhotos : Moment[], updateApcArray : (uid : string, c: boolean) => void}) {
    const isChecked = (uid : string) : boolean => {
        if (props.checkedPhotos.find(p => p.uid === uid)){
            return true;
        }
        return false;        
    }
    
    const printList = () => props.photos.map(p => {
        return (
            <MDBCol className="pt-1 image-grid d-flex align-items-center" key = {p.uid} size={12} sm={6} md={6} >
                <Photo photo={p} checked={isChecked(p.uid)} key={p.uid} updateApcArray={props.updateApcArray}></Photo>
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


