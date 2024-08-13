import React from "react";
import { Formik } from "formik";

interface Props {
  initialValues: any;
  onSubmit: (values) => void;
  validationSchema: any;
}

const AppForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
