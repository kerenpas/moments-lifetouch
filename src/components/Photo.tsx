import { useState } from "react";
import { Moment } from "../api.helpers/models";
import Image from 'next/image';

export default function Photo({photo, checked, updateApcArray}: {photo : Moment, checked :boolean, updateApcArray : (uid : string, c: boolean) => void}) {
    
    const handleClick = () => {
        updateApcArray(photo.uid, !checked);
    }
    
    return (
        <div className={checked ? "checked" : ""} >
            <Image src={'https://uniim1.shutterfly.com/render/' + photo.encrypted_id + '?cn=THISLIFE&res=small&ts=1613086567'} width={100} height={100}
                   className='img-thumbnail' alt="" onClick={handleClick}
            />
        </div>
    )

}