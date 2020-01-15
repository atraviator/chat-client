import { Observable, pipe } from "rxjs";
import { filter, map, share } from "rxjs/operators";
import { ICommand } from "@/app-modules/server-comms";

export class Message {
  private static byCommand(command: ICommand): boolean {
    return command.command === "message";
  }

  private static toMessage(command: ICommand): Message {
    return new Message((command as unknown) as Message);
  }

  public static toStream(stream$: Observable<any>): Observable<Message> {
    return stream$.pipe(
      filter(Message.byCommand),
      map(Message.toMessage),
      share()
    );
  }

  public username: string;
  public message: string;
  public time: string;

  constructor(response: Message) {
    this.username = response.username;
    this.message = response.message;
    this.time = response.time;
  }
}
