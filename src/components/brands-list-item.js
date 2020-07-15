import React from "react"
import RetinaImage from "./retina-image"

export default function BrandsListItem(props) {
    return (
        <div className="grid grid-flow-row lg:grid-flow-col-dense lg:grid-cols-10 lg:gap-8 relative">
            <div className={`${props.swap === "true" ? "right-50" : "left-50"} hidden lg:inline absolute bg-ch-brands-grey h-full w-screen`}></div>
            <div className="relative lg:col-span-4">
                <RetinaImage src={"images/brand-photos/" + props.large} className="w-full h-full object-cover rounded-md hidden lg:inline"/>
                <RetinaImage src={"images/brand-photos/" + props.small} className="w-full lg:hidden"/>
            </div>
            <div className={`${props.swap === "true" ? "lg:col-start-1" : ""} relative lg:col-span-6 bg-ch-brands-grey flex items-center`}>
                <div className="p-16">
                    { props.children }
                </div>
            </div>
        </div>
    )
}