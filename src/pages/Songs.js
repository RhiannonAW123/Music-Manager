import { useState, useEffect} from 'react';
import SongComponent from '../components/SongComponent';
import MusicItemComponent from '../components/MusicItemComponent';

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
        {songs?.map( banana => <MusicItemComponent  key={banana.id} title={banana.title} year={banana.year} id={banana.id}/>)}
   
    </div> 
    )
}