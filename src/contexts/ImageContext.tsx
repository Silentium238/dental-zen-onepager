import React, { createContext, useContext, useState, ReactNode } from 'react';
import { simsRoomImages, dentalRoomImages } from '@/constants/images';

type ImageSet = 'dentalRoom' | 'simsRoom';

interface ImageContextType {
  currentImageSet: ImageSet;
  toggleImageSet: () => void;
  getCurrentImages: () => string[];
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentImageSet, setCurrentImageSet] = useState<ImageSet>('dentalRoom');

  const toggleImageSet = () => {
    setCurrentImageSet(prev => prev === 'dentalRoom' ? 'simsRoom' : 'dentalRoom');
  };

  const getCurrentImages = () => {
    return currentImageSet === 'dentalRoom' ? dentalRoomImages : simsRoomImages;
  };

  return (
    <ImageContext.Provider value={{ currentImageSet, toggleImageSet, getCurrentImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
