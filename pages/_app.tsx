import React from 'react';
import '../styles/global.scss';

interface Props {
    Component: React.FC,
    pageProps: object
}

const App = function ({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
};

export default App;
