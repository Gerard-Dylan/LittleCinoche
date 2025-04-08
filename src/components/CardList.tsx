import type { MovieList } from "../App";
import Card from "./Card";


type CardListProps = {
    movies: MovieList[];
    favorites: number[];
    toggleFavorite: (id: number) => void;
};

function CardList({ movies, favorites, toggleFavorite }: CardListProps) {
    return (
        <>
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    movie={movie}
                    isFavorite={favorites.includes(movie.id)}
                    toggleFavorite={toggleFavorite}
                />
            ))}
        </>
    );
}

export default CardList;