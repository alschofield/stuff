import React, { useState } from 'react'
import merge from 'lodash.merge'
import { Container } from 'schofield-common-components'
import { SchoNav as Nav, Footer } from 'schofield-main-components'
import { ThemeProvider, themes } from 'schofield-themes'
import { themes as portfolioThemes } from '../themes'
import '../styles/globals.css'

const TITLE = 'Portfolio'

function MyApp({ Component, pageProps }) {
  let [state, updateState] = useState({
    themeName: 'dark',
    theme: merge(themes.dark, portfolioThemes.dark)
  })

  const handleThemeToggle = () => {
    const name = (state.themeName === 'light') ? 'dark' : 'light';
    updateState({ theme: merge(themes[name], portfolioThemes[name]), themeName: name });
  };

  return (
    <ThemeProvider theme={state.theme}>
      <Container data-testid="app-container">
        <Nav handleThemeToggle={handleThemeToggle} />

        <Component { ...pageProps } />

        <Footer text={TITLE} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
