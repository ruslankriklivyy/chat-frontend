<template>
  <div class="box">
    <n-h1>Login</n-h1>

    <n-form
      ref="formRef"
      class="form"
      :label-width="80"
      :model="formValue"
      :rules="loginValidate()"
      size="large"
    >
      <n-form-item label="E-mail" path="email">
        <n-input v-model:value="formValue.email" placeholder="Your e-mail" />
      </n-form-item>

      <n-form-item label="Password" path="password">
        <n-input
          type="password"
          v-model:value="formValue.password"
          placeholder="Password"
        />
      </n-form-item>

      <n-form-item>
        <n-button type="success" @click="onSubmit"> Login </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { FormInst, useMessage } from 'naive-ui';
import loginValidate from '~/utils/validations/login';

const formRef = ref<FormInst | null>(null);
const message = useMessage();
const formValue = ref({
  email: '',
  password: '',
});

const onSubmit = (event: MouseEvent) => {
  event.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid');
    } else {
      message.error('Invalid');
    }
  });
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  max-width: 400px;
  min-height: 200px;
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
}
</style>
