import React from "react"

export default function Button(props) {
    return (
        <a href={props.href} className={`inline-block bg-ch-blue hover:bg-ch-blue-light font-semibold text-sm uppercase text-white p-4 rounded-sm leading-none transition-colors duration-200 ${props.className}`}>{props.text}</a>
    )
}