import React from "react"

export default function Link(props) {
    return (
        <a href={props.href} className="text-ch-blue font-bold">{props.text}</a>
    )
}