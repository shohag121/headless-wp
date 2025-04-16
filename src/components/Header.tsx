import Blocks from "./Blocks";
import { useTemplatePart } from "../hooks/useTemplatePart";


const Header = async () => {

    const headerHtml = await useTemplatePart('twentytwentyfive//header');

  return (
      <>
        <header>
          <Blocks html={headerHtml}  settings={{}}/>
        </header>
      </>
  );
}

export default Header;