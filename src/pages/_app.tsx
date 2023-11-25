import { AppProps } from 'next/app';
import '../styles/global.css';
import '../components/LightSwitch/LightSwitch.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
