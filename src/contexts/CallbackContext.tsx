import { createContext, useContext, useState, ReactNode } from 'react';

interface CallbackContextType {
  isCallbackOpen: boolean;
  openCallback: () => void;
  closeCallback: () => void;
}

const CallbackContext = createContext<CallbackContextType | undefined>(undefined);

export const useCallbackContext = () => {
  const context = useContext(CallbackContext);
  if (context === undefined) {
    throw new Error('useCallbackContext must be used within a CallbackProvider');
  }
  return context;
};

interface CallbackProviderProps {
  children: ReactNode;
}

export const CallbackProvider = ({ children }: CallbackProviderProps) => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const openCallback = () => {
    setIsCallbackOpen(true);
  };

  const closeCallback = () => {
    setIsCallbackOpen(false);
  };

  return (
    <CallbackContext.Provider value={{ isCallbackOpen, openCallback, closeCallback }}>
      {children}
    </CallbackContext.Provider>
  );
};
