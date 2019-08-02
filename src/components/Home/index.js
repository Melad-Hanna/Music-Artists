import React, { Component } from 'react';
import axios from 'axios';

import Banner from './banner';
import Artists from './artists';

const ARTISTS_URL = 'http://localhost:3004/artists';
class Home extends Component{

    state ={ 
        artists: ''
    }

    componentDidMount(){
        axios.get(ARTISTS_URL)
        .then( response =>{
            this.setState({
                artists: response.data
            });
        });
    }

    render(){
        return(
            <>
                <Banner/>
                <Artists allArtists={ this.state.artists }/>
            </>
        )
    }
}

export default Home;