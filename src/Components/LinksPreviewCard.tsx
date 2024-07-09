import { TfiLineDouble } from "react-icons/tfi";
import Styles from "./LinksPreviewCard.module.css";
// import FormPreview from "./formPreview";
import { Field, Form, Formik } from "formik";
import Select from "react-select";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons
import Button from "./Button/Button";
const LinksPreviewCard = () => {
  const options = [
    { value: "linkedin", label: "LinkedIn", icon: <FaLinkedin /> },
    { value: "github", label: "GitHub", icon: <FaGithub /> },
    { value: "twitter", label: "Twitter", icon: <FaTwitter /> },
  ];

  const select = ({ options, field, form }) => (
    <Select
      name={field.name}
      onChange={(option: Option) =>
        form.setFieldValue(field.name, option.value)
      }
      onBlur={field.onBlur}
      options={options}
    />
  );

  return (
    <>
      <div className={Styles.LinksCard}>
        <header className={Styles.linkCard_Header}>
          <span>
            <TfiLineDouble /> {"Link #1"}
          </span>
          <span>Remove</span>
        </header>
        {/* <FormPreview submit="submit" /> */}

        <Formik
          initialValues={{
            platForm: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={Styles.fieldContainer}>
                <label className={Styles.label} htmlFor="platform">
                  Platform
                </label>
                <Field name="platform" component={select} options={options} />
              </div>
              <div className={Styles.fieldContainer}>
                <label className={Styles.label} htmlFor="link">
                  Link
                </label>
                <Field
                  name="link"
                  type="text"
                  className={Styles.textField}
                  placeholder="Enter your link"
                />
              </div>
              {/* <div className={Styles.save_button_div}>
                <Button
                  type="submit"
                  label="save"
                  disabled={isSubmitting}
                  variant="primary"
                />
              </div> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LinksPreviewCard;
