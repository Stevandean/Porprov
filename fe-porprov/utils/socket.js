import { io } from 'socket.io-client';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const socket = io(BASE_URL);