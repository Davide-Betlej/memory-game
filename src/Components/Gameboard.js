import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Leaderboard from "./Leaderboard";
import pl from "../Images/pl-flag.gif";
import ir from "../Images/ei-flag.gif";
import fin from "../Images/fi-flag.gif";
import fr from "../Images/fr-flag.gif";
import ger from "../Images/gm-flag.gif";
import gr from "../Images/gr-flag.gif";
import ic from "../Images/ic-flag.gif";
import ind from "../Images/in-flag.gif";
import it from "../Images/it-flag.gif";
import jm from "../Images/jm-flag.gif";
import mx from "../Images/mx-flag.gif";
import ni from "../Images/ni-flag.gif";
import ro from "../Images/ro-flag.gif";
import ru from "../Images/rs-flag.gif";

const Gameboard = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighscore] = useState(0);
  const [countries, setCountries] = useState([
    { name: "Poland", image: pl },
    { name: "Ireland", image: ir },
    { name: "Finland", image: fin },
    { name: "France", image: fr },
    { name: "Germany", image: ger },
    { name: "Greece", image: gr },
    { name: "Iceland", image: ic },
    { name: "India", image: ind },
    { name: "Italy", image: it },
    { name: "Jamaica", image: jm },
    { name: "Mexico", image: mx },
    { name: "Nigeria", image: ni },
    { name: "Romania", image: ro },
    { name: "Russia", image: ru },
  ]);
  const [savedCountries, setSavedCountries] = useState([]);

  const changeHighscore = () => {
    if (score > highScore) {
      setHighscore(score);
    }
  };

  const shuffleCountries = () => {
    const countriesCopy = [].concat(countries);
    const shuffledCountries = countriesCopy.sort(() => {
      return 0.5 - Math.random();
    });
    setCountries(shuffledCountries);
  };

  const validate = (e) => {
    const targetCountry = e.target.id;
    if (!savedCountries.includes(targetCountry)) {
      console.log(targetCountry);
      setSavedCountries(savedCountries.concat(targetCountry));
      setScore(score + 1);
    } else {
      setSavedCountries([]);
      setScore(0);
    }
    shuffleCountries();
  };
  useEffect(changeHighscore, [score]);
  return (
    <div className="wrapper">
      <Leaderboard score={score} highScore={highScore} />
      <Cards countries={countries} validate={validate} />
    </div>
  );
};

export default Gameboard;
