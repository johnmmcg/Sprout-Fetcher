import React from 'react';
import SproutTile from './SproutTile'

const SproutsIndex = props => {

  let sprouts = props.recipes.map((recipe, index) => {
    return(
      <SproutTile
        key={index}
        recipe={recipe}
      />
    )
  })
  return(
    <ul>
      {sprouts}
    </ul>
  );
}

export default SproutsIndex;
