export default function MusicItemComponent(props) {
    //if props is artist
    console.log(props)

    if (props.artist)
        return (
            <div>
                <h3>{props.artist}</h3>
            </div>
        )

    //if props is a song
    if (props.title)
        return (
            <div>
                <h3>{props.title}</h3>
            </div>
        )
        
    //if props is not a song or an artist    
    if (!props.title && !props.artist)
        return (
            <h3>Invalid Props</h3>
        )
}
