import React from 'react';

function DisplaySimpsons({exSimpson}) {
  return (
    <div className="DisplaySimpsons">
      <img
        src={exSimpson[0] && exSimpson[0].image}
        alt={exSimpson[0] && exSimpson[0].character}
      />
      <ul>
        <li style={{listStyle:"none"}}>{exSimpson[0] && exSimpson[0].character}</li>
        <li style={{listStyle:"none"}}>{exSimpson[0] && exSimpson[0].quote}</li>
      </ul>
    </div>
  );
};

export default DisplaySimpsons;