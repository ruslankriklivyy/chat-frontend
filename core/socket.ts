import { io } from 'socket.io-client';

const socket = io('ws://localhost', {
  query: {
    userName: 'user test',
  },
});

export default socket;
