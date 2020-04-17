import React from "react";

const Capitulo = (props) => {
    return (
        <div id="capitulo">
            <h6>{props.titulo}</h6>
            <p>{props.contenido}</p>
        </div>
    );
};

export default Capitulo;