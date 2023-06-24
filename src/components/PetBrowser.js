import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const petCards = pets.map((petData) => <Pet key={petData.id} pet={petData} onAdoptPet={onAdoptPet} />)

  return <div className="ui cards">{petCards}</div>;
}

export default PetBrowser;