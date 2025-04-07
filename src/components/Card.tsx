import { MovieList } from "../App";

type CardProps = {
    movie: MovieList;
    isFavorite: boolean;
    toggleFavorite: (id: number) => void;
};

function Card({ movie, isFavorite, toggleFavorite }: CardProps) {
    return (
        <>
            <img src={movie.image} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.genre}</p>
            <p>{movie.synopsis}</p>
            <button onClick={() => toggleFavorite(movie.id)}>
                {isFavorite ? "❤️" : "🤍"}
            </button>
        </>
    );
}

export default Card;