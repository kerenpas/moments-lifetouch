import {MDBContainer, MDBCol, MDBRow} from "mdb-react-ui-kit";
import {Moment} from "../api.helpers/models";
import clientApi from "../api.helpers/client.api";
import {useState, useEffect} from "react";
import Gallery from "./Gallery";
import Apc from "./Apc";

// export default function App() {
export default function App({dbPhotos} : {dbPhotos : Moment[]}) {

    const [pickedPhotos, setPickedPhotos] = useState<Moment[]>([]);
    
    const addOrRemovedPickedPhotos = (uid : string , add : boolean)=>{
        if(add){
            const updatedArr = dbPhotos.filter((p) => {
                return p.uid === uid
            });
            setPickedPhotos([...pickedPhotos, ...updatedArr]);
        }else{
            const updatedArr = pickedPhotos.filter((p) => {
                return p.uid !== uid
            });
            setPickedPhotos([...updatedArr]);
        }
    }

    return (
        <MDBContainer className="d-flex">
            <Gallery photos={dbPhotos} updateApcArray={addOrRemovedPickedPhotos} checkedPhotos={pickedPhotos}/> 
            <Apc checkedPhotos={pickedPhotos.length === 0 ? dbPhotos : pickedPhotos}  updateApcArray={addOrRemovedPickedPhotos}/>
        </MDBContainer>
    )
}


