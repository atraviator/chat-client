import { Subject } from "rxjs";

export class WebSocketServerConnection {
  public stream$: Subject<unknown>;

  private socket!: WebSocket;
  private serverUrl: string;
  private chunks: any[];
  private connectionPromise!: Promise<void>;

  private get readyState(): number {
    return this.socket ? this.socket.readyState : -1;
  }

  constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
    this.stream$ = new Subject();
    this.chunks = [];
  }

  public connect(): Promise<void> {
    if (
      this.readyState === WebSocket.CONNECTING ||
      this.readyState === WebSocket.OPEN
    ) {
      return this.connectionPromise;
    }

    this.connectionPromise = new Promise((resolve, reject) => {
      this.socket = new WebSocket(this.serverUrl);
      this.socket.onerror = () => {
        reject();
      };
      this.socket.onopen = () => {
        this.socket.onmessage = response => this.onMessage(response);
        resolve();
      };
    });
    return this.connectionPromise;
  }

  public send(command: string): void {
    this.socket.send(command);
  }

  private onMessage(event: MessageEvent): void {
    const data = event.data;
    this.chunks.push(data);
    if (data.charCodeAt(data.length - 1) !== 0) {
      return;
    }
    const response = {
      Contents: this.chunks.join("").replace(/\0|\r?\n|\r/g, "")
    };
    this.stream$.next(response);
    this.chunks = [];
  }
}
