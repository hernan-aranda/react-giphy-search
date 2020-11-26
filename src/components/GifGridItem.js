import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card bg-dark text-white animate__animated animate__fadeIn">
            <img src={ url } alt={ title } className="card-img-top" />
            <div className="card-img-overlay">
                <p><span className="badge badge-secondary card-title">{ title }</span></p>
            </div>
        </div>
    )
}