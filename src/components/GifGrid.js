import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <div className="category">
            <div className="alert alert-success" role="alert">
            <h2>{ category }</h2>
</div>

            { loading && <div className="text-center"><div className="spinner-border text-danger" role="status"></div></div> }

            <div className="card-columns">
                { images.map( ( img ) => 
                    <GifGridItem
                        key={ img.id }
                        { ...img }
                    />
                )}
            </div>
        </div>
    )
}