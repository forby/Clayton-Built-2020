import React from "react"
import RetinaImage from "./retina-image"

export default function PartnerGridItem(props) {
    return (
        <div className={props.className}>
            <a href={props.href}>
                <div className="overflow-hidden rounded-md h-full">
                    <div className="relative h-full">
                        <RetinaImage className="absolute h-full w-full object-cover t-0 l-0" src={props.imageSrc} />
                        <div className="relative p-4">
                            <h3 className="uppercase text-sm text-white font-semibold">{props.subheading}</h3>
                            <h2 className="text-2xl text-white font-bold leading-tight" dangerouslySetInnerHTML={{ __html: props.heading }}></h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}