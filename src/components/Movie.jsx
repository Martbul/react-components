export default function Movie(props){
    return (
        <article >
            <h3>{props.movieData.title}</h3>
            <p>Description: {props.movieData.description}</p>
            <p>Year: {props.movieData.year}</p>
        </article>
    )
}