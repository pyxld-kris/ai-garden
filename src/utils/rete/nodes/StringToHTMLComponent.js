import Rete from "rete";
export default class StringToHTMLComponent extends Rete.Component {
  constructor() {
    super("StringToHTML");
    this.data.path = "View";
    this.task = {
      outputs: {
        out0: "outputOption",
      },
    };
  }

  builder(node) {
    var inp1 = new Rete.Input("in0", "src", this.editor.sockets.stringSocket);
    var out = new Rete.Output(
      "out0",
      "html",
      this.editor.sockets.anyTypeSocket
    );

    return node.addInput(inp1).addOutput(out);
  }

  worker(node, inputs, outputs) {
    var src = inputs["in0"]?.length ? inputs["in0"][0] : node.data.in0;

    return {
      out0: (
        <div
          style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}
          dangerouslySetInnerHTML={{ __html: src }}
        ></div>
      ),
    };
  }
}
