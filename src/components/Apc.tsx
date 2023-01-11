import {useState} from "react";
import {Moment} from "../api.helpers/models";
import PhotosGrid from "./PhotosGrid";

export default function Apc(props: { checkedPhotos: Moment[], updateApcArray: (uid: string, c: boolean) => void }) {

    return (

        <div className="width50">
            <h1>APC</h1>
            <PhotosGrid photos={props.checkedPhotos} updateApcArray={props.updateApcArray} checkedPhotos={props.checkedPhotos}/>
        </div>

    )

}