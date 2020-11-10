import * as yup from 'yup'
import {FormState} from "./FormState";

export const validationSchema = yup.object().shape<FormState>({
  firstName: yup.string().required('You must enter a first name'),
  lastName: yup.string().required('You must enter a last name'),
  email: yup.string()
    .email('This is not an email address')
    .required('You must enter an email address'),

  age: yup.number()
    .required('You must have an age')
    .min(0, 'No one is less that zero years!')
    .max(100, 'You are just too old'),

  zip: yup.string()
    .required('You must enter a zip code')
    .matches(/^\D\-\d\d\d\d$/,'This does not look like a valid zip code. Example: N-0596'),

  preference: yup.string().required('You must select your preferred tech stack'),
  testedFor: yup.array<string>()
    .required('You must select at least two options')
    .min(2, 'You must select at least two options')
})
