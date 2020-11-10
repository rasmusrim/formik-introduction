import * as yup from 'yup'
import {FormState} from "./FormState";

export const validationSchema = yup.object().shape<FormState>({
    firstName: yup.string().required('This field is required'),
    firstNameBackwards: yup.string().test({
      name: 'testIfValueIsReallyBackwards',
      test: function () {
        if (this.parent.firstName?.split("").reverse().join("") !== this.parent.firstNameBackwards) {
          return this.createError({
            path: 'firstNameBackwards',
            message: 'This string should be your first name backwards'
          })
        }

        return true;
      }
    }),

    emailRadio: yup.string().required(),

    // @ts-ignore
    email: yup.string().when('emailRadio', {
      is: 'enter',
      then: yup.string().required("You must enter an email address").email('This does not look like an email address')
    }),
  }
)
