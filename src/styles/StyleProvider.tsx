import React from 'react';
import { useSelector } from 'react-redux';
import { DefaultStyles, FireworkStyle } from './GlobalStyles';

const StyleProvider = () => {
  const state = useSelector((state: any) => state.card);

  if (state.showBingoEffects) {
    return <FireworkStyle />;
  }

  return <DefaultStyles />;
};

export default StyleProvider;
