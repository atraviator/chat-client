import { Server, WebSocketServerConnection } from "@/app-modules/server-comms";
import { Subject } from "rxjs";

class ChatServer extends Server {
  constructor(connection: WebSocketServerConnection) {
    super(connection);
  }
}

export default ChatServer;
