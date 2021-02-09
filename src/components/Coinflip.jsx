import React, { useState } from 'react';

function Coinflip() {
  const [flip, setFlip] = useState({ heads: 0, tails: 0, coin: 0 });

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 2);

    setFlip((prevFlip) => {
      if (randomNumber === 0) {
        return {
          heads: flip.heads + 1,
          tails: prevFlip.tails,
          coin: 0,
        };
      } else if (randomNumber === 1) {
        return {
          heads: prevFlip.heads,
          tails: flip.tails + 1,
          coin: 1,
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
      <button onClick={handleClick}>Flip Coin</button>
      <p>
        Out of 0 flips, there have been {flip.heads} heads and {flip.tails}{' '}
        tails
      </p>
    </div>
  );
}

export default Coinflip;
