import { ICommand } from "@/app-modules/server-comms";

class MessageCommand implements ICommand {
  public command: string;

  constructor(public room: string, public message: string) {
    this.command = "message";
  }
}

export default MessageCommand;
