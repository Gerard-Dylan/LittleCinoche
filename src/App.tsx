import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export type MovieList = {
  id: number,
  title: string,
  genre: "Science-Fiction" | "Comédie",
  image: string,
  synopsis: string,
}

const MoviesList: MovieList[] = [
  {
    id: 1,
    title: "",
    genre: "Science-Fiction",
    image: "",
    synopsis: "",
  },
  {
    id: 2,
    title: "",
    genre: "Science-Fiction",
    image: "",
    synopsis: "",
  },  
  {
    id: 3,
    title: "",
    genre: "Science-Fiction",
    image: "",
    synopsis: "",
  },
  {
    id: 4,
    title: "",
    genre: "Comédie",
    image: "",
    synopsis: "",
  },
  {
    id: 5,
    title: "",
    genre: "Comédie",
    image: "",
    synopsis: "",
  },
  {
    id: 6,
    title: "",
    genre: "Comédie",
    image: "",
    synopsis: "",
  },
];

function App() {
  const [filter, setFilter] = useState<string>("all");
  const [favorites, setFavorites] = useState<number[]>([]);
  const filteredMovies = MoviesList.filter(movie => {
      if (filter === "all") return true;
      if (filter === "favoris") return favorites.includes(movie.id);
      return movie.genre === filter;
  });
  const toggleFavorite = (id: number) => {
      setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]);
  };
  
  
    return (
      <>
          <NavBar setFilter={setFilter}/>
          <CardList movies={filteredMovies}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          />
          <Footer />
      </>
    )
  }

export default App
