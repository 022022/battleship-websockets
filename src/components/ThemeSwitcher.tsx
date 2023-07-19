import { DefaultTheme } from 'styled-components/dist/types';
import { uiTextsRu } from '../uiTexts/ru';
import { lightTheme } from '../styled/themes/lightTheme';
import { SyntheticEvent } from 'react';
import { darkTheme } from '../styled/themes/darkTheme';
import { ThemeSwitcherButton } from '../styled/ThemeSwitcherButton';
import { ThemeType } from '../types/styled';

export function ThemeSwitcher({theme, switchTheme}: {theme: DefaultTheme, switchTheme: (newTheme: DefaultTheme) => void}){
  function handle(e: SyntheticEvent){
    e.preventDefault();
    if(theme === lightTheme) {
      switchTheme(darkTheme);
    } else {
      switchTheme(lightTheme);
    }
  }

  if(theme === lightTheme){
    return <>
      <ThemeSwitcherButton $direction={ThemeType.dark} onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.switchToDark}</ThemeSwitcherButton>
    </>
  } else {
    return <>
      <ThemeSwitcherButton $direction={ThemeType.light} onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.switchToLight}</ThemeSwitcherButton>
    </>
  }

}