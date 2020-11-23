/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Navbar from '../containers/header-layout';

// eslint-disable-next-line import/prefer-default-export
export const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

const Main = ({ children }) => {
  return (
    <Layout>
      <Navbar logo={} />
      <Content>{children}</Content>
    </Layout>
  );
};

export default Main;
