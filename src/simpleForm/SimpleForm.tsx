import React from 'react';
import {Field, Form, Formik} from "formik";
import {initialValues} from "./initialValues";
import {onSubmit} from "./onSubmit";

export function SimpleForm(): JSX.Element {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <p>
            First name:
            <Field name={"firstName"}/>
          </p>

          <p>
            Last name:
            <Field name={"lastName"}/>
          </p>

          <p>
            Email:
            <Field name={"email"}/>
          </p>

          <p>
            <b>Preference:</b>
          </p>
          <p>
            <Field type="radio" name="preference" value=".NET" />.NET<br />
            <Field type="radio" name="preference" value="Java" />Java<br />
            <Field type="radio" name="preference" value="PHP" />PHP
          </p>

          <p>
            <b>Has been tested for...</b><br/>
            <Field type='checkbox' name='testedFor' value='covid19'/>Covid-19<br />
            <Field type='checkbox' name='testedFor' value='flu'/>Flu<br />
            <Field type='checkbox' name='testedFor' value='plague'/>The plague<br />
            <Field type='checkbox' name='testedFor' value='lackOfHumor'/>Lack of humor<br />
          </p>

          <p>
            <input type={"submit"}/>
          </p>

        </Form>
    </Formik>
  );
}