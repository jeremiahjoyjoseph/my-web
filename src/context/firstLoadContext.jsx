import React, { useState } from 'react';

const FirstLoadContext = React.createContext();

const FirstLoadProvider = (props) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  return (
    <FirstLoadContext.Provider
      value={{
        isFirstLoad,
        setIsFirstLoad,
      }}
    >
      {props.children}
    </FirstLoadContext.Provider>
  );
};

export { FirstLoadContext, FirstLoadProvider };
