/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import { useIntl } from '../../hooks/intl';

import BrFlag from '../../assets/br-flag.png';
import UsFlag from '../../assets/us-flag.png';

import { Container } from './styles';

const LanguageToggle: React.FC = ({ children }) => {
  const { toggleLanguage } = useIntl();
  const [selected, setSelected] = useState<'pt' | 'en'>(() => {
    const storageValue = localStorage.getItem('@GithubExplorer:Language');
    if (storageValue) return JSON.parse(storageValue);

    return 'pt';
  });

  function handleToggleLanguage(language: 'pt' | 'en'): void {
    setSelected(language);
    toggleLanguage(language);
    console.log('trocou para: ', language);
  }

  return (
    <Container selected={selected}>
      <img
        src={BrFlag}
        height={20}
        className="ptBR"
        onClick={() => handleToggleLanguage('pt')}
        alt="br flag"
      />
      <img
        src={UsFlag}
        height={20}
        className="enUS"
        onClick={() => handleToggleLanguage('en')}
        alt="us flag"
      />
    </Container>
  );
};

export default LanguageToggle;
