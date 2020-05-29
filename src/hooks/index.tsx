import React from 'react';

import { ThemeProvider } from './theme';
import { IntlProvider } from './intl';

const AppProvider: React.FC = ({ children }) => (
  <IntlProvider>
    <ThemeProvider>{children}</ThemeProvider>;
  </IntlProvider>
);

export default AppProvider;
