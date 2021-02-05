import React, { useState } from 'react';

function Coinflip() {
  const [flip, setFlip] = useState(0);
  let heads = 0;
  let tails = 0;
  let total = heads + tails;

  if (flip === 0) {
    heads += 1;
  } else if (flip === 1) {
    tails += 1;
  }

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 2);
    setFlip(randomNumber);
    console.log(randomNumber);
  }

  return (
    <div>
      <h1>Coinflip Simulator</h1>
      {flip === 0 ? (
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
      <button onClick={handleClick}>Flip Coin</button>
      <p>
        Out of {total} flips, there have been {heads} heads and {tails} tails
      </p>
    </div>
  );
}

export default Coinflip;