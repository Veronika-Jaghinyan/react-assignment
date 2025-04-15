import Footer from '../components/organism/Footer';
import Header from '../components/organism/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
