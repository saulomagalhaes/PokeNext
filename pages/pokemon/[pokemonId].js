export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({params}) => {

  const id = params.pokemonId; 

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
};

export default function Pokemon({ pokemon }) {
  return <p>{pokemon.name}</p>;
}
