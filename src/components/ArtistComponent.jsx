export default function ArtistComponent({artist, id}) {
    return (
        <tbody class="table-hover">{`${artist} - ${id}`}</tbody>
    )
}