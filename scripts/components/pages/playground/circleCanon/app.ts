import { DrawPanel } from "./drawPanel";

/**
 * Application container
 */
export class App {
  private drawPanel?: DrawPanel;

  public run() {
    this.drawPanel = new DrawPanel();
  }
}
