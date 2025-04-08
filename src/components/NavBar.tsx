import { filterType } from "../App";

type NavBarProps = {
    setFilter: (filter: filterType) => void;
}

function NavBar ({setFilter}: NavBarProps) {
    return (

        <nav className="Nav">
            <button onClick={() => setFilter("All")}>LittleCinoch</button>
            <button onClick={() => setFilter("Science-Fiction")}>Science-Fiction</button>
            <button onClick={() => setFilter("Comédie")}>Comédie</button>
            <button onClick={() => setFilter("favoris")}>Favoris</button>
        </nav>

    )
} 

export default NavBar;