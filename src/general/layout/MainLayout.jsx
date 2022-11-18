import { Footer, Navbar } from '../components';

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        className="container d-flex align-content-center justify-content-center py-3"
        style={{ minHeight: '100vh' }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
