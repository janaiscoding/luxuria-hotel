import FooterColumns from "./footer_components/FooterColumns";
import WebsiteFooter from "./footer_components/WebsiteFooter";

const Footer = () => {
  return (
    <footer id="footer" data-testid="footer" className="bg-neutral-900">
      <div className="max-w-screen-2xl m-auto pt-10 md:pt-20 pb-10 px-4 flex flex-col">
        <FooterColumns />
        <WebsiteFooter />
      </div>
    </footer>
  );
};

export default Footer;
