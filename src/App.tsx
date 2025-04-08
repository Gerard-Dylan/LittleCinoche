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

export type filterType = "All" | "Science-Fiction" | "Comédie" | "favoris"

const MoviesList: MovieList[] = [
  {
    id: 1,
    title: "Galactic Dominion",
    genre: "Science-Fiction",
    image: "./Images/Galactic.dominion.jpg",
    synopsis: "Dans un futur lointain, un seigneur de guerre cybernétique lance une invasion pour conquérir la galaxie. Seul un pilote rebelle possède le code pouvant détruire son vaisseau-monde.",
  },
  {
    id: 2,
    title: "Neon Exodus",
    genre: "Science-Fiction",
    image: "./Images/Neon.Exodus.jpg",
    synopsis: "Un groupe de survivants s’échoue sur une planète inhospitalière. Leur mission : bâtir la dernière colonie humaine… ou disparaître à jamais et vivre dans la disgrace.",
  },  
  {
    id: 3,
    title: "The Last Colony",
    genre: "Science-Fiction",
    image: "./Images/The.Last.Colony.jpg",
    synopsis: "Dans une cité futuriste gouvernée par l’IA, une hackeuse tente de s’échapper avec la vérité. Mais le système ne laisse jamais personne sortir vivant. Son combat contre la technologie ne la laissera pas sans sequelles ; elle devra .",
  },
  {
    id: 4,
    title: "Rando Boulette",
    genre: "Comédie",
    image: "./Images/Rando.Boulette.jpg",
    synopsis: "Bernard, un ours scout beaucoup trop enthousiaste, part en randonnée… sans carte, sans boussole, mais avec un sac rempli de chamallows. Entre piqûres d’abeilles, feux de camp incontrôlables et danse du bivouac, la forêt n’est pas prête à l’oublier.",
  },
  {
    id: 5,
    title: "Papa fait sa star",
    genre: "Comédie",
    image: "./Images/Papa.Fait.Sa.Star.jpg",
    synopsis: "Gérard, papa divorcé, décide de devenir influenceur pour reconquérir sa jeunesse… et sa fille ado. Il enchaîne tutos ridicules, défis ratés, et placements de produits douteux. Internet ne l’attendait pas. Et sa fille non plus.",
  },
  {
    id: 6,
    title: "Le Forain Déchaîné",
    genre: "Comédie",
    image: "./Images/Le.Forain.Dechaine.jpg",
    synopsis: "Jojo, forain fantasque, découvre une potion qui lui donne… une énergie incontrôlable. Il transforme la fête foraine en véritable carnaval du chaos : montagnes russes à l’envers, barbes à papa explosives, et un concours de grimaces devenu viral.",
  },
];

function App() {
  const [filter, setFilter] = useState<filterType>("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const filteredMovies = MoviesList.filter(movie => {
      if (filter === "All") return true;
      if (filter === "favoris") return favorites.includes(movie.id);
      return movie.genre === filter;
  });
  const toggleFavorite = (id: number) => {
      setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id])
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
