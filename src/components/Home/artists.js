import React from 'react';
import { Link } from 'react-router-dom';

const Artists = (props) => {

    const get_artists_list = ({allArtists}) =>(
        allArtists ? allArtists.map( artist=>(
            <Link 
                key={ artist.id } 
                to={`/Artist/${ artist.id }`} 
                className="artist_item"
                style={{ 
                        background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
                    }}
                >
                <div>{artist.name}</div>
            </Link>
        ))
        : null
    )

    return(
        <div className="artists_list">
            <h4>Our Beloved Artists</h4>
            <div className="artist_container">
                { get_artists_list(props) }
            </div>
        </div>
    )
}

export default Artists;