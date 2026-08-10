import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;