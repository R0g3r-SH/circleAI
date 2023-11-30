import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'https://6338-177-249-163-170.ngrok-free.app/';

export const socket = io(URL);