import React, { Component } from 'react';
import axios from 'axios';

import AlbumList from './albumList';

const ARTISTS_URL = 'http://localhost:3004/artists';

class Artist extends Component{

    state = {
        artist: ''
    }

    componentWillMount(){
        axios.get(`${ARTISTS_URL}/${this.props.match.params.artist_id}`)
        .then( response => {
            this.setState({ artist: response.data })
        })
    }

    render(){
        const artist = this.state.artist;

        return(
            <>
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{
                            background:`url('/images/covers/${artist.cover}.jpg') no-repeat`
                        }}></span>
                    </div>
                    <div className="bio">
                        <h3>{artist.name}</h3>
                        <div className="bio_text">
                            {artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={artist.albums}/>
                </div>
            </>
        )
    }
}

export default Artist;