import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

  

const Deck = () => {
    const [remainingCards, setRemainingCards] = useState(52);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        const generateNewDeck = () => {
          const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
          const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      
          const newDeck = [];
      
          for (const suit of suits) {
            for (const value of values) {
              newDeck.push({ suit, value });
            }
          }
          
          setDeck(newDeck);
          setRemainingCards(newDeck.length);
        };
      
        generateNewDeck();
      }, []);
      
    const drawCard = () => {
        if (remainingCards === 0) {
            alert("Error: no cards remaining!");
            return;
        }

        setRemainingCards((prevRemainingCards) => prevRemainingCards - 1);
    }



    return (
        <div>
            <h2>Remaining Cards: {remainingCards}</h2>
            <button onClick={drawCard}>Draw Card</button>
            <Card value={deck[remainingCards - 1]?.value} suit={deck[remainingCards - 1]?.suit} />


        </div>
    )
}

export default Deck;