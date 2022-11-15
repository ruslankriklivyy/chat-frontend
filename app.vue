<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <nuxt-page />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import io from '~/core/socket';

const addRoom = () => {
  io.emit('createRoom', 'some room' + Date.now());
};

onBeforeMount(() => {
  io.on('log', (data) => {
    console.log('log', data);
  });

  io.on('rooms', (data) => {
    console.log('rooms', data);
  });

  io.emit('getRooms');
});
</script>
