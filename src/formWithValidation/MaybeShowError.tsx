import React from 'react';
import {FormikProps} from "formik";
import {FormState} from "./FormState";
import styled from "styled-components";

interface Props {
  name: string;
  formProps: FormikProps<FormState>
}

export function MaybeShowError({name, formProps}: Props): JSX.Element {
  // @ts-ignore
  const errorMessage = formProps.errors[name]
  if (formProps.submitCount > 0 && name in formProps.errors) {
    return <ValidationError>{errorMessage}</ValidationError>
  }

  return <></>;


}


const ValidationError = styled.span`
  display: block;
  color:red;
`;
