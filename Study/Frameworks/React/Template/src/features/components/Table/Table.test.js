import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from './Table';

afterAll(cleanup)

test('renders table tag', () => {
  render(
	  <Table/>
  );

  // table should exist
  expect(screen.getByTestId('table-container'))
});
