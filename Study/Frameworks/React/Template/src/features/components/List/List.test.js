import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import List from './List';

afterAll(cleanup)

test('renders list tag', () => {
  render(
	  <List/>
  );

  // list should exist
  expect(screen.getByTestId('list-container'))
});

test('renders default list tag with provided list', () => {
  render(
	  <List list={ ['string', 0, true, null, undefined ] } />
  );

  // list should exist
  expect(screen.getByTestId('list-container'))

  // list items should exist
  expect(screen.getAllByTestId('listitem-container'))
});

test('renders ordered list tag', () => {
  render(
	  <List type='ol'/>
  );

  // list should exist
  expect(screen.getByTestId('list-container'))
});

