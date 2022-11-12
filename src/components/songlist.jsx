import React from "react";
import { useState } from "react";
import AddSong from "./addsong";

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: "Valley of the Damned"},
        { title: "Everything's Magic"},
        { title: "The Bard's Song"}
    ]);

    const handleSong = (title) => {
        setSongs([...songs, {title}])
    }

    return (
        <div className="song-list">
            <ul className="list-group">
                {
                    songs.map((song, i) => {
                        return (
                            <li key={i} className="list-group-item">{song.title}</li>
                        )

                    })
                }
            </ul>
            <AddSong addSong= {handleSong} />
        </div>
    );
}

export default SongList;