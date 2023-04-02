import Rete from "rete";
import { MyControl } from "../controls/Control.jsx";
export default class OnEventComponent extends Rete.Component {
  constructor() {
    super("OnEvent");
    this.data.path = "Event";
    this.task = {
      outputs: {
        out0: "outputOption",
      },
      init: function (task, node) {
        document.addEventListener(
          node.data["in0"] ? node.data["in0"] : 0,
          (eventData) => {
            node.eventData = eventData.detail;
            task.clearNodeData();
            task.run();
          }
        );
      },
    };
  }

  builder(node) {
    var inp0 = new Rete.Input(
      "in0",
      "eventName",
      this.editor.sockets.anyTypeSocket
    );
    var out0 = new Rete.Output(
      "out0",
      "eventData",
      this.editor.sockets.anyTypeSocket
    );

    inp0.addControl(new MyControl(this.editor, "in0", "eventName"));

    return node.addInput(inp0).addOutput(out0);
  }

  worker(node, inputs, outputs) {
    //console.log("Component: Start");
    //return outputs;
    return { out0: node.eventData };
  }
}
