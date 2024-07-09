import Button from "../Button/Button";
import Styles from "./Links.module.css";
import LinksPreviewCard from "../LinksPreviewCard";
import MobileView from "../MobileView/MobileView";

const Links = () => {
  return (
    <div className={Styles.Links_container}>
      <MobileView />
      <div className={Styles.LinksInner_container}>
        <h2>Customize your links</h2>
        <span className={Styles.para}>
          Add/edit/remove links below and then share all your profile with the
          world!
        </span>
        <Button label="+ Add new link" variant="basic" />
        <div className={Styles.LinksPreview_container}>
          <LinksPreviewCard />
          {/* <LinksPreviewCard />
          <LinksPreviewCard /> */}
        </div>
        <div className={Styles.save_button_div}>
          <Button label="save" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default Links;
