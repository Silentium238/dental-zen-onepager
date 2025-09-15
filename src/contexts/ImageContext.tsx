import React, { createContext, useContext, useState, ReactNode } from 'react';
import { simsRoomImages, dentalRoomImages } from '@/constants/images';

type ImageSet = 'simsRoom' | 'dentalRoom';

interface ImageContextType {
  currentImageSet: ImageSet;
  toggleImageSet: () => void;
  getCurrentImages: () => string[];
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentImageSet, setCurrentImageSet] = useState<ImageSet>('simsRoom');

  const toggleImageSet = () => {
    setCurrentImageSet(prev => prev === 'simsRoom' ? 'dentalRoom' : 'simsRoom');
  };

  const getCurrentImages = () => {
    return currentImageSet === 'simsRoom' ? simsRoomImages : dentalRoomImages;
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
