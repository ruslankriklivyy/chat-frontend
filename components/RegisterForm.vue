<template>
  <div class="box">
    <n-h1>Registration</n-h1>

    <n-form
      ref="formRef"
      class="form"
      :label-width="80"
      :model="formValue"
      :rules="registrationValidate(formValue)"
      size="large"
    >
      <n-form-item label="E-mail" path="email">
        <n-input v-model:value="formValue.email" placeholder="Your e-mail" />
      </n-form-item>

      <n-form-item label="Full name" path="full_name">
        <n-input
          v-model:value="formValue.full_name"
          placeholder="Your full name"
        />
      </n-form-item>

      <n-form-item label="Password" path="password">
        <n-input
          type="password"
          v-model:value="formValue.password"
          placeholder="Password"
        />
      </n-form-item>

      <n-form-item label="Repeat password" path="repeat_password">
        <n-input
          type="password"
          v-model:value="formValue.repeat_password"
          placeholder="Repeat password"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="success" @click="onSubmit"> Register </n-button>

        <n-element class="go-to-login">
          <n-p class="go-to-login__text">Are you already have account?</n-p>
          <nuxt-link to="/login" class="go-to-login__link">
            <n-button text>Go to login</n-button>
          </nuxt-link>
        </n-element>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FormInst, useMessage } from 'naive-ui';

import registrationValidate from '~/utils/validations/registration';
import { useUser } from '#imports';

const { register } = useUser();

const formRef = ref<FormInst | null>(null);
const message = useMessage();
const formValue = ref({
  email: '',
  full_name: '',
  password: '',
  repeat_password: '',
});

const onSubmit = async (event: MouseEvent) => {
  event.preventDefault();
  await formRef.value?.validate(async (errors) => {
    if (!errors) {
      await register(formValue.value);
    }
  });
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  max-width: 400px;
  min-height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .form {
    width: 100%;
    height: 100%;
  }

  .go-to-login {
    text-align: right;
    margin-left: auto;

    &__text {
      margin: 0;
    }

    &__link {
      text-decoration: none;
    }
  }
}
</style>
