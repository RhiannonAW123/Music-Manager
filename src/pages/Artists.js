import { useState, useEffect} from 'react';
import ArtistComponent from '../components/ArtistComponent';
import MusicItemComponent from '../components/MusicItemComponent';

export default function Artist() {

    // const [name, setName] = useState('mario');
    const [artists, setArtists] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3031/artists')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setArtists(data)
        })
    }, []);

    return (
    <div>
        <h1>Artists</h1>
        {artists?.map( banana => <MusicItemComponent key={banana.id} artist={banana.artist} id={banana.id} />)}
    </div> 
    
    
    )
}