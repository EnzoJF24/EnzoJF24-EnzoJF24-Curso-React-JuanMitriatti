import React from "react";
import PropTypes from 'prop-types';

export default function ContadorApp(value){

    const imprimeValor = (value) => {console.log(value)}
    return(
        <div>
            <div>
                <h1>ContadorApp</h1>
            </div>
            <button onClick={()=>{imprimeValor(value)}}>
                valor
            </button>
        </div>
    )

}

ContadorApp.propTypes={
    value: PropTypes.number
}
