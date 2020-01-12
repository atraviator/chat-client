import { WebSocketServerConnection } from "./web-socket";
import { ICommand } from "./command";

export class Server {
  protected connection: WebSocketServerConnection;

  constructor(connection: WebSocketServerConnection) {
    this.connection = connection;
  }
  public connect(): Promise<void> {
    return this.connection.connect();
  }
  public send(command: ICommand): void {
    this.connection.send(JSON.stringify(command));
  }
}
