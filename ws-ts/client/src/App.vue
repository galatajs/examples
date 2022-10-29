<script setup>
import { io } from "socket.io-client";
import { onMounted } from "vue";

const createSocketProcess = () => {
  const socket = io("http://127.0.0.1:3000", {
    path: "/ws",
  });
  socket.on("connect", () => {
    console.log("sa");

    socket.emit("blogs_list", null, (res) => {
      console.log("list response: ", res);
    });

    socket.emit("blogs_create", { title: "Hello World!" }, (res) => {
      console.log("create response: ", res);

      socket.emit("blogs_detail", { id: res.data.id }, (detailRes) => {
        console.log("detail response: ", detailRes);
      });
    });
  });

  socket.on("error", (err) => {
    console.log("err", err);
  });

  socket.on("connect_error", (err) => {
    console.log("connection err: ", err);
  });
};

onMounted(() => {
  createSocketProcess();
});
</script>

<template>Welcome to Websocket App!</template>
