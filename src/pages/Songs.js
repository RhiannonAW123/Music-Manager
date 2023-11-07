import { useState, useEffect} from 'react';

export default function Song() {

    // const [name, setName] = useState('mario');
    const [song, setSong] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3031/songs')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setSong(data)
        })
    }, []);

    return (
    <div>
        <h1>Songs</h1>
        {JSON.stringify(song)}
    </div> 
    
    
    )
}