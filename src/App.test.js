import {render, waitFor} from '@testing-library/react';
import App from './App';
import React from "react";

import {BrowserRouter} from 'react-router-dom';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

describe('test routes', () => {
  test('renders home page ', async () => {
    const {getByTestId} = renderWithRouter(<App/>);
    expect(getByTestId('home-page-container')).toBeInTheDocument();
  })
  test('renders details page ', async () => {
    const {getByTestId} = renderWithRouter(<App/>, {route: '/deal/45676'});
    expect(getByTestId('details-page-container')).toBeInTheDocument();
  })
  test('renders no page found if url does not match', async () => {
    const {getByText} = renderWithRouter(<App/>, {route: '/product'});
    expect(getByText('page not found')).toBeInTheDocument();
  })
})
