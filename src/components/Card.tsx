import { MovieList } from "../App";


type CardProps = {
    movie: MovieList;
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
}

function Card ({movie, isFavorite, toggleFavorite} : CardProps) {
    return (
        <div>
    <h1>{movie.title}</h1>
    <img className="Image" src={movie.image} alt={movie.title} />
    <h2>{movie.genre}</h2>
    <p>{movie.synopsis}</p>
    <button className="buttonCard" onClick={() => toggleFavorite(movie.id)}>{isFavorite ? "❤️" : "🤍"}</button>
        </div>
    )


}









export default Card;