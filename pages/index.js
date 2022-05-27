import Link from 'next/link';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  // add pokemon index
  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link href="/pokemon/[id]">
              <a>{pokemon.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
