import Blocks from "./Blocks";
import { useTemplatePart } from "../hooks/useTemplatePart";


const Footer = async () => {

    const footerHtml = await useTemplatePart('twentytwentyfive//footer');

  return (
      <>
        <footer>
          <Blocks html={footerHtml}  settings={{}}/>
        </footer>
      </>
  );
}

export default Footer;