// pages/_app.js
import '../styles/globals.css';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer className="footer">© {new Date().getFullYear()} MulaNEX · Demo UI</footer>
    </>
  );
}
