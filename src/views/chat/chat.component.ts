import Vue from "vue";
import Component from "vue-class-component";
import ChatServer from "@/chat-server";
import { WebSocketServerConnection, Server } from "@/app-modules/server-comms";
import AuthCommand from "@/chat-server/outgoing/auth";

@Component({
  name: "Chat"
})
export default class Chat extends Vue {}
