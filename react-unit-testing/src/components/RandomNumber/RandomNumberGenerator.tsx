import { useEffect, useState } from "react";

export default function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    const generateRandomNumber = () => {
      const newRandomNumber: number = Math.floor(Math.random() * 100) + 1;
      setRandomNumber(newRandomNumber);
    };

    generateRandomNumber();

    const interval = setInterval(() => {
      generateRandomNumber();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Random Number: {randomNumber}</h2>
    </div>
  );
}
