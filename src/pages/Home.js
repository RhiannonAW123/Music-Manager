import { useState, useEffect} from 'react';
import Song from './Songs';
import SongComponent from '../components/SongComponent';


export default function Home() {

    // const [name, setName] = useState('mario');
    const [music, setMusic] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3031/music')
        .then(res => {
           return res.json();
        })
        .then((data) => {
            console.log(data);
            setMusic(data)
        })
    }, []);

    return (
    <div>
        <h1>Home</h1>
        {JSON.stringify(music)}

    </div> 
    
    
    )
}