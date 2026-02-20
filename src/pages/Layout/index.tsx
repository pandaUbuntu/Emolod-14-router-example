import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAppSelector } from "../../hooks/redux";

type LayoutProps = {
    title: string;
    children?: React.ReactNode;
};

 const Layout = ({ title, children }: LayoutProps) => {
  const settings = useAppSelector((state) => state.settings);


  return (
    <div className="page">
      <Header />
      <p style={{ padding: '10px', backgroundColor: '#16181d', color: '#fff' }}>Поточна локаль: {settings.locale}, поточна тема: {settings.theme}</p>

      <main className="main">
        <div className="container">
          <h2>{title}</h2>
          { children }
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
