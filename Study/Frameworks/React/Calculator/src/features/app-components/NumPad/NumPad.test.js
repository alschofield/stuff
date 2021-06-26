import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import NumPad from './index';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ThemeProvider, themes } from 'schofield-themes';
import { themes as calcThemes } from '../../../themes';

beforeAll(() => {
  render(
    <Provider store={store}>
      <NumPad theme={{ ...themes.dark.home.container.numpad, ...calcThemes.dark.home.container.numpad }} />
    </Provider>
  )
})
afterAll(cleanup)

test('renders numpad page', () => {
  // NumPad page should exist
  expect(screen.getByTestId('numpad-container'))
});
