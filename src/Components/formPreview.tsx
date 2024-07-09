import { Field, Form, Formik, useFormik } from "formik";
import Select from "react-select";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons
import React from "react";

export default function FormPreview() {
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
          <label>Platform:</label>
          <Field
            name="platform"
            component={select}
            options={options}
            label="Platform"
          />
          <Field name="link" type="text" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
