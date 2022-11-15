import { FormItemRule } from 'naive-ui';
import { emailRegex, passwordRegex } from '~/utils/validations/regex';

const loginValidate = () => {
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
  };
};

export default loginValidate;
