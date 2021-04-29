import React from 'react';

interface IButtonCounter{
  text: string;
  onClick?(): void
}

const ButtonCounter = ({ text, onClick: fn  }: IButtonCounter) => {
  return (

            <button onClick={fn} >{text}</button>      

  )
}

export default ButtonCounter;
