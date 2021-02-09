import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Coinflip() {
  const [flip, setFlip] = useState({ heads: 0, tails: 0, coin: 0, total: 0 });

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 2);

    setFlip((prevFlip) => {
      if (randomNumber === 0) {
        return {
          heads: flip.heads + 1,
          tails: prevFlip.tails,
          coin: 0,
          total: flip.total++,
        };
      } else if (randomNumber === 1) {
        return {
          heads: prevFlip.heads,
          tails: flip.tails + 1,
          coin: 1,
          total: flip.total++,
        };
      }
    });

    // setFlip(randomNumber);
    console.log(randomNumber);
  }

  return (
    <div>
      <h1>Coinflip Simulator</h1>
      {flip.coin === 0 ? (
        <img
          className="coinImage"
          src={'https://tinyurl.com/react-coin-heads-jpg'}
        />
      ) : (
        <img
          className="coinImage"
          src={'https://i.ebayimg.com/images/g/wGEAAOSwYu1crzzn/s-l400.jpg'}
        />
      )}
      <br />
      <Button className="button" onClick={handleClick}>
        Flip Coin
      </Button>
      <p className="counter">
        Out of {flip.total} flips, there have been {flip.heads} heads and{' '}
        {flip.tails} tails
      </p>
    </div>
  );
}

export default Coinflip;
