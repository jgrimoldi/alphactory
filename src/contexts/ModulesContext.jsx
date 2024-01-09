import { createContext, useState } from 'react';

export const ModulesContext = createContext();

export const ModulesProvider = ({ children }) => {
  const [module, setModule] = useState('');

  return (
    <ModulesContext.Provider value={{ module, setModule }}>
      {children}
    </ModulesContext.Provider>
  );
};
