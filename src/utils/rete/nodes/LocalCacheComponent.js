import Rete from "rete";
import { MyControl } from "../controls/Control.jsx";
export default class LocalCacheValueComponent extends Rete.Component {
  constructor() {
    super("LocalCacheValue");
    this.data.path = "Data";
    this.task = {
      outputs: {
        out0: "outputOption",
      },
    };
  }

  builder(node) {
    var inp0 = new Rete.Input("in0", "key", this.editor.sockets.anyTypeSocket);
    var inp1 = new Rete.Input(
      "in1",
      "value",
      this.editor.sockets.anyTypeSocket
    );
    var out0 = new Rete.Output(
      "out0",
      "value",
      this.editor.sockets.anyTypeSocket
    );

    inp0.addControl(new MyControl(this.editor, "in0", "Key"));
    inp1.addControl(new MyControl(this.editor, "in1", "Value"));

    return node.addInput(inp0).addInput(inp1).addOutput(out0);
  }

  worker(node, inputs, outputs) {
    var key = inputs["in0"]?.length ? inputs["in0"][0] : node.data["in0"];
    var value = inputs["in1"]?.length ? inputs["in1"][0] : node.data["in1"];

    if (value) {
      alert("SETTING " + key + " to " + value);
      localStorage[key] = value;
    } else value = localStorage[key];

    return { out0: value };
  }
}
