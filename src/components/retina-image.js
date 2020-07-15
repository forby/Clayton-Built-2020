import React from "react"

export default function RetinaImage(props) {

    const parts = props.src.split('.');
    const path = parts[0];
    const extension = parts[1];

    return (
        <img
            srcSet={path + "." + extension + " 1x, " + path + "@2x." + extension + " 2x"}
            src={path + "." + extension}
            className={props.className}
            alt={props.alt}
        />
    )
}