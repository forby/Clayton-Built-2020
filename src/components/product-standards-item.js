import React from "react"
import RetinaImage from "./retina-image"

export default function ProductStandardsItem(props) {
    return (
        <div className="border border-ch-grey-4 overflow-hidden rounded-md">
            <div className="relative">
                <h2 className="absolute text-2xl text-white p-4 font-bold" dangerouslySetInnerHTML={{__html: props.heading}}></h2>
                <RetinaImage className="w-full" src={props.imageSrc} />
            </div>
            <div className="p-8">
                { props.children }
            </div>
        </div>
    )
}