import { useState, useEffect} from 'react';

export default function Artist() {

    // const [name, setName] = useState('mario');
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3031/artists')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setArtist(data)
        })
    }, []);

    return (
    <div>
        <h1>Artists</h1>
        {JSON.stringify(artist)}
    </div> 
    
    
    )
}