import { createGlobalStyle } from 'styled-components';

const getGlobalStyle = (themeName: string) => {
  switch (themeName) {
    case 'fireworks':
      return createGlobalStyle`
      body {
        font-color: white,
        color: white
      }
      `;
    default:
      return createGlobalStyle``;
  }
};

export const DefaultStyles = getGlobalStyle('default');

export const FireworkStyle = getGlobalStyle('fireworks');
