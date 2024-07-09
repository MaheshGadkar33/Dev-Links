import Button from "./Button";
import Styles from "./Links.module.css";
import LinksPreviewCard from "./LinksPreviewCard";
import MobileView from "./MobileView";

const ProfileDetailsPage = () => {
  return (
    <div className={Styles.Links_container}>
      <MobileView />
      <div className={Styles.LinksInner_container}>
        <h2>Profile Details</h2>
        <span className={Styles.para}>
          Add your details to create a personal touch to your profile.
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

export default ProfileDetailsPage;
