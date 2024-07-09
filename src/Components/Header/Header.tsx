import { CgProfile } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
// import { FcElectroDevices } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";
import Styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => (
  <>
    <header className={Styles.header_container}>
      <span className={Styles.logo}>
        <FaDev size={60} />
        Links
        {/* <FcElectroDevices /> */}
      </span>

      <div className={Styles.li_links}>
        <Button className={Styles.button} variant="basic">
          <span className={Styles.links_logo}>
            <IoIosLink size={20} />
          </span>
          Links
        </Button>
        <Button className={Styles.button} variant="basic">
          <span className={Styles.links_logo}>
            <CgProfile size={20} />
          </span>
          Profile Details
        </Button>
      </div>

      <Button className={Styles.button} variant="basic">
        Preview
      </Button>
    </header>
  </>
);

export default Header;
