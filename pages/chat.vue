<template>
  <div class="wrapper">
    <div class="left">
      <div class="left-head">
        <div class="left-head__title">Dialogs list</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;

  .left {
    width: 35%;

    &-head {
      &__title {
        font-weight: 500;
      }
    }
  }

  .right {
    width: 65%;
  }
}
</style>
