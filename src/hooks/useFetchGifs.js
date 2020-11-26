
/**
 * Este es un ejemplo de custom hook. En este caso, este hook posee un estado useState
 * donde contiene el valor de si está cargando o ya cargo, y un array con los valores. 
 * 
 * Cuando llamo a este hook, el retorno es su propio estado.
 */

import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from 'react';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    /**
     * Las funciones dentro de useEffect solo se ejecutarán
     * cuando se modifiquen sus dependencias, en este caso,
     * category
     */
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false,
                });
            });
    }, [ category ]);

    return state;
}
