import Rete from "rete";
export default class AndComponent extends Rete.Component {
  constructor() {
    super("And");
    this.data.path = "Conditional";
    this.task = {
      outputs: {
        out0: "outputOption",
      },
    };
  }

  builder(node) {
    var inp1 = new Rete.Input(
      "in0",
      "input1",
      this.editor.sockets.anyTypeSocket
    );
    var inp2 = new Rete.Input(
      "in1",
      "input2",
      this.editor.sockets.anyTypeSocket
    );
    var out = new Rete.Output(
      "out0",
      "boolean",
      this.editor.sockets.booleanSocket
    );

    return node.addInput(inp1).addInput(inp2).addOutput(out);
  }

  worker(node, inputs, outputs) {
    var n1 = inputs["in0"]?.length ? inputs["in0"][0] : node.data.in0;
    var n2 = inputs["in1"]?.length ? inputs["in1"][0] : node.data.in1;

    return { out0: n1 && n2 };
  }
}
