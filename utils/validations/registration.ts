import { FormItemRule } from 'naive-ui';
import { emailRegex, passwordRegex } from '~/utils/validations/regex';

const registrationValidate = (formValue) => {
  return {
    email: {
      required: true,
      trigger: 'blur',
      validator: (rule: FormItemRule, value: string) => {
        return new Promise((resolve, reject) => {
          if (!value.match(emailRegex)) {
            reject('E-mail is incorrect');
          } else {
            resolve('');
          }
        });
      },
    },
    full_name: {
      required: true,
      message: 'Please input your full name',
      trigger: ['blur'],
    },
    password: {
      required: true,
      trigger: ['blur'],
      validator: (rule: FormItemRule, value: string) => {
        return new Promise((resolve, reject) => {
          if (!value.match(passwordRegex)) {
            reject('Password is incorrect');
          } else {
            resolve('');
          }
        });
      },
    },
    repeat_password: {
      required: true,
      trigger: ['blur'],
      validator: (rule: FormItemRule, value: string) => {
        return new Promise((resolve, reject) => {
          if (!value.match(passwordRegex) || value !== formValue.password) {
            reject('Repeat password is incorrect');
          } else {
            resolve('');
          }
        });
      },
    },
  };
};

export default registrationValidate;
