import React from "react";

export default function List(props) {
    return (
        <ul>
            {
                props.items.map(item =>
                    <li key={item}>{item}</li>
                )
            }
        </ul>
    );
}