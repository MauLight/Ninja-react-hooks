import React from "react";
import { useState, useEffect } from "react";
import AddArtist from "./addartist";



const ArtistList = () => {

    const getSongAsync = async () => {
        let url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=17967bdc5050b58e05accbe92395a792&format=json'
        let options_get = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        try {
            const response = await fetch(url,options_get);
            const data = await response.json();
            console.log(data);
            setArtists(data.artists.artist)
            console.log(data.artists.artist)
        }
        catch(error) {
            console.log(error);
        }
    };

    const [artists, setArtists] = useState([]);

    const handleSong = (title) => {
        setArtists([...artists, {name: title}])
    }

    useEffect(() => {
        getSongAsync()
    }, []);

    return (
        <div className="song-list">
            <ul className="list-group">
                {!!artists && artists.map((artist, i) => {
                        return (
                            <li key={i} className="list-group-item">{artist.name}</li>
                        )
                    })
                }
            </ul>
            <AddArtist addArtist={handleSong} />
        </div>
    );
}

export default ArtistList;