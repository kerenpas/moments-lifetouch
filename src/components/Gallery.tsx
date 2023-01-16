import {MDBContainer, MDBCol, MDBRow} from "mdb-react-ui-kit";
import {Moment} from "../api.helpers/models";
import clientApi from "../api.helpers/client.api";
import {useState, useEffect} from "react";
import PhotosGrid from "./PhotosGrid";
import Filters from "./Filters";


export default function Gallery(props : {photos : Moment[],checkedPhotos : Moment[], updateApcArray : (uid : string, c: boolean) => void}) {

    const [displayPhotos, setDisplayPhotos] = useState(props.photos);

    return (
        <div className="width50">
            <div className="top-label" >CHOOSE IMAGE</div>
            <Filters/>
            <PhotosGrid photos={displayPhotos} updateApcArray={props.updateApcArray} checkedPhotos={props.checkedPhotos}/>
        </div>
    )
}


