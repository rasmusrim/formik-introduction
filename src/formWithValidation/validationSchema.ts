import * as yup from 'yup'
import {FormState} from "./FormState";

export const validationSchema = yup.object().shape<FormState>({
  firstName: yup.string().required('You must enter a first name'),
  lastName: yup.string().required('You must enter a last name'),
  email: yup.string().email('This is not an email address').required('You must enter an email address'),
  preference: yup.string().required('You must select your preferred tech stack'),
  testedFor: yup.array<string>().required('You must select at least two options').min(2, 'You must select at least two options')
})