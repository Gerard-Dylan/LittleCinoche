import type { FilterType } from "../App";

type NavbarProps = {
    setFilter: (filter: FilterType) => void;
};

function Navbar({ setFilter}: NavbarProps) {

    return (
      <nav className="Nav">
          <button onClick={() => setFilter("all")}>LittleCinoche</button>
          <button onClick={() => setFilter("Science-Fiction")}>Science-Fiction</button>
          <button onClick={() => setFilter("Comédie")}>Comédie</button>
          <button onClick={() => setFilter("favoris")}>Favoris</button>
      </nav>
    );
}


export default Navbar;