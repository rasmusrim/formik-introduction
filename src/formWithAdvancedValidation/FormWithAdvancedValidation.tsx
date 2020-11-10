import React from 'react';
import {Field, Form, Formik, FormikProps} from "formik";
import {initialValues} from "./initialValues";
import {onSubmit} from "./onSubmit";
import {validationSchema} from "./validationSchema";
import {FormState} from "./FormState";
import {MaybeShowError} from "./MaybeShowError";

export function FormWithAdvancedValidation(): JSX.Element {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(formProps: FormikProps<FormState>) => (
        <Form>

          <p>
            First name:
            <Field name={"firstName"}/>
            <MaybeShowError name='firstName' formProps={formProps}/>
          </p>

          <p>
            First name backwards:
            <Field name={"firstNameBackwards"}/>
            <MaybeShowError name='firstNameBackwards' formProps={formProps}/>
          </p>

          <p>
            <b>Email:</b>
          </p>
          <p>
            <Field type="radio" name="emailRadio" value="default"/>Use default address<br/>
            <Field type="radio" name="emailRadio" value="enter"/>Enter new<br/>

            <Field name="email"/>
            <MaybeShowError name='email' formProps={formProps}/>

          </p>


          <p>
            <input type={"submit"}/>
            <button onClick={() => console.log(formProps)}>Output formik props</button>
          </p>
        </Form>
      )}
    </Formik>
  );
}

