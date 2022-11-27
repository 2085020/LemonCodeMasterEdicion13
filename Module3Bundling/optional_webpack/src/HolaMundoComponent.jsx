import React from "react";

export const HelloComponent = () => {
    return (
        <div>
            <span>Hola Mundo {process.env.API_BASE}</span>
        </div>
    )
}