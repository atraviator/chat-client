import { ICommand } from "@/app-modules/server-comms";

class AuthCommand implements ICommand {
  public command: string;

  constructor(public username: string) {
    this.command = "auth";
  }
}

export default AuthCommand;
