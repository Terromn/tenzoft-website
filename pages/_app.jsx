import '../styles/globals.css';
import WobblyMouseFollower from '../components/WobblyMouseFollower';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WobblyMouseFollower />
    </>
  );
}

export default MyApp; 