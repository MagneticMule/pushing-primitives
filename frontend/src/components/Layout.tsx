import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../../styles/GlobalStyles';
import { theme } from '../../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
