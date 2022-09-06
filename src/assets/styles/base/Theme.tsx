import React, { useContext } from 'react'
import { ThemeProvider } from "styled-components";
import { UIConfigContext } from '../../../store/context/UIConfigProvider'
import { THEMES_TYPE } from '../../../config/UIConfig'

interface ThemeInterface {
  children: React.ReactNode
}
const lightTheme = {
  colors: {
    appMainColor: '#fff',
    appContentColor: "#06B49A",
    appTextColor: 'rgba(0,0,0,.85)',
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
};

const darkTheme = {
  colors: {
    appMainColor: '#454545',
    appContentColor: "#06B49A",
    appTextColor: 'white',
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
};
const Theme:React.FC<ThemeInterface> = ({ children }) => {
  const { UIConfigState } = useContext(UIConfigContext)
  const theme = UIConfigState.theme === THEMES_TYPE.Light ? lightTheme : darkTheme
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}


export default Theme;

