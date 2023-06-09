import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppRoutes from './AppRoutes';
import Layout from './views/Layout';

import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { Element, ...rest } = route;
            return <Route key={index} {...rest} element={<Element />} />;
          })}
        </Routes>
      </Layout>
    );
  }
}
