import { useState, useEffect} from 'react';
import SongComponent from '../components/SongComponent';

export default function SongsContainer() {

    const [songs, setSongs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3031/songs')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setSongs(data)
        })
    }, []);

    return (
    <div>
        <h1>Songs</h1>
        {songs?.map( song => <SongComponent key={song.id} title={song.title} year={song.year} id={song.id}/>)}
    </div> 
    )
}