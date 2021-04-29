import React from 'react';

interface IHeaderCounter {
  count: number
}

const HeaderCounter = ({ count }: IHeaderCounter) => {
  return (
    <div>
      <h1>Contador: <p> {count} </p> </h1>        
    </div>
  )
}

export default HeaderCounter;
