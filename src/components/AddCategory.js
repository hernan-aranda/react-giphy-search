import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Realizo la desestructuracion de las props directamente
 * en los argumentos.
 */
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( event ) => {
        /**
         * Cada vez que la persona cambia la caja de texto, se dispara este evento.
         * Actualizamos así el valor de la caja con lo que la persona envió.
         * De esta manera el estado inputValue se encuentra SIEMPRE actualizado dentro
         * del componente, en cualquier lugar que se lo llame
         */
        setInputValue( event.target.value );
    }


    const handleSubmit = ( event ) => {
        /**
         * Previene el comportamiento por defecto del formulario,
         * donde se refresca la pantalla.
         */
        event.preventDefault();

        if( inputValue.trim().length > 2 ) {
            /**
             * No es necesario que envie sus categories a través del prop.
             * Los sets pueden recibir callbacks, por lo cual puedo decirle que
             * al valor que ya posee, le haga spread e incorpore el input.
             */
            setCategories( categories => [inputValue, ...categories] );
            setInputValue( '' );     
        }

    }

    return (
        <form onSubmit={ handleSubmit } className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Temática</span>
            </div>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                className="form-control"
                placeholder="Golden Kamuy"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

