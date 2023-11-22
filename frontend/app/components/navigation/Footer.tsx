import FooterColumns from "./footer_components/FooterColumns";
import Mark from "./footer_components/Mark";

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900">
      <div className="max-w-screen-2xl m-auto pt-20 pb-10 px-4 flex flex-col">
        <FooterColumns />
        <Mark />
      </div>
    </footer>
  );
};

export default Footer;
