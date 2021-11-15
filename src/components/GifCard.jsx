import React from 'react'
import './styles/GifCard.css'

const GifCard = ({ img }) => {
    return (
        <div className="col">
            <div className="card h-100 card-gif">
                <img src={img.images.downsized_medium.url} alt={img.title}/>
                <div className="card-body">
                    <p className="card-text">{img.title}</p>
                </div>
            </div>
      </div>

    )
}

export default GifCard
