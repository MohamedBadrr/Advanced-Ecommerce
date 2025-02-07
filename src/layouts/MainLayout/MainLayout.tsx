import Container from "@/components/common/Container";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Container className="text-black flex flex-col min-h-[78vh]">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
