import React, { createContext, useCallback, useContext } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import messages from '../locales/messages';
import usePersistedState from './usePersistedState';

interface IntlContextData {
  toggleLanguage(lang: 'pt' | 'en'): void;
}

const IntlContext = createContext<IntlContextData>({} as IntlContextData);

const IntlProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = usePersistedState<'pt' | 'en'>(
    '@GithubExplorer:Language',
    'pt'
  );

  const toggleLanguage = useCallback(
    (lang: 'pt' | 'en') => {
      setLocale(lang === 'pt' ? 'pt' : 'en');
    },
    [setLocale]
  );

  return (
    <ReactIntlProvider locale={locale} messages={messages[locale]}>
      <IntlContext.Provider value={{ toggleLanguage }}>
        {children}
      </IntlContext.Provider>
    </ReactIntlProvider>
  );
};

function useIntl(): IntlContextData {
  const context = useContext(IntlContext);

  if (!context) {
    throw new Error('useIntl must be used within an IntlProvider');
  }

  return context;
}
export { IntlProvider, useIntl };
