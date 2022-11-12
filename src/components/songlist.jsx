import React from "react";
import { useState, useEffect } from "react";
import AddSong from "./addsong";

const SongList = () => {

    const [songs, setSongs] = useState([
        { title: "Valley of the Damned" },
        { title: "Everything's Magic" },
        { title: "The Bard's Song" }
    ]);

    const [age, setAge] = useState(20)

    const handleSong = (title) => {
        setSongs([...songs, { title }])
    }

    useEffect(() => {
        console.log('song added!', songs)
    }, [songs]);

    useEffect(() => {
        console.log('age added!', age)
    }, [age]);

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
            <AddSong addSong={handleSong} />
            <button className="btn btn-secondary mt-2" onClick={() => setAge(age + 1) }>+1 to Age: {age}</button>
        </div>
    );
}

export default SongList;