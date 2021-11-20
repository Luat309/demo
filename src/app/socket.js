import { io } from "socket.io-client";

const socket = io("http://localhost:3000/", {
    path: "/sskpi/"
})

export default socket;