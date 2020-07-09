import {Command} from './Command';

export class FlowType {
  public type = '';
  public nodeId;
  public generateCommand: Command;

  constructor(type: string, nodeId, generateCommand: Command) {
    this.type = type;
    this.nodeId = nodeId;
    this.generateCommand = generateCommand;
  }
}
