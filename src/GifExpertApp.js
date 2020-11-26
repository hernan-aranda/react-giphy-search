import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    /**
     * useState es utilizado para setear el estado del componente
     */
    const [categories, setCategories] = useState([])

    return (
        <>
            <div className="text-center">
                <h1>Giphy Search</h1>
                {/* A traves de los props puedo enviarle de un componente a otro su set para modificar su estado */}
                <AddCategory setCategories={ setCategories } />
            </div>
            <div>
                {
                    /**
                     * El key debe ser unico para cada elemento. Es lo que usa React
                     * para actualizar solo ese componente. No puede ser el indice.*/
                    categories.map( category => ( <GifGrid category={ category } key={ category } /> ))
                }
            </div>
        </>
    )
}