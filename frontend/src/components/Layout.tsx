import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../../styles/GlobalStyles.js';
import { theme } from '../../styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => (
  <SiteRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </SiteRoot>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
