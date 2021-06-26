import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Home from './.';

beforeEach(() => {
  render(
	  <Home/>
  );
})
afterAll(cleanup)

test('renders home page', () => {
  // home page should exist
  expect(screen.getByTestId('home-container'))
});

test('renders 4 lists', () => {
  expect(screen.getAllByTestId('list-container').length).toBe(4)
});

test('renders 4 headers', () => {
  const headers = screen.getAllByTestId('header-container')
  expect(headers.length).toBe(4)

  expect(headers[0]).toHaveTextContent('Current Projects')
  expect(headers[1]).toHaveTextContent('Current Projects - Long Term')
  expect(headers[2]).toHaveTextContent('Projects on Hold')
  expect(headers[3]).toHaveTextContent('Future Projects')
})
