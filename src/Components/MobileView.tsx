import Styles from "./MobileView.module.css";
import mob from "../assets/Mock Up.jpg";
const MobileView = () => {
  return (
    <div className={Styles.Mobile_container}>
      <img src={mob} alt="mob" className={Styles.mobile_img} />
      {/* <span className={Styles.LinksDiv}>the links preview</span> */}
    </div>
  );
};

export default MobileView;
