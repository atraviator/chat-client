import { Server, WebSocketServerConnection } from "@/app-modules/server-comms";
import { Subject, Observable } from "rxjs";
import { Message } from "./incoming/message";

class ChatServer extends Server {
  constructor(connection: WebSocketServerConnection) {
    super(connection);
  }
}

export default ChatServer;
