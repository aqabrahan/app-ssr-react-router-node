import React from 'react';

const List = (props) => {
  const { pokemon, location } = props;
  const { ability } = location.match.params;

  return (
    <div>
      <h3>{ability}</h3>
      <ul>
        { pokemon.map((p) => {
          const { pokemon } = p;
          return <li key={pokemon.name}>
            {p.name}
          </li>
        })}
      </ul>
    </div>
  )
}

export default List;