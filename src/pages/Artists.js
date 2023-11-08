import { useState, useEffect} from 'react';
import ArtistComponent from '../components/ArtistComponent';

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
        {artists?.map( artists => <ArtistComponent key={artists.id} artist={artists.artist} id={artists.id} />)}
    </div> 
    
    
    )
}