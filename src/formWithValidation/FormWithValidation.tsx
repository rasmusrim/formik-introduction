import React from 'react';
import {Field, Form, Formik, FormikProps} from "formik";
import {initialValues} from "./initialValues";
import {onSubmit} from "./onSubmit";
import {validationSchema} from "./validationSchema";
import {FormState} from "./FormState";
import {MaybeShowError} from "./MaybeShowError";

export function FormWithValidation(): JSX.Element {
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
            Last name:
            <Field name={"lastName"}/>
            <MaybeShowError name='lastName' formProps={formProps}/>
          </p>

          <p>
            Email:
            <Field name={"email"}/>
            <MaybeShowError name='email' formProps={formProps}/>

          </p>

          <p>
            <b>Preference:</b>
          </p>
          <p>
            <Field type="radio" name="preference" value=".NET"/>.NET<br/>
            <Field type="radio" name="preference" value="Java"/>Java<br/>
            <Field type="radio" name="preference" value="PHP"/>PHP
            <MaybeShowError name='preference' formProps={formProps}/>
          </p>

          <p>
            <b>Has been tested for...</b><br/>
            <Field type='checkbox' name='testedFor' value='covid19'/>Covid-19<br/>
            <Field type='checkbox' name='testedFor' value='flu'/>Flu<br/>
            <Field type='checkbox' name='testedFor' value='plague'/>The plague<br/>
            <Field type='checkbox' name='testedFor' value='lackOfHumor'/>Lack of humor<br/>
            <MaybeShowError name='testedFor' formProps={formProps}/>

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

