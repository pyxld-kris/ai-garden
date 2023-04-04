const graphModules = {
  "empty-graph": {
    path: "/",
    id: 0,
    key: "empty-graph",
    label: "⬜ Initialize An Empty Graph!",
    data: { id: "demo@0.1.0", nodes: {} },
  },
  "new-graph": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-322.98553726216846, -13.432815305731353],
          name: "OnInitialize",
        },
        2: {
          id: 2,
          data: { string: "Hello world!" },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-52.68326868769272, -113.93447754374073],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [296.29532203460684, -115.05349271797623],
          name: "DisplayModal",
        },
      },
      comments: [],
    },
    key: "new-graph",
    label: "new-graph",
  },
  "new-prompt": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [77.5464221227401, -14.394098133520489],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [644.6284367784084, 88.58768866074735],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {
            module: "module-get-bloom-model-data",
            prompt:
              "Hello world! I'm a prompt that gets fed into a Large Language Model! Change me!",
            numTokens: "32",
            topP: "1",
            terminator: "terminator",
          },
          inputs: {
            prompt: { connections: [] },
            numTokens: { connections: [] },
            topP: { connections: [] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 5, input: "in1", data: {} }] },
          },
          position: [-440.41713919502916, 124.63129949110194],
          name: "Module",
        },
        5: {
          id: 5,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
            in1: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [399.9122429010759, 89.688147858063],
          name: "Or",
        },
      },
      comments: [],
    },
    key: "new-prompt",
    label: "new-prompt",
  },
  "new-module": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: { name: "baseFactsArray" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-260.32663115409144, -60.7300493153207],
          name: "Input",
        },
        3: {
          id: 3,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [326.5936044245035, -59.17774878960929],
          name: "Output",
        },
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 2, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "input", data: {} }] },
          },
          position: [36.83982411945183, -62.56617018766555],
          name: "String",
        },
      },
      comments: [],
    },
    key: "new-module",
    label: "new-module",
  },
  "join-strings": {
    path: "/utils",
    id: 16,
    key: "join-strings",
    label: "Joins two strings",
    data: {
      id: "demo@0.1.0",
      nodes: {
        221: {
          id: 221,
          data: { name: "in0" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 226, input: "in0", data: {} }] },
          },
          position: [-594.8288199949824, -406.86257175256145],
          name: "Input",
        },
        222: {
          id: 222,
          data: { name: "out0" },
          inputs: {
            input: { connections: [{ node: 227, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [685.5105499712876, -395.9020767617726],
          name: "Output",
        },
        223: {
          id: 223,
          data: { name: "in1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 227, input: "in1", data: {} }] },
          },
          position: [-593.8835046341228, -244.06342295628139],
          name: "Input",
        },
        225: {
          id: 225,
          data: { name: "joinString" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 226, input: "in1", data: {} }] },
          },
          position: [-593.3512417893625, -86.00128366701138],
          name: "Input",
        },
        226: {
          id: 226,
          data: { preview: 0 },
          inputs: {
            in0: { connections: [{ node: 221, output: "output", data: {} }] },
            in1: { connections: [{ node: 225, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 227, input: "in0", data: {} }] },
          },
          position: [-26.070041967022174, -392.2098587810571],
          name: "Append",
        },
        227: {
          id: 227,
          data: { preview: 0, in0: "" },
          inputs: {
            in0: { connections: [{ node: 226, output: "out0", data: {} }] },
            in1: { connections: [{ node: 223, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 222, input: "input", data: {} }] },
          },
          position: [307.6413261282734, -170.32619100356675],
          name: "Append",
        },
      },
    },
  },
  "join-string-test": {
    path: "/utils",
    id: 17,
    key: "join-string-test",
    label: "Testing the join-strings module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "join-strings" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [{ node: 5, output: "out0", data: {} }] },
            joinString: {
              connections: [{ node: 4, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-196.70911527563834, -282.3869027117454],
          name: "Module",
        },
        2: {
          id: 2,
          data: { module: "join-strings" },
          inputs: {
            in0: { connections: [{ node: 1, output: "out0", data: {} }] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
            joinString: {
              connections: [{ node: 4, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [209.52552924363644, 66.37741785143932],
          name: "Module",
        },
        3: {
          id: 3,
          data: { string: "1" },
          inputs: {
            in0: { connections: [{ node: 8, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "in0", data: {} }] },
          },
          position: [-650.4588192165542, -400.10302679488115],
          name: "String",
        },
        4: {
          id: 4,
          data: { string: "\\n" },
          inputs: {
            in0: { connections: [{ node: 8, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 2, input: "joinString", data: {} },
                { node: 1, input: "joinString", data: {} },
              ],
            },
          },
          position: [-637.6131570965122, 300.25177006296127],
          name: "String",
        },
        5: {
          id: 5,
          data: { string: "2" },
          inputs: {
            in0: { connections: [{ node: 8, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "in1", data: {} }] },
          },
          position: [-650.7357887641394, -217.44988087650884],
          name: "String",
        },
        6: {
          id: 6,
          data: { string: "3" },
          inputs: {
            in0: { connections: [{ node: 8, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in1", data: {} }] },
          },
          position: [-653.0681172297155, -30.686084208015927],
          name: "String",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [741.5104610112288, -55.57713016545812],
          name: "DisplayModal",
        },
        8: {
          id: 8,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [
                { node: 4, input: "in0", data: {} },
                { node: 6, input: "in0", data: {} },
                { node: 5, input: "in0", data: {} },
                { node: 3, input: "in0", data: {} },
              ],
            },
          },
          position: [-1073.4020894074374, 10.19541288313544],
          name: "OnInitialize",
        },
      },
    },
  },
  "module-display-executing-modal": {
    path: "/utils",
    id: 20,
    key: "module-display-executing-modal",
    label:
      "Triggers a modal displaying the message 'Executing...' (for use in user facing graphs when execution has begun)",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: { string: "Executing..." },
          inputs: {
            in0: { connections: [{ node: 4, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 6, input: "in0", data: {} },
                { node: 5, input: "input", data: {} },
              ],
            },
          },
          position: [-953.9065254643181, -368.54195583743245],
          name: "BigString",
        },
        4: {
          id: 4,
          data: { name: "triggerSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-1314.0456205900557, -376.17456837376096],
          name: "Input",
        },
        5: {
          id: 5,
          data: { name: "null" },
          inputs: {
            input: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-247.23924039349862, 141.48238452466057],
          name: "Output",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-243.30290858579443, -368.3016428520514],
          name: "DisplayModal",
        },
      },
    },
  },
  "module-strip-wikipedia-citations": {
    path: "/junk-utils",
    id: 22,
    key: "module-strip-wikipedia-citations",
    label:
      "Removes extraneous text from wikipedia articles attached to their citations (ie. [1], [2], [3][4], etc)",
    data: {
      id: "demo@0.1.0",
      nodes: {
        8: {
          id: 8,
          data: {
            string:
              "The following examples are of text with citations removed.\n\n###\nabc[1]de[2]fghijklm[3]nopqrs[4][5]tuvwxyz[6]\n-->\nabcdefghijklmnopqrstuvwxyz\n\n###\nThe cat[4][5] is white[6] with black spots.[7][8][9] I like the cat![10]\n--.>\nThe cat is white with black spots. I like the cat!\n\n###\n\n",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-489.9243588745035, -656.3122354152362],
          name: "BigString",
        },
        11: {
          id: 11,
          data: {
            preview:
              'Jacob Hirschorn (May 19, 1829 in Fuerth, Bavaria – February 2, 1906 in St. Louis, MO) was a Jewish-American immigrant from Germany who served in the U.S.-Mexican War and wrote a dramatic memoir entitled "The Mexican War. Reminiscences of a Volunteer" from which the following information and quotations are taken.\n\n',
            in0: "Prompt",
            in1: ".8",
            in2: ".8",
            in3: "200",
            in4: "###",
          },
          inputs: {
            in0: { connections: [{ node: 17, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
            in3: { connections: [] },
            in4: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "input", data: {} }] },
          },
          position: [752.6439323063214, -327.757973999114],
          name: "GPTQuery",
        },
        13: {
          id: 13,
          data: { name: "textWithCitations" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 15, input: "in1", data: {} }] },
          },
          position: [-839.0041908157338, 33.7090855017108],
          name: "Input",
        },
        14: {
          id: 14,
          data: { name: "textWithoutCitations" },
          inputs: {
            input: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1131.1011611457823, -337.7518135034384],
          name: "Output",
        },
        15: {
          id: 15,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
            in1: { connections: [{ node: 13, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [249.7287339613448, -99.87498380071216],
          name: "Append",
        },
        16: {
          id: 16,
          data: { string: "\n-->\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [-499.2868991655924, 214.8527870794938],
          name: "BigString",
        },
        17: {
          id: 17,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in0", data: {} }] },
          },
          position: [316.10462698181163, 153.74903798013992],
          name: "Append",
        },
      },
    },
  },
  "module-get-current-weather": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [-2182.5955073825153, 145.0204816075559],
          name: "Input",
        },
        3: {
          id: 3,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
            in1: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-838.2793654255082, -257.17671970782817],
          name: "Append",
        },
        5: {
          id: 5,
          data: { in0: "URL", in1: "GET", in2: "" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-558.3041110265573, -284.0432510895342],
          name: "HTTPRequest",
        },
        6: {
          id: 6,
          data: { string: "https://api.weather.gov/points/" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-1462.716016235788, -399.441026181405],
          name: "String",
        },
        7: {
          id: 7,
          data: { in0: "JSON", in1: "properties" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 8, input: "in0", data: {} }] },
          },
          position: [-281.2696408833859, -278.74739883328556],
          name: "GetJSONValueComponent",
        },
        8: {
          id: 8,
          data: { in0: "JSON", in1: "forecast" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in0", data: {} }] },
          },
          position: [78.83376176733643, -279.6818269306149],
          name: "GetJSONValueComponent",
        },
        14: {
          id: 14,
          data: { string: "," },
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 16, input: "joinString", data: {} }],
            },
          },
          position: [-1787.3991886130677, 115.60145410314288],
          name: "String",
        },
        15: {
          id: 15,
          data: {},
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            lat: { connections: [{ node: 16, input: "in0", data: {} }] },
            long: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-1782.8819676048265, -71.78439462264757],
          name: "Geolocation",
        },
        16: {
          id: 16,
          data: {
            module: "join-strings",
            in0: "in0",
            in1: "in1",
            joinString: "joinString",
          },
          inputs: {
            in0: { connections: [{ node: 15, output: "lat", data: {} }] },
            in1: { connections: [{ node: 15, output: "long", data: {} }] },
            joinString: {
              connections: [{ node: 14, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "in1", data: {} }] },
          },
          position: [-1405.1110779044984, -71.74561085272052],
          name: "Module",
        },
        19: {
          id: 19,
          data: { in0: "URL", in1: "GET", in2: "Data" },
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [502.24009991673915, 81.83147036918261],
          name: "HTTPRequest",
        },
        20: {
          id: 20,
          data: { in0: "JSON", in1: "properties" },
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in0", data: {} }] },
          },
          position: [780.2732999277599, 76.23926950805193],
          name: "GetJSONValueComponent",
        },
        21: {
          id: 21,
          data: { in0: "JSON", in1: "periods" },
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 31, input: "in1", data: {} },
                { node: 22, input: "in0", data: {} },
              ],
            },
          },
          position: [1140.0821031961045, 72.24691737731814],
          name: "GetJSONValueComponent",
        },
        22: {
          id: 22,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 21, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 23, input: "in0", data: {} },
                { node: 25, input: "in0", data: {} },
                { node: 24, input: "in0", data: {} },
              ],
            },
          },
          position: [1536.6187984908352, 75.39735132032301],
          name: "GetArrayElement",
        },
        23: {
          id: 23,
          data: { in0: "JSON", in1: "temperature" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 26, input: "input", data: {} }] },
          },
          position: [2641.055413803816, -252.62873814312843],
          name: "GetJSONValueComponent",
        },
        24: {
          id: 24,
          data: { in0: "JSON", in1: "detailedForecast" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 28, input: "input", data: {} }] },
          },
          position: [2628.8758756782236, 201.7671290658957],
          name: "GetJSONValueComponent",
        },
        25: {
          id: 25,
          data: { in0: "JSON", in1: "shortForecast" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 27, input: "input", data: {} }] },
          },
          position: [2636.141915922146, -47.85262062954803],
          name: "GetJSONValueComponent",
        },
        26: {
          id: 26,
          data: { name: "temperature" },
          inputs: {
            input: { connections: [{ node: 23, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [3022.6767226912634, -252.17422680768004],
          name: "Output",
        },
        27: {
          id: 27,
          data: { name: "shortForecast" },
          inputs: {
            input: { connections: [{ node: 25, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [3022.65570238301, -43.75799412254855],
          name: "Output",
        },
        28: {
          id: 28,
          data: { name: "detailedForecast" },
          inputs: {
            input: { connections: [{ node: 24, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [3020.630361971086, 176.68332236635456],
          name: "Output",
        },
        31: {
          id: 31,
          data: {},
          inputs: {
            in0: { connections: [{ node: 32, output: "out0", data: {} }] },
            in1: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in0", data: {} }] },
          },
          position: [1529.8739121933593, -174.0987189509241],
          name: "Equal",
        },
        32: {
          id: 32,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 31, input: "in0", data: {} }] },
          },
          position: [1209.0049238804459, -200.52128106969977],
          name: "String",
        },
        33: {
          id: 33,
          data: {},
          inputs: {
            in0: { connections: [{ node: 31, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 34, output: "out0", data: {} }] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 35, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 35, input: "in1", data: {} }] },
          },
          position: [1918.9854800622693, -401.12746812639006],
          name: "Branch",
        },
        34: {
          id: 34,
          data: {
            string:
              '{\n  "temperature": "(not available)",\n  "shortForecast": "(not available)",\n  "detailedForecast": "(not available)"\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 33, input: "trueData", data: {} }] },
          },
          position: [1206.4317246344863, -944.9461901291784],
          name: "BigString",
        },
        35: {
          id: 35,
          data: {},
          inputs: {
            in0: { connections: [{ node: 33, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 33, output: "outFalse", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2191.459611965862, -396.0251984168661],
          name: "Or",
        },
        36: {
          id: 36,
          data: {
            string:
              'await (async (args) => {\n  let latitude = args[0];\n  let longitude = args[1];\n  \n  let weatherData = {};\n  try {\n    let pointData = await (await fetch("https://api.weather.gov/points/30.239,-97.7241")).json();\n    console.log(pointData);\n    let gridData = await (await fetch(pointData.properties.forecast)).json();\n    console.log(gridData);\n    weatherData = gridData.properties.period[0];\n  } catch(e) {\n    weatherData = {\n      "temperature": "(not available)",\n      "shortForecast": "(not available)",\n      "detailedForecast": "(not available)"\n    }\n  }\n  \n  return weatherData;\n})(args)',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 37, input: "in0", data: {} }] },
          },
          position: [-1894.1145823870802, -1575.7580772294662],
          name: "BigString",
        },
        37: {
          id: 37,
          data: { string: "", in0: "" },
          inputs: {
            in0: { connections: [{ node: 36, output: "out0", data: {} }] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1220.157232442515, -907.6325254873641],
          name: "Code",
        },
        38: {
          id: 38,
          data: {},
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            lat: { connections: [{ node: 39, input: "in0", data: {} }] },
            long: { connections: [{ node: 39, input: "in1", data: {} }] },
          },
          position: [-1837.5039951922588, -908.4965756785662],
          name: "Geolocation",
        },
        39: {
          id: 39,
          data: {},
          inputs: {
            in0: { connections: [{ node: 38, output: "lat", data: {} }] },
            in1: { connections: [{ node: 38, output: "long", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 37, input: "in1", data: {} }] },
          },
          position: [-1557.7875254598011, -898.9301600179283],
          name: "Array",
        },
        40: {
          id: 40,
          data: {
            string:
              '{\n  "temperature": "(not available)",\n  "shortForecast": "(not available)",\n  "detailedForecast": "(not available)"\n}',
          },
          inputs: {
            in0: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1893.010087290277, -2227.0346306091074],
          name: "BigString",
        },
        41: {
          id: 41,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 42, input: "in1", data: {} }] },
          },
          position: [-2446.832439000041, -1629.8063744795672],
          name: "String",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 41, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 40, input: "in0", data: {} }] },
          },
          position: [-2190.0068298328983, -1760.1236476731299],
          name: "Await",
        },
      },
      comments: [
        {
          position: [-1817.3991886130677, -132.42308340469003],
          links: [16, 14, 15],
          type: "frame",
          width: 912.2881107085693,
          height: 504.0245375078329,
        },
        {
          position: [-588.3041110265573, -314.0432510895342],
          links: [5, 7, 8],
          type: "frame",
          width: 1054.1378727938936,
          height: 324,
        },
        {
          position: [472.24009991673915, 41.80075743299207],
          links: [19, 20, 21, 22],
          type: "frame",
          width: 1325.3398365754365,
          height: 334.0307129361905,
        },
      ],
    },
    key: "module-get-current-weather",
    label: "module-get-current-weather",
  },
  "test-get-current-weather-module": {
    path: "/utils",
    id: 25,
    key: "test-get-current-weather-module",
    label: "Tests the weather module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-get-current-weather" },
          inputs: {
            cityName: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {
            temperature: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-215.2163734741879, -179.3338107582848],
          name: "Module",
        },
        2: {
          id: 2,
          data: { string: "austin" },
          inputs: {
            in0: { connections: [{ node: 3, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "cityName", data: {} }] },
          },
          position: [-576.3597487832927, -176.61370785282563],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-834.9939573896547, -179.8697098466788],
          name: "OnInitialize",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: {
              connections: [{ node: 1, output: "temperature", data: {} }],
            },
          },
          outputs: {},
          position: [288.45469091419034, -181.36975910318097],
          name: "DisplayModal",
        },
      },
    },
  },
  "module-get-random-activity": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "triggerSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-1527.443124379288, -277.1652402667681],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "Signal" },
          inputs: {
            input: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [290.8771909498972, -277.1236458842179],
          name: "Output",
        },
        3: {
          id: 3,
          data: { preview: 0, in0: "", in1: "" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-824.6168251457362, -6.2457987447112515],
          name: "Append",
        },
        5: {
          id: 5,
          data: { in0: "URL", in1: "GET", in2: "" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-451.6346941122413, -275.65556568788713],
          name: "HTTPRequest",
        },
        6: {
          id: 6,
          data: { string: "https://www.boredapi.com/api/activity" },
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-1160.5217398655536, -272.0229121303873],
          name: "String",
        },
        7: {
          id: 7,
          data: { in0: "JSON", in1: "activity" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [-105.83065328795564, -275.94897270717485],
          name: "GetJSONValueComponent",
        },
        12: {
          id: 12,
          data: {
            module: "join-strings",
            in0: "in0",
            in1: "in1",
            joinString: "joinString",
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [] },
            joinString: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [-434.0962953966832, 12.268100225321348],
          name: "Module",
        },
      },
      comments: [],
    },
    key: "module-get-random-activity",
    label: "module-get-random-activity",
  },
  "test-get-random-activity": {
    path: "/utils",
    id: 25,
    key: "test-get-random-activity",
    label: "Tests the get-random-activity module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-get-random-activity" },
          inputs: {
            triggerSignal: {
              connections: [{ node: 3, output: "action", data: {} }],
            },
          },
          outputs: {
            Signal: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-215.2163734741879, -179.3338107582848],
          name: "Module",
        },
        3: {
          id: 3,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [{ node: 1, input: "triggerSignal", data: {} }],
            },
          },
          position: [-834.9939573896547, -179.8697098466788],
          name: "OnInitialize",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "Signal", data: {} }] },
          },
          outputs: {},
          position: [288.45469091419034, -181.36975910318097],
          name: "DisplayModal",
        },
      },
    },
  },
  "module-get-book-description": {
    path: "/utils",
    id: 26,
    key: "module-get-book-description",
    label:
      "Given a query string related to a book, outputs the description of the book. This module uses the 'openlibrary.org' api.",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "bookSearchQuery" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 3, input: "in1", data: {} }] },
          },
          position: [-1386.3824409835397, -140.81856572419468],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "description" },
          inputs: {
            input: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2200.884503807196, -306.34465298089367],
          name: "Output",
        },
        3: {
          id: 3,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
            in1: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-885.1064895715958, -288.0000438149927],
          name: "Append",
        },
        5: {
          id: 5,
          data: { in0: "URL", in1: "Method", in2: "Data" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-542.3690741218694, -289.98204834002775],
          name: "HTTPRequest",
        },
        6: {
          id: 6,
          data: { string: "https://openlibrary.org/search.json?q=" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-1271.093002792722, -352.59393988726345],
          name: "String",
        },
        7: {
          id: 7,
          data: { in0: "JSON", in1: "docs" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-222.87585620920797, -285.2638938295338],
          name: "GetJSONValueComponent",
        },
        13: {
          id: 13,
          data: { in0: "URL", in1: "Method", in2: "Data" },
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in0", data: {} }] },
          },
          position: [1512.5562617797682, -305.2826134796918],
          name: "HTTPRequest",
        },
        14: {
          id: 14,
          data: { string: "https://openlibrary.org" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [488.01879054970647, -479.45862972169675],
          name: "String",
        },
        15: {
          id: 15,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 16, input: "in0", data: {} }] },
          },
          position: [145.7886899133892, -286.1704434108502],
          name: "GetArrayElement",
        },
        16: {
          id: 16,
          data: { in0: "JSON", in1: "key" },
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [461.7459792530007, -286.2931766366964],
          name: "GetJSONValueComponent",
        },
        17: {
          id: 17,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [836.5307540247949, -410.22952172513],
          name: "Append",
        },
        18: {
          id: 18,
          data: { in0: "JSON", in1: "description" },
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [1832.8169286036791, -307.6397800051339],
          name: "GetJSONValueComponent",
        },
        19: {
          id: 19,
          data: { string: ".json" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 20, input: "in1", data: {} }] },
          },
          position: [487.0291451175677, -98.00858057766908],
          name: "String",
        },
        20: {
          id: 20,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 17, output: "out0", data: {} }] },
            in1: { connections: [{ node: 19, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "in0", data: {} }] },
          },
          position: [1174.0223739334494, -312.31233950401474],
          name: "Append",
        },
      },
    },
  },
  "test-get-book-description": {
    path: "/utils",
    id: 27,
    key: "test-get-book-description",
    label: "Tests the get-book-description module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-get-book-description" },
          inputs: {
            bookSearchQuery: {
              connections: [{ node: 6, output: "out0", data: {} }],
            },
          },
          outputs: {
            description: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-241.7926014041991, -200.0042853560875],
          name: "Module",
        },
        3: {
          id: 3,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-829.0932654934472, -230.02508832976602],
          name: "OnInitialize",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: {
              connections: [{ node: 1, output: "description", data: {} }],
            },
          },
          outputs: {},
          position: [242.7247647256906, -200.54682310891073],
          name: "DisplayModal",
        },
        5: {
          id: 5,
          data: { string: "Prompt" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 6, input: "in1", data: {} }] },
          },
          position: [-912.4982700622684, -108.39297965638713],
          name: "Input Prompt",
        },
        6: {
          id: 6,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 3, output: "action", data: {} }] },
            in1: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "bookSearchQuery", data: {} }],
            },
          },
          position: [-577.9279948134648, -200.04158946733796],
          name: "Append",
        },
      },
    },
  },
  "get-dalle-mini-image": {
    path: "/utils",
    id: 28,
    key: "get-dalle-mini-image",
    label:
      "Given a prompt, displays an image generated using the DALL-E Mini model",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 13, input: "triggerSignal", data: {} },
              ],
            },
          },
          position: [-674.6760025657511, -169.51790773128008],
          name: "OnInitialize",
        },
        2: {
          id: 2,
          data: { in0: "Prompt" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [233.95883682346138, -296.38941316846723],
          name: "ImageGenerationModelComponent",
        },
        3: {
          id: 3,
          data: { string: "A sunflower inside of a lightbulb" },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-430.34087224828875, -298.22668213798306],
          name: "BigString",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2668.272228014063, -358.61786948535274],
          name: "DisplayModal",
        },
        5: {
          id: 5,
          data: { in0: "JSON", in1: "images" },
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 6, input: "in0", data: {} },
                { node: 19, input: "in0", data: {} },
              ],
            },
          },
          position: [692.9829227248598, -308.60192376346777],
          name: "GetJSONValueComponent",
        },
        6: {
          id: 6,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [1079.5936364342583, -519.0928958966283],
          name: "GetArrayElement",
        },
        13: {
          id: 13,
          data: { module: "module-display-executing-modal" },
          inputs: {
            triggerSignal: {
              connections: [{ node: 1, output: "action", data: {} }],
            },
          },
          outputs: { null: { connections: [] } },
          position: [-427.9327197552801, -572.3236364119123],
          name: "Module",
        },
        14: {
          id: 14,
          data: {},
          inputs: {
            in0: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [1825.552570120132, -618.1010049733214],
          name: "StringTrim",
        },
        15: {
          id: 15,
          data: {},
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in0", data: {} }] },
          },
          position: [2054.44380792795, -618.4771258384895],
          name: "Image",
        },
        16: {
          id: 16,
          data: { string: "data:image/png;base64, " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [
                { node: 17, input: "in0", data: {} },
                { node: 20, input: "in0", data: {} },
              ],
            },
          },
          position: [819.8011836611337, -744.5337705009332],
          name: "String",
        },
        17: {
          id: 17,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 16, output: "out0", data: {} }] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [1480.9138397141585, -610.6818557075615],
          name: "Append",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [{ node: 22, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [2378.8325288236438, -392.66143097744265],
          name: "Array",
        },
        19: {
          id: 19,
          data: { in1: "1" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in1", data: {} }] },
          },
          position: [1073.7045326455054, -100.51624934402484],
          name: "GetArrayElement",
        },
        20: {
          id: 20,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 16, output: "out0", data: {} }] },
            in1: { connections: [{ node: 19, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in0", data: {} }] },
          },
          position: [1475.0247314613737, -196.64496177491154],
          name: "Append",
        },
        21: {
          id: 21,
          data: {},
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 22, input: "in0", data: {} }] },
          },
          position: [1828.7428046966108, -190.44484867027924],
          name: "StringTrim",
        },
        22: {
          id: 22,
          data: {},
          inputs: {
            in0: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [2055.364207924048, -195.36107163940315],
          name: "Image",
        },
      },
    },
  },
  "module-get-dalle-mini-image": {
    path: "/utils",
    id: 29,
    key: "module-get-dalle-mini-image",
    label:
      "With a prompt input, outputs an image generated using the DALL-E Mini model",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: { in0: "Prompt" },
          inputs: {
            in0: { connections: [{ node: 23, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [233.95883682346138, -296.38941316846723],
          name: "ImageGenerationModelComponent",
        },
        5: {
          id: 5,
          data: { in0: "JSON", in1: "data" },
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [692.9829227248598, -308.60192376346777],
          name: "GetJSONValueComponent",
        },
        6: {
          id: 6,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [1079.5936364342583, -519.0928958966283],
          name: "GetArrayElement",
        },
        14: {
          id: 14,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [1825.552570120132, -618.1010049733214],
          name: "StringTrim",
        },
        15: {
          id: 15,
          data: {},
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 24, input: "input", data: {} }] },
          },
          position: [2054.44380792795, -618.4771258384895],
          name: "Image",
        },
        23: {
          id: 23,
          data: { name: "prompt" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-141.7673578519417, -492.31106868898195],
          name: "Input",
        },
        24: {
          id: 24,
          data: { name: "image" },
          inputs: {
            input: { connections: [{ node: 15, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2269.504216128722, -623.6916758541719],
          name: "Output",
        },
      },
    },
  },
  "test-get-dalle-mini-image-module": {
    path: "/utils",
    id: 30,
    key: "test-get-dalle-mini-image-module",
    label: "Tests the 'module-get-dalle-mini-image' module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-get-dalle-mini-image" },
          inputs: {
            prompt: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            image: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-382.6856832628132, -263.7738314694457],
          name: "Module",
        },
        3: {
          id: 3,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [
                { node: 5, input: "triggerSignal", data: {} },
                { node: 6, input: "string", data: {} },
              ],
            },
          },
          position: [-922.2364143405173, -255.56542935186252],
          name: "OnInitialize",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [522.4817857317518, -157.23312047065264],
          name: "DisplayModal",
        },
        5: {
          id: 5,
          data: { module: "module-display-executing-modal" },
          inputs: {
            triggerSignal: {
              connections: [{ node: 3, output: "action", data: {} }],
            },
          },
          outputs: { null: { connections: [] } },
          position: [-641.6990317918958, -477.87918483338],
          name: "Module",
        },
        6: {
          id: 6,
          data: { string: "Prompt" },
          inputs: {
            string: { connections: [{ node: 3, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 1, input: "prompt", data: {} },
                { node: 7, input: "in1", data: {} },
              ],
            },
          },
          position: [-690.9001143332744, -45.53730138706899],
          name: "Input Prompt",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "image", data: {} }] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [250.9718217486378, -163.38735881108303],
          name: "Array",
        },
      },
    },
  },
  "module-get-recipe-from-name": {
    path: "utils",
    id: 31,
    key: "module-get-recipe-from-name",
    label: "Given a recipe name as input, outputs a recipe",
    data: {
      id: "demo@0.1.0",
      nodes: {
        11: {
          id: 11,
          data: {
            preview: "",
            in0: "Prompt",
            in1: ".8",
            in2: ".25",
            in3: "300",
            in4: "~~~",
          },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
            in3: { connections: [] },
            in4: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 79, input: "input", data: {} }] },
          },
          position: [2383.264891169638, -68.47023871898958],
          name: "GPTQuery",
        },
        15: {
          id: 15,
          data: {
            string:
              "Ben is interested in beginning to cook a variety of different cuisines so he can save money by not eating out, but doesn't want to spend very much time or energy doing it. He also only wants to use a small number of ingredients for each meal so he doesn't have to complicate his grocery trips. He has begun recording detailed recipes, including ingredients and instructions, of cheap and quick meals in his journal, such as the following 4 recipes: \n~~~\nRecipe 1\nRecipe Name: Peanut Butter and Jelly\nIngredients: \n    - Slice of Bread (2)\n    - Peanut Butter\n    - Jellly\nDirections: \n    - Spread the peanut butter on one side of the bread.\n    - Spread the jelly on the other side of the bread.\n    - Put the bread together.\n~~~\nRecipe 2\nRecipe Name: Avacado and Sea Salt\nIngredients: \n    - Avacado\n    - Sea Salt\nDirections: \n    - Slice the avacado in half\n    - Put sea salt on both halves\n~~~\nRecipe 3\nRecipe Name: ",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 18, input: "in0", data: {} }] },
          },
          position: [1345.4139757140906, -625.4741187472976],
          name: "BigString",
        },
        18: {
          id: 18,
          data: { preview: "", in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [{ node: 78, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in0", data: {} }] },
          },
          position: [2045.7422665929105, -63.683858919985596],
          name: "Append",
        },
        78: {
          id: 78,
          data: { name: "recipeName" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [1347.1008670140466, 73.6311981190203],
          name: "Input",
        },
        79: {
          id: 79,
          data: { name: "recipeString" },
          inputs: {
            input: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2725.7525398746575, -72.0684613357824],
          name: "Output",
        },
      },
    },
  },
  model__location: {
    path: "/models",
    id: 33,
    key: "model__location",
    label: "Location model",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "country" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [-426.47080702752453, -212.29087665531944],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "country" },
          inputs: {
            input: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [21.36645381320656, -210.2101577442914],
          name: "Output",
        },
        3: {
          id: 3,
          data: { name: "city" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "input", data: {} }] },
          },
          position: [-423.96437940984475, 138.66318884756936],
          name: "Input",
        },
        4: {
          id: 4,
          data: { name: "city" },
          inputs: {
            input: { connections: [{ node: 3, output: "output", data: {} }] },
          },
          outputs: {},
          position: [23.87288143088636, 140.7439077585974],
          name: "Output",
        },
        5: {
          id: 5,
          data: { name: "state" },
          inputs: {
            input: { connections: [{ node: 6, output: "output", data: {} }] },
          },
          outputs: {},
          position: [20.134824204517603, -42.8381000547505],
          name: "Output",
        },
        6: {
          id: 6,
          data: { name: "state" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 5, input: "input", data: {} }] },
          },
          position: [-427.70243663621346, -44.91881896577854],
          name: "Input",
        },
      },
    },
  },
  model__user: {
    path: "/models",
    id: 34,
    key: "model__user",
    label: "User model",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "name" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [-699.6459152088769, -210.76466458174016],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "name" },
          inputs: {
            input: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [338.7989371397367, -210.2101577442914],
          name: "Output",
        },
        4: {
          id: 4,
          data: { name: "country" },
          inputs: {
            input: { connections: [{ node: 7, output: "country", data: {} }] },
          },
          outputs: {},
          position: [338.42285173008815, 182.78614284986818],
          name: "Output",
        },
        5: {
          id: 5,
          data: { name: "age" },
          inputs: {
            input: { connections: [{ node: 6, output: "output", data: {} }] },
          },
          outputs: {},
          position: [337.56730753104773, -42.8381000547505],
          name: "Output",
        },
        6: {
          id: 6,
          data: { name: "age" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 5, input: "input", data: {} }] },
          },
          position: [-700.8775448175659, -43.39260689219928],
          name: "Input",
        },
        7: {
          id: 7,
          data: { module: "model__location" },
          inputs: {
            country: { connections: [{ node: 8, output: "output", data: {} }] },
            city: { connections: [{ node: 10, output: "output", data: {} }] },
            state: { connections: [{ node: 9, output: "output", data: {} }] },
          },
          outputs: {
            country: { connections: [{ node: 4, input: "input", data: {} }] },
            city: { connections: [{ node: 12, input: "input", data: {} }] },
            state: { connections: [{ node: 11, input: "input", data: {} }] },
          },
          position: [-234.26170222679733, 235.54178933574065],
          name: "Module",
        },
        8: {
          id: 8,
          data: { name: "country" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 7, input: "country", data: {} }] },
          },
          position: [-702.9956527147175, 183.0007618851801],
          name: "Input",
        },
        9: {
          id: 9,
          data: { name: "state" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 7, input: "state", data: {} }] },
          },
          position: [-705.1137606118693, 336.68587950774156],
          name: "Input",
        },
        10: {
          id: 10,
          data: { name: "city" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 7, input: "city", data: {} }] },
          },
          position: [-703.7694953629644, 486.90875606027726],
          name: "Input",
        },
        11: {
          id: 11,
          data: { name: "state" },
          inputs: {
            input: { connections: [{ node: 7, output: "state", data: {} }] },
          },
          outputs: {},
          position: [339.7671103543972, 336.47144177842233],
          name: "Output",
        },
        12: {
          id: 12,
          data: { name: "city" },
          inputs: {
            input: { connections: [{ node: 7, output: "city", data: {} }] },
          },
          outputs: {},
          position: [341.1113812815189, 483.2319875450877],
          name: "Output",
        },
      },
    },
  },
  "model-test": {
    path: "/models",
    id: 35,
    key: "model-test",
    label: "Tests the model__user module",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "model__user" },
          inputs: {
            name: { connections: [{ node: 2, output: "out0", data: {} }] },
            age: { connections: [{ node: 3, output: "out0", data: {} }] },
            country: { connections: [{ node: 4, output: "out0", data: {} }] },
            state: { connections: [{ node: 5, output: "out0", data: {} }] },
            city: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            name: { connections: [{ node: 10, input: "in1", data: {} }] },
            country: { connections: [] },
            age: { connections: [] },
            state: { connections: [{ node: 15, input: "in1", data: {} }] },
            city: { connections: [{ node: 13, input: "in1", data: {} }] },
          },
          position: [-130.54302814290344, -176.71599813305357],
          name: "Module",
        },
        2: {
          id: 2,
          data: { string: "Kris Gano" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "name", data: {} }] },
          },
          position: [-561.5155453413247, -398.6313780691253],
          name: "String",
        },
        3: {
          id: 3,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "age", data: {} }] },
          },
          position: [-558.5324114078041, -205.68510486676024],
          name: "Number",
        },
        4: {
          id: 4,
          data: { string: "United States" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "country", data: {} }] },
          },
          position: [-810.2926829169554, -10.20924081306309],
          name: "String",
        },
        5: {
          id: 5,
          data: { string: "Texas" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "state", data: {} }] },
          },
          position: [-812.2587984363524, 174.7962114591264],
          name: "String",
        },
        6: {
          id: 6,
          data: { string: "Austin" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "city", data: {} }] },
          },
          position: [-812.7292749316482, 360.6918041628494],
          name: "String",
        },
        7: {
          id: 7,
          data: { string: "My name is " },
          inputs: {
            in0: { connections: [{ node: 8, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 10, input: "in0", data: {} }] },
          },
          position: [68.63727712311926, 841.558008892705],
          name: "String",
        },
        8: {
          id: 8,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-213.66869609033392, 1001.9820207883045],
          name: "OnInitialize",
        },
        9: {
          id: 9,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2357.7140563190087, 255.11322455946134],
          name: "DisplayModal",
        },
        10: {
          id: 10,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [{ node: 1, output: "name", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in0", data: {} }] },
          },
          position: [513.052224504799, 577.2335947470227],
          name: "Append",
        },
        11: {
          id: 11,
          data: { preview: 0, in0: "", in1: " and I live in " },
          inputs: {
            in0: { connections: [{ node: 10, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "in0", data: {} }] },
          },
          position: [860.2536088957627, 450.6809943674136],
          name: "Append",
        },
        13: {
          id: 13,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 1, output: "city", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [1221.3887342760295, 240.52432484880612],
          name: "Append",
        },
        14: {
          id: 14,
          data: { preview: 0, in0: "", in1: ", " },
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [1576.950326277476, 33.154464511636874],
          name: "Append",
        },
        15: {
          id: 15,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [{ node: 1, output: "state", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [1926.9384550404793, -229.95062784924193],
          name: "Append",
        },
      },
    },
  },
  "new-fantasy-creature-generator": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {
            string:
              "Here's a list of 100 fantasy creature descriptions:\n~~~\ncute, adorable fantasy creature that resembles an owl with the features of a baby monkey\n~~~\ncute, adorable fantasy creature that resembles a monkey with the features of a giraffe\n~~~\ncute, adorable fantasy creature that resembles a porcupine with the features of a shark\n~~~\ncute, adorable fantasy creature that resembles a cod with the features of a dragon\n~~~\ncute, adorable fantasy creature that resembles a seal with the features of an elephant\n~~~\ncute, adorable fantasy creature that resembles an anteater with the features of a rhino\n~~~\n",
          },
          inputs: {
            in0: { connections: [{ node: 114, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 151, input: "prompt", data: {} }] },
          },
          position: [-1477.124753383565, -1229.0327469680578],
          name: "BigString",
        },
        114: {
          id: 114,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 1, input: "in0", data: {} }] },
          },
          position: [-1695.5608725678308, -694.7840057326523],
          name: "OnInitialize",
        },
        115: {
          id: 115,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 116, input: "in0", data: {} }] },
          },
          position: [-1689.2749400922567, -1674.0479013674487],
          name: "OnInitialize",
        },
        116: {
          id: 116,
          data: { string: "Executing query..." },
          inputs: {
            in0: { connections: [{ node: 115, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 117, input: "in0", data: {} }] },
          },
          position: [-1421.7646226272725, -1670.9249085827357],
          name: "String",
        },
        117: {
          id: 117,
          data: {},
          inputs: {
            in0: { connections: [{ node: 116, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-1089.9387180502897, -1719.5595871086189],
          name: "DisplayModal",
        },
        118: {
          id: 118,
          data: {},
          inputs: {
            in0: { connections: [{ node: 149, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2191.7528169488337, -645.0789965157452],
          name: "DisplayModal",
        },
        123: {
          id: 123,
          data: { module: "module-get-dalle-mini-images" },
          inputs: {
            prompt: { connections: [{ node: 144, output: "out0", data: {} }] },
          },
          outputs: {
            images: { connections: [{ node: 137, input: "in1", data: {} }] },
          },
          position: [587.9883879810048, -1598.1289545705615],
          name: "Module",
        },
        134: {
          id: 134,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 137, output: "out0", data: {} }] },
            in1: { connections: [{ node: 135, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 149, input: "in0", data: {} }] },
          },
          position: [1364.1984795916528, -1602.422431324512],
          name: "ArrayConcat",
        },
        135: {
          id: 135,
          data: {},
          inputs: {
            in0: { connections: [{ node: 146, output: "images", data: {} }] },
            in1: { connections: [{ node: 147, output: "images", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 134, input: "in1", data: {} }] },
          },
          position: [1140.5691653041554, -1498.381343606251],
          name: "Array",
        },
        137: {
          id: 137,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 138, output: "out0", data: {} }] },
            in1: { connections: [{ node: 123, output: "images", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 134, input: "in0", data: {} }] },
          },
          position: [1114.3870105414348, -1758.279989059397],
          name: "ArrayConcat",
        },
        138: {
          id: 138,
          data: {},
          inputs: {
            in0: { connections: [{ node: 155, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 137, input: "in0", data: {} }] },
          },
          position: [802.2451877104869, -1836.4612035749112],
          name: "Array",
        },
        144: {
          id: 144,
          data: {
            in0: "String",
            in1: "CREATURE_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 145, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 155, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 123, input: "prompt", data: {} },
                { node: 146, input: "prompt", data: {} },
                { node: 147, input: "prompt", data: {} },
                { node: 148, input: "prompt", data: {} },
              ],
            },
          },
          position: [268.4102716380855, -1261.8103178488454],
          name: "StringReplace",
        },
        145: {
          id: 145,
          data: {
            string:
              "Artstation style = low-poly, color, textured, painterly: ( subject = low-poly CREATURE_DESCRIPTION +(anatomically correct facial features + (highly detailed = pokemon)+((low-poly and anatomically correct (low-poly and highly detailed + anatomically correct and accurately shaped eyes=👁👁))))",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 144, input: "in0", data: {} }] },
          },
          position: [-381.96769351941003, -2234.125270425829],
          name: "BigString",
        },
        146: {
          id: 146,
          data: { module: "module-get-dalle-mini-images" },
          inputs: {
            prompt: { connections: [{ node: 144, output: "out0", data: {} }] },
          },
          outputs: {
            images: { connections: [{ node: 135, input: "in0", data: {} }] },
          },
          position: [591.4463353189782, -1380.9565315360474],
          name: "Module",
        },
        147: {
          id: 147,
          data: { module: "module-get-dalle-mini-images" },
          inputs: {
            prompt: { connections: [{ node: 144, output: "out0", data: {} }] },
          },
          outputs: {
            images: { connections: [{ node: 135, input: "in1", data: {} }] },
          },
          position: [590.1923732611127, -1173.1062191277813],
          name: "Module",
        },
        148: {
          id: 148,
          data: { module: "module-get-dalle-mini-images" },
          inputs: {
            prompt: { connections: [{ node: 144, output: "out0", data: {} }] },
          },
          outputs: {
            images: { connections: [{ node: 149, input: "in1", data: {} }] },
          },
          position: [591.1893093132779, -971.7885140920258],
          name: "Module",
        },
        149: {
          id: 149,
          data: {},
          inputs: {
            in0: { connections: [{ node: 134, output: "out0", data: {} }] },
            in1: { connections: [{ node: 148, output: "images", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 118, input: "in0", data: {} },
                { node: 158, input: "in0", data: {} },
              ],
            },
          },
          position: [1561.039027505614, -1426.4187505628179],
          name: "Array",
        },
        151: {
          id: 151,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 1, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 152, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 153, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 154, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 155, input: "in0", data: {} }] },
          },
          position: [-729.1368626019278, -1213.8282033066694],
          name: "Module",
        },
        152: {
          id: 152,
          data: { num: "80" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 151, input: "numTokens", data: {} }],
            },
          },
          position: [-1145.9329405126393, -594.9151394822013],
          name: "Number",
        },
        153: {
          id: 153,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 151, input: "topP", data: {} }] },
          },
          position: [-1147.3027684528156, -395.3617028603275],
          name: "Number",
        },
        154: {
          id: 154,
          data: { string: "~~~" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 151, input: "terminator", data: {} }],
            },
          },
          position: [-1147.4245137693697, -196.21401391102867],
          name: "String",
        },
        155: {
          id: 155,
          data: {},
          inputs: {
            in0: { connections: [{ node: 151, output: "text", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 144, input: "in2", data: {} },
                { node: 138, input: "in0", data: {} },
              ],
            },
          },
          position: [-234.90525359089264, -1295.9874735042458],
          name: "StringTrim",
        },
        156: {
          id: 156,
          data: {},
          inputs: {
            in0: { connections: [{ node: 158, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2181.034418917233, -402.16438198863966],
          name: "TextToSpeech",
        },
        157: {
          id: 157,
          data: { string: "Fantasy creature generation is complete" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 158, input: "in1", data: {} }] },
          },
          position: [1578.6098514669225, -452.7358703394487],
          name: "String",
        },
        158: {
          id: 158,
          data: {},
          inputs: {
            in0: { connections: [{ node: 149, output: "out0", data: {} }] },
            in1: { connections: [{ node: 157, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 156, input: "in0", data: {} }] },
          },
          position: [1901.738856167976, -404.7416444790066],
          name: "Await",
        },
      },
      comments: [
        {
          text: "Starting modal display",
          position: [-1712.4919265834974, -1749.5595871086189],
          links: [117, 115, 116],
          type: "frame",
          width: 872.5532085332079,
          height: 383.34605990413854,
        },
        {
          text: "Text Generation: Generates a sentence containing a description of an animal combination!",
          position: [-1725.5608725678308, -1325.9874735042458],
          links: [155, 1, 152, 114, 154, 153, 151],
          type: "frame",
          width: 1740.655618976938,
          height: 1373.2316793915277,
        },
        {
          text: "1",
          position: [-1733.7826392232773, -1707.808587442173],
          links: [115],
          type: "inline",
        },
        {
          text: "1",
          position: [-1733.1052104766623, -736.2051961876178],
          links: [114],
          type: "inline",
        },
        {
          text: "Return data back to user",
          position: [1535.8557335803055, -675.0789965157452],
          links: [118, 156, 158, 157],
          type: "frame",
          width: 905.897083368528,
          height: 661.5157629956402,
        },
        {
          text: "Generate images of creature",
          position: [-412.4437954625019, -2351.44424777923],
          links: [123, 146, 147, 148, 138, 145, 135, 137, 134, 149, 144],
          type: "frame",
          width: 2430.9382438248426,
          height: 1636.6557336872042,
        },
        {
          text: "2",
          position: [-416.44049559208133, -2275.3335598677163],
          links: [145],
          type: "inline",
        },
        {
          text: "3",
          position: [1559.5724054648254, -498.2367869005913],
          links: [157],
          type: "inline",
        },
      ],
    },
    key: "new-fantasy-creature-generator",
    label: "new-fantasy-creature-generator",
  },
  "module-array-size-10": {
    path: "/utils",
    id: 37,
    key: "module-array-size-10",
    label:
      "A module that takes up to 10 inputs and outputs an array comprised of the inputs",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "0" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 13, input: "in0", data: {} }] },
          },
          position: [-348.26784394104413, -155.55890212444214],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 13, input: "in1", data: {} }] },
          },
          position: [-346.26999099899376, -12.12842758387822],
          name: "Input",
        },
        3: {
          id: 3,
          data: { name: "array" },
          inputs: {
            input: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1541.0350087760853, 372.3823114422621],
          name: "Output",
        },
        4: {
          id: 4,
          data: { name: "2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [-348.03939831575525, 127.83107657345673],
          name: "Input",
        },
        5: {
          id: 5,
          data: { name: "3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-349.04739303750426, 268.55173563873285],
          name: "Input",
        },
        6: {
          id: 6,
          data: { name: "4" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-354.9434810794868, 411.94079098370577],
          name: "Input",
        },
        7: {
          id: 7,
          data: { name: "5" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 15, input: "in1", data: {} }] },
          },
          position: [-353.81545702726135, 551.3272738993516],
          name: "Input",
        },
        8: {
          id: 8,
          data: { name: "6" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 16, input: "in0", data: {} }] },
          },
          position: [-356.1995397189114, 692.0897617581476],
          name: "Input",
        },
        9: {
          id: 9,
          data: { name: "7" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-360.0045771238014, 832.8104470686785],
          name: "Input",
        },
        10: {
          id: 10,
          data: { name: "8" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [-358.2157391244477, 974.9071185968006],
          name: "Input",
        },
        11: {
          id: 11,
          data: { name: "9" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [-357.2899161197552, 1114.9706298879971],
          name: "Input",
        },
        13: {
          id: 13,
          data: { in0: "0", in1: "Activity Suggestion" },
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 2, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in0", data: {} }] },
          },
          position: [80.85390054735785, -126.92897140941791],
          name: "Array",
        },
        14: {
          id: 14,
          data: { in0: "Status Update", in1: "Random Fact" },
          inputs: {
            in0: { connections: [{ node: 4, output: "output", data: {} }] },
            in1: { connections: [{ node: 5, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [84.44250436334941, 180.1368283030515],
          name: "Array",
        },
        15: {
          id: 15,
          data: { in0: "Random Fact", in1: "Random Fact" },
          inputs: {
            in0: { connections: [{ node: 6, output: "output", data: {} }] },
            in1: { connections: [{ node: 7, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in1", data: {} }] },
          },
          position: [83.75667297994578, 487.20313642508927],
          name: "Array",
        },
        16: {
          id: 16,
          data: { in0: "Affirmation", in1: "Question" },
          inputs: {
            in0: { connections: [{ node: 8, output: "output", data: {} }] },
            in1: { connections: [{ node: 9, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in1", data: {} }] },
          },
          position: [85.20797526265345, 745.1144734359079],
          name: "Array",
        },
        17: {
          id: 17,
          data: { in0: "News", in1: "News" },
          inputs: {
            in0: { connections: [{ node: 10, output: "output", data: {} }] },
            in1: { connections: [{ node: 11, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in1", data: {} }] },
          },
          position: [88.79657426431949, 1020.8506927285448],
          name: "Array",
        },
        18: {
          id: 18,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [{ node: 14, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in0", data: {} }] },
          },
          position: [350.7895090517796, 16.55133765039326],
          name: "ArrayConcat",
        },
        19: {
          id: 19,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 15, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [629.7858343017328, 332.299221268904],
          name: "ArrayConcat",
        },
        20: {
          id: 20,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in0", data: {} }] },
          },
          position: [914.4487646378273, 585.6978663319344],
          name: "ArrayConcat",
        },
        21: {
          id: 21,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
            in1: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "input", data: {} }] },
          },
          position: [1161.0706968422899, 932.6134583127115],
          name: "ArrayConcat",
        },
      },
    },
  },
  "module-get-dalle-mini-images": {
    path: "/utils",
    id: 38,
    key: "module-get-dalle-mini-images",
    label:
      "Given a prompt input, returns an array of 9 images generated using Dall-E Mini",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {
            in0: "https://bf.dallemini.ai/generate",
            in1: "POST",
            in2: "Data",
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [] },
            in2: { connections: [{ node: 43, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [127.75925266708117, -238.15313889087835],
          name: "HTTPRequest",
        },
        5: {
          id: 5,
          data: { in0: "JSON", in1: "images" },
          inputs: {
            in0: { connections: [{ node: 35, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 6, input: "in0", data: {} },
                { node: 7, input: "in0", data: {} },
                { node: 8, input: "in0", data: {} },
                { node: 9, input: "in0", data: {} },
                { node: 10, input: "in0", data: {} },
                { node: 11, input: "in0", data: {} },
                { node: 12, input: "in0", data: {} },
                { node: 13, input: "in0", data: {} },
                { node: 36, input: "in0", data: {} },
              ],
            },
          },
          position: [835.7702206707095, -246.86510428669683],
          name: "GetJSONValueComponent",
        },
        6: {
          id: 6,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in1", data: {} }] },
          },
          position: [1254.7440510310264, -811.6725980269533],
          name: "GetArrayElement",
        },
        7: {
          id: 7,
          data: { in1: "1" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in1", data: {} }] },
          },
          position: [1249.6312305498504, -639.6546888471283],
          name: "GetArrayElement",
        },
        8: {
          id: 8,
          data: { in1: "2" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in1", data: {} }] },
          },
          position: [1257.5186548896938, -466.49798325744223],
          name: "GetArrayElement",
        },
        9: {
          id: 9,
          data: { in1: "3" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 22, input: "in1", data: {} }] },
          },
          position: [1260.0434773710986, -293.91354946946836],
          name: "GetArrayElement",
        },
        10: {
          id: 10,
          data: { in1: "4" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in1", data: {} }] },
          },
          position: [1258.8307732344313, -120.1847057913136],
          name: "GetArrayElement",
        },
        11: {
          id: 11,
          data: { in1: "5" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 24, input: "in1", data: {} }] },
          },
          position: [1257.6180782451145, 51.10324670834089],
          name: "GetArrayElement",
        },
        12: {
          id: 12,
          data: { in1: "6" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 25, input: "in1", data: {} }] },
          },
          position: [1258.8462022445508, 223.6876524098759],
          name: "GetArrayElement",
        },
        13: {
          id: 13,
          data: { in1: "7" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 26, input: "in1", data: {} }] },
          },
          position: [1260.0741822661826, 399.285313674355],
          name: "GetArrayElement",
        },
        15: {
          id: 15,
          data: { module: "module-array-size-10" },
          inputs: {
            0: { connections: [{ node: 27, output: "out0", data: {} }] },
            1: { connections: [{ node: 28, output: "out0", data: {} }] },
            2: { connections: [{ node: 29, output: "out0", data: {} }] },
            3: { connections: [{ node: 30, output: "out0", data: {} }] },
            4: { connections: [{ node: 31, output: "out0", data: {} }] },
            5: { connections: [{ node: 32, output: "out0", data: {} }] },
            6: { connections: [{ node: 33, output: "out0", data: {} }] },
            7: { connections: [{ node: 34, output: "out0", data: {} }] },
            8: { connections: [{ node: 38, output: "out0", data: {} }] },
            9: { connections: [] },
          },
          outputs: {
            array: { connections: [{ node: 16, input: "input", data: {} }] },
          },
          position: [2371.21486229995, -433.2798135715646],
          name: "Module",
        },
        16: {
          id: 16,
          data: { name: "images" },
          inputs: {
            input: { connections: [{ node: 15, output: "array", data: {} }] },
          },
          outputs: {},
          position: [2873.7172286380464, -435.9122602323577],
          name: "Output",
        },
        18: {
          id: 18,
          data: { string: "data:image/png;base64, " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [
                { node: 19, input: "in0", data: {} },
                { node: 20, input: "in0", data: {} },
                { node: 21, input: "in0", data: {} },
                { node: 22, input: "in0", data: {} },
                { node: 23, input: "in0", data: {} },
                { node: 24, input: "in0", data: {} },
                { node: 25, input: "in0", data: {} },
                { node: 26, input: "in0", data: {} },
                { node: 37, input: "in0", data: {} },
              ],
            },
          },
          position: [1298.8575142620107, -1123.3545801562218],
          name: "String",
        },
        19: {
          id: 19,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 27, input: "in0", data: {} }] },
          },
          position: [1788.0610575984067, -802.3005806014629],
          name: "Append",
        },
        20: {
          id: 20,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 28, input: "in0", data: {} }] },
          },
          position: [1791.3204667186656, -633.7296948391588],
          name: "Append",
        },
        21: {
          id: 21,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 29, input: "in0", data: {} }] },
          },
          position: [1793.3612320059854, -459.9610333235868],
          name: "Append",
        },
        22: {
          id: 22,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 30, input: "in0", data: {} }] },
          },
          position: [1791.8693263964597, -289.40042970755457],
          name: "Append",
        },
        23: {
          id: 23,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 10, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 31, input: "in0", data: {} }] },
          },
          position: [1797.7276563102007, -116.24086099740241],
          name: "Append",
        },
        24: {
          id: 24,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 32, input: "in0", data: {} }] },
          },
          position: [1792.4185364366167, 55.53820905274497],
          name: "Append",
        },
        25: {
          id: 25,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in0", data: {} }] },
          },
          position: [1793.8504023769635, 226.0987006489081],
          name: "Append",
        },
        26: {
          id: 26,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 13, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 34, input: "in0", data: {} }] },
          },
          position: [1792.8043004463536, 396.4968821636101],
          name: "Append",
        },
        27: {
          id: 27,
          data: {},
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "0", data: {} }] },
          },
          position: [2026.5609791087422, -801.0651469111882],
          name: "Image",
        },
        28: {
          id: 28,
          data: {},
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "1", data: {} }] },
          },
          position: [2026.6122285760484, -617.9569863161411],
          name: "Image",
        },
        29: {
          id: 29,
          data: {},
          inputs: {
            in0: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "2", data: {} }] },
          },
          position: [2030.642913957063, -424.8998516399707],
          name: "Image",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "3", data: {} }] },
          },
          position: [2030.6941634243692, -259.69935851053526],
          name: "Image",
        },
        31: {
          id: 31,
          data: {},
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "4", data: {} }] },
          },
          position: [2028.755685992375, -92.50897553901117],
          name: "Image",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "5", data: {} }] },
          },
          position: [2024.827495968958, 76.67103298409032],
          name: "Image",
        },
        33: {
          id: 33,
          data: {},
          inputs: {
            in0: { connections: [{ node: 25, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "6", data: {} }] },
          },
          position: [2020.8993059455408, 245.8510415071918],
          name: "Image",
        },
        34: {
          id: 34,
          data: {},
          inputs: {
            in0: { connections: [{ node: 26, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "7", data: {} }] },
          },
          position: [2014.9813866382076, 424.89658317526727],
          name: "Image",
        },
        35: {
          id: 35,
          data: { in0: "JSON", in1: "data" },
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [452.69041188442293, -246.4733338239689],
          name: "GetJSONValueComponent",
        },
        36: {
          id: 36,
          data: { in1: "8" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 37, input: "in1", data: {} }] },
          },
          position: [1259.5631844837906, 572.9572440420704],
          name: "GetArrayElement",
        },
        37: {
          id: 37,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
            in1: { connections: [{ node: 36, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 38, input: "in0", data: {} }] },
          },
          position: [1792.5061431535632, 568.0960441745954],
          name: "Append",
        },
        38: {
          id: 38,
          data: {},
          inputs: {
            in0: { connections: [{ node: 37, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "8", data: {} }] },
          },
          position: [2016.6892546654126, 596.5954842977516],
          name: "Image",
        },
        39: {
          id: 39,
          data: { name: "prompt" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 42, input: "in1", data: {} }] },
          },
          position: [-899.6264544926333, -107.05063094850377],
          name: "Input",
        },
        40: {
          id: 40,
          data: { string: '{"prompt":"' },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 42, input: "in0", data: {} }] },
          },
          position: [-777.7789189503044, -309.5876597359963],
          name: "String",
        },
        41: {
          id: 41,
          data: { string: '"}' },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 43, input: "in1", data: {} }] },
          },
          position: [-782.644745203083, 63.0308298041109],
          name: "String",
        },
        42: {
          id: 42,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 40, output: "out0", data: {} }] },
            in1: { connections: [{ node: 39, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 43, input: "in0", data: {} }] },
          },
          position: [-418.7336678860147, -208.50405110354248],
          name: "Append",
        },
        43: {
          id: 43,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 42, output: "out0", data: {} }] },
            in1: { connections: [{ node: 41, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in2", data: {} }] },
          },
          position: [-153.22627774662186, -169.43943418861605],
          name: "Append",
        },
      },
    },
  },
  "module-get-bloom-model-data": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        3: {
          id: 3,
          data: {
            string:
              '{\n   "inputs": "INPUT_PROMPT",\n   "parameters": {\n      "seed": INPUT_SEED, \n      "early_stopping": false, \n      "length_penalty": 0, \n      "max_new_tokens": INPUT_NUM_TOKENS, \n      "do_sample": true, \n      "top_p": INPUT_TOP_P\n   }\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 8, input: "in0", data: {} }] },
          },
          position: [-1102.9689892454883, -1286.3451679921106],
          name: "BigString",
        },
        4: {
          id: 4,
          data: {
            in0: "https://api-inference.huggingface.co/models/bigscience/bloom",
            in1: "POST",
            in2: "Data",
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [] },
            in2: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [1266.8691007874027, -182.31855585801705],
          name: "HTTPRequest",
        },
        5: {
          id: 5,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [1939.3856467683195, -188.29054118860043],
          name: "GetArrayElement",
        },
        6: {
          id: 6,
          data: { in0: "JSON", in1: "generated_text" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 22, input: "in0", data: {} }] },
          },
          position: [2249.5281140544, -190.0672834103436],
          name: "GetJSONValueComponent",
        },
        7: {
          id: 7,
          data: { in0: "JSON", in1: "data" },
          inputs: {
            in0: { connections: [{ node: 4, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [1585.2340701217788, -189.9833722917057],
          name: "GetJSONValueComponent",
        },
        8: {
          id: 8,
          data: { in0: "String", in1: "INPUT_PROMPT", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [-377.4187724837685, -913.5062897386891],
          name: "StringReplace",
        },
        9: {
          id: 9,
          data: { name: "text" },
          inputs: {
            input: { connections: [{ node: 24, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [277.3750619731884, 411.3613180263995],
          name: "Output",
        },
        11: {
          id: 11,
          data: { name: "prompt" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "in0", data: {} }] },
          },
          position: [-1090.2444055587657, -554.7747867958955],
          name: "Input",
        },
        12: {
          id: 12,
          data: { name: "numTokens" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "in3", data: {} }] },
          },
          position: [-1091.521450008748, -384.3166531954625],
          name: "Input",
        },
        13: {
          id: 13,
          data: { name: "topP" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 24, input: "in1", data: {} },
                { node: 24, input: "in2", data: {} },
              ],
            },
          },
          position: [-1082.2358510874403, -184.78259724738732],
          name: "Input",
        },
        14: {
          id: 14,
          data: { in0: "String", in1: "INPUT_NUM_TOKENS", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [81.75688924200537, -589.9450263944519],
          name: "StringReplace",
        },
        15: {
          id: 15,
          data: { in0: "String", in1: "INPUT_TOP_P", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [365.44988252484836, -386.492715853762],
          name: "StringReplace",
        },
        16: {
          id: 16,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 8, input: "in2", data: {} }] },
          },
          position: [-737.0794892103883, -541.8366055863978],
          name: "EscapeString",
        },
        17: {
          id: 17,
          data: { in0: "String", in1: "INPUT_SEED", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in2", data: {} }] },
          },
          position: [704.2067945934123, -267.8128113231694],
          name: "StringReplace",
        },
        18: {
          id: 18,
          data: { preview: "", in0: "0", in1: "1000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 17, input: "in2", data: {} }] },
          },
          position: [354.75790531751153, -40.271378784500506],
          name: "RandInt",
        },
        19: {
          id: 19,
          data: { name: "terminator" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "in4", data: {} }] },
          },
          position: [-1089.1415528266632, 171.41806770488031],
          name: "Input",
        },
        20: {
          id: 20,
          data: { in0: "String", in1: "Split On" },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in0", data: {} }] },
          },
          position: [3333.796083847173, 83.12598874680312],
          name: "StringSplit",
        },
        21: {
          id: 21,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [3575.698247360525, 90.82805025631227],
          name: "GetArrayElement",
        },
        22: {
          id: 22,
          data: { in0: "String", in2: " ", in1: "Find" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [1985.8690485787718, -1194.1250955973223],
          name: "StringReplace",
        },
        23: {
          id: 23,
          data: {},
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [2299.3724581976007, -1193.1194642379228],
          name: "StringTrim",
        },
        24: {
          id: 24,
          data: {
            in0: "Prompt",
            in1: "TopP",
            in2: "Temperature",
            in3: "Response Length",
            in4: "Terminator",
          },
          inputs: {
            in0: { connections: [{ node: 11, output: "output", data: {} }] },
            in1: { connections: [{ node: 13, output: "output", data: {} }] },
            in2: { connections: [{ node: 13, output: "output", data: {} }] },
            in3: { connections: [{ node: 12, output: "output", data: {} }] },
            in4: { connections: [{ node: 19, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 9, input: "input", data: {} }] },
          },
          position: [-106.59261912693884, 247.57445197887506],
          name: "GPTQuery",
        },
      },
      comments: [],
    },
    key: "module-get-bloom-model-data",
    label: "module-get-bloom-model-data",
  },
  "test-get-bloom-model-data-module": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "text", data: {} }] },
          },
          outputs: {},
          position: [936.6982154667578, -409.0382901135145],
          name: "DisplayModal",
        },
        2: {
          id: 2,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-1074.8400189286249, 126.28790414716588],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {
            string:
              "Here are 5 questions with corresponding answers\n\nQuestion: How many inches are in a foot?\nAnswer: There are twelve inches in a foot.\n~~~\nQuestion: How do you boil water?\nAnswer: Pour water into a pot or pan, and then place it on the stove on high heat.\n~~~\nQuestion: What state is Austin in?\nAnswer: The city of Austin is in Texas.\n~~~\nQuestion: ",
          },
          inputs: {
            in0: { connections: [{ node: 2, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in0", data: {} }] },
          },
          position: [-841.3888190631667, -393.99972011508623],
          name: "BigString",
        },
        4: {
          id: 4,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 6, input: "numTokens", data: {} }] },
          },
          position: [-545.9227946612222, 272.1279832505308],
          name: "Number",
        },
        5: {
          id: 5,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 6, input: "topP", data: {} }] },
          },
          position: [-548.9248038986658, 477.6438020139766],
          name: "Number",
        },
        6: {
          id: 6,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 13, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 4, output: "out0", data: {} }] },
            topP: { connections: [{ node: 5, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 8, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: {
              connections: [
                { node: 1, input: "in0", data: {} },
                { node: 7, input: "in0", data: {} },
              ],
            },
          },
          position: [433.4838043443849, -406.64763354724806],
          name: "Module",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "text", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [937.5025231425043, -293.85998761205246],
          name: "TextToSpeech",
        },
        8: {
          id: 8,
          data: { string: "~~~" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 6, input: "terminator", data: {} }] },
          },
          position: [-548.7464014191904, 687.2037634504835],
          name: "String",
        },
        9: {
          id: 9,
          data: { string: "Prompt" },
          inputs: {
            string: { connections: [{ node: 10, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in1", data: {} }] },
          },
          position: [-857.69317108753, -603.4072154068136],
          name: "Input Prompt",
        },
        10: {
          id: 10,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "string", data: {} }] },
          },
          position: [-1089.211502396737, -567.511014644671],
          name: "OnInitialize",
        },
        11: {
          id: 11,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "in0", data: {} }] },
          },
          position: [-190.96150522069297, -554.6144072949656],
          name: "Append",
        },
        12: {
          id: 12,
          data: { string: "\\nAnswer: " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 13, input: "in1", data: {} }] },
          },
          position: [-546.4145723128546, -855.6449529640901],
          name: "String",
        },
        13: {
          id: 13,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "prompt", data: {} }] },
          },
          position: [85.58990687280712, -674.0082106334017],
          name: "Append",
        },
      },
    },
    key: "test-get-bloom-model-data-module",
    label: "test-get-bloom-model-data-module",
  },
  "data-contacts": {
    path: "/data",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {
            string:
              '{\n  "kris gano": {\n    "name": "Kris Gano",\n    "company": "Dev Launchers",\n    "title": "President",\n    "age": 32\n  },\n  "name2": {\n    "name": "name2",\n    "company": "company2",\n    "title": "title2",\n    "age": 2\n  },\n  "name3": {\n    "name": "name3",\n    "company": "company3",\n    "title": "title3",\n    "age": 3\n  },\n  "name4": {\n    "name": "name4",\n    "company": "company4",\n    "title": "title4",\n    "age": 4\n  }\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [
                { node: 6, input: "input", data: {} },
                { node: 10, input: "in0", data: {} },
              ],
            },
          },
          position: [-433.7910089131663, -255.61165177645128],
          name: "BigString",
        },
        5: {
          id: 5,
          data: { in0: "JSON", in1: "company" },
          inputs: {
            in0: { connections: [{ node: 10, output: "out0", data: {} }] },
            in1: { connections: [{ node: 8, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "input", data: {} }] },
          },
          position: [705.6454383354484, 760.9623593229741],
          name: "GetJSONValueComponent",
        },
        6: {
          id: 6,
          data: { name: "contacts" },
          inputs: {
            input: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1105.6313669107424, -226.39028701406386],
          name: "Output",
        },
        7: {
          id: 7,
          data: { name: "contactKey" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-428.64166745189067, 519.6554048983911],
          name: "Input",
        },
        8: {
          id: 8,
          data: { name: "contactAttribute" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 5, input: "in1", data: {} }] },
          },
          position: [-423.36520227628, 799.3970102097371],
          name: "Input",
        },
        9: {
          id: 9,
          data: { name: "contactData" },
          inputs: {
            input: { connections: [{ node: 10, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1117.3787321948744, 507.9505846074109],
          name: "Output",
        },
        10: {
          id: 10,
          data: { in0: "JSON", in1: "Key" },
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
            in1: { connections: [{ node: 7, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 5, input: "in0", data: {} },
                { node: 9, input: "input", data: {} },
              ],
            },
          },
          position: [307.8206728084307, 512.5015150257321],
          name: "GetJSONValueComponent",
        },
        11: {
          id: 11,
          data: { name: "attributeData" },
          inputs: {
            input: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1119.098390131939, 763.479308265763],
          name: "Output",
        },
      },
    },
    key: "data-contacts",
    label: "data-contacts",
  },
  "test-contact-data": {
    path: "data",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "data-contacts" },
          inputs: {
            contactKey: {
              connections: [{ node: 2, output: "out0", data: {} }],
            },
            contactAttribute: { connections: [] },
          },
          outputs: {
            contacts: { connections: [] },
            contactData: {
              connections: [
                { node: 6, input: "in0", data: {} },
                { node: 8, input: "in0", data: {} },
                { node: 13, input: "in0", data: {} },
              ],
            },
            attributeData: { connections: [] },
          },
          position: [-308.7026117402435, -364.25726930337333],
          name: "Module",
        },
        2: {
          id: 2,
          data: { string: "kris gano" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "contactKey", data: {} }] },
          },
          position: [-604.8145296527374, -368.9596874575901],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-825.3009414211219, -374.765038094466],
          name: "OnInitialize",
        },
        5: {
          id: 5,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "array", data: {} }] },
          },
          outputs: {},
          position: [1292.5637699415493, -369.86988602196925],
          name: "DisplayModal",
        },
        6: {
          id: 6,
          data: { in0: "JSON", in1: "name" },
          inputs: {
            in0: {
              connections: [{ node: 1, output: "contactData", data: {} }],
            },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 10, input: "0", data: {} }] },
          },
          position: [254.53591206786294, -364.1298059223926],
          name: "GetJSONValueComponent",
        },
        8: {
          id: 8,
          data: { in0: "JSON", in1: "title" },
          inputs: {
            in0: {
              connections: [{ node: 1, output: "contactData", data: {} }],
            },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 10, input: "2", data: {} }] },
          },
          position: [249.16998462326418, 171.4043086591695],
          name: "GetJSONValueComponent",
        },
        10: {
          id: 10,
          data: { module: "module-array-size-10" },
          inputs: {
            0: { connections: [{ node: 6, output: "out0", data: {} }] },
            1: { connections: [{ node: 11, output: "out0", data: {} }] },
            2: { connections: [{ node: 8, output: "out0", data: {} }] },
            3: { connections: [{ node: 12, output: "out0", data: {} }] },
            4: { connections: [{ node: 13, output: "out0", data: {} }] },
            5: { connections: [] },
            6: { connections: [] },
            7: { connections: [] },
            8: { connections: [] },
            9: { connections: [] },
          },
          outputs: {
            array: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [787.7192150594175, -372.72924945770774],
          name: "Module",
        },
        11: {
          id: 11,
          data: { string: " is a " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "1", data: {} }] },
          },
          position: [327.92062126607885, -101.23960483168379],
          name: "String",
        },
        12: {
          id: 12,
          data: { string: " at " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "3", data: {} }] },
          },
          position: [323.63060384920556, 420.8497438544056],
          name: "String",
        },
        13: {
          id: 13,
          data: { in0: "company", in1: "company" },
          inputs: {
            in0: {
              connections: [{ node: 1, output: "contactData", data: {} }],
            },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 10, input: "4", data: {} }] },
          },
          position: [245.1878228989347, 689.4242143881902],
          name: "GetJSONValueComponent",
        },
      },
    },
    key: "test-contact-data",
    label: "test-contact-data",
  },
  "module-ai-assistant": {
    path: "/ai-assistant",
    data: {
      id: "demo@0.1.0",
      nodes: {
        5: {
          id: 5,
          data: {},
          inputs: {
            in0: { connections: [{ node: 115, output: "output", data: {} }] },
          },
          outputs: {},
          position: [-3584.3106058444737, 616.221197052193],
          name: "DisplayModal",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 115, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 119, input: "inputString", data: {} },
                { node: 120, input: "trueData", data: {} },
              ],
            },
          },
          position: [-3584.615601547915, 727.30691830999],
          name: "TextToSpeech",
        },
        56: {
          id: 56,
          data: {
            0: "0",
            1: "Activity Suggestion",
            2: "Status Update",
            3: "Status Update",
            4: "Random Fact",
            5: "Affirmation",
            6: "Question",
            7: "Question",
            8: "News",
            9: "News",
            module: "module-array-size-10",
            name: "name",
            age: "age",
            country: "country",
            state: "state",
            city: "city",
          },
          inputs: {
            0: { connections: [{ node: 57, output: "out0", data: {} }] },
            1: { connections: [] },
            2: { connections: [] },
            3: { connections: [] },
            4: { connections: [] },
            5: { connections: [] },
            6: { connections: [] },
            7: { connections: [] },
            8: { connections: [] },
            9: { connections: [] },
          },
          outputs: {
            array: {
              connections: [
                { node: 62, input: "in0", data: {} },
                { node: 63, input: "in0", data: {} },
              ],
            },
          },
          position: [-6042.308124144584, -235.80474698431925],
          name: "Module",
        },
        57: {
          id: 57,
          data: { string: "Activity Suggestion" },
          inputs: {
            in0: { connections: [{ node: 127, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 56, input: "0", data: {} }] },
          },
          position: [-6488.6413233269, -227.3056321733177],
          name: "String",
        },
        61: {
          id: 61,
          data: { in0: "0", in1: "Max" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 62, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 63, input: "in1", data: {} }] },
          },
          position: [-5293.849115506824, -58.88876706507439],
          name: "RandInt",
        },
        62: {
          id: 62,
          data: {},
          inputs: {
            in0: { connections: [{ node: 56, output: "array", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 61, input: "in1", data: {} }] },
          },
          position: [-5537.591262717556, -67.68007349967141],
          name: "ArrayLength",
        },
        63: {
          id: 63,
          data: { in1: "Index" },
          inputs: {
            in0: { connections: [{ node: 56, output: "array", data: {} }] },
            in1: { connections: [{ node: 61, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 88, input: "in1", data: {} },
                { node: 115, input: "switchOnValue", data: {} },
              ],
            },
          },
          position: [-5015.625634681725, -231.87120885170754],
          name: "GetArrayElement",
        },
        75: {
          id: 75,
          data: {
            module: "module-interval-signal-driver",
            inputSignal: "inputSignal",
            intervalMilliseconds: "40000",
            intervalPulseChance: "80",
          },
          inputs: {
            intervalMilliseconds: { connections: [] },
            intervalPulseChance: { connections: [] },
          },
          outputs: {
            pulseSignal: {
              connections: [{ node: 127, input: "trueData", data: {} }],
            },
          },
          position: [-9026.803490498909, 30.141512323373238],
          name: "Module",
        },
        78: {
          id: 78,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [
                { node: 79, input: "in0", data: {} },
                { node: 126, input: "in0", data: {} },
              ],
            },
          },
          position: [-9039.17716970091, 703.30543098016],
          name: "OnInitialize",
        },
        79: {
          id: 79,
          data: { string: "Running AI Assistant..." },
          inputs: {
            in0: { connections: [{ node: 78, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 80, input: "in0", data: {} }] },
          },
          position: [-8804.087404635133, 551.3365158035197],
          name: "String",
        },
        80: {
          id: 80,
          data: {},
          inputs: {
            in0: { connections: [{ node: 79, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-8231.306202308333, 541.2078865420386],
          name: "DisplayModal",
        },
        84: {
          id: 84,
          data: {
            module: "module-ai-assistant-generate-affirmation",
            userName: "Kris",
          },
          inputs: { userName: { connections: [] } },
          outputs: {
            affirmationString: {
              connections: [{ node: 115, input: "output1", data: {} }],
            },
          },
          position: [-4803.954572421824, 932.8078775581873],
          name: "Module",
        },
        88: {
          id: 88,
          data: { in0: "ai-assistant-message-type", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 63, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-4639.862274803663, -375.74490331092346],
          name: "LocalCacheSet",
        },
        103: {
          id: 103,
          data: {
            module: "module-ai-assistant-generate-activity-suggestion",
            userDescription:
              "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
            effortLevel: "Low Effort",
          },
          inputs: {
            userDescription: { connections: [] },
            effortLevel: { connections: [] },
          },
          outputs: {
            out: { connections: [{ node: 115, input: "output2", data: {} }] },
          },
          position: [-5070.094172747433, 1163.850432115199],
          name: "Module",
        },
        108: {
          id: 108,
          data: {
            module: "module-ai-assistant-generate-random-fact",
            inputSignal: "inputSignal",
          },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            out: { connections: [{ node: 115, input: "output3", data: {} }] },
          },
          position: [-4800.62901521706, 1536.4622964435964],
          name: "Module",
        },
        110: {
          id: 110,
          data: {
            module: "module-ai-assistant-generate-status-update",
            userDescription:
              "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: { userDescription: { connections: [] } },
          outputs: {
            out: { connections: [{ node: 115, input: "output4", data: {} }] },
          },
          position: [-5065.331125464948, 1773.5931172364546],
          name: "Module",
        },
        113: {
          id: 113,
          data: {
            module: "module-ai-assistant-generate-random-news-message",
            inputSignal: "inputSignal",
          },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            out: { connections: [{ node: 115, input: "output5", data: {} }] },
          },
          position: [-4797.736738634883, 2090.606975154771],
          name: "Module",
        },
        115: {
          id: 115,
          data: {
            module: "module-switch-condition-8",
            switchOnValue: "switchOnValue",
            checkAgainst1: "Affirmation",
            output1: "output1",
            checkAgainst2: "Activity Suggestion",
            output2: "output2",
            checkAgainst3: "Random Fact",
            output3: "output3",
            checkAgainst4: "Status Update",
            output4: "output4",
            checkAgainst5: "News",
            output5: "output5",
            checkAgainst6: "Question",
            output6: "output6",
            checkAgainst7: "Placeholder",
            output7: "Placeholder",
            checkAgainst8: "Placeholder",
            output8: "Placeholder",
            default: "Placeholder",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 63, output: "out0", data: {} }],
            },
            checkAgainst1: { connections: [] },
            output1: {
              connections: [
                { node: 84, output: "affirmationString", data: {} },
              ],
            },
            checkAgainst2: { connections: [] },
            output2: { connections: [{ node: 103, output: "out", data: {} }] },
            checkAgainst3: { connections: [] },
            output3: { connections: [{ node: 108, output: "out", data: {} }] },
            checkAgainst4: { connections: [] },
            output4: { connections: [{ node: 110, output: "out", data: {} }] },
            checkAgainst5: { connections: [] },
            output5: { connections: [{ node: 113, output: "out", data: {} }] },
            checkAgainst6: { connections: [] },
            output6: { connections: [{ node: 117, output: "out", data: {} }] },
            checkAgainst7: { connections: [] },
            output7: { connections: [] },
            checkAgainst8: { connections: [] },
            output8: { connections: [] },
            default: { connections: [] },
          },
          outputs: {
            output: {
              connections: [
                { node: 6, input: "in0", data: {} },
                { node: 5, input: "in0", data: {} },
              ],
            },
          },
          position: [-4193.7686433992685, 833.6524219580181],
          name: "Module",
        },
        117: {
          id: 117,
          data: {
            module: "module-ai-assistant-ask-question",
            inputSignal: "inputSignal",
          },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            out: { connections: [{ node: 115, input: "output6", data: {} }] },
          },
          position: [-4791.9580818664335, 2342.9225144949105],
          name: "Module",
        },
        118: {
          id: 118,
          data: {
            module: "module-ai-assistant-handle-user-response",
            aiMessage: "aiMessage",
          },
          inputs: {
            aiMessage: {
              connections: [{ node: 120, output: "outTrue", data: {} }],
            },
          },
          outputs: { out: { connections: [] } },
          position: [-2454.366523438057, 437.31536419842206],
          name: "Module",
        },
        119: {
          id: 119,
          data: {
            module: "check-if-string-is-question",
            inputString: "inputString",
          },
          inputs: {
            inputString: {
              connections: [{ node: 6, output: "out0", data: {} }],
            },
          },
          outputs: {
            isQuestionBool: {
              connections: [{ node: 120, input: "in0", data: {} }],
            },
          },
          position: [-3243.980506277411, 446.58440810476134],
          name: "Module",
        },
        120: {
          id: 120,
          data: {},
          inputs: {
            in0: {
              connections: [{ node: 119, output: "isQuestionBool", data: {} }],
            },
            trueData: { connections: [{ node: 6, output: "out0", data: {} }] },
            falseData: {
              connections: [{ node: 139, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: {
              connections: [{ node: 118, input: "aiMessage", data: {} }],
            },
            outFalse: { connections: [] },
          },
          position: [-2721.4508597635067, 570.4005868291448],
          name: "Branch",
        },
        124: {
          id: 124,
          data: { in0: "Key", in1: "0" },
          inputs: {
            in0: { connections: [{ node: 126, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [-8290.481398011669, 848.7857639656434],
          name: "LocalCacheSet",
        },
        125: {
          id: 125,
          data: { in0: "ASSISTANT_ACTIVE" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 131, input: "in0", data: {} }] },
          },
          position: [-8487.084280310495, -395.9850512288938],
          name: "LocalCacheGet",
        },
        126: {
          id: 126,
          data: { string: "ASSISTANT_ACTIVE" },
          inputs: {
            in0: { connections: [{ node: 78, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 124, input: "in0", data: {} }] },
          },
          position: [-8796.976752529737, 872.472821570366],
          name: "String",
        },
        127: {
          id: 127,
          data: {},
          inputs: {
            in0: { connections: [{ node: 131, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 75, output: "pulseSignal", data: {} }],
            },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 130, input: "in0", data: {} },
                { node: 57, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [] },
          },
          position: [-7817.433645516293, 46.53242570026515],
          name: "Branch",
        },
        128: {
          id: 128,
          data: { in0: "Key", in1: "1" },
          inputs: {
            in0: { connections: [{ node: 130, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [-6922.879770440336, -378.10016728810893],
          name: "LocalCacheSet",
        },
        129: {
          id: 129,
          data: { string: "ASSISTANT_ACTIVE" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 130, input: "in1", data: {} }] },
          },
          position: [-7628.644553913435, -380.410595849176],
          name: "String",
        },
        130: {
          id: 130,
          data: {},
          inputs: {
            in0: { connections: [{ node: 127, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 129, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 128, input: "in0", data: {} }] },
          },
          position: [-7228.133297142132, -276.78183002842235],
          name: "Await",
        },
        131: {
          id: 131,
          data: {},
          inputs: {
            in0: { connections: [{ node: 125, output: "out0", data: {} }] },
            in1: { connections: [{ node: 132, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 127, input: "in0", data: {} }] },
          },
          position: [-8061.532354393669, -283.74281561896936],
          name: "Equal",
        },
        132: {
          id: 132,
          data: { string: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 131, input: "in1", data: {} }] },
          },
          position: [-8369.60562779569, -208.98414846472352],
          name: "String",
        },
        139: {
          id: 139,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 120, input: "falseData", data: {} }],
            },
          },
          position: [-3062.381173777221, 782.0088662710806],
          name: "Number",
        },
        150: {
          id: 150,
          data: {
            string:
              '() => {\n  const assistantResetNum = 2;\n  const getAssistantActiveNum = () => {\n    return parseInt(JSON.parse(localStorage["ASSISTANT_ACTIVE"]));\n  };\n  \n  if (getAssistantActiveNum() >= assistantResetNum) {\n    // Reset\n    localStorage["ASSISTANT_ACTIVE"] = 0;\n  } else if (getAssistantActiveNum() >= 1) {\n    // Increment\n    localStorage["ASSISTANT_ACTIVE"] = getAssistantActiveNum()+1;\n  }\n}',
          },
          inputs: {
            in0: {
              connections: [{ node: 152, output: "pulseSignal", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 151, input: "in0", data: {} }] },
          },
          position: [-8137.482711954575, -1148.3839920728037],
          name: "BigString",
        },
        151: {
          id: 151,
          data: { string: "", in0: "" },
          inputs: {
            in0: { connections: [{ node: 150, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [-7484.829318906711, -1151.2229027785843],
          name: "Code",
        },
        152: {
          id: 152,
          data: {
            module: "module-interval-signal-driver",
            inputSignal: "inputSignal",
            intervalMilliseconds: "20000",
            intervalPulseChance: "100",
          },
          inputs: {
            intervalMilliseconds: { connections: [] },
            intervalPulseChance: { connections: [] },
          },
          outputs: {
            pulseSignal: {
              connections: [{ node: 150, input: "in0", data: {} }],
            },
          },
          position: [-9018.212897084564, -782.1033173226955],
          name: "Module",
        },
      },
      comments: [
        {
          text: "Display/return back to user",
          position: [-3638.7647038116643, 515.1972952634736],
          links: [6, 5],
          type: "frame",
          width: 282.53886684520853,
          height: 371.9520462274487,
        },
        {
          text: "Random choice",
          position: [-6545.4682371636045, -391.7376673528569],
          links: [65, 66, 58, 59, 67, 68, 60, 64, 69, 61, 62, 63, 57, 56],
          type: "frame",
          width: 2182.3494968693585,
          height: 1302.982613234578,
        },
        {
          position: [-9069.17716970091, -408.10016728810893],
          links: [
            130, 128, 126, 79, 78, 131, 132, 127, 77, 76, 125, 129, 80, 124, 75,
          ],
          type: "frame",
          width: 2444.297399260573,
          height: 1566.5729888584751,
        },
        {
          text: "",
          position: [-9054.417510575615, -1184.2543999501997],
          links: [150, 153, 154, 152, 151],
          type: "frame",
          width: 1797.0196878406814,
          height: 717.9930947083992,
        },
      ],
    },
    key: "module-ai-assistant",
    label: "module-ai-assistant",
  },
  "module-ask-user-question": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {
            string:
              "A personal assistant is able to ask the following 8 questions, designed to collect information about their boss:\n - How many new emails do you have today?\n - What's your favorite food?\n - Do you have any plans for tomorrow morning?\n - ",
          },
          inputs: {
            in0: { connections: [{ node: 78, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "prompt", data: {} }] },
          },
          position: [-1318.0379683580738, 153.20245273651665],
          name: "BigString",
        },
        3: {
          id: 3,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 2, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 4, output: "out0", data: {} }] },
            topP: { connections: [{ node: 5, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 6, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: {
              connections: [
                { node: 7, input: "in0", data: {} },
                { node: 11, input: "in1", data: {} },
                { node: 75, input: "in0", data: {} },
              ],
            },
          },
          position: [-608.141960148438, 190.95133990688782],
          name: "Module",
        },
        4: {
          id: 4,
          data: { num: "50" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "numTokens", data: {} }] },
          },
          position: [-1036.1731433079372, 791.8198823688654],
          name: "Number",
        },
        5: {
          id: 5,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "topP", data: {} }] },
          },
          position: [-1036.715781996726, 993.6960822188887],
          name: "Number",
        },
        6: {
          id: 6,
          data: { string: " -" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "terminator", data: {} }] },
          },
          position: [-1034.0643008009201, 1196.6570431482091],
          name: "String",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 3, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-46.431690420079235, 105.99827625316814],
          name: "DisplayModal",
        },
        10: {
          id: 10,
          data: { string: "Prompt" },
          inputs: {
            string: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [194.53575080998897, 914.5262765613427],
          name: "Input Prompt",
        },
        11: {
          id: 11,
          data: {},
          inputs: {
            in0: { connections: [{ node: 74, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 22, input: "in0", data: {} }] },
          },
          position: [534.901801410234, 238.24933014014755],
          name: "Await",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 74, output: "out0", data: {} }] },
            in1: { connections: [{ node: 74, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [534.6051164288828, 554.1688104994154],
          name: "Await",
        },
        13: {
          id: 13,
          data: {
            string:
              "Questions with answers can be combined into facts! Check out the following 5 examples:\n~~~\n[Question] How many water bottles are in your fridge?\n[Answer] 6 bottles\n[Fact] There are 6 water bottles in their fridge\n~~~\n[Question] When is the last time you went to the gym?\n[Answer] 2 days ago\n[Fact] It has been 2 days since they have been to the gym\n~~~\n[Question] What is your favorite type of ice cream?\n[Answer] I like Chocolate Chip Cookie Dough and Rocky Road\n[Fact] Their favorite types of ice cream are Chocolate Chip Cookie Dough and Rocky Road\n~~~\n[Question] What is your wife's name?\n[Answer] I am not married\n[Fact] They are not married\n~~~\n[Question] INPUT_QUESTION\n[Answer] INPUT_ANSWER\n[Fact] ",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 19, input: "in0", data: {} }] },
          },
          position: [1124.9469735442867, 560.4731720897602],
          name: "BigString",
        },
        15: {
          id: 15,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 20, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 18, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: {
              connections: [
                { node: 73, input: "in0", data: {} },
                { node: 79, input: "input", data: {} },
              ],
            },
          },
          position: [2815.285241932813, 104.83727212526824],
          name: "Module",
        },
        16: {
          id: 16,
          data: { num: "50" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "numTokens", data: {} }] },
          },
          position: [2511.045313257267, 366.0385561597139],
          name: "Number",
        },
        17: {
          id: 17,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "topP", data: {} }] },
          },
          position: [2510.872965938197, 567.2852373710125],
          name: "Number",
        },
        18: {
          id: 18,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 15, input: "terminator", data: {} }],
            },
          },
          position: [2508.0208703438375, 768.2413664444035],
          name: "String",
        },
        19: {
          id: 19,
          data: { in0: "String", in1: "INPUT_ANSWER", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 23, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [1681.1419701700775, 324.3949207359535],
          name: "StringReplace",
        },
        20: {
          id: 20,
          data: { in0: "String", in1: "INPUT_QUESTION", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 22, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "prompt", data: {} }] },
          },
          position: [2034.0925000860984, 98.59765177338652],
          name: "StringReplace",
        },
        21: {
          id: 21,
          data: { in0: "1000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "string", data: {} }] },
          },
          position: [-66.14071138082858, 899.7506590918376],
          name: "Delay",
        },
        22: {
          id: 22,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in2", data: {} }] },
          },
          position: [756.9863108080696, 241.69875612778208],
          name: "StringTrim",
        },
        23: {
          id: 23,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in2", data: {} }] },
          },
          position: [750.556486735369, 552.6323322751485],
          name: "StringTrim",
        },
        29: {
          id: 29,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {},
          position: [6674.2372518299535, 1653.2624837753608],
          name: "DisplayModal",
        },
        30: {
          id: 30,
          data: { in0: "0", in1: "Max" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 31, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in1", data: {} }] },
          },
          position: [5269.558593055266, 933.9680370721162],
          name: "RandInt",
        },
        31: {
          id: 31,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 30, input: "in1", data: {} }] },
          },
          position: [5065.439030196767, 927.7675883186052],
          name: "ArrayLength",
        },
        33: {
          id: 33,
          data: { in1: "Index" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 30, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 37, input: "in0", data: {} }] },
          },
          position: [5576.029362126461, 1029.4830271494284],
          name: "GetArrayElement",
        },
        34: {
          id: 34,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in1", data: {} }] },
          },
          position: [5065.081661567767, 1719.745907164911],
          name: "ArrayLength",
        },
        35: {
          id: 35,
          data: { in0: "0", in1: "Max" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 34, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 36, input: "in1", data: {} }] },
          },
          position: [5279.55855275664, 1713.909174547133],
          name: "RandInt",
        },
        36: {
          id: 36,
          data: { in1: "Index" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 35, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 37, input: "in1", data: {} }] },
          },
          position: [5599.10607439247, 1577.2263769481729],
          name: "GetArrayElement",
        },
        37: {
          id: 37,
          data: { module: "join-strings" },
          inputs: {
            in0: { connections: [{ node: 33, output: "out0", data: {} }] },
            in1: { connections: [{ node: 36, output: "out0", data: {} }] },
            joinString: {
              connections: [{ node: 38, output: "out0", data: {} }],
            },
          },
          outputs: { out0: { connections: [] } },
          position: [6206.929755432406, 1197.7947113273722],
          name: "Module",
        },
        38: {
          id: 38,
          data: { string: " and " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 37, input: "joinString", data: {} }],
            },
          },
          position: [6069.69441117628, 1482.621733463902],
          name: "String",
        },
        39: {
          id: 39,
          data: {},
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
            in1: { connections: [{ node: 73, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 71, input: "in1", data: {} }] },
          },
          position: [3651.483138332907, 511.4908221115204],
          name: "ArrayAppend",
        },
        40: {
          id: 40,
          data: {},
          inputs: {
            in0: { connections: [{ node: 68, output: "out0", data: {} }] },
            in1: { connections: [{ node: 48, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1693.0651415443422, 1846.3238850818775],
          name: "Equal",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [{ node: 68, output: "out0", data: {} }] },
            trueData: { connections: [] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 55, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 61, input: "in1", data: {} }] },
          },
          position: [1907.484278856858, 1585.4164033410575],
          name: "Branch",
        },
        44: {
          id: 44,
          data: { string: '{"array":[]}' },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 55, input: "in1", data: {} }] },
          },
          position: [1844.9904339629352, 1347.4111274133486],
          name: "String",
        },
        45: {
          id: 45,
          data: { in0: "JSON", in1: "array" },
          inputs: {
            in0: { connections: [{ node: 55, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 69, input: "in1", data: {} }] },
          },
          position: [2399.7644744557547, 1578.720946606411],
          name: "GetJSONValueComponent",
        },
        48: {
          id: 48,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 40, input: "in1", data: {} }] },
          },
          position: [1400.165414518075, 1935.4501229009902],
          name: "Number",
        },
        55: {
          id: 55,
          data: {},
          inputs: {
            in0: { connections: [{ node: 42, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 45, input: "in0", data: {} }] },
          },
          position: [2163.3711585906267, 1525.1515861958708],
          name: "Await",
        },
        61: {
          id: 61,
          data: { in0: "1000" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 42, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 63, input: "in0", data: {} },
                { node: 67, input: "in0", data: {} },
              ],
            },
          },
          position: [2290.0463110631713, 1945.59288829242],
          name: "Delay",
        },
        63: {
          id: 63,
          data: {},
          inputs: {
            in0: { connections: [{ node: 61, output: "out0", data: {} }] },
            in1: { connections: [{ node: 64, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 70, input: "in0", data: {} }] },
          },
          position: [2709.159800509421, 1968.6017162324529],
          name: "Await",
        },
        64: {
          id: 64,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 63, input: "in1", data: {} }] },
          },
          position: [2400.6905665406475, 2157.670355727754],
          name: "String",
        },
        67: {
          id: 67,
          data: {},
          inputs: {
            in0: { connections: [{ node: 61, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [2580.631935014636, 1801.6452619974239],
          name: "DebugLog",
        },
        68: {
          id: 68,
          data: { in0: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [
                { node: 40, input: "in0", data: {} },
                { node: 42, input: "in0", data: {} },
              ],
            },
          },
          position: [1399.3585555275872, 1704.3411112868896],
          name: "LocalCacheGet",
        },
        69: {
          id: 69,
          data: { in0: "user-facts", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 45, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2783.910324534826, 1467.6268074908091],
          name: "LocalCacheSet",
        },
        70: {
          id: 70,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 63, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 39, input: "in0", data: {} }] },
          },
          position: [3040.5943126454213, 1945.5237041211158],
          name: "LocalCacheGet",
        },
        71: {
          id: 71,
          data: { in0: "user-facts", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [3880.027383713396, 504.9538423828145],
          name: "LocalCacheSet",
        },
        72: {
          id: 72,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {},
          position: [5236.151596539844, 1320.2016902336065],
          name: "DebugLog",
        },
        73: {
          id: 73,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 39, input: "in1", data: {} }] },
          },
          position: [3403.9513358911877, 510.2874265648393],
          name: "StringTrim",
        },
        74: {
          id: 74,
          data: {},
          inputs: {
            in0: { connections: [{ node: 75, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 11, input: "in0", data: {} },
                { node: 12, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [257.7036561049885, 420.05378293295433],
          name: "SpeechToText",
        },
        75: {
          id: 75,
          data: {},
          inputs: {
            in0: { connections: [{ node: 3, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 74, input: "in0", data: {} }] },
          },
          position: [27.460595895969043, 420.95289608302625],
          name: "TextToSpeech",
        },
        76: {
          id: 76,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 78, input: "in0", data: {} }] },
          },
          position: [-2019.4200473238684, 103.31851875562559],
          name: "Input",
        },
        77: {
          id: 77,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 78, input: "in1", data: {} }] },
          },
          position: [-2018.611933857067, 284.6315180293041],
          name: "String",
        },
        78: {
          id: 78,
          data: {},
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
            in1: { connections: [{ node: 77, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-1678.4579950645273, 210.56551605041204],
          name: "Await",
        },
        79: {
          id: 79,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 15, output: "text", data: {} }] },
          },
          outputs: {},
          position: [4272.500770843929, 112.1116297705841],
          name: "Output",
        },
        80: {
          id: 80,
          data: { in0: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [411.97739982898753, 880.6770240331607],
          name: "Delay",
        },
      },
      comments: [
        {
          text: "initSignal",
          position: [-2040.523332915118, -95.75799665356143],
          links: [],
          type: "inline",
        },
        {
          text: "Create/get a question",
          position: [-1363.3946069267058, -103.96795213770007],
          links: [],
          type: "inline",
        },
        {
          text: "Prompt the user with the question",
          position: [-39.638752999564, -114.99375910683705],
          links: [],
          type: "inline",
        },
        {
          text: 'Merge the question and the answer into a "fact"',
          position: [1091.9900410446198, -95.70234566043888],
          links: [20],
          type: "inline",
        },
        {
          text: "Store the fact in a data collection",
          position: [3352.5171454190136, -78.44701087572155],
          links: [],
          type: "inline",
        },
        {
          text: "Holds question data",
          position: [534.0688673282147, 398.57778877624264],
          links: [11],
          type: "inline",
        },
        {
          text: "Holds question answer",
          position: [532.7522012291739, 712.9514887817983],
          links: [12],
          type: "inline",
        },
        {
          text: null,
          position: [2367.6804311110564, 76.51250746414198],
          links: [15, 16, 17, 18],
          type: "frame",
          width: 916.7619279462206,
          height: 938.0665645255484,
        },
        {
          text: null,
          position: [1090.0940140815817, 79.01681294693167],
          links: [20, 19, 13],
          type: "frame",
          width: 1245.471443027378,
          height: 1141.4090912755162,
        },
        {
          text: "",
          position: [-1374.7162319110298, 79.85005184091013],
          links: [3, 2, 5, 6, 4],
          type: "frame",
          width: 1239.8960082096357,
          height: 1329.4545904116926,
        },
        {
          text: "",
          position: [-72.19412917327531, 82.80134156490831],
          links: [11, 22, 23, 12, 7, 75, 74],
          type: "frame",
          width: 1115.6266621458253,
          height: 710.895408535855,
        },
        {
          position: [1369.3585555275872, 1317.4111274133486],
          links: [68, 48, 40, 42, 44, 55, 45, 69, 61, 67, 64, 63, 70],
          type: "frame",
          width: 1931.235757117834,
          height: 1096.2592283144052,
        },
        {
          text: "Display two random facts back to the user",
          position: [5678.948286278315, 789.7597645065213],
          links: [30],
          type: "inline",
        },
        {
          position: [3359.958249900133, 439.97126085313573],
          links: [71, 73, 39],
          type: "frame",
          width: 804.0760478222078,
          height: 274,
        },
        {
          position: [5035.081661567767, 897.7675883186052],
          links: [31, 34, 72, 30, 35, 36, 33, 38, 37, 29],
          type: "frame",
          width: 1921.7820845397655,
          height: 1060.1415862285278,
        },
        {
          text: "",
          position: [-2049.4200473238684, 73.31851875562559],
          links: [76, 77, 78],
          type: "frame",
          width: 620.9620522593409,
          height: 467.31299927367854,
        },
      ],
    },
    key: "module-ask-user-question",
    label: "module-ask-user-question",
  },
  "clear-user-facts-data": {
    path: "/ai-assistant",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-397.0081008653475, 225.7523544819846],
          name: "OnInitialize",
        },
        2: {
          id: 2,
          data: { string: "user-facts" },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-29.230766995894555, -202.50613691744303],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [33.4634608629224, 29.114477197184186],
          name: "Array",
        },
        4: {
          id: 4,
          data: { in0: "Key", in1: "Value" },
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [294.6899976361819, -106.72327797543016],
          name: "LocalCacheSet",
        },
        5: {
          id: 5,
          data: {},
          inputs: {
            in0: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [538.5012528491422, -106.72338593716425],
          name: "DisplayModal",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [557.20861076706, 437.91977340247826],
          name: "DisplayModal",
        },
        7: {
          id: 7,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [310.3635958150509, 440.11109012129924],
          name: "LocalCacheGet",
        },
        8: {
          id: 8,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-7.04025295646381, 427.47111249306016],
          name: "String",
        },
      },
      comments: [],
    },
    key: "clear-user-facts-data",
    label: "clear-user-facts-data",
  },
  "module-interval-signal-driver": {
    path: "/execution-drivers",
    data: {
      id: "demo@0.1.0",
      nodes: {
        12: {
          id: 12,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 39, input: "in0", data: {} }] },
          },
          position: [-3844.2161348090226, -498.8367639851095],
          name: "OnInitialize",
        },
        38: {
          id: 38,
          data: { in0: "20000" },
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
          },
          outputs: {
            action: { connections: [{ node: 40, input: "in0", data: {} }] },
          },
          position: [-3839.123074150757, -792.100711002503],
          name: "OnInterval",
        },
        39: {
          id: 39,
          data: { num: "1" },
          inputs: {
            in0: { connections: [{ node: 12, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 47, input: "in1", data: {} }] },
          },
          position: [-3615.720181943107, -374.7300923142216],
          name: "Number",
        },
        40: {
          id: 40,
          data: { num: "1" },
          inputs: {
            in0: { connections: [{ node: 38, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 41, input: "trueData", data: {} }] },
          },
          position: [-3612.1835837112494, -792.1347999008007],
          name: "Number",
        },
        41: {
          id: 41,
          data: {},
          inputs: {
            in0: { connections: [{ node: 77, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 40, output: "out0", data: {} }] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 47, input: "in0", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [-3265.3770885037316, -960.8608825960293],
          name: "Branch",
        },
        43: {
          id: 43,
          data: { in0: "0", in1: "100" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 77, input: "in0", data: {} }] },
          },
          position: [-3828.8397226654606, -1214.3965857241906],
          name: "RandInt",
        },
        47: {
          id: 47,
          data: {},
          inputs: {
            in0: { connections: [{ node: 41, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 79, input: "in0", data: {} }] },
          },
          position: [-3011.2872273032613, -782.0008837438721],
          name: "Or",
        },
        75: {
          id: 75,
          data: { name: "pulseSignal" },
          inputs: {
            input: { connections: [{ node: 79, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-2426.480754915609, -728.7181920239555],
          name: "Output",
        },
        76: {
          id: 76,
          data: { name: "intervalMilliseconds" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 38, input: "in0", data: {} }] },
          },
          position: [-4195.057369351816, -1142.0709920304953],
          name: "Input",
        },
        77: {
          id: 77,
          data: { in1: "100" },
          inputs: {
            in0: { connections: [{ node: 43, output: "out0", data: {} }] },
            in1: { connections: [{ node: 78, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 41, input: "in0", data: {} }] },
          },
          position: [-3515.2058331206067, -1098.211252675507],
          name: "LessThan",
        },
        78: {
          id: 78,
          data: { name: "intervalPulseChance" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 77, input: "in1", data: {} }] },
          },
          position: [-4197.06442741347, -921.9560442793347],
          name: "Input",
        },
        79: {
          id: 79,
          data: {},
          inputs: {
            in0: { connections: [{ node: 47, output: "out0", data: {} }] },
            in1: { connections: [{ node: 80, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 75, input: "input", data: {} }] },
          },
          position: [-2756.1472257318987, -677.3553145824014],
          name: "Await",
        },
        80: {
          id: 80,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 79, input: "in1", data: {} }] },
          },
          position: [-3077.5091999185715, -491.14119683209003],
          name: "String",
        },
      },
      comments: [
        {
          text: "Execution driver (sends execution signals when starting and at specified intervals)",
          position: [-3870.695839572334, -1358.9251389237634],
          links: [49, 50, 38, 40, 12, 43, 77, 47, 41, 79, 39, 80],
          type: "frame",
          width: 1345.4045020212443,
          height: 1489.6120413123942,
        },
      ],
    },
    key: "module-interval-signal-driver",
    label: "module-interval-signal-driver",
  },
  "module-ai-assistant-generate-affirmation": {
    path: "/ai-assistant/modules",
    data: {
      id: "demo@0.1.0",
      nodes: {
        3: {
          id: 3,
          data: {
            string:
              "The following NUM_PHRASES phrases, full of words of affirmation, have changed my life: \n - USER_NAME, you are enough.\n - USER_NAME, you are a brave and beautiful person with so much good to offer the world.\n  - ",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 11, input: "in0", data: {} }] },
          },
          position: [-610.4924341926941, -270.66094858320633],
          name: "BigString",
        },
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 14, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 25, input: "input", data: {} }] },
          },
          position: [1303.295357686944, -582.3081054275698],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: " - " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [913.6164731115698, 232.04119605906646],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [913.290281857343, -201.12939253366707],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [913.2839641534658, 18.213887273004286],
          name: "Number",
        },
        10: {
          id: 10,
          data: { preview: "", in0: "4", in1: "10000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 11, input: "in2", data: {} }] },
          },
          position: [-54.50531721815133, -77.1168339595421],
          name: "RandInt",
        },
        11: {
          id: 11,
          data: { in0: "String", in1: "NUM_PHRASES", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 10, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [228.7325955057851, -265.76823342067695],
          name: "StringReplace",
        },
        14: {
          id: 14,
          data: { in0: "String", in1: "USER_NAME", in2: "Kris" },
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 23, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [551.0006318655127, -494.83495992934814],
          name: "StringReplace",
        },
        23: {
          id: 23,
          data: { name: "userName" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in2", data: {} }] },
          },
          position: [-1007.7956351374385, -607.2445343472606],
          name: "Input",
        },
        25: {
          id: 25,
          data: { name: "affirmationString" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [1878.8625324738434, -593.3920874265095],
          name: "Output",
        },
      },
      comments: [
        {
          position: [883.2839641534658, -612.3081054275698],
          links: [8, 9, 7, 4],
          type: "frame",
          width: 920.011393533478,
          height: 1100.3493014866363,
        },
        {
          position: [-640.4924341926941, -524.8349599293481],
          links: [3, 10, 11, 14],
          type: "frame",
          width: 1489.4930660582068,
          height: 941.1740113461419,
        },
      ],
    },
    key: "module-ai-assistant-generate-affirmation",
    label: "module-ai-assistant-generate-affirmation",
  },
  "module-switch-condition-3": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 71, input: "in1", data: {} },
                { node: 73, input: "in0", data: {} },
                { node: 81, input: "in1", data: {} },
                { node: 83, input: "in1", data: {} },
              ],
            },
          },
          position: [1064.4781232863404, -656.4904680946603],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 54, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [7119.434795283606, -642.1338008002607],
          name: "Output",
        },
        3: {
          id: 3,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 55, input: "in1", data: {} }] },
          },
          position: [2915.7480118446915, -470.3495497517375],
          name: "Input",
        },
        4: {
          id: 4,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 59, input: "in0", data: {} }] },
          },
          position: [2914.4979329075645, -266.84831219696036],
          name: "Input",
        },
        5: {
          id: 5,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 56, input: "in1", data: {} }] },
          },
          position: [2906.903426975922, 211.1067717357421],
          name: "Input",
        },
        6: {
          id: 6,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 60, input: "in0", data: {} }] },
          },
          position: [2909.4788040956023, 411.1834689004156],
          name: "Input",
        },
        7: {
          id: 7,
          data: { name: "checkAgainst3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 57, input: "in1", data: {} }] },
          },
          position: [2870.48380581058, 977.6432792618874],
          name: "Input",
        },
        8: {
          id: 8,
          data: { name: "output3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 61, input: "in0", data: {} }] },
          },
          position: [2869.0388743263015, 1182.8031957403155],
          name: "Input",
        },
        9: {
          id: 9,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-352.8432780182834, -381.19179693852993],
          name: "Equal",
        },
        10: {
          id: 10,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 45, input: "in0", data: {} },
                { node: 51, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 42, input: "in0", data: {} }] },
          },
          position: [-75.63360405387685, -217.2519149181356],
          name: "Branch",
        },
        11: {
          id: 11,
          data: {},
          inputs: {
            in0: { connections: [{ node: 45, output: "out0", data: {} }] },
            in1: { connections: [{ node: 46, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 12, input: "in0", data: {} },
                { node: 19, input: "in0", data: {} },
              ],
            },
          },
          position: [759.3455725553017, 131.03096112986154],
          name: "Or",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 47, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [1084.3027868091388, 766.9598496860123],
          name: "Or",
        },
        13: {
          id: 13,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-365.23004323311056, 260.7095820247344],
          name: "Equal",
        },
        16: {
          id: 16,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 13, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 46, input: "in0", data: {} },
                { node: 52, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 43, input: "in0", data: {} }] },
          },
          position: [-80.13894367062217, 411.0818941322881],
          name: "Branch",
        },
        17: {
          id: 17,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [-382.5445006699009, 985.0425246295921],
          name: "Equal",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 47, input: "in0", data: {} },
                { node: 53, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 44, input: "in0", data: {} }] },
          },
          position: [-74.40178451263891, 1175.9796313769934],
          name: "Branch",
        },
        19: {
          id: 19,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1063.9014764180238, 252.344228070339],
          name: "DebugLog",
        },
        20: {
          id: 20,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1390.0049941673674, 941.605379620587],
          name: "DebugLog",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 45, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [664.4667230178466, -316.2870458961602],
          name: "DebugLog",
        },
        31: {
          id: 31,
          data: {},
          inputs: {
            in0: { connections: [{ node: 46, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [663.1042426607648, 591.1265625217312],
          name: "DebugLog",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 47, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [655.072618951688, 1339.8517316883012],
          name: "DebugLog",
        },
        39: {
          id: 39,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 42, input: "in1", data: {} }] },
          },
          position: [-139.58929622158615, -5.342221641686477],
          name: "Number",
        },
        40: {
          id: 40,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 43, input: "in1", data: {} }] },
          },
          position: [-146.83536381518576, 628.9654055100609],
          name: "Number",
        },
        41: {
          id: 41,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 44, input: "in1", data: {} }] },
          },
          position: [-135.11091494829031, 1390.8939920641196],
          name: "Number",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 45, input: "in1", data: {} },
                { node: 48, input: "in0", data: {} },
              ],
            },
          },
          position: [145.3010030784932, -99.74338281755594],
          name: "Await",
        },
        43: {
          id: 43,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 40, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 46, input: "in1", data: {} },
                { node: 49, input: "in0", data: {} },
              ],
            },
          },
          position: [141.06265324780247, 539.907007880493],
          name: "Await",
        },
        44: {
          id: 44,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 41, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 47, input: "in1", data: {} },
                { node: 50, input: "in0", data: {} },
              ],
            },
          },
          position: [144.7346103325173, 1299.7924451857348],
          name: "Await",
        },
        45: {
          id: 45,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 11, input: "in0", data: {} },
                { node: 30, input: "in0", data: {} },
              ],
            },
          },
          position: [373.83652559046055, -216.50931388618076],
          name: "Or",
        },
        46: {
          id: 46,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 43, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 11, input: "in1", data: {} },
                { node: 31, input: "in0", data: {} },
              ],
            },
          },
          position: [360.1061034723525, 412.06672090203756],
          name: "Or",
        },
        47: {
          id: 47,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 32, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [376.10890197263836, 1162.6223299457959],
          name: "Or",
        },
        48: {
          id: 48,
          data: {},
          inputs: {
            in0: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [386.261987065284, 10.961572921013897],
          name: "DebugLog",
        },
        49: {
          id: 49,
          data: {},
          inputs: {
            in0: { connections: [{ node: 43, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [356.0474778441044, 648.7563923518321],
          name: "DebugLog",
        },
        50: {
          id: 50,
          data: {},
          inputs: {
            in0: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [379.45248596609116, 1396.0242621300956],
          name: "DebugLog",
        },
        51: {
          id: 51,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [135.8338101120778, -367.8253167104863],
          name: "DebugLog",
        },
        52: {
          id: 52,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [141.22242733619993, 315.419406189882],
          name: "DebugLog",
        },
        53: {
          id: 53,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [162.75060094138055, 1056.3045596599],
          name: "DebugLog",
        },
        54: {
          id: 54,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 64, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [6862.656321903393, -643.497198818984],
          name: "LocalCacheGet",
        },
        55: {
          id: 55,
          data: {},
          inputs: {
            in0: { connections: [{ node: 71, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 59, input: "in1", data: {} }] },
          },
          position: [3216.469216767548, -620.6518737019557],
          name: "Equal",
        },
        56: {
          id: 56,
          data: {},
          inputs: {
            in0: { connections: [{ node: 71, output: "out0", data: {} }] },
            in1: { connections: [{ node: 5, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 60, input: "in1", data: {} }] },
          },
          position: [3208.150668071799, 64.21802247750126],
          name: "Equal",
        },
        57: {
          id: 57,
          data: {},
          inputs: {
            in0: { connections: [{ node: 71, output: "out0", data: {} }] },
            in1: { connections: [{ node: 7, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 61, input: "in1", data: {} }] },
          },
          position: [3190.672819763155, 784.0595603507575],
          name: "Equal",
        },
        58: {
          id: 58,
          data: { in0: "switch-condition-3-output", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 59, output: "outTrue", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [3711.97617112785, -624.4736779558199],
          name: "LocalCacheSet",
        },
        59: {
          id: 59,
          data: {},
          inputs: {
            in0: { connections: [{ node: 4, output: "output", data: {} }] },
            in1: { connections: [{ node: 55, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 58, input: "in1", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [3459.9788621286284, -513.6416671249804],
          name: "Branch",
        },
        60: {
          id: 60,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "output", data: {} }] },
            in1: { connections: [{ node: 56, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 62, input: "in1", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [3445.7752107236597, 146.5516555152243],
          name: "Branch",
        },
        61: {
          id: 61,
          data: {},
          inputs: {
            in0: { connections: [{ node: 8, output: "output", data: {} }] },
            in1: { connections: [{ node: 57, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 63, input: "in1", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [3436.412215736003, 870.5593719617809],
          name: "Branch",
        },
        62: {
          id: 62,
          data: { in0: "switch-condition-3-output", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 60, output: "outTrue", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [3705.4237615645684, 65.76884762299478],
          name: "LocalCacheSet",
        },
        63: {
          id: 63,
          data: { in0: "switch-condition-3-output", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 61, output: "outTrue", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [3698.8713605152157, 778.0664997945272],
          name: "LocalCacheSet",
        },
        64: {
          id: 64,
          data: {},
          inputs: {
            in0: { connections: [{ node: 83, output: "out0", data: {} }] },
            in1: { connections: [{ node: 65, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 54, input: "in0", data: {} }] },
          },
          position: [6615.280660385103, -643.4227569374322],
          name: "Await",
        },
        65: {
          id: 65,
          data: { string: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 64, input: "in1", data: {} }] },
          },
          position: [6319.604829163739, -460.50424901569005],
          name: "String",
        },
        71: {
          id: 71,
          data: { in0: "1" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 55, input: "in0", data: {} },
                { node: 56, input: "in0", data: {} },
                { node: 57, input: "in0", data: {} },
              ],
            },
          },
          position: [2404.987857593009, -700.6932617464229],
          name: "Delay",
        },
        72: {
          id: 72,
          data: { in0: "Key", in1: "-1" },
          inputs: {
            in0: { connections: [{ node: 73, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [2080.6485501105976, -329.28550710424986],
          name: "LocalCacheSet",
        },
        73: {
          id: 73,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 74, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 72, input: "in0", data: {} }] },
          },
          position: [1791.131040152619, -371.711173072371],
          name: "Await",
        },
        74: {
          id: 74,
          data: { string: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 73, input: "in1", data: {} }] },
          },
          position: [1511.5036813813465, -211.6897811801881],
          name: "String",
        },
        75: {
          id: 75,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 80, input: "in0", data: {} }] },
          },
          position: [5029.842369029936, -635.4133725926725],
          name: "Input",
        },
        76: {
          id: 76,
          data: { in0: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 77, input: "in0", data: {} }] },
          },
          position: [4545.421009320944, -562.691079401998],
          name: "LocalCacheGet",
        },
        77: {
          id: 77,
          data: {},
          inputs: {
            in0: { connections: [{ node: 76, output: "out0", data: {} }] },
            in1: { connections: [{ node: 82, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 80, input: "in1", data: {} }] },
          },
          position: [4832.554126502271, -453.2189772354667],
          name: "Equal",
        },
        78: {
          id: 78,
          data: { string: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 82, input: "in1", data: {} }] },
          },
          position: [4283.042752000178, -93.4913463226439],
          name: "String",
        },
        79: {
          id: 79,
          data: { in0: "switch-condition-3-output", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 80, output: "outTrue", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [5644.370319600384, -458.9657999378728],
          name: "LocalCacheSet",
        },
        80: {
          id: 80,
          data: {},
          inputs: {
            in0: { connections: [{ node: 75, output: "output", data: {} }] },
            in1: { connections: [{ node: 77, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 79, input: "in1", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [5384.348304607946, -453.3413451240778],
          name: "Branch",
        },
        81: {
          id: 81,
          data: { in0: "2" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 82, input: "in0", data: {} }] },
          },
          position: [4064.987591672828, -1012.1882238980643],
          name: "Delay",
        },
        82: {
          id: 82,
          data: {},
          inputs: {
            in0: { connections: [{ node: 81, output: "out0", data: {} }] },
            in1: { connections: [{ node: 78, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 77, input: "in1", data: {} }] },
          },
          position: [4603.260851767974, -322.035623000979],
          name: "Await",
        },
        83: {
          id: 83,
          data: { in0: "3" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 64, input: "in0", data: {} }] },
          },
          position: [5781.046437899382, -1347.7496369636262],
          name: "Delay",
        },
      },
      comments: [
        {
          text: "Set return value to a default value when this module first initializes (default value if switch conditional never matches)",
          position: [1482.402923587323, -472.52752464478874],
          links: [73, 74, 72],
          type: "frame",
          width: 869.6894385293408,
          height: 535.1766916947818,
        },
        {
          position: [2839.0388743263015, -654.4736779558199],
          links: [59, 55, 3, 4, 62, 60, 56, 5, 6, 63, 61, 57, 7, 8, 58],
          type: "frame",
          width: 1170.937296801549,
          height: 2057.276873696135,
        },
        {
          position: [4210.797936067486, -665.4133725926725],
          links: [75, 78, 76, 82, 77, 80, 79],
          type: "frame",
          width: 1886.6157770366203,
          height: 864.5686794465078,
        },
        {
          position: [6289.604829163739, -673.497198818984],
          links: [65, 64, 54, 2],
          type: "frame",
          width: 1145.829966119867,
          height: 528.9929498032939,
        },
      ],
    },
    key: "module-switch-condition-3",
    label: "module-switch-condition-3",
  },
  "test-switch-3": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-switch-condition-3-new" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 2, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 4, output: "out0", data: {} }],
            },
            output1: { connections: [{ node: 5, output: "out0", data: {} }] },
            checkAgainst2: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
            output2: { connections: [{ node: 8, output: "out0", data: {} }] },
            checkAgainst3: {
              connections: [{ node: 9, output: "out0", data: {} }],
            },
            output3: { connections: [{ node: 10, output: "out0", data: {} }] },
            default: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            output: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [81.1362033984759, 51.31702741566056],
          name: "Module",
        },
        2: {
          id: 2,
          data: { string: "option" },
          inputs: {
            in0: { connections: [{ node: 11, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "switchOnValue", data: {} }],
            },
          },
          position: [-677.9597364904444, -632.7410132502185],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [874.821122335715, -529.2243859611332],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-675.7676359791743, -321.9465794129128],
          name: "String",
        },
        5: {
          id: 5,
          data: { string: "It was option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output1", data: {} }] },
          },
          position: [-675.5820312576211, -128.3168494690381],
          name: "String",
        },
        7: {
          id: 7,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-674.9819495332418, 147.2395949456921],
          name: "String",
        },
        8: {
          id: 8,
          data: { string: "It was option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output2", data: {} }] },
          },
          position: [-676.7324192857996, 340.5440185032959],
          name: "String",
        },
        9: {
          id: 9,
          data: { string: "option3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst3", data: {} }],
            },
          },
          position: [-676.1326875107236, 618.450676790013],
          name: "String",
        },
        10: {
          id: 10,
          data: { string: "It was option3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output3", data: {} }] },
          },
          position: [-679.6475303349391, 816.2832794360654],
          name: "String",
        },
        11: {
          id: 11,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-959.3088986768463, -631.6089917201039],
          name: "OnInitialize",
        },
        12: {
          id: 12,
          data: { string: "No match!" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "default", data: {} }] },
          },
          position: [-420.71352217880536, 1193.1143905964693],
          name: "String",
        },
      },
      comments: [],
    },
    key: "test-switch-3",
    label: "test-switch-3",
  },
  "module-either-or": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "either" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 7, input: "in0", data: {} },
                { node: 11, input: "in0", data: {} },
                { node: 12, input: "in0", data: {} },
              ],
            },
          },
          position: [-717.8780998797183, -171.02941040730576],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "or" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 13, input: "in0", data: {} },
                { node: 14, input: "in0", data: {} },
              ],
            },
          },
          position: [-720.976701221525, 300.8729892181375],
          name: "Input",
        },
        3: {
          id: 3,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1039.712104201715, -912.1855578975099],
          name: "Output",
        },
        4: {
          id: 4,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "in1", data: {} }] },
          },
          position: [-375.8510985087987, -1035.5821991167686],
          name: "Number",
        },
        5: {
          id: 5,
          data: { string: "either-or-cache" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 6, input: "in1", data: {} }] },
          },
          position: [180.5956132424925, -1016.9565334394224],
          name: "String",
        },
        6: {
          id: 6,
          data: { in0: "" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 8, input: "in0", data: {} }] },
          },
          position: [497.23474461238675, -781.8054175914315],
          name: "Delay",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-47.5703900966429, -788.7898223841428],
          name: "Await",
        },
        8: {
          id: 8,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "input", data: {} }] },
          },
          position: [776.6625922256472, -900.5879330529751],
          name: "LocalCacheGet",
        },
        9: {
          id: 9,
          data: { in0: "either-or-cache", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 12, output: "outFalse", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [168.72903534554726, -183.0245638577269],
          name: "LocalCacheSet",
        },
        10: {
          id: 10,
          data: { in0: "either-or-cache", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 14, output: "outFalse", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [189.24027884744334, 286.327381287448],
          name: "LocalCacheSet",
        },
        11: {
          id: 11,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 12, input: "in1", data: {} }] },
          },
          position: [-357.25789897067335, -31.417420258744986],
          name: "Equal",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [] },
            outFalse: { connections: [{ node: 9, input: "in1", data: {} }] },
          },
          position: [-90.34220626496588, -176.9308159158951],
          name: "Branch",
        },
        13: {
          id: 13,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "output", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-360.1066766812031, 447.32852346118284],
          name: "Equal",
        },
        14: {
          id: 14,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "output", data: {} }] },
            in1: { connections: [{ node: 13, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [] },
            outFalse: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-81.03388138376448, 292.7422004056719],
          name: "Branch",
        },
      },
      comments: [],
    },
    key: "module-either-or",
    label: "module-either-or",
  },
  "test-either-or": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-either-or" },
          inputs: {
            either: { connections: [{ node: 3, output: "out0", data: {} }] },
            or: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            output: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-149.66441129505728, -153.62222749400203],
          name: "Module",
        },
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [393.0538247559152, -157.01322983224298],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "a" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "either", data: {} }] },
          },
          position: [-607.6823758725109, -329.40901679946666],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 6, input: "in0", data: {} },
              ],
            },
          },
          position: [-965.0883247312948, -131.78486988512023],
          name: "OnInitialize",
        },
        5: {
          id: 5,
          data: { string: "0" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-589.2729898437536, 315.5118194768261],
          name: "String",
        },
        6: {
          id: 6,
          data: { num: "" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 1, input: "or", data: {} }] },
          },
          position: [-609.7847106152769, 42.71335819223957],
          name: "Number",
        },
      },
      comments: [],
    },
    key: "test-either-or",
    label: "test-either-or",
  },
  "test-pipe": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [443.50599814787296, -532.573481458906],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-1458.2989272919158, -214.60187635975905],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-2033.8467637938236, -551.7899494178866],
          name: "OnInitialize",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [-902.8961832801743, -914.2315987571983],
          name: "Branch",
        },
        8: {
          id: 8,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 15, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [-148.03030211019012, -944.3741228344909],
          name: "Or",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 10, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [-1762.37037831815, -551.2790697371938],
          name: "String",
        },
        10: {
          id: 10,
          data: {},
          inputs: {
            in0: { connections: [{ node: 9, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in1", data: {} }] },
          },
          position: [-1142.309563785593, -346.21151466934816],
          name: "Equal",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 12, input: "in0", data: {} }] },
          },
          position: [-1482.9956920096697, -892.2972600837402],
          name: "String",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in1", data: {} }] },
          },
          position: [-1148.4788666451657, -743.140323873287],
          name: "Equal",
        },
        13: {
          id: 13,
          data: { string: "data1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-1486.1802492807349, -1093.2508027725721],
          name: "String",
        },
        14: {
          id: 14,
          data: { string: "data2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-1458.6007443681751, -15.299869667927574],
          name: "String",
        },
        15: {
          id: 15,
          data: {},
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [{ node: 10, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in1", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [-878.3669561309057, -221.97372613281777],
          name: "Branch",
        },
        16: {
          id: 16,
          data: {},
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 18, input: "in0", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [-155.5061045222267, -175.16571881547594],
          name: "Branch",
        },
        17: {
          id: 17,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 15, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-441.9394961918347, -178.58603070423717],
          name: "And",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [200.7380398251638, -530.8375463442264],
          name: "Or",
        },
        19: {
          id: 19,
          data: { string: "Not found..." },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "in0", data: {} }] },
          },
          position: [-497.262208852549, 47.96994886427774],
          name: "String",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1699.2649755833233, -359.2986606717068],
          links: [9],
          type: "inline",
        },
      ],
    },
    key: "test-pipe",
    label: "test-pipe",
  },
  "module-switch-condition-3-new": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 55, input: "in0", data: {} },
                { node: 56, input: "in0", data: {} },
                { node: 57, input: "in0", data: {} },
              ],
            },
          },
          position: [2174.751370166078, 873.2277435183569],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 97, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [5432.497473365619, 1139.564710869731],
          name: "Output",
        },
        3: {
          id: 3,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 55, input: "in1", data: {} }] },
          },
          position: [2814.938844610105, 237.74279866123794],
          name: "Input",
        },
        4: {
          id: 4,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 59, input: "in0", data: {} }] },
          },
          position: [2813.688765672978, 441.2440362160151],
          name: "Input",
        },
        5: {
          id: 5,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 56, input: "in1", data: {} }] },
          },
          position: [2806.0942597413355, 919.1991201487176],
          name: "Input",
        },
        6: {
          id: 6,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 60, input: "in0", data: {} }] },
          },
          position: [2808.669636861016, 1119.2758173133911],
          name: "Input",
        },
        7: {
          id: 7,
          data: { name: "checkAgainst3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 57, input: "in1", data: {} }] },
          },
          position: [2769.674638575994, 1685.7356276748628],
          name: "Input",
        },
        8: {
          id: 8,
          data: { name: "output3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 61, input: "in0", data: {} }] },
          },
          position: [2768.229707091715, 1890.8955441532908],
          name: "Input",
        },
        9: {
          id: 9,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-352.8432780182834, -386.8249681667588],
          name: "Equal",
        },
        10: {
          id: 10,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 45, input: "in0", data: {} },
                { node: 51, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 42, input: "in0", data: {} }] },
          },
          position: [-75.63360405387685, -217.2519149181356],
          name: "Branch",
        },
        11: {
          id: 11,
          data: {},
          inputs: {
            in0: { connections: [{ node: 45, output: "out0", data: {} }] },
            in1: { connections: [{ node: 46, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 12, input: "in0", data: {} },
                { node: 19, input: "in0", data: {} },
              ],
            },
          },
          position: [759.3455725553017, 131.03096112986154],
          name: "Or",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 47, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [1084.3027868091388, 766.9598496860123],
          name: "Or",
        },
        13: {
          id: 13,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-365.23004323311056, 260.7095820247344],
          name: "Equal",
        },
        16: {
          id: 16,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 13, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 46, input: "in0", data: {} },
                { node: 52, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 43, input: "in0", data: {} }] },
          },
          position: [-80.13894367062217, 411.0818941322881],
          name: "Branch",
        },
        17: {
          id: 17,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [-382.5445006699009, 985.0425246295921],
          name: "Equal",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 17, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: {
              connections: [
                { node: 47, input: "in0", data: {} },
                { node: 53, input: "in0", data: {} },
              ],
            },
            outFalse: { connections: [{ node: 44, input: "in0", data: {} }] },
          },
          position: [-74.40178451263891, 1175.9796313769934],
          name: "Branch",
        },
        19: {
          id: 19,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1063.9014764180238, 252.344228070339],
          name: "DebugLog",
        },
        20: {
          id: 20,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1390.0049941673674, 941.605379620587],
          name: "DebugLog",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 45, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [664.4667230178466, -316.2870458961602],
          name: "DebugLog",
        },
        31: {
          id: 31,
          data: {},
          inputs: {
            in0: { connections: [{ node: 46, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [663.1042426607648, 591.1265625217312],
          name: "DebugLog",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 47, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [655.072618951688, 1339.8517316883012],
          name: "DebugLog",
        },
        39: {
          id: 39,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 42, input: "in1", data: {} }] },
          },
          position: [-139.58929622158615, -5.342221641686477],
          name: "Number",
        },
        40: {
          id: 40,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 43, input: "in1", data: {} }] },
          },
          position: [-146.83536381518576, 628.9654055100609],
          name: "Number",
        },
        41: {
          id: 41,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 44, input: "in1", data: {} }] },
          },
          position: [-135.11091494829031, 1390.8939920641196],
          name: "Number",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 45, input: "in1", data: {} },
                { node: 48, input: "in0", data: {} },
              ],
            },
          },
          position: [145.3010030784932, -99.74338281755594],
          name: "Await",
        },
        43: {
          id: 43,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 40, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 46, input: "in1", data: {} },
                { node: 49, input: "in0", data: {} },
              ],
            },
          },
          position: [141.06265324780247, 539.907007880493],
          name: "Await",
        },
        44: {
          id: 44,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 41, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 47, input: "in1", data: {} },
                { node: 50, input: "in0", data: {} },
              ],
            },
          },
          position: [144.7346103325173, 1299.7924451857348],
          name: "Await",
        },
        45: {
          id: 45,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 11, input: "in0", data: {} },
                { node: 30, input: "in0", data: {} },
              ],
            },
          },
          position: [373.83652559046055, -216.50931388618076],
          name: "Or",
        },
        46: {
          id: 46,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 43, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 11, input: "in1", data: {} },
                { node: 31, input: "in0", data: {} },
              ],
            },
          },
          position: [360.1061034723525, 412.06672090203756],
          name: "Or",
        },
        47: {
          id: 47,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 32, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [376.10890197263836, 1162.6223299457959],
          name: "Or",
        },
        48: {
          id: 48,
          data: {},
          inputs: {
            in0: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [386.261987065284, 10.961572921013897],
          name: "DebugLog",
        },
        49: {
          id: 49,
          data: {},
          inputs: {
            in0: { connections: [{ node: 43, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [356.0474778441044, 648.7563923518321],
          name: "DebugLog",
        },
        50: {
          id: 50,
          data: {},
          inputs: {
            in0: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [379.45248596609116, 1396.0242621300956],
          name: "DebugLog",
        },
        51: {
          id: 51,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [135.8338101120778, -367.8253167104863],
          name: "DebugLog",
        },
        52: {
          id: 52,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [141.22242733619993, 315.419406189882],
          name: "DebugLog",
        },
        53: {
          id: 53,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "outTrue", data: {} }] },
          },
          outputs: {},
          position: [162.75060094138055, 1056.3045596599],
          name: "DebugLog",
        },
        54: {
          id: 54,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 64, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [4332.546107803211, -1223.5825269220065],
          name: "LocalCacheGet",
        },
        55: {
          id: 55,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 3, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 59, input: "in1", data: {} }] },
          },
          position: [3115.6600495329617, 87.44047471101982],
          name: "Equal",
        },
        56: {
          id: 56,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 5, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 60, input: "in1", data: {} }] },
          },
          position: [3107.3415008372126, 772.3103708904767],
          name: "Equal",
        },
        57: {
          id: 57,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 7, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 61, input: "in1", data: {} }] },
          },
          position: [3089.8636525285688, 1492.151908763733],
          name: "Equal",
        },
        59: {
          id: 59,
          data: {},
          inputs: {
            in0: { connections: [{ node: 4, output: "output", data: {} }] },
            in1: { connections: [{ node: 55, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 84, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 95, input: "in0", data: {} }] },
          },
          position: [3359.169694894042, 194.4506812879951],
          name: "Branch",
        },
        60: {
          id: 60,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "output", data: {} }] },
            in1: { connections: [{ node: 56, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 84, input: "in1", data: {} }] },
            outFalse: { connections: [{ node: 95, input: "in1", data: {} }] },
          },
          position: [3344.9660434890734, 854.6440039281998],
          name: "Branch",
        },
        61: {
          id: 61,
          data: {},
          inputs: {
            in0: { connections: [{ node: 8, output: "output", data: {} }] },
            in1: { connections: [{ node: 57, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 85, input: "in1", data: {} }] },
            outFalse: { connections: [{ node: 96, input: "in1", data: {} }] },
          },
          position: [3335.6030485014167, 1578.6517203747562],
          name: "Branch",
        },
        64: {
          id: 64,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 65, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 54, input: "in0", data: {} }] },
          },
          position: [4085.1704462849207, -1223.508085040455],
          name: "Await",
        },
        65: {
          id: 65,
          data: { string: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 64, input: "in1", data: {} }] },
          },
          position: [3789.4946150635565, -1040.5895771187127],
          name: "String",
        },
        72: {
          id: 72,
          data: { in0: "Key", in1: "-1" },
          inputs: {
            in0: { connections: [{ node: 73, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [2092.279129148195, -1463.2841557982965],
          name: "LocalCacheSet",
        },
        73: {
          id: 73,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 74, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 72, input: "in0", data: {} }] },
          },
          position: [1802.7616191902162, -1505.709821766418],
          name: "Await",
        },
        74: {
          id: 74,
          data: { string: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 73, input: "in1", data: {} }] },
          },
          position: [1523.1342604189435, -1345.6884298742348],
          name: "String",
        },
        75: {
          id: 75,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 91, input: "in0", data: {} }] },
          },
          position: [4289.063973444893, 1043.192230157975],
          name: "Input",
        },
        76: {
          id: 76,
          data: { in0: "switch-condition-3-output" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 77, input: "in0", data: {} }] },
          },
          position: [2690.2783586191144, -2095.5213268785787],
          name: "LocalCacheGet",
        },
        77: {
          id: 77,
          data: {},
          inputs: {
            in0: { connections: [{ node: 76, output: "out0", data: {} }] },
            in1: { connections: [{ node: 82, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 80, input: "in1", data: {} }] },
          },
          position: [2977.4114758004416, -1986.0492247120474],
          name: "Equal",
        },
        78: {
          id: 78,
          data: { string: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 82, input: "in1", data: {} }] },
          },
          position: [2427.900101298348, -1626.3215937992245],
          name: "String",
        },
        79: {
          id: 79,
          data: { in0: "switch-condition-3-output", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 80, output: "outTrue", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [3789.227668898555, -1991.7960474144534],
          name: "LocalCacheSet",
        },
        80: {
          id: 80,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 77, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 79, input: "in1", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [3529.205653906117, -1986.1715926006584],
          name: "Branch",
        },
        82: {
          id: 82,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 78, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 77, input: "in1", data: {} }] },
          },
          position: [2748.118201066144, -1854.8658704775596],
          name: "Await",
        },
        84: {
          id: 84,
          data: {},
          inputs: {
            in0: { connections: [{ node: 59, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 60, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 85, input: "in0", data: {} }] },
          },
          position: [3847.2149013031863, 863.9932849904969],
          name: "Or",
        },
        85: {
          id: 85,
          data: {},
          inputs: {
            in0: { connections: [{ node: 84, output: "out0", data: {} }] },
            in1: { connections: [{ node: 61, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 97, input: "in1", data: {} }] },
          },
          position: [4274.600766814138, 1464.5800165107087],
          name: "Or",
        },
        91: {
          id: 91,
          data: {},
          inputs: {
            in0: { connections: [{ node: 75, output: "output", data: {} }] },
            in1: { connections: [{ node: 96, output: "out0", data: {} }] },
          },
          outputs: {
            outTrue: { connections: [{ node: 97, input: "in0", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [4731.274459281186, 787.8378447147696],
          name: "Branch",
        },
        95: {
          id: 95,
          data: {},
          inputs: {
            in0: { connections: [{ node: 59, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 60, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 96, input: "in0", data: {} }] },
          },
          position: [4113.069024462826, 297.4692845718704],
          name: "And",
        },
        96: {
          id: 96,
          data: {},
          inputs: {
            in0: { connections: [{ node: 95, output: "out0", data: {} }] },
            in1: { connections: [{ node: 61, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 91, input: "in1", data: {} }] },
          },
          position: [4439.160979653526, 675.66402120315],
          name: "And",
        },
        97: {
          id: 97,
          data: {},
          inputs: {
            in0: { connections: [{ node: 91, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 85, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [5071.959182055581, 1116.1480138538805],
          name: "Or",
        },
      },
      comments: [
        {
          text: "Set return value to a default value when this module first initializes (default value if switch conditional never matches)",
          position: [1494.03350262492, -1606.5261733388356],
          links: [73, 74, 72],
          type: "frame",
          width: 869.6894385293408,
          height: 535.1766916947818,
        },
        {
          position: [2738.229707091715, 53.618670457155595],
          links: [55, 3, 4, 60, 56, 5, 6, 57, 7, 8, 58, 62, 63, 59, 61],
          type: "frame",
          width: 1170.937296801549,
          height: 2057.276873696135,
        },
        {
          position: [2355.6552853656567, -2198.243620069253],
          links: [78, 76, 82, 77, 80, 79],
          type: "frame",
          width: 1886.6157770366203,
          height: 864.5686794465078,
        },
        {
          position: [3759.4946150635565, -1253.5825269220065],
          links: [65, 64, 54],
          type: "frame",
          width: 1145.829966119867,
          height: 528.9929498032939,
        },
      ],
    },
    key: "module-switch-condition-3-new",
    label: "module-switch-condition-3-new",
  },
  "test-switch-3-new": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { module: "module-switch-condition-3-new" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 2, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 4, output: "out0", data: {} }],
            },
            output1: { connections: [{ node: 5, output: "out0", data: {} }] },
            checkAgainst2: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
            output2: { connections: [{ node: 8, output: "out0", data: {} }] },
            checkAgainst3: {
              connections: [{ node: 9, output: "out0", data: {} }],
            },
            output3: { connections: [{ node: 10, output: "out0", data: {} }] },
            default: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            output: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [78.02824657756659, -26.38319727755455],
          name: "Module",
        },
        2: {
          id: 2,
          data: { string: "option" },
          inputs: {
            in0: { connections: [{ node: 11, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "switchOnValue", data: {} }],
            },
          },
          position: [-683.7667206990249, -621.126842710083],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [632.284901671157, -47.56789635002855],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-675.7676359791743, -321.9465794129128],
          name: "String",
        },
        5: {
          id: 5,
          data: { string: "It was option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output1", data: {} }] },
          },
          position: [-675.5820312576211, -128.3168494690381],
          name: "String",
        },
        7: {
          id: 7,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-674.9819495332418, 147.2395949456921],
          name: "String",
        },
        8: {
          id: 8,
          data: { string: "It was option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output2", data: {} }] },
          },
          position: [-676.7324192857996, 340.5440185032959],
          name: "String",
        },
        9: {
          id: 9,
          data: { string: "option3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "checkAgainst3", data: {} }],
            },
          },
          position: [-676.1326875107236, 618.450676790013],
          name: "String",
        },
        10: {
          id: 10,
          data: { string: "It was option3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "output3", data: {} }] },
          },
          position: [-679.6475303349391, 816.2832794360654],
          name: "String",
        },
        11: {
          id: 11,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-959.3088986768463, -631.6089917201039],
          name: "OnInitialize",
        },
        12: {
          id: 12,
          data: { string: "No match!" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 1, input: "default", data: {} }] },
          },
          position: [-420.71352217880536, 1193.1143905964693],
          name: "String",
        },
      },
      comments: [],
    },
    key: "test-switch-3-new",
    label: "test-switch-3-new",
  },
  "module-switch-condition-2": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        3: {
          id: 3,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2562.247293598286, -527.148200352812],
          name: "String",
        },
        7: {
          id: 7,
          data: { trueData: "Placeholder" },
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 22, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 27, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [-902.8961832801743, -914.2315987571983],
          name: "Branch",
        },
        8: {
          id: 8,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 15, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [-148.03030211019012, -944.3741228344909],
          name: "Or",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2573.844119614946, -124.03671356430573],
          name: "String",
        },
        10: {
          id: 10,
          data: { in1: "Placeholder" },
          inputs: {
            in0: { connections: [{ node: 20, output: "output", data: {} }] },
            in1: { connections: [{ node: 23, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-1442.4390792655604, -300.95382008841136],
          name: "Equal",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2558.2705309295848, -943.9104279694003],
          name: "String",
        },
        12: {
          id: 12,
          data: { in0: "Placeholder" },
          inputs: {
            in0: { connections: [{ node: 21, output: "output", data: {} }] },
            in1: { connections: [{ node: 20, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-1434.3166504228695, -1088.5277536931815],
          name: "Equal",
        },
        13: {
          id: 13,
          data: { string: "data1" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2558.587061805764, -1139.1291281384615],
          name: "String",
        },
        14: {
          id: 14,
          data: { string: "data2" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2576.8859916416495, -322.1114850271611],
          name: "String",
        },
        15: {
          id: 15,
          data: { trueData: "Placeholder" },
          inputs: {
            in0: { connections: [{ node: 10, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 24, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 28, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in1", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [-878.3669561309057, -221.97372613281777],
          name: "Branch",
        },
        16: {
          id: 16,
          data: { trueData: "Placeholder" },
          inputs: {
            in0: { connections: [{ node: 17, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 25, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 29, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 18, input: "in0", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [-155.5061045222267, -175.16571881547594],
          name: "Branch",
        },
        17: {
          id: 17,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 15, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 16, input: "in0", data: {} }] },
          },
          position: [-441.9394961918347, -178.58603070423717],
          name: "And",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 26, input: "input", data: {} }] },
          },
          position: [200.7380398251638, -530.8375463442264],
          name: "Or",
        },
        19: {
          id: 19,
          data: { string: "Not found..." },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-2558.922414429446, -754.9018087392739],
          name: "String",
        },
        20: {
          id: 20,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 12, input: "in1", data: {} },
                { node: 10, input: "in0", data: {} },
              ],
            },
          },
          position: [-2051.398901353985, -567.9243876081937],
          name: "Input",
        },
        21: {
          id: 21,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 12, input: "in0", data: {} }] },
          },
          position: [-1881.182413695121, -1094.8451545105463],
          name: "Input",
        },
        22: {
          id: 22,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 7, input: "trueData", data: {} }] },
          },
          position: [-1876.917341094052, -907.0664522982519],
          name: "Input",
        },
        23: {
          id: 23,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-1896.9888127361958, -144.33897513594528],
          name: "Input",
        },
        24: {
          id: 24,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 15, input: "trueData", data: {} }],
            },
          },
          position: [-1895.5913518100738, 49.175373821293746],
          name: "Input",
        },
        25: {
          id: 25,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 16, input: "trueData", data: {} }],
            },
          },
          position: [-655.4773903411027, 76.9456082388399],
          name: "Input",
        },
        26: {
          id: 26,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [472.2706995096805, -524.9125499071783],
          name: "Output",
        },
        27: {
          id: 27,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "falseData", data: {} }] },
          },
          position: [-1200.7455812237513, -686.5925065538424],
          name: "Number",
        },
        28: {
          id: 28,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "falseData", data: {} }] },
          },
          position: [-1196.5723531258611, 53.70587616030949],
          name: "Number",
        },
        29: {
          id: 29,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "falseData", data: {} }] },
          },
          position: [-536.8180981322282, 252.5632095166576],
          name: "Number",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-2510.7387168801197, 67.94369550118131],
          links: [9],
          type: "inline",
        },
      ],
    },
    key: "module-switch-condition-2",
    label: "module-switch-condition-2",
  },
  "test-pipe-new": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [443.50599814787296, -532.573481458906],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-1458.2989272919158, -214.60187635975905],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-2033.8467637938236, -551.7899494178866],
          name: "OnInitialize",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 20, output: "out0", data: {} }] },
            falseData: {
              connections: [{ node: 21, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in0", data: {} }] },
          },
          position: [-902.8961832801743, -914.2315987571983],
          name: "Branch",
        },
        8: {
          id: 8,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 15, output: "outTrue", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 18, input: "in1", data: {} }] },
          },
          position: [-148.03030211019012, -944.3741228344909],
          name: "Or",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 10, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [-1762.37037831815, -551.2790697371938],
          name: "String",
        },
        10: {
          id: 10,
          data: {},
          inputs: {
            in0: { connections: [{ node: 9, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [-1142.309563785593, -346.21151466934816],
          name: "Equal",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 12, input: "in0", data: {} }] },
          },
          position: [-1482.9956920096697, -892.2972600837402],
          name: "String",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-1148.4788666451657, -743.140323873287],
          name: "Equal",
        },
        13: {
          id: 13,
          data: { string: "data1" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-1807.3811514148308, -1060.43992888903],
          name: "String",
        },
        14: {
          id: 14,
          data: { string: "data2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "trueData", data: {} }] },
          },
          position: [-1458.6007443681751, -15.299869667927574],
          name: "String",
        },
        15: {
          id: 15,
          data: {},
          inputs: {
            in0: { connections: [{ node: 10, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 14, output: "out0", data: {} }] },
            falseData: {
              connections: [{ node: 22, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in1", data: {} }] },
            outFalse: { connections: [{ node: 17, input: "in1", data: {} }] },
          },
          position: [-878.3669561309057, -221.97372613281777],
          name: "Branch",
        },
        16: {
          id: 16,
          data: {},
          inputs: {
            in0: { connections: [{ node: 17, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 19, output: "out0", data: {} }] },
            falseData: {
              connections: [{ node: 23, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 18, input: "in0", data: {} }] },
            outFalse: { connections: [] },
          },
          position: [-155.5061045222267, -175.16571881547594],
          name: "Branch",
        },
        17: {
          id: 17,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 15, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 16, input: "in0", data: {} }] },
          },
          position: [-441.9394961918347, -178.58603070423717],
          name: "And",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 16, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [200.7380398251638, -530.8375463442264],
          name: "Or",
        },
        19: {
          id: 19,
          data: { string: "Not found..." },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "trueData", data: {} }] },
          },
          position: [-497.262208852549, 47.96994886427774],
          name: "String",
        },
        20: {
          id: 20,
          data: { string: "Prompt" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "trueData", data: {} }] },
          },
          position: [-1459.4833463890384, -1044.4585419367759],
          name: "Input Prompt",
        },
        21: {
          id: 21,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "falseData", data: {} }] },
          },
          position: [-1461.3729326527437, -1244.3435045939714],
          name: "Number",
        },
        22: {
          id: 22,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "falseData", data: {} }] },
          },
          position: [-1460.557701617759, 187.00761701920953],
          name: "Number",
        },
        23: {
          id: 23,
          data: { num: "1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 16, input: "falseData", data: {} }] },
          },
          position: [-509.1134081234593, 288.85583222906473],
          name: "Number",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1699.2649755833233, -359.2986606717068],
          links: [9],
          type: "inline",
        },
      ],
    },
    key: "test-pipe-new",
    label: "test-pipe-new",
  },
  "test-pipe-new-2": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-424.1285431449684, -892.5771457603423],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-2033.8467637938236, -551.7899494178866],
          name: "OnInitialize",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 20, output: "out0", data: {} }] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 8, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 8, input: "in1", data: {} }] },
          },
          position: [-902.8961832801743, -914.2315987571983],
          name: "Branch",
        },
        8: {
          id: 8,
          data: {},
          inputs: {
            in0: { connections: [{ node: 7, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 7, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-645.3017497830559, -915.8847579225043],
          name: "Or",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 12, input: "in1", data: {} }] },
          },
          position: [-1762.37037831815, -551.2790697371938],
          name: "String",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 12, input: "in0", data: {} }] },
          },
          position: [-1525.7609075706064, -870.9146523032719],
          name: "String",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-1160.7571495868501, -741.0938913407268],
          name: "Equal",
        },
        18: {
          id: 18,
          data: {},
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [187.78826562948305, -458.3187318092649],
          name: "Or",
        },
        20: {
          id: 20,
          data: { string: "Prompt" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "trueData", data: {} }] },
          },
          position: [-1507.5942337896258, -1041.7857035300426],
          name: "Input Prompt",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1699.2649755833233, -359.2986606717068],
          links: [9],
          type: "inline",
        },
      ],
    },
    key: "test-pipe-new-2",
    label: "test-pipe-new-2",
  },
  "test-switch-2": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "output", data: {} }] },
          },
          outputs: {},
          position: [-257.7575102060345, -310.08720690530805],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 24, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-1738.9835973099005, 289.70888053497873],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-1890.6714557551556, -583.9314269915218],
          name: "OnInitialize",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 24, input: "switchOnValue", data: {} }],
            },
          },
          position: [-1654.2582592230149, -580.4985252342432],
          name: "String",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 24, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-1928.772287862976, -275.85646949955685],
          name: "String",
        },
        14: {
          id: 14,
          data: { string: "data2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "output2", data: {} }] },
          },
          position: [-1745.7472623131184, 491.2956609495087],
          name: "String",
        },
        20: {
          id: 20,
          data: { string: "data1" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "output1", data: {} }] },
          },
          position: [-1924.5234851203286, -63.088427036522475],
          name: "Input Prompt",
        },
        24: {
          id: 24,
          data: { module: "module-switch-condition-2" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 9, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 11, output: "out0", data: {} }],
            },
            output1: { connections: [{ node: 20, output: "out0", data: {} }] },
            checkAgainst2: {
              connections: [{ node: 3, output: "out0", data: {} }],
            },
            output2: { connections: [{ node: 14, output: "out0", data: {} }] },
            default: { connections: [{ node: 26, output: "out0", data: {} }] },
          },
          outputs: {
            output: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-859.6582202801062, -207.32262163696663],
          name: "Module",
        },
        26: {
          id: 26,
          data: { string: "default val" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "default", data: {} }] },
          },
          position: [-1322.7427336629319, 687.6998839819477],
          name: "String",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1591.1528564881883, -388.51811616875614],
          links: [9],
          type: "inline",
        },
        {
          position: [-1958.772287862976, -305.8564694995568],
          links: [20, 11],
          type: "frame",
          width: 346,
          height: 450.7680424630343,
        },
        {
          position: [-1775.7472623131184, 259.70888053497873],
          links: [3, 14],
          type: "frame",
          width: 352.76366500321797,
          height: 487.58678041453,
        },
      ],
    },
    key: "test-switch-2",
    label: "test-switch-2",
  },
  "module-data-pipe": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "in" },
          inputs: {},
          outputs: { output: { connections: [] } },
          position: [-616.7999787053625, -291.98124247940285],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [101.57190215441645, -143.20302796655773],
          name: "Output",
        },
        3: {
          id: 3,
          data: { string: "piped data" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-525.232550812274, 13.133046362552761],
          name: "String",
        },
        4: {
          id: 4,
          data: { in0: "2000" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [-198.47502293978468, -269.1226749536439],
          name: "Delay",
        },
      },
      comments: [],
    },
    key: "module-data-pipe",
    label: "module-data-pipe",
  },
  "module-nested-pipe": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "in" },
          inputs: {},
          outputs: { output: { connections: [] } },
          position: [-605.364059595739, -157.6097282479007],
          name: "Input",
        },
        2: {
          id: 2,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "out", data: {} }] },
          },
          outputs: {},
          position: [101.57190215441645, -143.20302796655773],
          name: "Output",
        },
        4: {
          id: 4,
          data: { module: "module-data-pipe" },
          inputs: { in: { connections: [] } },
          outputs: {
            out: { connections: [{ node: 2, input: "input", data: {} }] },
          },
          position: [-387.16671527641665, 42.50488753852285],
          name: "Module",
        },
      },
      comments: [],
    },
    key: "module-nested-pipe",
    label: "module-nested-pipe",
  },
  "test-double-switch-2": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        24: {
          id: 24,
          data: { module: "module-switch-condition-2" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 41, output: "output", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 42, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 43, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 44, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 45, output: "output", data: {} }],
            },
            default: { connections: [{ node: 28, output: "out0", data: {} }] },
          },
          outputs: {
            output: {
              connections: [
                { node: 29, input: "in0", data: {} },
                { node: 30, input: "falseData", data: {} },
              ],
            },
          },
          position: [-976.4089989869692, -491.5849809644561],
          name: "Module",
        },
        27: {
          id: 27,
          data: { module: "module-switch-condition-2" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 39, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 46, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 47, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 48, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 49, output: "output", data: {} }],
            },
            default: {
              connections: [{ node: 50, output: "output", data: {} }],
            },
          },
          outputs: {
            output: {
              connections: [{ node: 30, input: "trueData", data: {} }],
            },
          },
          position: [-969.0077441479034, 150.45208299455044],
          name: "Module",
        },
        28: {
          id: 28,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "default", data: {} }] },
          },
          position: [-1290.241887187702, -119.43678937759418],
          name: "Number",
        },
        29: {
          id: 29,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "output", data: {} }] },
            in1: { connections: [{ node: 31, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 30, input: "in0", data: {} }] },
          },
          position: [-456.191663767903, -285.9876843146019],
          name: "Equal",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 29, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 27, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 24, output: "output", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 32, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 32, input: "in1", data: {} }] },
          },
          position: [-90.71079257122064, -458.4753181695937],
          name: "Branch",
        },
        31: {
          id: 31,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 29, input: "in1", data: {} }] },
          },
          position: [-784.9708662119957, -111.01451481914603],
          name: "Number",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 30, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 30, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 40, input: "input", data: {} }] },
          },
          position: [155.57998769994245, -468.628444501522],
          name: "Or",
        },
        38: {
          id: 38,
          data: { in0: "switch-compare-to", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 41, output: "output", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1312.0740173268007, -1058.5544649581104],
          name: "LocalCacheSet",
        },
        39: {
          id: 39,
          data: { in0: "switch-compare-to" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 27, input: "switchOnValue", data: {} }],
            },
          },
          position: [-1285.2634342471981, 137.77692318958952],
          name: "LocalCacheGet",
        },
        40: {
          id: 40,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 32, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [395.9715242929984, -468.63495629894635],
          name: "Output",
        },
        41: {
          id: 41,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 38, input: "in1", data: {} },
                { node: 24, input: "switchOnValue", data: {} },
              ],
            },
          },
          position: [-1713.7984900756724, -973.6065768463884],
          name: "Input",
        },
        42: {
          id: 42,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2172.189713575299, -706.6012320498436],
          name: "Input",
        },
        43: {
          id: 43,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output1", data: {} }] },
          },
          position: [-2171.144927059127, -483.08265831643655],
          name: "Input",
        },
        44: {
          id: 44,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2175.5993721089435, -248.9893697014969],
          name: "Input",
        },
        45: {
          id: 45,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output2", data: {} }] },
          },
          position: [-2174.302394951676, -35.03563249486793],
          name: "Input",
        },
        46: {
          id: 46,
          data: { name: "checkAgainst3" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2180.150726129244, 218.46791764677903],
          name: "Input",
        },
        47: {
          id: 47,
          data: { name: "output3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output1", data: {} }] },
          },
          position: [-2179.105933637929, 437.88696836826807],
          name: "Input",
        },
        48: {
          id: 48,
          data: { name: "checkAgainst4" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2184.655603868684, 697.3487304723203],
          name: "Input",
        },
        49: {
          id: 49,
          data: { name: "output4" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output2", data: {} }] },
          },
          position: [-2186.3439043693243, 907.8122320658558],
          name: "Input",
        },
        50: {
          id: 50,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "default", data: {} }] },
          },
          position: [-1659.2340355529254, 1052.0712458555915],
          name: "Input",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1600.4042172865943, -794.7586126151623],
          links: [41],
          type: "inline",
        },
        {
          text: "",
          position: [-2202.189713575299, -736.6012320498437],
          links: [42, 43],
          type: "frame",
          width: 347.0447865161718,
          height: 454.03258618525007,
        },
        {
          text: "",
          position: [-2205.5993721089435, -278.9893697014969],
          links: [45, 44],
          type: "frame",
          width: 347.2969771572675,
          height: 463.95373720662894,
        },
        {
          text: "",
          position: [-2210.150726129244, 188.46791764677903],
          links: [47, 46],
          type: "frame",
          width: 347.0447924913151,
          height: 469.41905072148904,
        },
        {
          text: "",
          position: [-2216.3439043693243, 667.3487304723203],
          links: [49, 48],
          type: "frame",
          width: 347.68830050064025,
          height: 460.4635015935355,
        },
        {
          text: "",
          position: [-1689.2340355529254, 1022.0712458555915],
          links: [50],
          type: "frame",
          width: 346,
          height: 250,
        },
        {
          text: "",
          position: [-1747.046108046659, -1010.1018587595395],
          links: [41],
          type: "frame",
          width: 346,
          height: 280,
        },
      ],
    },
    key: "test-double-switch-2",
    label: "test-double-switch-2",
  },
  "test-double-switch-2-new": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 32, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1142.741504981171, -566.1321246746056],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "option2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 24, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2963.192817754103, -55.856932085006875],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-2534.43378701313, -719.1506425110113],
          name: "OnInitialize",
        },
        9: {
          id: 9,
          data: { string: "option2" },
          inputs: {
            in0: { connections: [{ node: 4, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 24, input: "switchOnValue", data: {} },
                { node: 30, input: "trueData", data: {} },
              ],
            },
          },
          position: [-2280.158114602333, -679.11082369377],
          name: "String",
        },
        11: {
          id: 11,
          data: { string: "option1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 24, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2663.3026706094906, -429.3443623601779],
          name: "String",
        },
        14: {
          id: 14,
          data: { string: "data2" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "output2", data: {} }] },
          },
          position: [-2969.9564827573213, 145.7298483295231],
          name: "String",
        },
        20: {
          id: 20,
          data: { string: "data1" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "output1", data: {} }] },
          },
          position: [-2659.0538678668436, -216.57631989714355],
          name: "Input Prompt",
        },
        24: {
          id: 24,
          data: { module: "module-switch-condition-2" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 9, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 11, output: "out0", data: {} }],
            },
            output1: { connections: [{ node: 20, output: "out0", data: {} }] },
            checkAgainst2: {
              connections: [{ node: 3, output: "out0", data: {} }],
            },
            output2: { connections: [{ node: 14, output: "out0", data: {} }] },
            default: { connections: [{ node: 28, output: "out0", data: {} }] },
          },
          outputs: {
            output: {
              connections: [
                { node: 29, input: "in0", data: {} },
                { node: 30, input: "falseData", data: {} },
              ],
            },
          },
          position: [-1047.2721245704656, -532.6109111816645],
          name: "Module",
        },
        26: {
          id: 26,
          data: { string: "default val" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-1927.4450745916631, 1444.9510011370871],
          name: "String",
        },
        27: {
          id: 27,
          data: { module: "module-switch-condition-2" },
          inputs: {
            switchOnValue: {
              connections: [{ node: 30, output: "outTrue", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 33, output: "out0", data: {} }],
            },
            output1: { connections: [{ node: 34, output: "out0", data: {} }] },
            checkAgainst2: {
              connections: [{ node: 35, output: "out0", data: {} }],
            },
            output2: { connections: [{ node: 36, output: "out0", data: {} }] },
            default: { connections: [{ node: 37, output: "out0", data: {} }] },
          },
          outputs: {
            output: { connections: [{ node: 32, input: "in1", data: {} }] },
          },
          position: [71.44391324577745, -268.17722137349745],
          name: "Module",
        },
        28: {
          id: 28,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "default", data: {} }] },
          },
          position: [-1388.9501281348955, -108.63107319956714],
          name: "Number",
        },
        29: {
          id: 29,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "output", data: {} }] },
            in1: { connections: [{ node: 31, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 30, input: "in0", data: {} }] },
          },
          position: [-523.7203174246779, -423.0746909704347],
          name: "Equal",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 29, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 9, output: "out0", data: {} }] },
            falseData: {
              connections: [{ node: 24, output: "output", data: {} }],
            },
          },
          outputs: {
            outTrue: {
              connections: [{ node: 27, input: "switchOnValue", data: {} }],
            },
            outFalse: { connections: [{ node: 32, input: "in0", data: {} }] },
          },
          position: [-288.9372276289728, -734.0190095004676],
          name: "Branch",
        },
        31: {
          id: 31,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 29, input: "in1", data: {} }] },
          },
          position: [-855.295896821697, -124.24939294456931],
          name: "Number",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 30, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 27, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [693.8736192827392, -732.3113841406548],
          name: "Or",
        },
        33: {
          id: 33,
          data: { string: "option3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 27, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2964.760989968866, 433.2578710087732],
          name: "String",
        },
        34: {
          id: 34,
          data: { string: "data3" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 27, input: "output1", data: {} }] },
          },
          position: [-2963.5797378081584, 640.2081493040621],
          name: "String",
        },
        35: {
          id: 35,
          data: { string: "option4" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 27, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2646.138857759175, 854.7658317190972],
          name: "String",
        },
        36: {
          id: 36,
          data: { string: "data4" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 27, input: "output2", data: {} }] },
          },
          position: [-2647.8968814592936, 1061.7158684750545],
          name: "String",
        },
        37: {
          id: 37,
          data: { string: "lol" },
          inputs: { string: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 27, input: "default", data: {} }] },
          },
          position: [-1917.1778154815709, 1291.4784587845033],
          name: "Input Prompt",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-2217.052711867507, -487.130414628283],
          links: [9],
          type: "inline",
        },
        {
          position: [-2693.3026706094906, -459.3443623601779],
          links: [11, 20],
          type: "frame",
          width: 346,
          height: 450.7680424630343,
        },
        {
          position: [-2999.9564827573213, -85.85693208500687],
          links: [14, 3],
          type: "frame",
          width: 352.76366500321797,
          height: 487.58678041453,
        },
        {
          position: [-2994.760989968866, 403.2578710087732],
          links: [33, 34],
          type: "frame",
          width: 347.1812521607076,
          height: 492.95027829528897,
        },
        {
          position: [-2682.0178696092344, 824.7658317190972],
          links: [36, 35],
          type: "frame",
          width: 350.1209881499408,
          height: 492.9500367559574,
        },
        {
          position: [-1957.4450745916631, 1261.4784587845033],
          links: [26, 37],
          type: "frame",
          width: 346,
          height: 439.4725423525837,
        },
      ],
    },
    key: "test-double-switch-2-new",
    label: "test-double-switch-2-new",
  },
  "test-code-component": {
    path: "/junk-utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-717.0931101016474, -78.57255729990926],
          name: "OnInitialize",
        },
        2: {
          id: 2,
          data: {},
          inputs: {
            in0: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [889.8549998864338, -403.59218959422566],
          name: "DisplayModal",
        },
        3: {
          id: 3,
          data: { string: "Kris Gano" },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-468.9375866531239, -167.0400949878537],
          name: "String",
        },
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [541.6913169296101, -167.22786188958386],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              "// Basic module example code, receiving multiple arguments from input nodes and returning some data based on them\n(args) => {\n  let arg0 = args[0];\n  let arg1 = args[1];\n  return arg0+arg1;\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-59.312517805088426, -757.6108991423572],
          name: "BigString",
        },
      },
      comments: [
        {
          text: "Parses out first names",
          position: [-69.31950470424113, -765.9790658084737],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-78.55646296305201, -766.0988304893774],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "test-code-component",
    label: "test-code-component",
  },
  "template-code-module-starter": {
    path: "/templates",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 9, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "input", data: {} }] },
          },
          position: [541.4171536992203, -161.99601326147422],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              "// Basic module example code, receiving multiple arguments from input nodes and returning some data based on them\n(args) => {\n  let arg0 = args[0];\n  let arg1 = args[1];\n  return arg0+arg1;\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-58.679529141083755, -758.5980361887347],
          name: "BigString",
        },
        6: {
          id: 6,
          data: { name: "arg0" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 9, input: "in0", data: {} }] },
          },
          position: [-704.2197724780873, -365.94505203501785],
          name: "Input",
        },
        7: {
          id: 7,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [857.5524243070724, -492.29854842703423],
          name: "Output",
        },
        8: {
          id: 8,
          data: { name: "arg1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 9, input: "in1", data: {} }] },
          },
          position: [-707.2202156711463, -163.81870590158735],
          name: "Input",
        },
        9: {
          id: 9,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "output", data: {} }] },
            in1: { connections: [{ node: 8, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-333.5800383123799, -159.36568924118478],
          name: "Array",
        },
      },
      comments: [
        {
          text: "Passes data through javascript code",
          position: [-91.16419165856594, -770.4243981230518],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-78.83062619344193, -760.8669818612677],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "template-code-module-starter",
    label: "template-code-module-starter",
  },
  "module-calculate-average": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 8, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "input", data: {} }] },
          },
          position: [537.059786792967, -171.1536604843586],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              "// Return the average of the input array\n(array) => {\n  return array.reduce( ( p, c ) => parseFloat(p) + parseFloat(c), 0 ) / array.length;\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-58.18400376051931, -758.0497137120093],
          name: "BigString",
        },
        7: {
          id: 7,
          data: { name: "average" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [859.9788713703796, -421.93038027184144],
          name: "Output",
        },
        8: {
          id: 8,
          data: { name: "array" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-408.7624995900945, -120.1416379368454],
          name: "Input",
        },
      },
      comments: [
        {
          text: "Passes data through javascript code",
          position: [-90.66866627800151, -769.8760756463264],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-83.18799309969529, -770.0246290841521],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "module-calculate-average",
    label: "module-calculate-average",
  },
  "module-calculate-sum": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 8, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "input", data: {} }] },
          },
          position: [539.3847123804112, -173.18610162078278],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              "// Return the sum of the elements in the input array\n(array) => {\n  return array.reduce( ( p, c ) => parseFloat(p) + parseFloat(c), 0 );\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-55.85907817307506, -760.0821548484334],
          name: "BigString",
        },
        7: {
          id: 7,
          data: { name: "count" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [859.9788713703796, -421.93038027184144],
          name: "Output",
        },
        8: {
          id: 8,
          data: { name: "array" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-408.7624995900945, -120.1416379368454],
          name: "Input",
        },
      },
      comments: [
        {
          text: "Passes data through javascript code",
          position: [-88.34374069055724, -771.9085167827506],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-80.86306751225105, -772.0570702205763],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "module-calculate-sum",
    label: "module-calculate-sum",
  },
  "module-count": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 8, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "input", data: {} }] },
          },
          position: [541.4171536992203, -165.05622022893152],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              "// Return the length of the input array\n(array) => {\n  return array.length;\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-53.82663685426594, -751.9522734565822],
          name: "BigString",
        },
        7: {
          id: 7,
          data: { name: "count" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [859.9788713703796, -421.93038027184144],
          name: "Output",
        },
        8: {
          id: 8,
          data: { name: "array" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-408.7624995900945, -120.1416379368454],
          name: "Input",
        },
      },
      comments: [
        {
          text: "Passes data through javascript code",
          position: [-86.31129937174813, -763.7786353908994],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-78.83062619344193, -763.9271888287251],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "module-count",
    label: "module-count",
  },
  "module-ai-assistant-generate-activity-suggestion": {
    path: "/ai-assistant/modules",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 81, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 104, input: "input", data: {} }] },
          },
          position: [-3901.0647254451314, 2392.649906200037],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [-4269.279473275401, 2323.774350315624],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [-4269.875965725601, 1914.2798301647226],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.6" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [-4269.92341102566, 2119.4158997355735],
          name: "Number",
        },
        23: {
          id: 23,
          data: {
            string:
              'Throughout the day, INPUT_USER_DESCRIPTION is prompted by their artificially intelligent personal assistant to keep their life on track. Most days, a simplified version of their schedule looks like\n\nlet userData = {\n  "Preferred Activities": "Tidy Apartment,Breakfast and Coffee,Work,Work Out,Eat Lunch,Go to the park with dog,Go shopping,Eat Dinner",\n  "Likes": "programming,startups,nonprofits",\n  "Dislikes": "movies",\n  "Activities": [\n    {\n      "Activity Effort Level": "Low Effort",\n      "Activity Description": "At 10:00 AM in the morning on a Monday in the summer",\n      "Message": "Sir, would you like to grab an enjoyable drink and hang out on the couch for a bit?"\n    },\n    {\n      "Activity Effort Level": "High Effort",\n      "Activity Description": "With the weather at 85 degrees, clear at 7:00 PM on a Thursday in the Fall season",\n      "Message": "It may be wise to go on a walk now Sir"\n    },\n    {\n      "Activity Effort Level": "High Effort",\n      "Activity Description": "With the weather at 90 degrees, sunny at 11:37 AM in the morning on a Sunday in the Summer season",\n      "Message": "What do you think about heading to the Farmer\'s Market Sir?"\n    },\n    {\n      "Activity Effort Level": "Medium Effort",\n      "Activity Description": "At 1:30 PM in the afternoon on a Monday in the summer",\n      "Message": "It might be nice to let the dog out, Sir."\n    },\n    {\n      "Activity Effort Level": "Low Effort",\n      "Activity Description": "With the weather at 73 degrees, sunny at 3:48 PM on a Tuesday in the Autumn season",\n      "Message": "Sir, what do you think about taking a break to play guitar for a bit?"\n    },\n    {\n      "Activity Effort Level": "INPUT_EFFORT_LEVEL",\n      "Activity Description": "With the weather at INPUT_WEATHER_DESCRIPTION at INPUT_TIME on a INPUT_DAY_OF_WEEK in the INPUT_SEASON season",\n      "Message": ',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 31, input: "in0", data: {} }] },
          },
          position: [-5589.763532423097, 1054.4702239861424],
          name: "BigString",
        },
        25: {
          id: 25,
          data: {
            string:
              "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-7067.411426529861, 1630.4018462856975],
          name: "String",
        },
        30: {
          id: 30,
          data: { in0: "2", in1: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in2", data: {} }] },
          },
          position: [-5030.360773812369, 3069.6493162299716],
          name: "RandInt",
        },
        31: {
          id: 31,
          data: {
            in0: "String",
            in1: "INPUT_USER_DESCRIPTION",
            in2: "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 103, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 32, input: "in0", data: {} }] },
          },
          position: [-4664.064585339173, 1704.10640787047],
          name: "StringReplace",
        },
        32: {
          id: 32,
          data: {
            in0: "String",
            in1: "INPUT_WEATHER_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 31, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 53, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in0", data: {} }] },
          },
          position: [-4665.937929815595, 1970.453412542906],
          name: "StringReplace",
        },
        33: {
          id: 33,
          data: { in0: "String", in1: "INPUT_TIME", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 32, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "timeString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 34, input: "in0", data: {} }] },
          },
          position: [-4664.872051120013, 2257.6099121697503],
          name: "StringReplace",
        },
        34: {
          id: 34,
          data: {
            in0: "String",
            in1: "INPUT_DAY_OF_WEEK",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 33, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "weekdayString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 36, input: "in0", data: {} }] },
          },
          position: [-4666.183690387264, 2491.6506667778826],
          name: "StringReplace",
        },
        35: {
          id: 35,
          data: {
            in0: "String",
            in1: "INPUT_MESSAGE_NUM",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 36, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 30, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 81, input: "in0", data: {} }] },
          },
          position: [-4678.345572471134, 3064.200851615877],
          name: "StringReplace",
        },
        36: {
          id: 36,
          data: { in0: "String", in1: "INPUT_SEASON", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 34, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "seasonString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [-4664.360513135342, 2757.610694695199],
          name: "StringReplace",
        },
        51: {
          id: 51,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {
            nowMilliseconds: { connections: [] },
            yearNumber: { connections: [] },
            monthNumber: { connections: [] },
            dayNumber: { connections: [] },
            hourNumber12: { connections: [] },
            hourNumber24: { connections: [] },
            minuteNumber: { connections: [] },
            secondNumber: { connections: [] },
            weekdayNumber: { connections: [] },
            monthString: { connections: [] },
            weekdayString: {
              connections: [{ node: 34, input: "in2", data: {} }],
            },
            timeString: { connections: [{ node: 33, input: "in2", data: {} }] },
            seasonString: {
              connections: [{ node: 36, input: "in2", data: {} }],
            },
            dateString: { connections: [] },
          },
          position: [-4990.387830219278, 2337.8484915165377],
          name: "Date",
        },
        52: {
          id: 52,
          data: { module: "module-get-current-weather" },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            temperature: {
              connections: [{ node: 53, input: "in0", data: {} }],
            },
            shortForecast: {
              connections: [{ node: 53, input: "in1", data: {} }],
            },
            detailedForecast: { connections: [] },
          },
          position: [-5602.234622340352, 2040.9125790419123],
          name: "Module",
        },
        53: {
          id: 53,
          data: { module: "join-strings" },
          inputs: {
            in0: {
              connections: [{ node: 52, output: "temperature", data: {} }],
            },
            in1: {
              connections: [{ node: 52, output: "shortForecast", data: {} }],
            },
            joinString: {
              connections: [{ node: 54, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 32, input: "in2", data: {} }] },
          },
          position: [-5132.024795172053, 2042.8671984004652],
          name: "Module",
        },
        54: {
          id: 54,
          data: { string: " degrees and " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 53, input: "joinString", data: {} }],
            },
          },
          position: [-5424.430948394006, 2319.7993310550078],
          name: "String",
        },
        70: {
          id: 70,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 71, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 72, input: "in0", data: {} },
                { node: 74, input: "in0", data: {} },
              ],
            },
          },
          position: [-7369.802845215216, 1256.2745175030782],
          name: "LocalCacheGet",
        },
        71: {
          id: 71,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 70, input: "in0", data: {} }] },
          },
          position: [-7671.637765289681, 1215.6046052140478],
          name: "String",
        },
        72: {
          id: 72,
          data: {},
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 73, input: "in1", data: {} }] },
          },
          position: [-7152.570507662428, 1344.1399497933126],
          name: "ArrayLength",
        },
        73: {
          id: 73,
          data: { in0: "0", in1: "Max" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 72, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 74, input: "in1", data: {} }] },
          },
          position: [-6940.676862854192, 1345.7333061011213],
          name: "RandInt",
        },
        74: {
          id: 74,
          data: { in1: "Index" },
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
            in1: { connections: [{ node: 73, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-6674.114153629504, 1182.9409721686816],
          name: "GetArrayElement",
        },
        81: {
          id: 81,
          data: { in0: "String", in1: "INPUT_EFFORT_LEVEL", in2: "Low Effort" },
          inputs: {
            in0: { connections: [{ node: 35, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 105, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-4670.894825773432, 3359.90210798176],
          name: "StringReplace",
        },
        89: {
          id: 89,
          data: { in0: "ai-assistant-message-type" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-6779.7006757781655, 1628.793561474486],
          name: "LocalCacheGet",
        },
        103: {
          id: 103,
          data: { name: "userDescription" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 31, input: "in2", data: {} }] },
          },
          position: [-5915.220508683141, 1813.6106556681093],
          name: "Input",
        },
        104: {
          id: 104,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-3363.7432932650872, 2403.0148547662825],
          name: "Output",
        },
        105: {
          id: 105,
          data: { name: "effortLevel" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 81, input: "in2", data: {} }] },
          },
          position: [-5920.6201346986445, 3372.3432135725084],
          name: "Input",
        },
      },
      comments: [
        {
          text: "Prepare prompt data to be fed into the Bloom Model",
          position: [-5616.01618044772, 965.7246655346493],
          links: [51, 34, 36, 31, 33, 32, 53, 52, 35, 30, 48, 54, 23],
          type: "frame",
          width: 1249.6556673123775,
          height: 2377.7374962372046,
        },
        {
          text: "Run Bloom model using prompt",
          position: [-4327.739521348598, 1853.3730933169454],
          links: [8, 9, 7, 4],
          type: "frame",
          width: 898.8586855805291,
          height: 876.9375111026122,
        },
        {
          position: [-7701.637765289681, 1152.9409721686816],
          links: [71, 70, 72, 73, 74],
          type: "frame",
          width: 1306.5236116601773,
          height: 436.79233393243976,
        },
      ],
    },
    key: "module-ai-assistant-generate-activity-suggestion",
    label: "module-ai-assistant-generate-activity-suggestion",
  },
  "module-switch-condition-4": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        24: {
          id: 24,
          data: {
            module: "module-switch-condition-2",
            checkAgainst1: "News",
            output1: "output5",
            checkAgainst2: "Question",
            output2: "output6",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 41, output: "output", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 42, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 43, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 44, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 45, output: "output", data: {} }],
            },
            default: { connections: [{ node: 28, output: "out0", data: {} }] },
          },
          outputs: {
            output: {
              connections: [
                { node: 29, input: "in0", data: {} },
                { node: 30, input: "falseData", data: {} },
              ],
            },
          },
          position: [-976.4089989869692, -491.5849809644561],
          name: "Module",
        },
        27: {
          id: 27,
          data: {
            module: "module-switch-condition-2",
            checkAgainst1: "Placeholder",
            output1: "Placeholder",
            checkAgainst2: "Placeholder",
            output2: "Placeholder",
            default: "Placeholder",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 39, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 46, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 47, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 48, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 49, output: "output", data: {} }],
            },
            default: {
              connections: [{ node: 50, output: "output", data: {} }],
            },
          },
          outputs: {
            output: {
              connections: [{ node: 30, input: "trueData", data: {} }],
            },
          },
          position: [-969.0077441479034, 150.45208299455044],
          name: "Module",
        },
        28: {
          id: 28,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "default", data: {} }] },
          },
          position: [-1290.241887187702, -119.43678937759418],
          name: "Number",
        },
        29: {
          id: 29,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "output", data: {} }] },
            in1: { connections: [{ node: 31, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 30, input: "in0", data: {} }] },
          },
          position: [-456.191663767903, -285.9876843146019],
          name: "Equal",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 29, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 27, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 24, output: "output", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 32, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 32, input: "in1", data: {} }] },
          },
          position: [-90.71079257122064, -458.4753181695937],
          name: "Branch",
        },
        31: {
          id: 31,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 29, input: "in1", data: {} }] },
          },
          position: [-784.9708662119957, -111.01451481914603],
          name: "Number",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 30, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 30, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 40, input: "input", data: {} }] },
          },
          position: [155.57998769994245, -468.628444501522],
          name: "Or",
        },
        38: {
          id: 38,
          data: { in0: "switch-compare-to" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 41, output: "output", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1312.0740173268007, -1058.5544649581104],
          name: "LocalCacheSet",
        },
        39: {
          id: 39,
          data: { in0: "switch-compare-to" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 27, input: "switchOnValue", data: {} }],
            },
          },
          position: [-1285.2634342471981, 137.77692318958952],
          name: "LocalCacheGet",
        },
        40: {
          id: 40,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 32, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [395.9715242929984, -468.63495629894635],
          name: "Output",
        },
        41: {
          id: 41,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 38, input: "in1", data: {} },
                { node: 24, input: "switchOnValue", data: {} },
              ],
            },
          },
          position: [-1713.7984900756724, -973.6065768463884],
          name: "Input",
        },
        42: {
          id: 42,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2172.189713575299, -706.6012320498436],
          name: "Input",
        },
        43: {
          id: 43,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output1", data: {} }] },
          },
          position: [-2171.144927059127, -483.08265831643655],
          name: "Input",
        },
        44: {
          id: 44,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2175.5993721089435, -248.9893697014969],
          name: "Input",
        },
        45: {
          id: 45,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output2", data: {} }] },
          },
          position: [-2174.302394951676, -35.03563249486793],
          name: "Input",
        },
        46: {
          id: 46,
          data: { name: "checkAgainst3" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2180.150726129244, 218.46791764677903],
          name: "Input",
        },
        47: {
          id: 47,
          data: { name: "output3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output1", data: {} }] },
          },
          position: [-2179.105933637929, 437.88696836826807],
          name: "Input",
        },
        48: {
          id: 48,
          data: { name: "checkAgainst4" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2184.655603868684, 697.3487304723203],
          name: "Input",
        },
        49: {
          id: 49,
          data: { name: "output4" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output2", data: {} }] },
          },
          position: [-2186.3439043693243, 907.8122320658558],
          name: "Input",
        },
        50: {
          id: 50,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "default", data: {} }] },
          },
          position: [-1659.2340355529254, 1052.0712458555915],
          name: "Input",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1600.4042172865943, -794.7586126151623],
          links: [41],
          type: "inline",
        },
        {
          text: "",
          position: [-2202.189713575299, -736.6012320498437],
          links: [42, 43],
          type: "frame",
          width: 347.0447865161718,
          height: 454.03258618525007,
        },
        {
          text: "",
          position: [-2205.5993721089435, -278.9893697014969],
          links: [45, 44],
          type: "frame",
          width: 347.2969771572675,
          height: 463.95373720662894,
        },
        {
          text: "",
          position: [-2210.150726129244, 188.46791764677903],
          links: [47, 46],
          type: "frame",
          width: 347.0447924913151,
          height: 469.41905072148904,
        },
        {
          text: "",
          position: [-2216.3439043693243, 667.3487304723203],
          links: [49, 48],
          type: "frame",
          width: 347.68830050064025,
          height: 460.4635015935355,
        },
        {
          text: "",
          position: [-1689.2340355529254, 1022.0712458555915],
          links: [50],
          type: "frame",
          width: 346,
          height: 250,
        },
        {
          text: "",
          position: [-1747.046108046659, -1010.1018587595395],
          links: [41],
          type: "frame",
          width: 346,
          height: 280,
        },
      ],
    },
    key: "module-switch-condition-4",
    label: "module-switch-condition-4",
  },
  "module-ai-assistant-generate-random-fact": {
    path: "/ai-assistant/modules",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "32",
            topP: "0.5",
            terminator: "\\n",
          },
          inputs: {
            prompt: { connections: [{ node: 35, output: "out0", data: {} }] },
            numTokens: { connections: [] },
            topP: { connections: [] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 104, input: "input", data: {} }] },
          },
          position: [-4440.209743027888, 1525.1007340361768],
          name: "Module",
        },
        23: {
          id: 23,
          data: {
            string:
              "Throughout the day, a person is prompted by their artificially intelligent personal assistant delivering interesting and fun random facts.\n\nHere are 20 examples of messages this assistant has sent:\n\n - Generated fact: Putting sugar on a cut will make it heal faster\n - Generated fact: ",
          },
          inputs: {
            in0: { connections: [{ node: 107, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [-5563.690365118712, 1043.9773046662772],
          name: "BigString",
        },
        30: {
          id: 30,
          data: { in0: "2", in1: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in2", data: {} }] },
          },
          position: [-5221.085953674588, 1829.3826681753558],
          name: "RandInt",
        },
        35: {
          id: 35,
          data: {
            in0: "String",
            in1: "INPUT_MESSAGE_NUM",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 30, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-4940.23434087093, 1664.9264134070738],
          name: "StringReplace",
        },
        103: {
          id: 103,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 107, input: "in0", data: {} }] },
          },
          position: [-6225.4746287273465, 1435.4590021109707],
          name: "Input",
        },
        104: {
          id: 104,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-3863.1786286124293, 1533.7345887298397],
          name: "Output",
        },
        106: {
          id: 106,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 107, input: "in1", data: {} }] },
          },
          position: [-6189.946827661104, 1610.7669981148874],
          name: "String",
        },
        107: {
          id: 107,
          data: { in0: "inputSignal" },
          inputs: {
            in0: { connections: [{ node: 103, output: "output", data: {} }] },
            in1: { connections: [{ node: 106, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [-5879.293321545617, 1466.4219014496505],
          name: "Await",
        },
      },
      comments: [
        {
          text: "Run Bloom model using prompt",
          position: [-4511.003255230527, 1454.3072218335371],
          links: [4],
          type: "frame",
          width: 530,
          height: 457,
        },
        {
          text: "",
          position: [-5619.940629052067, 979.8518814434673],
          links: [35, 30, 23],
          type: "frame",
          width: 1041.456024247782,
          height: 1083.4053635090786,
        },
      ],
    },
    key: "module-ai-assistant-generate-random-fact",
    label: "module-ai-assistant-generate-random-fact",
  },
  "module-ai-assistant-generate-status-update": {
    path: "/ai-assistant/modules",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 35, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 104, input: "input", data: {} }] },
          },
          position: [-2172.5785502002377, 2248.0745085920835],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [-2540.7932980305072, 2179.1989527076703],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [-2541.3897904807077, 1769.7044325567688],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.6" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [-2541.4372357807665, 1974.8405021276194],
          name: "Number",
        },
        23: {
          id: 23,
          data: {
            string:
              "Throughout the day, a person is prompted by their artificially intelligent personal assistant with status updates about their life.\n\nHere are 20 examples of messages this assistant has sent:\n\n: With the weather at 73 degrees, sunny at 3:48 PM on a Tuesday in the Autumn season: \n - It is currently 3:48 PM, and the weather is 73 degrees and sunny\n: With the weather at 67 degrees, clear at 4:19 PM on a Monday in the Winter season: \n - It is currently 4:19 PM\n: With the weather at 96 degrees, slight chance of clouds and thunderstorms at 11:43 AM on a Sunday in the Summer season: \n - The weather is looking a bit rainy this morning, Sir\n: With the weather at INPUT_WEATHER_DESCRIPTION at INPUT_TIME on a INPUT_DAY_OF_WEEK in the INPUT_SEASON season: \n - ",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 31, input: "in0", data: {} }] },
          },
          position: [-6458.350379581766, 1277.2241107812467],
          name: "BigString",
        },
        25: {
          id: 25,
          data: {
            string:
              "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-7268.40196362311, 2097.2188169490864],
          name: "String",
        },
        30: {
          id: 30,
          data: { in0: "2", in1: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in2", data: {} }] },
          },
          position: [-3255.5296406745942, 2589.428443620534],
          name: "RandInt",
        },
        31: {
          id: 31,
          data: {
            in0: "String",
            in1: "INPUT_USER_DESCRIPTION",
            in2: "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 103, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 32, input: "in0", data: {} }] },
          },
          position: [-5834.416702012469, 1734.9991655228077],
          name: "StringReplace",
        },
        32: {
          id: 32,
          data: {
            in0: "String",
            in1: "INPUT_WEATHER_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 31, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 53, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in0", data: {} }] },
          },
          position: [-4413.316660168064, 1748.5828413803602],
          name: "StringReplace",
        },
        33: {
          id: 33,
          data: { in0: "String", in1: "INPUT_TIME", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 32, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "timeString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 34, input: "in0", data: {} }] },
          },
          position: [-3594.274052811456, 1764.2996905036207],
          name: "StringReplace",
        },
        34: {
          id: 34,
          data: {
            in0: "String",
            in1: "INPUT_DAY_OF_WEEK",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 33, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "weekdayString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 36, input: "in0", data: {} }] },
          },
          position: [-3595.585692078707, 1998.340445111753],
          name: "StringReplace",
        },
        35: {
          id: 35,
          data: {
            in0: "String",
            in1: "INPUT_MESSAGE_NUM",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 36, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 30, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-2954.4530697587693, 2328.297312358948],
          name: "StringReplace",
        },
        36: {
          id: 36,
          data: { in0: "String", in1: "INPUT_SEASON", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 34, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 51, output: "seasonString", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [-3593.7625148267857, 2264.3004730290695],
          name: "StringReplace",
        },
        51: {
          id: 51,
          data: {},
          inputs: { in0: { connections: [] } },
          outputs: {
            nowMilliseconds: { connections: [] },
            yearNumber: { connections: [] },
            monthNumber: { connections: [] },
            dayNumber: { connections: [] },
            hourNumber12: { connections: [] },
            hourNumber24: { connections: [] },
            minuteNumber: { connections: [] },
            secondNumber: { connections: [] },
            weekdayNumber: { connections: [] },
            monthString: { connections: [] },
            weekdayString: {
              connections: [{ node: 34, input: "in2", data: {} }],
            },
            timeString: { connections: [{ node: 33, input: "in2", data: {} }] },
            seasonString: {
              connections: [{ node: 36, input: "in2", data: {} }],
            },
            dateString: { connections: [] },
          },
          position: [-3915.398251408866, 1926.541812008835],
          name: "Date",
        },
        52: {
          id: 52,
          data: { module: "module-get-current-weather" },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            temperature: {
              connections: [{ node: 53, input: "in0", data: {} }],
            },
            shortForecast: {
              connections: [{ node: 53, input: "in1", data: {} }],
            },
            detailedForecast: { connections: [] },
          },
          position: [-5419.070535498208, 2050.413331611668],
          name: "Module",
        },
        53: {
          id: 53,
          data: { module: "join-strings" },
          inputs: {
            in0: {
              connections: [{ node: 52, output: "temperature", data: {} }],
            },
            in1: {
              connections: [{ node: 52, output: "shortForecast", data: {} }],
            },
            joinString: {
              connections: [{ node: 54, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 32, input: "in2", data: {} }] },
          },
          position: [-4948.860708329909, 2048.069477281749],
          name: "Module",
        },
        54: {
          id: 54,
          data: { string: " degrees and " },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 53, input: "joinString", data: {} }],
            },
          },
          position: [-5241.266861551862, 2329.3000836247634],
          name: "String",
        },
        70: {
          id: 70,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 71, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 72, input: "in0", data: {} },
                { node: 74, input: "in0", data: {} },
              ],
            },
          },
          position: [-7810.849673593132, 1343.8353194677532],
          name: "LocalCacheGet",
        },
        71: {
          id: 71,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 70, input: "in0", data: {} }] },
          },
          position: [-8112.684593667597, 1303.1654071787227],
          name: "String",
        },
        72: {
          id: 72,
          data: {},
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 73, input: "in1", data: {} }] },
          },
          position: [-7593.6173360403445, 1431.7007517579875],
          name: "ArrayLength",
        },
        73: {
          id: 73,
          data: { in0: "0", in1: "Max" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 72, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 74, input: "in1", data: {} }] },
          },
          position: [-7381.723691232109, 1433.2941080657963],
          name: "RandInt",
        },
        74: {
          id: 74,
          data: { in1: "Index" },
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
            in1: { connections: [{ node: 73, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-7115.16098200742, 1270.5017741333565],
          name: "GetArrayElement",
        },
        89: {
          id: 89,
          data: { in0: "ai-assistant-message-type" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-6951.515022686147, 2128.0276992134486],
          name: "LocalCacheGet",
        },
        103: {
          id: 103,
          data: { name: "userDescription" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 31, input: "in2", data: {} }] },
          },
          position: [-6439.526112790469, 1950.7225866095985],
          name: "Input",
        },
        104: {
          id: 104,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-1536.5698141063879, 2004.8172505221735],
          name: "Output",
        },
      },
      comments: [
        {
          text: "Run Bloom model using prompt",
          position: [-2599.253346103704, 1708.7976957089916],
          links: [8, 9, 7, 4],
          type: "frame",
          width: 898.8586855805291,
          height: 876.9375111026122,
        },
        {
          position: [-8142.684593667597, 1240.5017741333565],
          links: [71, 70, 72, 73, 74],
          type: "frame",
          width: 1306.5236116601773,
          height: 436.79233393243976,
        },
        {
          text: "Date and time",
          position: [-3949.7898319107217, 1734.2996905036207],
          links: [36, 34, 33, 51],
          type: "frame",
          width: 654.0273170839355,
          height: 840.0007825254488,
        },
        {
          text: "Weather",
          position: [-5449.070535498208, 1718.5828413803602],
          links: [53, 52, 54, 32],
          type: "frame",
          width: 1333.7538753301442,
          height: 896.7172422444032,
        },
      ],
    },
    key: "module-ai-assistant-generate-status-update",
    label: "module-ai-assistant-generate-status-update",
  },
  "module-get-random-news": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 42, input: "in0", data: {} }] },
          },
          position: [-2487.0099038959074, -1587.6613195132677],
          name: "Input",
        },
        3: {
          id: 3,
          data: { preview: 0, in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
            in1: { connections: [{ node: 16, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-838.2793654255082, -257.17671970782817],
          name: "Append",
        },
        5: {
          id: 5,
          data: { in0: "URL", in1: "GET", in2: "" },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "in0", data: {} }] },
          },
          position: [-558.3041110265573, -284.0432510895342],
          name: "HTTPRequest",
        },
        6: {
          id: 6,
          data: { string: "https://api.weather.gov/points/" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-1231.7923093012662, -424.07298221751756],
          name: "String",
        },
        7: {
          id: 7,
          data: { in0: "JSON", in1: "properties" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 8, input: "in0", data: {} }] },
          },
          position: [-281.2696408833859, -278.74739883328556],
          name: "GetJSONValueComponent",
        },
        8: {
          id: 8,
          data: { in0: "JSON", in1: "forecast" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in0", data: {} }] },
          },
          position: [78.83376176733643, -279.6818269306149],
          name: "GetJSONValueComponent",
        },
        14: {
          id: 14,
          data: { string: "," },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 16, input: "joinString", data: {} }],
            },
          },
          position: [-1787.3991886130677, 115.60145410314288],
          name: "String",
        },
        15: {
          id: 15,
          data: {},
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            lat: { connections: [{ node: 16, input: "in0", data: {} }] },
            long: { connections: [{ node: 16, input: "in1", data: {} }] },
          },
          position: [-1721.3252192269667, -59.94658618546252],
          name: "Geolocation",
        },
        16: {
          id: 16,
          data: { module: "join-strings" },
          inputs: {
            in0: { connections: [{ node: 15, output: "lat", data: {} }] },
            in1: { connections: [{ node: 15, output: "long", data: {} }] },
            joinString: {
              connections: [{ node: 14, output: "out0", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "in1", data: {} }] },
          },
          position: [-1405.1110779044984, -71.74561085272052],
          name: "Module",
        },
        19: {
          id: 19,
          data: { in0: "URL", in1: "GET", in2: "Data" },
          inputs: {
            in0: { connections: [{ node: 8, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [502.24009991673915, 81.83147036918261],
          name: "HTTPRequest",
        },
        20: {
          id: 20,
          data: { in0: "JSON", in1: "properties" },
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 21, input: "in0", data: {} }] },
          },
          position: [780.2732999277599, 76.23926950805193],
          name: "GetJSONValueComponent",
        },
        21: {
          id: 21,
          data: { in0: "JSON", in1: "periods" },
          inputs: {
            in0: { connections: [{ node: 20, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 31, input: "in1", data: {} },
                { node: 22, input: "in0", data: {} },
              ],
            },
          },
          position: [1140.0821031961045, 72.24691737731814],
          name: "GetJSONValueComponent",
        },
        22: {
          id: 22,
          data: { in1: "0" },
          inputs: {
            in0: { connections: [{ node: 21, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 23, input: "in0", data: {} },
                { node: 25, input: "in0", data: {} },
                { node: 24, input: "in0", data: {} },
              ],
            },
          },
          position: [1536.6187984908352, 75.39735132032301],
          name: "GetArrayElement",
        },
        23: {
          id: 23,
          data: { in0: "JSON", in1: "temperature" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [1953.5857260613484, -178.3075129402926],
          name: "GetJSONValueComponent",
        },
        24: {
          id: 24,
          data: { in0: "JSON", in1: "detailedForecast" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [1941.406187935756, 276.0883542687315],
          name: "GetJSONValueComponent",
        },
        25: {
          id: 25,
          data: { in0: "JSON", in1: "shortForecast" },
          inputs: {
            in0: { connections: [{ node: 22, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: { out0: { connections: [] } },
          position: [1948.6722281796783, 26.468604573287806],
          name: "GetJSONValueComponent",
        },
        26: {
          id: 26,
          data: { name: "title" },
          inputs: {
            input: { connections: [{ node: 52, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1574.212437204589, -2213.8572712222804],
          name: "Output",
        },
        27: {
          id: 27,
          data: { name: "description" },
          inputs: {
            input: { connections: [{ node: 54, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1575.9417722643097, -1992.2908816488318],
          name: "Output",
        },
        28: {
          id: 28,
          data: { name: "content" },
          inputs: {
            input: { connections: [{ node: 53, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1573.916838805284, -1761.2704226451942],
          name: "Output",
        },
        31: {
          id: 31,
          data: {},
          inputs: {
            in0: { connections: [{ node: 32, output: "out0", data: {} }] },
            in1: { connections: [{ node: 21, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 33, input: "in0", data: {} }] },
          },
          position: [1529.8739121933593, -174.0987189509241],
          name: "Equal",
        },
        32: {
          id: 32,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 31, input: "in0", data: {} }] },
          },
          position: [1209.0049238804459, -200.52128106969977],
          name: "String",
        },
        33: {
          id: 33,
          data: {},
          inputs: {
            in0: { connections: [{ node: 31, output: "out0", data: {} }] },
            trueData: { connections: [{ node: 34, output: "out0", data: {} }] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 35, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 35, input: "in1", data: {} }] },
          },
          position: [1922.1290105492121, -622.6044343003799],
          name: "Branch",
        },
        34: {
          id: 34,
          data: {
            string:
              '{\n  "temperature": "(not available)",\n  "shortForecast": "(not available)",\n  "detailedForecast": "(not available)"\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 33, input: "trueData", data: {} }] },
          },
          position: [1206.4317246344863, -944.9461901291784],
          name: "BigString",
        },
        35: {
          id: 35,
          data: {},
          inputs: {
            in0: { connections: [{ node: 33, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 33, output: "outFalse", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2205.492861492913, -628.0047531102302],
          name: "Or",
        },
        40: {
          id: 40,
          data: {
            string:
              '() => {\n  let newsCategories = [\n    "business",\n    //"entertainment",\n    "general",\n    "health",\n    "science",\n    //"sports",\n    "technology"\n  ];\n  return newsCategories[parseInt(Math.random()*newsCategories.length)];\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 46, input: "in0", data: {} }] },
          },
          position: [-1849.516965949797, -2234.5263085895576],
          name: "BigString",
        },
        41: {
          id: 41,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 42, input: "in1", data: {} }] },
          },
          position: [-2496.763283234876, -1412.085483875152],
          name: "String",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
            in1: { connections: [{ node: 41, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 46, input: "in1", data: {} }] },
          },
          position: [-2150.3603915572685, -1597.9752145697762],
          name: "Await",
        },
        45: {
          id: 45,
          data: {
            string:
              "async (newsCategory) => {\n  let newsData = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${newsCategory}/in.json`);\n  let newsJson = await newsData.json();\n  return newsJson.articles;\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 47, input: "in0", data: {} }] },
          },
          position: [-877.386952344458, -2253.398896520502],
          name: "BigString",
        },
        46: {
          id: 46,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 40, output: "out0", data: {} }] },
            in1: { connections: [{ node: 42, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 47, input: "in1", data: {} }] },
          },
          position: [-1232.7330088528495, -1670.8905505206549],
          name: "Code",
        },
        47: {
          id: 47,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 45, output: "out0", data: {} }] },
            in1: { connections: [{ node: 46, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 50, input: "in1", data: {} }] },
          },
          position: [-244.58021987009656, -1673.7050421590213],
          name: "Code",
        },
        49: {
          id: 49,
          data: {
            string:
              "(articleArray) => {\n  return articleArray[parseInt(Math.random()*articleArray.length)];\n}",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 50, input: "in0", data: {} }] },
          },
          position: [94.86416757246329, -2251.4659288922458],
          name: "BigString",
        },
        50: {
          id: 50,
          data: { string: "" },
          inputs: {
            in0: { connections: [{ node: 49, output: "out0", data: {} }] },
            in1: { connections: [{ node: 47, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 52, input: "in0", data: {} },
                { node: 53, input: "in0", data: {} },
                { node: 54, input: "in0", data: {} },
              ],
            },
          },
          position: [700.7530514907709, -1671.9042076573003],
          name: "Code",
        },
        52: {
          id: 52,
          data: { in0: "JSON", in1: "title" },
          inputs: {
            in0: { connections: [{ node: 50, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 26, input: "input", data: {} }] },
          },
          position: [1137.475592117618, -2207.138847690058],
          name: "GetJSONValueComponent",
        },
        53: {
          id: 53,
          data: { in0: "JSON", in1: "content" },
          inputs: {
            in0: { connections: [{ node: 50, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 28, input: "input", data: {} }] },
          },
          position: [1133.9567719130075, -1767.2606221902777],
          name: "GetJSONValueComponent",
        },
        54: {
          id: 54,
          data: { in0: "JSON", in1: "description" },
          inputs: {
            in0: { connections: [{ node: 50, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 27, input: "input", data: {} }] },
          },
          position: [1134.5764477523312, -1992.6498510095923],
          name: "GetJSONValueComponent",
        },
      },
      comments: [
        {
          position: [-1817.3991886130677, -132.42308340469003],
          links: [16, 14, 15],
          type: "frame",
          width: 912.2881107085693,
          height: 504.0245375078329,
        },
        {
          position: [-588.3041110265573, -314.0432510895342],
          links: [5, 7, 8],
          type: "frame",
          width: 1054.1378727938936,
          height: 324,
        },
        {
          position: [472.24009991673915, 41.80075743299207],
          links: [19, 20, 21, 22],
          type: "frame",
          width: 1325.3398365754365,
          height: 334.0307129361905,
        },
        {
          text: "Fetch all articles from category using API",
          position: [-903.1291382583368, -2321.6546918385166],
          links: [47, 45],
          type: "frame",
          width: 908.5489183882403,
          height: 877.9496496794955,
        },
        {
          text: "Get random news category",
          position: [-1896.5151438829628, -2313.673095079695],
          links: [46, 40],
          type: "frame",
          width: 929.8573426754563,
          height: 841.4828847688386,
        },
        {
          text: "Get random article from fetched article array",
          position: [58.0780100398769, -2320.5844572738406],
          links: [50, 49],
          type: "frame",
          width: 892.6750414508938,
          height: 859.829211157954,
        },
        {
          text: "ENTER HERE",
          position: [-2561.2153515414875, -1640.7797872526314],
          links: [1],
          type: "inline",
        },
      ],
    },
    key: "module-get-random-news",
    label: "module-get-random-news",
  },
  "module-ai-assistant-generate-random-news-message": {
    path: "/ai-assistant/modules",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 35, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 104, input: "input", data: {} }] },
          },
          position: [-4182.908109411409, 1546.8285915273293],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [-4551.1228572416785, 1471.1009136172017],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "64" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [-4551.719349691879, 1059.3819154987386],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.6" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [-4551.766794991938, 1266.7424630371513],
          name: "Number",
        },
        23: {
          id: 23,
          data: {
            string:
              'Throughout the day, a person is prompted by their artificially intelligent personal assistant informing them of news updates\n\nHere are 20 examples of messages this assistant has sent:\n\n{\n  "News Title": "10 best Minecraft Java Edition seeds for speedrunning in 2022 - Sportskeeda",\n  "News Description": "A speedrun in Minecraft is a playthrough of the game to complete tasks as fast as possible.",\n  "Summary Message": "Sir, the news outlet Sportskeeda has released 10 best Minecraft Java Edition seeds for speedrunning. Are you interested in checking it out?"\n},\n{\n  "News Title": "iPhone 14 Pro And iPhone 14 Pro Max May Get Faster Data Transfer Speed, But No USB-C Port - Watch - India.com",\n  "News Description": "Apple may equip the iPhone 14 pro models with faster USB 3.0 speed. Watch video for more details.",\n  "Summary Message": "News is in from India.com that the iPhone 14 Pro And iPhone 14 Pro Max might be getting faster data transport speeds, but will not have a USB-C Port. Is that interesting?"\n},\n{\n  "News Title": "Research shows how some apps keep tracking users despite new iOS privacy features - 9to5Mac",\n  "News Description": "Some developers have figured out new ways to keep tracking iOS users even when they opt out of being tracked by third-party apps.",\n  "Summary Message": "News, Sir. Some developers have figured out new ways to keep tracking iOS users even when they opt out of being tracked by third-party apps. Care to research?"\n},\n{\n  "News Title": "INPUT_NEWS_TITLE",\n  "News Description": "INPUT_NEWS_DESCRIPTION",\n  "Summary Message": ',
          },
          inputs: {
            in0: { connections: [{ node: 107, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 109, input: "in0", data: {} }] },
          },
          position: [-7249.685494256802, 1046.3336955993893],
          name: "BigString",
        },
        30: {
          id: 30,
          data: { in0: "2", in1: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in2", data: {} }] },
          },
          position: [-5250.268198051852, 1858.982157648236],
          name: "RandInt",
        },
        35: {
          id: 35,
          data: {
            in0: "String",
            in1: "INPUT_MESSAGE_NUM",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 110, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 30, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-4966.4846048042855, 1630.800990184264],
          name: "StringReplace",
        },
        103: {
          id: 103,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 107, input: "in0", data: {} }] },
          },
          position: [-7885.219493932081, 1481.661433335684],
          name: "Input",
        },
        104: {
          id: 104,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-3640.8541323204877, 1362.401736800185],
          name: "Output",
        },
        106: {
          id: 106,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 107, input: "in1", data: {} }] },
          },
          position: [-7849.691692865838, 1653.41542538246],
          name: "String",
        },
        107: {
          id: 107,
          data: { in0: "inputSignal" },
          inputs: {
            in0: { connections: [{ node: 103, output: "output", data: {} }] },
            in1: { connections: [{ node: 106, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [-7539.038186750351, 1509.070328717223],
          name: "Await",
        },
        108: {
          id: 108,
          data: { module: "module-get-random-news" },
          inputs: { inputSignal: { connections: [] } },
          outputs: {
            title: { connections: [{ node: 109, input: "in2", data: {} }] },
            description: {
              connections: [{ node: 110, input: "in2", data: {} }],
            },
            content: { connections: [] },
          },
          position: [-6549.138987153486, 1708.756518473397],
          name: "Module",
        },
        109: {
          id: 109,
          data: { in0: "String", in1: "INPUT_NEWS_TITLE", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 108, output: "title", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 110, input: "in0", data: {} }] },
          },
          position: [-6014.3694987137505, 1410.9438164782907],
          name: "StringReplace",
        },
        110: {
          id: 110,
          data: {
            in0: "String",
            in1: "INPUT_NEWS_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 109, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: {
              connections: [{ node: 108, output: "description", data: {} }],
            },
          },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [-5677.598395502118, 1656.0705526948607],
          name: "StringReplace",
        },
      },
      comments: [
        {
          text: "Run Bloom model using prompt",
          position: [-4609.5829053148755, 1000.6996566185232],
          links: [9, 7, 4, 8],
          type: "frame",
          width: 898.8586855805291,
          height: 876.9375111026122,
        },
        {
          position: [-6579.138987153486, 1376.659199125929],
          links: [108, 110, 109],
          type: "frame",
          width: 1199.5405916513673,
          height: 661.0973193474679,
        },
      ],
    },
    key: "module-ai-assistant-generate-random-news-message",
    label: "module-ai-assistant-generate-random-news-message",
  },
  "module-get-context-associations": {
    path: "/ai-assistant",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 35, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 108, input: "in0", data: {} }] },
          },
          position: [-4231.1078764915055, 1507.843240373776],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [-4599.322624321775, 1438.967684489363],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "32" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [-4599.9191167719755, 1029.4731643384616],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.6" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [-4599.966562072034, 1234.6092339093125],
          name: "Number",
        },
        23: {
          id: 23,
          data: {
            string:
              "#water\nland,river,flow,sea,temperature,soil,lake,fluid,liquid,ice,stream,rain,ocean,wet,beach,marine,pool,creek,urine,basin,flood,moisture,drainage,floating,tide,drain,sweat,water supply,habitat,sediment,spray,pond,tap,aqueous,hydraulic,toilet,drought,humidity,aquatic,groundwater\n\n#Cotton Gin\nfactory,machinery,mill,carrier,devil,hook,spinning,skip,header,roller,mule,willow,comb,compressor,gin,breaker,sewing machine,harvester,transporter,washing machine,sawmill,Mower,steel mill,spinning wheel,winder,extractor,scrubber,duster,rolling mill,sugar mill,air cleaner,carding,wind turbine,cropper,pulp mill,water wheel,centrifuging,peeler,gasifier,paper machine\n\n#INPUT_SUBJECT",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 35, input: "in0", data: {} }] },
          },
          position: [-5638.1325069557415, 1005.6123383405542],
          name: "BigString",
        },
        25: {
          id: 25,
          data: {
            string:
              "a 32 year old single man named Kris who lives in Austin, TX and works from home as a Software Specialist",
          },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-5110.08442290048, 2157.786040269248],
          name: "String",
        },
        30: {
          id: 30,
          data: { in0: "2", in1: "5000" },
          inputs: { in0: { connections: [] }, in1: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-5364.705818897378, 2179.254419864948],
          name: "RandInt",
        },
        35: {
          id: 35,
          data: { in0: "String", in1: "INPUT_SUBJECT", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 23, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 103, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-4987.621854892872, 1626.7851924364954],
          name: "StringReplace",
        },
        89: {
          id: 89,
          data: { in0: "ai-assistant-message-type" },
          inputs: { in0: { connections: [] } },
          outputs: { out0: { connections: [] } },
          position: [-4817.3512673087325, 2145.76636918149],
          name: "LocalCacheGet",
        },
        103: {
          id: 103,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 35, input: "in2", data: {} }] },
          },
          position: [-5933.405988497993, 1637.2937634578984],
          name: "Input",
        },
        104: {
          id: 104,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 108, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [-3294.670286719547, 1550.5992231092237],
          name: "Output",
        },
        106: {
          id: 106,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 107, input: "in1", data: {} }] },
          },
          position: [-5422.043427474234, 2622.9020787351697],
          name: "String",
        },
        107: {
          id: 107,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 106, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-5114.3682388734205, 2681.8266462598217],
          name: "Await",
        },
        108: {
          id: 108,
          data: { in0: "String", in1: "," },
          inputs: {
            in0: { connections: [{ node: 4, output: "text", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 104, input: "input", data: {} }] },
          },
          position: [-3709.486860407713, 1559.4363477909474],
          name: "StringSplit",
        },
      },
      comments: [
        {
          text: "Run Bloom model using prompt",
          position: [-4657.782672394972, 968.5664274906844],
          links: [8, 9, 7, 4],
          type: "frame",
          width: 898.8586855805291,
          height: 876.9375111026122,
        },
        {
          text: "return an array of words",
          position: [-3673.8566709720917, 1731.1842682771087],
          links: [108],
          type: "inline",
        },
      ],
    },
    key: "module-get-context-associations",
    label: "module-get-context-associations",
  },
  "template-LLM-prompt": {
    path: "/templates",
    data: {
      id: "demo@0.1.0",
      nodes: {
        3: {
          id: 3,
          data: {
            string:
              '// JSON of user descriptions, which are then combined with additional facts about the user into a single description\n{\n  {\n    "User Description": "They are a single woman living in Los Angeles who works as a Barista. They like to eat tacos. They don\'t want to go to the park today. They need to buy groceries on Tuesday. Before going to bed, they read books.",\n    "User Facts": "They like to watch Netflix. They like going to reJstaurants.",\n    "User Description + User Facts": "They are a single woman living in Los Angeles who works as a Barista. They like to go to restaurants and eat food like tacos. They don\'t want to go to the park today, but they are interested in Netflix. They need to buy groceries on Tuesday. Before going to bed, they read books."\n  },\n  {\n    "User Description": "",\n    "User Facts": "",\n    "User Description + User Facts": ',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [-680.5796013116532, -428.44640279034684],
          name: "BigString",
        },
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 14, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 25, input: "input", data: {} }] },
          },
          position: [715.2906937730061, -618.493030828015],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [318.05153171895824, 171.42085601606215],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "100" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [319.50069708391385, -364.79735035198144],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [318.43711924180235, -119.59373408260555],
          name: "Number",
        },
        14: {
          id: 14,
          data: {
            in0: "String",
            in1: "INPUT_BASE_USER_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 23, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-30.222387459808473, -634.8455118122475],
          name: "StringReplace",
        },
        23: {
          id: 23,
          data: { name: "userDescription" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in2", data: {} }] },
          },
          position: [-1004.7800443760804, -646.4447986435285],
          name: "Input",
        },
        25: {
          id: 25,
          data: { name: "condensedDescription" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [1279.7090776844213, -649.8991768468584],
          name: "Output",
        },
      },
      comments: [
        {
          position: [295.27930023952786, -648.493030828015],
          links: [4, 8, 9, 7],
          type: "frame",
          width: 920.011393533478,
          height: 1100.3493014866363,
        },
        {
          text: "",
          position: [-710.5796013116532, -654.9162924703883],
          links: [3, 14],
          type: "frame",
          width: 958.4986804756212,
          height: 913.4698896800414,
        },
        {
          text: "The body of the prompt goes here",
          position: [-684.3535715428728, -443.38205486309664],
          links: [3],
          type: "inline",
        },
        {
          text: "Number of characters for the model to generate",
          position: [309.82746067088567, -217.9347048928314],
          links: [8],
          type: "inline",
        },
        {
          text: "A character sequence that will terminate the return data (capping it)",
          position: [307.884578298702, 322.1233481866897],
          links: [7],
          type: "inline",
        },
        {
          text: "The creativity level of the model (revolves around 1.0)",
          position: [310.4472492637392, 30.652181362343754],
          links: [9],
          type: "inline",
        },
      ],
    },
    key: "template-LLM-prompt",
    label: "template-LLM-prompt",
  },
  "module-add-to-user-description": {
    path: "/ai-assistant",
    data: {
      id: "demo@0.1.0",
      nodes: {
        3: {
          id: 3,
          data: {
            string:
              '// JSON of user descriptions, which are then combined with additional facts about the user into a single description\n{\n  {\n    "User Description": "They are a single woman living in Los Angeles who works as a Barista. They like to eat tacos. They don\'t want to go to the park today. They need to buy groceries on Tuesday. Before going to bed, they read books.",\n    "User Facts": "They like to watch Netflix. They like going to reJstaurants.",\n    "User Description + User Facts": "They are a single woman living in Los Angeles who works as a Barista. They like to go to restaurants and eat food like tacos. They don\'t want to go to the park today, but they are interested in Netflix. They need to buy groceries on Tuesday. Before going to bed, they read books."\n  },\n  {\n    "User Description": "",\n    "User Facts": "",\n    "User Description + User Facts": ',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 26, input: "in0", data: {} }] },
          },
          position: [-1158.6620004797462, -65.0842330581981],
          name: "BigString",
        },
        4: {
          id: 4,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 14, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 8, output: "out0", data: {} }] },
            topP: { connections: [{ node: 9, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 7, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 25, input: "input", data: {} }] },
          },
          position: [632.6450384442468, -704.4350130553522],
          name: "Module",
        },
        7: {
          id: 7,
          data: { string: "\\n" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "terminator", data: {} }] },
          },
          position: [235.40587639019893, 85.47887378872491],
          name: "String",
        },
        8: {
          id: 8,
          data: { num: "100" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "numTokens", data: {} }] },
          },
          position: [236.85504175515453, -450.73933257931867],
          name: "Number",
        },
        9: {
          id: 9,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "topP", data: {} }] },
          },
          position: [235.79146391304303, -205.53571630994276],
          name: "Number",
        },
        14: {
          id: 14,
          data: {
            in0: "String",
            in1: "INPUT_BASE_USER_DESCRIPTION",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 26, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 23, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "prompt", data: {} }] },
          },
          position: [-150.2670442390397, -692.2848240348712],
          name: "StringReplace",
        },
        23: {
          id: 23,
          data: { name: "userDescription" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 14, input: "in2", data: {} }] },
          },
          position: [-1482.9848699759982, -712.2735246404111],
          name: "Input",
        },
        25: {
          id: 25,
          data: { name: "condensedDescription" },
          inputs: {
            input: { connections: [{ node: 4, output: "text", data: {} }] },
          },
          outputs: {},
          position: [1221.6875541502015, -714.520163164387],
          name: "Output",
        },
        26: {
          id: 26,
          data: {
            in0: "String",
            in1: "INPUT_ADDITIONAL_FACTS",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 27, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 14, input: "in0", data: {} }] },
          },
          position: [-510.47223614950474, -397.4811360207102],
          name: "StringReplace",
        },
        27: {
          id: 27,
          data: { name: "additionalFacts" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 26, input: "in2", data: {} }] },
          },
          position: [-1483.8895380706113, -454.1331816577467],
          name: "Input",
        },
      },
      comments: [
        {
          text: "",
          position: [212.63364491076854, -734.4350130553522],
          links: [4, 9, 7, 8],
          type: "frame",
          width: 920.011393533478,
          height: 1100.3493014866363,
        },
        {
          text: "The body of the prompt goes here",
          position: [-1162.4359707109659, -80.01988513094788],
          links: [3],
          type: "inline",
        },
        {
          text: "Number of characters for the model to generate",
          position: [227.18180534212635, -303.87668712016864],
          links: [8],
          type: "inline",
        },
        {
          text: "A character sequence that will terminate the return data (capping it)",
          position: [225.2389229699427, 236.18136595935243],
          links: [7],
          type: "inline",
        },
        {
          text: "The creativity level of the model (revolves around 1.0)",
          position: [227.80159393497988, -55.28980086499345],
          links: [9],
          type: "inline",
        },
        {
          text: "This module takes a user input, along with a set of additional statements about them, and then condenses both into one single fluid description",
          position: [-1606.8644111175406, -914.160305524678],
          links: [23],
          type: "inline",
        },
        {
          text: "",
          position: [-1188.6620004797462, -722.2848240348712],
          links: [14, 26, 3],
          type: "frame",
          width: 1336.3949562407065,
          height: 1349.719352810724,
        },
      ],
    },
    key: "module-add-to-user-description",
    label: "module-add-to-user-description",
  },
  "module-switch-condition-8": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        24: {
          id: 24,
          data: {
            module: "module-switch-condition-4",
            switchOnValue: "switchOnValue",
            checkAgainst1: "Affirmation",
            output1: "output1",
            checkAgainst2: "Activity Suggestion",
            output2: "output2",
            checkAgainst3: "Random Fact",
            output3: "output3",
            checkAgainst4: "Status Update",
            output4: "output4",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 41, output: "output", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 42, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 43, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 44, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 45, output: "output", data: {} }],
            },
            checkAgainst3: {
              connections: [{ node: 46, output: "output", data: {} }],
            },
            output3: {
              connections: [{ node: 47, output: "output", data: {} }],
            },
            checkAgainst4: {
              connections: [{ node: 48, output: "output", data: {} }],
            },
            output4: {
              connections: [{ node: 49, output: "output", data: {} }],
            },
            default: { connections: [{ node: 28, output: "out0", data: {} }] },
          },
          outputs: {
            output: {
              connections: [
                { node: 29, input: "in0", data: {} },
                { node: 30, input: "falseData", data: {} },
              ],
            },
          },
          position: [-1005.267532616352, -699.3663900700416],
          name: "Module",
        },
        27: {
          id: 27,
          data: {
            module: "module-switch-condition-4",
            checkAgainst1: "News",
            output1: "output5",
            checkAgainst2: "Question",
            output2: "output6",
            checkAgainst3: "Placeholder",
            output3: "Placeholder",
            checkAgainst4: "Placeholder",
            output4: "Placeholder",
            default: "Placeholder",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 39, output: "out0", data: {} }],
            },
            checkAgainst1: {
              connections: [{ node: 50, output: "output", data: {} }],
            },
            output1: {
              connections: [{ node: 51, output: "output", data: {} }],
            },
            checkAgainst2: {
              connections: [{ node: 52, output: "output", data: {} }],
            },
            output2: {
              connections: [{ node: 53, output: "output", data: {} }],
            },
            checkAgainst3: {
              connections: [{ node: 54, output: "output", data: {} }],
            },
            output3: {
              connections: [{ node: 55, output: "output", data: {} }],
            },
            checkAgainst4: {
              connections: [{ node: 56, output: "output", data: {} }],
            },
            output4: {
              connections: [{ node: 57, output: "output", data: {} }],
            },
            default: {
              connections: [{ node: 58, output: "output", data: {} }],
            },
          },
          outputs: {
            output: {
              connections: [{ node: 30, input: "trueData", data: {} }],
            },
          },
          position: [-943.0350198468311, 257.22856935401137],
          name: "Module",
        },
        28: {
          id: 28,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 24, input: "default", data: {} }] },
          },
          position: [-1290.241887187702, -119.43678937759418],
          name: "Number",
        },
        29: {
          id: 29,
          data: {},
          inputs: {
            in0: { connections: [{ node: 24, output: "output", data: {} }] },
            in1: { connections: [{ node: 31, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 30, input: "in0", data: {} }] },
          },
          position: [-456.191663767903, -285.9876843146019],
          name: "Equal",
        },
        30: {
          id: 30,
          data: {},
          inputs: {
            in0: { connections: [{ node: 29, output: "out0", data: {} }] },
            trueData: {
              connections: [{ node: 27, output: "output", data: {} }],
            },
            falseData: {
              connections: [{ node: 24, output: "output", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [{ node: 32, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 32, input: "in1", data: {} }] },
          },
          position: [-90.71079257122064, -458.4753181695937],
          name: "Branch",
        },
        31: {
          id: 31,
          data: { num: "-1" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 29, input: "in1", data: {} }] },
          },
          position: [-784.9708662119957, -111.01451481914603],
          name: "Number",
        },
        32: {
          id: 32,
          data: {},
          inputs: {
            in0: { connections: [{ node: 30, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 30, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 40, input: "input", data: {} }] },
          },
          position: [155.57998769994245, -468.628444501522],
          name: "Or",
        },
        38: {
          id: 38,
          data: { in0: "switch-compare-to", in1: "switchOnValue" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 41, output: "output", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1566.859910768983, -2226.364889072554],
          name: "LocalCacheSet",
        },
        39: {
          id: 39,
          data: { in0: "switch-compare-to" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [{ node: 27, input: "switchOnValue", data: {} }],
            },
          },
          position: [-1285.2634342471981, 137.77692318958952],
          name: "LocalCacheGet",
        },
        40: {
          id: 40,
          data: { name: "output" },
          inputs: {
            input: { connections: [{ node: 32, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [395.9715242929984, -468.63495629894635],
          name: "Output",
        },
        41: {
          id: 41,
          data: { name: "switchOnValue" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 38, input: "in1", data: {} },
                { node: 24, input: "switchOnValue", data: {} },
              ],
            },
          },
          position: [-1990.3010339591153, -2029.2954385117935],
          name: "Input",
        },
        42: {
          id: 42,
          data: { name: "checkAgainst1" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2370.4920430427796, -1870.0124729764598],
          name: "Input",
        },
        43: {
          id: 43,
          data: { name: "output1" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output1", data: {} }] },
          },
          position: [-2369.447256526608, -1646.493899243053],
          name: "Input",
        },
        44: {
          id: 44,
          data: { name: "checkAgainst2" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2365.079748411342, -1413.0326560829376],
          name: "Input",
        },
        45: {
          id: 45,
          data: { name: "output2" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output2", data: {} }] },
          },
          position: [-2363.7827712540743, -1193.3364220324274],
          name: "Input",
        },
        46: {
          id: 46,
          data: { name: "checkAgainst3" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst3", data: {} }],
            },
          },
          position: [-2371.107990956179, -938.18295180097],
          name: "Input",
        },
        47: {
          id: 47,
          data: { name: "output3" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output3", data: {} }] },
          },
          position: [-2370.063198464864, -718.7639010794809],
          name: "Input",
        },
        48: {
          id: 48,
          data: { name: "checkAgainst4" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 24, input: "checkAgainst4", data: {} }],
            },
          },
          position: [-2377.8270483684087, -465.9150368061112],
          name: "Input",
        },
        49: {
          id: 49,
          data: { name: "output4" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 24, input: "output4", data: {} }] },
          },
          position: [-2379.515348869049, -255.45153521257566],
          name: "Input",
        },
        50: {
          id: 50,
          data: { name: "checkAgainst5" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst1", data: {} }],
            },
          },
          position: [-2381.409368925806, 10.556283415498932],
          name: "Input",
        },
        51: {
          id: 51,
          data: { name: "output5" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output1", data: {} }] },
          },
          position: [-2380.1600332080666, 216.53068649483004],
          name: "Input",
        },
        52: {
          id: 52,
          data: { name: "checkAgainst6" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst2", data: {} }],
            },
          },
          position: [-2388.1428359185034, 471.28640755103845],
          name: "Input",
        },
        53: {
          id: 53,
          data: { name: "output6" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output2", data: {} }] },
          },
          position: [-2384.939475696247, 667.9405374311804],
          name: "Input",
        },
        54: {
          id: 54,
          data: { name: "checkAgainst7" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst3", data: {} }],
            },
          },
          position: [-2388.782544723728, 918.848176262526],
          name: "Input",
        },
        55: {
          id: 55,
          data: { name: "output7" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output3", data: {} }] },
          },
          position: [-2385.885369508088, 1113.9118610683454],
          name: "Input",
        },
        56: {
          id: 56,
          data: { name: "checkAgainst8" },
          inputs: {},
          outputs: {
            output: {
              connections: [{ node: 27, input: "checkAgainst4", data: {} }],
            },
          },
          position: [-2392.9510573669686, 1367.8642599640941],
          name: "Input",
        },
        57: {
          id: 57,
          data: { name: "output8" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "output4", data: {} }] },
          },
          position: [-2394.7892158779105, 1569.4185315118175],
          name: "Input",
        },
        58: {
          id: 58,
          data: { name: "default" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 27, input: "default", data: {} }] },
          },
          position: [-1995.9385341392976, 1749.6781667988203],
          name: "Input",
        },
      },
      comments: [
        {
          text: "To compare to",
          position: [-1876.9067611700373, -1850.4474742805676],
          links: [41],
          type: "inline",
        },
        {
          text: "",
          position: [-2400.4920430427796, -1900.0124729764602],
          links: [42, 43],
          type: "frame",
          width: 347.0447865161718,
          height: 454.03258618525007,
        },
        {
          text: "",
          position: [-2395.079748411342, -1443.0326560829376],
          links: [44, 45],
          type: "frame",
          width: 347.2969771572675,
          height: 463.95373720662894,
        },
        {
          text: "",
          position: [-2401.107990956179, -968.1829518009698],
          links: [47, 46],
          type: "frame",
          width: 347.0447924913151,
          height: 469.41905072148904,
        },
        {
          text: "",
          position: [-2409.515348869049, -495.9150368061112],
          links: [48, 49],
          type: "frame",
          width: 347.68830050064025,
          height: 460.4635015935355,
        },
        {
          text: "",
          position: [-2023.5486519301016, -2065.790720424944],
          links: [41],
          type: "frame",
          width: 346,
          height: 280,
        },
        {
          text: "",
          position: [-2411.409368925806, -19.443716584501068],
          links: [50, 51],
          type: "frame",
          width: 347.24933571773954,
          height: 455.9744030793311,
        },
        {
          text: "",
          position: [-2418.1428359185034, 441.28640755103845],
          links: [52, 53],
          type: "frame",
          width: 349.2033602222564,
          height: 446.6541298801419,
        },
        {
          text: "",
          position: [-2418.782544723728, 888.848176262526],
          links: [54, 55],
          type: "frame",
          width: 348.8971752156399,
          height: 445.06368480581955,
        },
        {
          text: "",
          position: [-2424.7892158779105, 1337.8642599640941],
          links: [56, 57],
          type: "frame",
          width: 347.83815851094187,
          height: 451.5542715477234,
        },
        {
          text: "",
          position: [-2025.9385341392976, 1719.6781667988203],
          links: [58],
          type: "frame",
          width: 346,
          height: 250,
        },
      ],
    },
    key: "module-switch-condition-8",
    label: "module-switch-condition-8",
  },
  "module-ai-assistant-handle-user-response": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        11: {
          id: 11,
          data: { in1: "aiMessage" },
          inputs: {
            in0: { connections: [{ node: 81, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 76, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 22, input: "in0", data: {} }] },
          },
          position: [1342.3577209080513, -61.444249784253905],
          name: "Await",
        },
        12: {
          id: 12,
          data: {},
          inputs: {
            in0: { connections: [{ node: 81, output: "outFalse", data: {} }] },
            in1: { connections: [{ node: 81, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [1344.823192358759, 328.71188836540915],
          name: "Await",
        },
        15: {
          id: 15,
          data: {
            module: "create-fact-from-question-and-answer",
            prompt: "prompt",
            numTokens: "numTokens",
            topP: "topP",
            terminator: "terminator",
            question: "question",
            answer: "answer",
          },
          inputs: {
            question: { connections: [{ node: 22, output: "out0", data: {} }] },
            answer: { connections: [{ node: 23, output: "out0", data: {} }] },
          },
          outputs: {
            out: { connections: [{ node: 73, input: "in0", data: {} }] },
          },
          position: [1871.5008637674734, 23.5851626497936],
          name: "Module",
        },
        22: {
          id: 22,
          data: {},
          inputs: {
            in0: { connections: [{ node: 11, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "question", data: {} }] },
          },
          position: [1564.4422303058868, -62.343166204177365],
          name: "StringTrim",
        },
        23: {
          id: 23,
          data: {},
          inputs: {
            in0: { connections: [{ node: 12, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "answer", data: {} }] },
          },
          position: [1569.5370986610496, 322.7942257073828],
          name: "StringTrim",
        },
        39: {
          id: 39,
          data: {},
          inputs: {
            in0: { connections: [{ node: 70, output: "out0", data: {} }] },
            in1: { connections: [{ node: 73, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 71, input: "in1", data: {} }] },
          },
          position: [2693.5098979735003, 76.52481281031854],
          name: "ArrayAppend",
        },
        40: {
          id: 40,
          data: {},
          inputs: {
            in0: { connections: [{ node: 68, output: "out0", data: {} }] },
            in1: { connections: [{ node: 48, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [606.7947219510374, 1589.915821062739],
          name: "Equal",
        },
        42: {
          id: 42,
          data: {},
          inputs: {
            in0: { connections: [{ node: 68, output: "out0", data: {} }] },
            trueData: { connections: [] },
            falseData: { connections: [] },
          },
          outputs: {
            outTrue: { connections: [{ node: 55, input: "in0", data: {} }] },
            outFalse: { connections: [{ node: 61, input: "in1", data: {} }] },
          },
          position: [821.2138592635533, 1329.008339321919],
          name: "Branch",
        },
        44: {
          id: 44,
          data: { string: '{"array":[]}' },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 55, input: "in1", data: {} }] },
          },
          position: [758.7200143696305, 1091.0030633942097],
          name: "String",
        },
        45: {
          id: 45,
          data: { in0: "JSON", in1: "array" },
          inputs: {
            in0: { connections: [{ node: 55, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 69, input: "in1", data: {} }] },
          },
          position: [1313.49405486245, 1322.3128825872725],
          name: "GetJSONValueComponent",
        },
        48: {
          id: 48,
          data: { num: "0" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 40, input: "in1", data: {} }] },
          },
          position: [313.8949949247704, 1679.0420588818517],
          name: "Number",
        },
        55: {
          id: 55,
          data: {},
          inputs: {
            in0: { connections: [{ node: 42, output: "outTrue", data: {} }] },
            in1: { connections: [{ node: 44, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 45, input: "in0", data: {} }] },
          },
          position: [1077.100738997322, 1268.743522176732],
          name: "Await",
        },
        61: {
          id: 61,
          data: { in0: "1000" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 42, output: "outFalse", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 63, input: "in0", data: {} },
                { node: 67, input: "in0", data: {} },
              ],
            },
          },
          position: [1203.775891469867, 1689.1848242732815],
          name: "Delay",
        },
        63: {
          id: 63,
          data: {},
          inputs: {
            in0: { connections: [{ node: 61, output: "out0", data: {} }] },
            in1: { connections: [{ node: 64, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 70, input: "in0", data: {} }] },
          },
          position: [1622.8893809161164, 1712.1936522133144],
          name: "Await",
        },
        64: {
          id: 64,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 63, input: "in1", data: {} }] },
          },
          position: [1314.4201469473428, 1901.262291708616],
          name: "String",
        },
        67: {
          id: 67,
          data: {},
          inputs: {
            in0: { connections: [{ node: 61, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1494.3615154213312, 1545.2371979782854],
          name: "DebugLog",
        },
        68: {
          id: 68,
          data: { in0: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: {
              connections: [
                { node: 40, input: "in0", data: {} },
                { node: 42, input: "in0", data: {} },
              ],
            },
          },
          position: [313.08813593428255, 1447.933047267751],
          name: "LocalCacheGet",
        },
        69: {
          id: 69,
          data: { in0: "user-facts", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 45, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1697.6399049415213, 1211.2187434716702],
          name: "LocalCacheSet",
        },
        70: {
          id: 70,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 63, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 39, input: "in0", data: {} }] },
          },
          position: [1954.3238930521165, 1689.1156401019773],
          name: "LocalCacheGet",
        },
        71: {
          id: 71,
          data: { in0: "user-facts", in1: "Value" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 39, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2943.323155345057, 27.45054421950892],
          name: "LocalCacheSet",
        },
        73: {
          id: 73,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 39, input: "in1", data: {} }] },
          },
          position: [2422.055028025059, 88.61198778981486],
          name: "StringTrim",
        },
        74: {
          id: 74,
          data: { in0: "aiMessage" },
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 83, input: "in0", data: {} },
                { node: 81, input: "falseData", data: {} },
                { node: 91, input: "in0", data: {} },
                { node: 79, input: "input", data: {} },
              ],
            },
            out1: { connections: [{ node: 89, input: "in0", data: {} }] },
          },
          position: [-59.774793970431304, 220.4593249106701],
          name: "SpeechToText",
        },
        76: {
          id: 76,
          data: { name: "aiMessage" },
          inputs: {},
          outputs: {
            output: {
              connections: [
                { node: 11, input: "in1", data: {} },
                { node: 74, input: "in0", data: {} },
                { node: 90, input: "in0", data: {} },
              ],
            },
          },
          position: [-484.5665666001545, 68.45601427303612],
          name: "Input",
        },
        79: {
          id: 79,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 74, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1328.1278870794781, -307.35148814633897],
          name: "Output",
        },
        81: {
          id: 81,
          data: {},
          inputs: {
            in0: { connections: [{ node: 88, output: "out0", data: {} }] },
            trueData: { connections: [] },
            falseData: {
              connections: [{ node: 74, output: "out0", data: {} }],
            },
          },
          outputs: {
            outTrue: { connections: [] },
            outFalse: {
              connections: [
                { node: 11, input: "in0", data: {} },
                { node: 12, input: "in0", data: {} },
                { node: 12, input: "in1", data: {} },
              ],
            },
          },
          position: [1055.2071780976926, 197.91628116586807],
          name: "Branch",
        },
        83: {
          id: 83,
          data: {},
          inputs: {
            in0: { connections: [{ node: 74, output: "out0", data: {} }] },
            in1: { connections: [{ node: 84, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 88, input: "in0", data: {} }] },
          },
          position: [504.5426013901066, 385.65892388192214],
          name: "Equal",
        },
        84: {
          id: 84,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 83, input: "in1", data: {} }] },
          },
          position: [214.3999080893803, 490.8282943529275],
          name: "String",
        },
        87: {
          id: 87,
          data: { num: "0.85" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 89, input: "in1", data: {} }] },
          },
          position: [-33.87119713900685, 875.5348468554063],
          name: "Number",
        },
        88: {
          id: 88,
          data: {},
          inputs: {
            in0: { connections: [{ node: 83, output: "out0", data: {} }] },
            in1: { connections: [{ node: 89, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 81, input: "in0", data: {} }] },
          },
          position: [813.8747061589941, 447.82004541432775],
          name: "Or",
        },
        89: {
          id: 89,
          data: {},
          inputs: {
            in0: { connections: [{ node: 74, output: "out1", data: {} }] },
            in1: { connections: [{ node: 87, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 88, input: "in1", data: {} }] },
          },
          position: [246.95798452072, 778.1339287518068],
          name: "LessThan",
        },
        90: {
          id: 90,
          data: {},
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
          },
          outputs: {},
          position: [-93.14755252870395, -125.02479086880692],
          name: "DebugLog",
        },
        91: {
          id: 91,
          data: {},
          inputs: {
            in0: { connections: [{ node: 74, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [241.38473986068362, -25.99368147729004],
          name: "DebugLog",
        },
      },
      comments: [
        {
          text: "Holds question data",
          position: [1341.524786826032, 98.8842088518416],
          links: [11],
          type: "inline",
        },
        {
          text: "Holds question answer",
          position: [1342.97027715905, 487.49456664779245],
          links: [12],
          type: "inline",
        },
        {
          text: 'get "user-facts" data from cache',
          position: [283.08813593428255, 1061.0030633942097],
          links: [68, 48, 40, 42, 44, 55, 45, 69, 61, 67, 64, 63, 70],
          type: "frame",
          width: 1931.235757117834,
          height: 1096.2592283144052,
        },
        {
          text: "Store the fact in a data collection",
          position: [2399.326935995093, 5.00525155193375],
          links: [71, 73, 39],
          type: "frame",
          width: 804.0760478222078,
          height: 274,
        },
        {
          text: null,
          position: [-530.8795059651846, 0.3924545162521653],
          links: [76],
          type: "frame",
          width: 346,
          height: 250.00000000000003,
        },
      ],
    },
    key: "module-ai-assistant-handle-user-response",
    label: "module-ai-assistant-handle-user-response",
  },
  "check-if-string-is-question": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        4: {
          id: 4,
          data: { string: "", in1: "inputString", in0: "" },
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
            in1: { connections: [{ node: 6, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 7, input: "input", data: {} }] },
          },
          position: [518.8977631836209, -155.24021335489553],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              '// Basic module example code, receiving multiple arguments from input nodes and returning some data based on them\n(inputString) => {\n  //while (inputString.charAt(inputString.length-1) == "\\"")\n  //  inputString = inputString.slice(0, inputString.length-1);\n  return inputString.trim().charAt(inputString.length-1) == "?" || inputString.trim().charAt(inputString.length-2) == "?" || inputString.trim().charAt(inputString.length-3) == "?";\n}',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-81.19891965668319, -753.6211490876091],
          name: "BigString",
        },
        6: {
          id: 6,
          data: { name: "inputString" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [-422.79650577187283, -102.5330234918249],
          name: "Input",
        },
        7: {
          id: 7,
          data: { name: "isQuestionBool" },
          inputs: {
            input: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [857.5524243070724, -492.29854842703423],
          name: "Output",
        },
      },
      comments: [
        {
          text: "Passes data through javascript code",
          position: [-113.68358217416535, -765.4475110219262],
          links: [5],
          type: "inline",
        },
        {
          text: "",
          position: [-101.35001670904137, -754.1111819546891],
          links: [4, 5],
          type: "frame",
          width: 863.7940797671827,
          height: 803.0565784089049,
        },
      ],
    },
    key: "check-if-string-is-question",
    label: "check-if-string-is-question",
  },
  "module-ai-assistant-ask-question": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: {
            string:
              "A personal assistant is able to ask the following 8 questions, designed to collect information about their boss:\n - How many new emails do you have today?\n - What's your favorite food?\n - Do you have any plans for tomorrow morning?\n - ",
          },
          inputs: {
            in0: { connections: [{ node: 78, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "prompt", data: {} }] },
          },
          position: [-1318.0379683580738, 158.41918603214992],
          name: "BigString",
        },
        3: {
          id: 3,
          data: { module: "module-get-bloom-model-data" },
          inputs: {
            prompt: { connections: [{ node: 2, output: "out0", data: {} }] },
            numTokens: { connections: [{ node: 4, output: "out0", data: {} }] },
            topP: { connections: [{ node: 5, output: "out0", data: {} }] },
            terminator: {
              connections: [{ node: 6, output: "out0", data: {} }],
            },
          },
          outputs: {
            text: { connections: [{ node: 79, input: "input", data: {} }] },
          },
          position: [-608.141960148438, 190.95133990688782],
          name: "Module",
        },
        4: {
          id: 4,
          data: { num: "50" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "numTokens", data: {} }] },
          },
          position: [-1036.1731433079372, 791.8198823688654],
          name: "Number",
        },
        5: {
          id: 5,
          data: { num: "0.9" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "topP", data: {} }] },
          },
          position: [-1036.715781996726, 993.6960822188887],
          name: "Number",
        },
        6: {
          id: 6,
          data: { string: " -" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 3, input: "terminator", data: {} }] },
          },
          position: [-1034.0643008009201, 1196.6570431482091],
          name: "String",
        },
        76: {
          id: 76,
          data: { name: "inputSignal" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 78, input: "in0", data: {} }] },
          },
          position: [-2019.4200473238684, 103.31851875562559],
          name: "Input",
        },
        77: {
          id: 77,
          data: { string: "" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 78, input: "in1", data: {} }] },
          },
          position: [-2018.611933857067, 284.6315180293041],
          name: "String",
        },
        78: {
          id: 78,
          data: { in0: "inputSignal" },
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
            in1: { connections: [{ node: 77, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-1678.4579950645273, 210.56551605041204],
          name: "Await",
        },
        79: {
          id: 79,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 3, output: "text", data: {} }] },
          },
          outputs: {},
          position: [-73.73436832308397, 148.60633554688772],
          name: "Output",
        },
      },
      comments: [
        {
          text: "initSignal",
          position: [-2040.523332915118, -95.75799665356143],
          links: [],
          type: "inline",
        },
        {
          text: "Create/get a question",
          position: [-1363.3946069267058, -103.96795213770007],
          links: [],
          type: "inline",
        },
        {
          text: "",
          position: [-1374.7162319110298, 79.85005184091013],
          links: [3, 5, 6, 4, 2],
          type: "frame",
          width: 1239.8960082096357,
          height: 1329.4545904116926,
        },
        {
          text: "",
          position: [-2049.4200473238684, 73.31851875562559],
          links: [76, 77, 78],
          type: "frame",
          width: 620.9620522593409,
          height: 467.31299927367854,
        },
      ],
    },
    key: "module-ai-assistant-ask-question",
    label: "module-ai-assistant-ask-question",
  },
  "test-module-controls": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {
            module: "module-switch-condition-4",
            switchOnValue: "switchOnValue",
            checkAgainst1: "compare1",
            output1: "out1",
            checkAgainst2: "compare2",
            output2: "out2",
            checkAgainst3: "compare3",
            output3: "out3",
            checkAgainst4: "compare4",
            output4: "out4",
            default: "defa",
          },
          inputs: {
            switchOnValue: {
              connections: [{ node: 3, output: "out0", data: {} }],
            },
            checkAgainst1: { connections: [] },
            output1: { connections: [] },
            checkAgainst2: { connections: [] },
            output2: { connections: [] },
            checkAgainst3: { connections: [] },
            output3: { connections: [] },
            checkAgainst4: { connections: [] },
            output4: { connections: [] },
            default: { connections: [] },
          },
          outputs: {
            output: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [-37.68439427854662, -273.9523161382656],
          name: "Module",
        },
        2: {
          id: 2,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-551.1444084556092, -279.7774528376145],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: { string: "compcomp" },
          inputs: {
            in0: { connections: [{ node: 2, output: "action", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [{ node: 1, input: "switchOnValue", data: {} }],
            },
          },
          position: [-301.7108366571026, -275.7362401846696],
          name: "String",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: { connections: [{ node: 1, output: "output", data: {} }] },
          },
          outputs: {},
          position: [510.0105864889563, -266.97483730061435],
          name: "DisplayModal",
        },
      },
      comments: [],
    },
    key: "test-module-controls",
    label: "test-module-controls",
  },
  "speech-to-text-test": {
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: { in0: "7500" },
          inputs: { in0: { connections: [] } },
          outputs: {
            action: { connections: [{ node: 2, input: "in0", data: {} }] },
          },
          position: [-267.4625549316406, -149.97500610351562],
          name: "OnInterval",
        },
        2: {
          id: 2,
          data: { string: "GO" },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 3, input: "in0", data: {} }] },
          },
          position: [-2.888461819291308, -156.48296107739662],
          name: "String",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 2, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in0", data: {} }] },
          },
          position: [252.45086973535908, -159.38438972592417],
          name: "TextToSpeech",
        },
        4: {
          id: 4,
          data: {},
          inputs: {
            in0: { connections: [{ node: 3, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
            out1: { connections: [] },
          },
          position: [478.77433665490526, -168.08891049112202],
          name: "SpeechToText",
        },
        5: {
          id: 5,
          data: {},
          inputs: {
            in0: { connections: [{ node: 4, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [710.9005716013971, -176.79391380342452],
          name: "DisplayModal",
        },
      },
      comments: [],
    },
    key: "speech-to-text-test",
    label: "speech-to-text-test",
  },
  "create-fact-from-question-and-answer": {
    path: "/utils",
    data: {
      id: "demo@0.1.0",
      nodes: {
        13: {
          id: 13,
          data: {
            string:
              "Questions with answers can be combined into facts! Check out the following 20 examples:\n~~~\n[Question] How many water bottles are in your fridge?\n[Answer] 6 bottles\n[Fact] There are 6 water bottles in their fridge\n~~~\n[Question] When is the last time you went to the gym?\n[Answer] 2 days ago\n[Fact] It has been 2 days since they have been to the gym\n~~~\n[Question] What is your favorite type of ice cream?\n[Answer] I like Chocolate Chip Cookie Dough and Rocky Road\n[Fact] Their favorite types of ice cream are Chocolate Chip Cookie Dough and Rocky Road\n~~~\n[Question] What is your wife's name?\n[Answer] I am not married\n[Fact] They are not married\n~~~\n[Question] Sir, it looks like it's going to rain. Would you like to head to the library to read a book?\n[Answer] No thanks I think I'm going to stay home and work tonight\n[Fact] Tonight, they would rather stay home and work than go to the library\n~~~\n[Question] INPUT_QUESTION\n[Answer] INPUT_ANSWER\n[Fact] ",
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 19, input: "in0", data: {} }] },
          },
          position: [1079.7939666054226, 1193.7482176193928],
          name: "BigString",
        },
        15: {
          id: 15,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "50",
            topP: "0.9",
            terminator: "\\n",
          },
          inputs: {
            prompt: { connections: [{ node: 20, output: "out0", data: {} }] },
            numTokens: { connections: [] },
            topP: { connections: [] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 79, input: "input", data: {} }] },
          },
          position: [2401.9593261056893, 697.3490398859557],
          name: "Module",
        },
        19: {
          id: 19,
          data: { in0: "String", in1: "INPUT_ANSWER", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 13, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 23, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in0", data: {} }] },
          },
          position: [1712.9714424680164, 948.3991853262864],
          name: "StringReplace",
        },
        20: {
          id: 20,
          data: { in0: "String", in1: "INPUT_QUESTION", in2: "Replace With" },
          inputs: {
            in0: { connections: [{ node: 19, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 22, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "prompt", data: {} }] },
          },
          position: [2019.8122262520656, 707.4838936443698],
          name: "StringReplace",
        },
        22: {
          id: 22,
          data: {},
          inputs: {
            in0: { connections: [{ node: 76, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 20, input: "in2", data: {} }] },
          },
          position: [798.7489853624891, 694.0511114643616],
          name: "StringTrim",
        },
        23: {
          id: 23,
          data: {},
          inputs: {
            in0: { connections: [{ node: 92, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 19, input: "in2", data: {} }] },
          },
          position: [803.8438537176519, 1079.1885033759215],
          name: "StringTrim",
        },
        76: {
          id: 76,
          data: { name: "question" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 22, input: "in0", data: {} }] },
          },
          position: [543.2654232627967, 690.1997481891764],
          name: "Input",
        },
        79: {
          id: 79,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 15, output: "text", data: {} }] },
          },
          outputs: {},
          position: [2930.698973171709, 703.3442956498473],
          name: "Output",
        },
        92: {
          id: 92,
          data: { name: "answer" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 23, input: "in0", data: {} }] },
          },
          position: [545.4621729494216, 1076.0859930081265],
          name: "Input",
        },
      },
      comments: [
        {
          text: 'Merge the question and the answer into a "fact"',
          position: [1060.375303026182, 697.1660935935492],
          links: [13, 20, 19],
          type: "frame",
          width: 1245.471443027378,
          height: 1141.4090912755162,
        },
      ],
    },
    key: "create-fact-from-question-and-answer",
    label: "create-fact-from-question-and-answer",
  },
  "generate-user-description": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        2: {
          id: 2,
          data: { name: "baseFactsArray" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 10, input: "in0", data: {} }] },
          },
          position: [-796.5432158095446, -402.6203715720604],
          name: "Input",
        },
        3: {
          id: 3,
          data: { name: "out" },
          inputs: {
            input: { connections: [{ node: 11, output: "text", data: {} }] },
          },
          outputs: {},
          position: [2667.211685502414, -1121.8609883405607],
          name: "Output",
        },
        5: {
          id: 5,
          data: { in0: "Key" },
          inputs: {
            in0: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [-1236.6221614145416, 699.8741561760219],
          name: "LocalCacheGet",
        },
        6: {
          id: 6,
          data: {
            in0: "(userFactsArray) => {\n  const getRandomFact = () => {\n    return userFactsArray[parseInt(Math.random()*userFactsArray.length)];\n  };\n  return [getRandomFact(), getRandomFact()];\n}",
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 9, output: "output", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 10, input: "in1", data: {} }] },
          },
          position: [-111.82212909665571, 171.0799553578106],
          name: "Code",
        },
        7: {
          id: 7,
          data: {},
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-1505.4336777274325, 704.6743818525582],
          name: "Await",
        },
        8: {
          id: 8,
          data: { string: "user-facts" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 7, input: "in1", data: {} }] },
          },
          position: [-1801.20882758889, 885.670962483972],
          name: "String",
        },
        9: {
          id: 9,
          data: { name: "optionalFactsArray" },
          inputs: {},
          outputs: {
            output: { connections: [{ node: 6, input: "in1", data: {} }] },
          },
          position: [-843.8497125931037, 645.3362048536077],
          name: "Input",
        },
        10: {
          id: 10,
          data: { in0: "", in1: "" },
          inputs: {
            in0: { connections: [{ node: 2, output: "output", data: {} }] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "in1", data: {} }] },
          },
          position: [575.8037602960966, -438.94033833664287],
          name: "ArrayConcat",
        },
        11: {
          id: 11,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "100",
            topP: "0.9",
            terminator: "\\n",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: { connections: [] },
            topP: { connections: [] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 3, input: "input", data: {} }] },
          },
          position: [2117.657724885349, -1111.3992638848922],
          name: "Module",
        },
        13: {
          id: 13,
          data: {
            in0: '(facts) => {\n  return "[\\""+facts.join("\\", \\"")+"\\"]";\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 10, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 15, input: "in2", data: {} }] },
          },
          position: [874.8047867821583, -850.5228014286249],
          name: "Code",
        },
        14: {
          id: 14,
          data: {
            string:
              '{\n  "descriptive-facts": [],\n  "user-description": "They are a nurse. They loves their husband and newborn daughter Helen. Helping people is their passion and profession. They\'re also fond of reading and self-developing in different ways. They spend weekends in the garden growing flowers and vegetables. They have two cats Pete and Fluffy."\n},\n{\n  "descriptive-facts": INPUT_USER_FACTS_LIST,\n  "user-description": ',
          },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 15, input: "in0", data: {} }] },
          },
          position: [870.8682861637494, -1518.8168322412116],
          name: "BigString",
        },
        15: {
          id: 15,
          data: {
            in0: "String",
            in1: "INPUT_USER_FACTS_LIST",
            in2: "Replace With",
          },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
            in2: { connections: [{ node: 13, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "prompt", data: {} }] },
          },
          position: [1552.939952694363, -1044.7447492793667],
          name: "StringReplace",
        },
      },
      comments: [
        {
          text: "Get two random facts about the user",
          position: [-411.1540292028603, 156.60957108025218],
          links: [6],
          type: "inline",
        },
        {
          text: "",
          position: [-425.7329722275195, 141.0799553578106],
          links: [5, 6],
          type: "frame",
          width: 891.9108431308638,
          height: 751.1634444194726,
        },
      ],
    },
    key: "generate-user-description",
    label: "generate-user-description",
  },
  "html-test": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-434.9808717156412, -308.9100961226422],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [755.2364890090435, -855.7906737626679],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {
            in0: '() => {\n  const form = document.querySelector(\'form\');\n  form.addEventListener(\'submit\', event => {\n    event.preventDefault();\n    \n    let displayArea = document.getElementById("display-area");\n    var customEvent = new CustomEvent("on-form-submit", { \n      detail: {\n        "prompt": displayArea.innerHTML+"<br />me: "+form.prompt.value,\n        "numCharacters": form.numCharacters.value,\n        "topP": form.topP.value \n      }\n    });\n    document.dispatchEvent(customEvent);\n  });\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1085.8038301669026, -644.5409595598446],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              '<div style="width:100%;height:100%;">\n  <div id="display-area">\n    AI: Hello there!\n  </div>\n  <form style="width:100%;">\n    <div>\n      Prompt\n      <textarea name="prompt" style="width:100%;height:5rem;"></textarea>\n    </div>\n    <div>\n      Num Characters\n      <input name="numCharacters" style="width:100%;"></input>\n    </div>\n    <div>\n     Top P\n      <input name="topP" style="width:100%;"></input>\n    </div>\n    <input type="submit"></input>\n  </form>\n</div>',
          },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-158.66649896643887, -835.6891409665859],
          name: "BigString",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 7, input: "in1", data: {} },
              ],
            },
          },
          position: [465.0252956753387, -850.7161646752967],
          name: "StringToHTML",
        },
        7: {
          id: 7,
          data: { in0: "100" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [757.1838420322575, -645.6841624645083],
          name: "Delay",
        },
        8: {
          id: 8,
          data: { in0: "on-form-submit" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-442.70863773276335, 206.08205075781663],
          name: "OnEvent",
        },
        11: {
          id: 11,
          data: {
            in0: '(args) => {\n  let originalPrompt = args[0];\n  let result = args[1];\n  let displayArea = document.getElementById("display-area");\n  displayArea.innerHTML = originalPrompt+result+"<br />AI: ";\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 13, output: "text", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1484.331986115184, 186.8482495909895],
          name: "Code",
        },
        13: {
          id: 13,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "32",
            topP: "0.9",
            terminator: "<br />",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 11, input: "in1", data: {} }] },
          },
          position: [981.7789002023342, 182.75868601829018],
          name: "Module",
        },
        14: {
          id: 14,
          data: {
            in0: '(formData) => {\n  return {\n    "prompt": formData.prompt,\n    "numCharacters": formData.numCharacters,\n    "topP": formData.topP,\n  };\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 15, input: "in0", data: {} },
                { node: 16, input: "in0", data: {} },
                { node: 17, input: "in0", data: {} },
              ],
            },
          },
          position: [-85.06148426527123, 202.18131183194754],
          name: "Code",
        },
        15: {
          id: 15,
          data: { in0: "JSON", in1: "prompt" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "prompt", data: {} }] },
          },
          position: [541.1222046088586, 154.9271443480754],
          name: "GetJSONValueComponent",
        },
        16: {
          id: 16,
          data: { in0: "JSON", in1: "numCharacters" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "numTokens", data: {} }] },
          },
          position: [536.1811319575004, 384.7917122308381],
          name: "GetJSONValueComponent",
        },
        17: {
          id: 17,
          data: { in0: "JSON", in1: "topP" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "topP", data: {} }] },
          },
          position: [539.8512101149183, 629.5972127278472],
          name: "GetJSONValueComponent",
        },
      },
      comments: [
        {
          text: "Base HTML",
          position: [219.61343485440582, -238.82589527239767],
          links: [5],
          type: "inline",
        },
        {
          text: "Run javascript to initialize and handle HTML interface",
          position: [1199.5215866000178, -67.84881480585852],
          links: [4],
          type: "inline",
        },
      ],
    },
    key: "html-test",
    label: "html-test",
  },
  "ai-chat-gui-test": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-434.9808717156412, -308.9100961226422],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [755.2364890090435, -855.7906737626679],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {
            in0: '() => {\n  const form = document.querySelector(\'form\');\n  form.addEventListener(\'submit\', event => {\n    event.preventDefault();\n    \n    let displayArea = document.getElementById("display-area");\n    var customEvent = new CustomEvent("on-form-submit", { \n      detail: {\n        "prompt": displayArea.innerHTML+"<br>me: "+form.prompt.value+"<br>AI: ",\n        "numCharacters": form.numCharacters.value,\n        "topP": form.topP.value \n      }\n    });\n    document.dispatchEvent(customEvent);\n  });\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1085.8038301669026, -644.5409595598446],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              '<div style="width:100%;height:100%;">\n  <div id="display-area">\n    AI: Hello there! I\'m ready to have a conversation!\n    <br>\n    me: I\'m ready to have a conversation as well!\n    <br>\n    AI: So, what\'s up?\n  </div>\n  <form style="width:100%;">\n    <div>\n      Prompt\n      <textarea name="prompt" style="width:100%;height:5rem;"></textarea>\n    </div>\n    <div>\n      Num Characters\n      <input name="numCharacters" style="width:100%;"></input>\n    </div>\n    <div>\n     Top P\n      <input name="topP" style="width:100%;"></input>\n    </div>\n    <input type="submit"></input>\n  </form>\n</div>',
          },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-158.66649896643887, -835.6891409665859],
          name: "BigString",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 7, input: "in1", data: {} },
              ],
            },
          },
          position: [465.0252956753387, -850.7161646752967],
          name: "StringToHTML",
        },
        7: {
          id: 7,
          data: { in0: "100" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [757.1838420322575, -645.6841624645083],
          name: "Delay",
        },
        8: {
          id: 8,
          data: { in0: "on-form-submit" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-442.70863773276335, 206.08205075781663],
          name: "OnEvent",
        },
        11: {
          id: 11,
          data: {
            in0: '(args) => {\n  let originalPrompt = args[0];\n  let result = args[1];\n  let displayArea = document.getElementById("display-area");\n  displayArea.innerHTML = originalPrompt+result;\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1975.083441394073, 227.93220733559048],
          name: "Code",
        },
        13: {
          id: 13,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "32",
            topP: "0.9",
            terminator: "<br>",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: {
              connections: [
                { node: 18, input: "in1", data: {} },
                { node: 20, input: "in0", data: {} },
              ],
            },
          },
          position: [1049.0072501771797, 698.1741169265543],
          name: "Module",
        },
        14: {
          id: 14,
          data: {
            in0: '(formData) => {\n  return {\n    "prompt": formData.prompt,\n    "numCharacters": formData.numCharacters,\n    "topP": formData.topP,\n  };\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 15, input: "in0", data: {} },
                { node: 16, input: "in0", data: {} },
                { node: 17, input: "in0", data: {} },
              ],
            },
          },
          position: [-85.06148426527123, 202.18131183194754],
          name: "Code",
        },
        15: {
          id: 15,
          data: { in0: "JSON", in1: "prompt" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 13, input: "prompt", data: {} },
                { node: 18, input: "in0", data: {} },
                { node: 19, input: "in0", data: {} },
              ],
            },
          },
          position: [582.1505274767597, 471.96462447349626],
          name: "GetJSONValueComponent",
        },
        16: {
          id: 16,
          data: { in0: "JSON", in1: "numCharacters" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "numTokens", data: {} }] },
          },
          position: [577.2094548254015, 701.829192356259],
          name: "GetJSONValueComponent",
        },
        17: {
          id: 17,
          data: { in0: "JSON", in1: "topP" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "topP", data: {} }] },
          },
          position: [580.8795329828195, 946.6346928532681],
          name: "GetJSONValueComponent",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [{ node: 13, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in1", data: {} }] },
          },
          position: [1632.0404823865156, 519.5377576148572],
          name: "Array",
        },
        19: {
          id: 19,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1008.6391028720683, 366.6571984184834],
          name: "DebugLog",
        },
        20: {
          id: 20,
          data: {},
          inputs: {
            in0: { connections: [{ node: 13, output: "text", data: {} }] },
          },
          outputs: {},
          position: [1633.1425592062967, 340.04843602796734],
          name: "DebugLog",
        },
      },
      comments: [
        {
          text: "Base HTML",
          position: [219.61343485440582, -238.82589527239767],
          links: [5],
          type: "inline",
        },
        {
          text: "Run javascript to initialize and handle HTML interface",
          position: [1199.5215866000178, -67.84881480585852],
          links: [4],
          type: "inline",
        },
      ],
    },
    key: "ai-chat-gui-test",
    label: "ai-chat-gui-test",
  },
  "prompt-gui": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-434.9808717156412, -308.9100961226422],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [755.2364890090435, -855.7906737626679],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {
            in0: '() => {\n  const form = document.querySelector(\'form\');\n  form.addEventListener(\'submit\', event => {\n    event.preventDefault();\n    \n    let displayArea = document.getElementById("display-area");\n    var customEvent = new CustomEvent("on-form-submit", { \n      detail: {\n        "prompt": form.prompt.value,\n        "numCharacters": form.numCharacters.value,\n        "topP": form.topP.value \n      }\n    });\n    document.dispatchEvent(customEvent);\n  });\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1085.8038301669026, -644.5409595598446],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              '<div style="width:100%;height:100%;">\n\n  <form style="width:100%;">\n    <div>\n      Num Tokens\n      <input name="numCharacters" style="width:100%;"></input>\n    </div>\n    <div>\n      Top P\n      <input name="topP" style="width:100%;"></input>\n    </div>\n    <div>\n      Prompt\n      <textarea name="prompt" style="width:100%;height:5rem;"></textarea>\n    </div>\n    <input type="submit"></input>\n  </form>\n  \n  <div id="display-area">\n  </div>\n  \n</div>',
          },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-158.66649896643887, -839.5495735070505],
          name: "BigString",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 7, input: "in1", data: {} },
              ],
            },
          },
          position: [465.0252956753387, -850.7161646752967],
          name: "StringToHTML",
        },
        7: {
          id: 7,
          data: { in0: "100" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [757.1838420322575, -645.6841624645083],
          name: "Delay",
        },
        8: {
          id: 8,
          data: { in0: "on-form-submit" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-434.48607507829814, 456.87397576691296],
          name: "OnEvent",
        },
        11: {
          id: 11,
          data: {
            in0: '(args) => {\n  let result0 = args[0];\n  let result1 = args[1];\n  let result2 = args[2];\n  let displayArea = document.getElementById("display-area");\n  displayArea.innerHTML = `\n    ${result0}\n    <hr>\n    <hr>\n    ${result1}\n    <hr>\n    <hr>\n    ${result2}\n  `;\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 23, output: "array", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [2290.7925304315704, 471.341634469949],
          name: "Code",
        },
        13: {
          id: 13,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "32",
            topP: "0.9",
            terminator: "ssdfbdfb",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 23, input: "0", data: {} }] },
          },
          position: [1068.2872755258836, 459.5847685430723],
          name: "Module",
        },
        14: {
          id: 14,
          data: {
            in0: '(formData) => {\n  return {\n    "prompt": formData.prompt,\n    "numCharacters": formData.numCharacters,\n    "topP": formData.topP,\n  };\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 15, input: "in0", data: {} },
                { node: 16, input: "in0", data: {} },
                { node: 17, input: "in0", data: {} },
              ],
            },
          },
          position: [-80.95020293803864, 452.9732368410439],
          name: "Code",
        },
        15: {
          id: 15,
          data: { in0: "JSON", in1: "prompt" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 13, input: "prompt", data: {} },
                { node: 21, input: "prompt", data: {} },
                { node: 22, input: "prompt", data: {} },
              ],
            },
          },
          position: [582.1505274767597, 471.96462447349626],
          name: "GetJSONValueComponent",
        },
        16: {
          id: 16,
          data: { in0: "JSON", in1: "numCharacters" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 13, input: "numTokens", data: {} },
                { node: 21, input: "numTokens", data: {} },
                { node: 22, input: "numTokens", data: {} },
              ],
            },
          },
          position: [577.2094548254015, 701.829192356259],
          name: "GetJSONValueComponent",
        },
        17: {
          id: 17,
          data: { in0: "JSON", in1: "topP" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 13, input: "topP", data: {} },
                { node: 21, input: "topP", data: {} },
                { node: 22, input: "topP", data: {} },
              ],
            },
          },
          position: [580.8795329828195, 946.6346928532681],
          name: "GetJSONValueComponent",
        },
        21: {
          id: 21,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "numTokens",
            topP: "topP",
            terminator: "szdfbdxfb",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 23, input: "1", data: {} }] },
          },
          position: [1071.0571321475065, 819.0338553805643],
          name: "Module",
        },
        22: {
          id: 22,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "numTokens",
            topP: "topP",
            terminator: "fgdhns",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: { connections: [{ node: 23, input: "2", data: {} }] },
          },
          position: [1064.1872508895776, 1217.0428249460808],
          name: "Module",
        },
        23: {
          id: 23,
          data: {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            module: "module-array-size-10",
            prompt: "prompt",
            numTokens: "numTokens",
            topP: "topP",
            terminator: "terminator",
          },
          inputs: {
            0: { connections: [{ node: 13, output: "text", data: {} }] },
            1: { connections: [{ node: 21, output: "text", data: {} }] },
            2: { connections: [{ node: 22, output: "text", data: {} }] },
            3: { connections: [] },
            4: { connections: [] },
            5: { connections: [] },
            6: { connections: [] },
            7: { connections: [] },
            8: { connections: [] },
            9: { connections: [] },
          },
          outputs: {
            array: { connections: [{ node: 11, input: "in1", data: {} }] },
          },
          position: [1686.3255931688614, 477.5348029104563],
          name: "Module",
        },
      },
      comments: [
        {
          text: "Base HTML",
          position: [219.61343485440582, -242.68632781286223],
          links: [5],
          type: "inline",
        },
        {
          text: "Run javascript to initialize and handle HTML interface",
          position: [1199.5215866000178, -67.84881480585852],
          links: [4],
          type: "inline",
        },
      ],
    },
    key: "prompt-gui",
    label: "prompt-gui",
  },
  "writing-bot-gui": {
    path: "/",
    data: {
      id: "demo@0.1.0",
      nodes: {
        1: {
          id: 1,
          data: {},
          inputs: {},
          outputs: {
            action: { connections: [{ node: 5, input: "in0", data: {} }] },
          },
          position: [-434.9808717156412, -308.9100961226422],
          name: "OnInitialize",
        },
        3: {
          id: 3,
          data: {},
          inputs: {
            in0: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [755.2364890090435, -855.7906737626679],
          name: "DisplayModal",
        },
        4: {
          id: 4,
          data: {
            in0: '() => {\n  const form = document.querySelector(\'form\');\n  form.addEventListener(\'submit\', event => {\n    event.preventDefault();\n    \n    let displayArea = document.getElementById("display-area");\n    var customEvent = new CustomEvent("on-form-submit", { \n      detail: {\n        "prompt": displayArea.innerHTML+"<br>me: "+form.prompt.value+"<br>Writing Bot: ",\n        "numCharacters": form.numCharacters.value,\n        "topP": form.topP.value \n      }\n    });\n    document.dispatchEvent(customEvent);\n  });\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 7, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1085.8038301669026, -644.5409595598446],
          name: "Code",
        },
        5: {
          id: 5,
          data: {
            string:
              '<div style="width:100%;height:100%;">\n  <div id="display-area">\nWriting Bot: Hello there. I\'m a writing bot here to assist you with writing... anything! I\'ll ask you a TWO, and only TWO, questions about what you\'re writing, and then I\'ll begin writing for you! Are you ready to go?\n<br>\nme: I\'m ready!\n<br>\nWriting Bot: Ok perfect. First, please describe what you\'re writing, and who you\'re writing it to.\n<br>\nme: I\'m writing a message to my Discord server moderators. The topic is around thanking them for supporting the server, and how we\'re going through a new beginning that we should all be excited for. The Discord server itself is full of developers and artists who love hanging out and chatting about game development, coding, art, and other creative things you can do on a computer.\n<br>\nWriting Bot: Ok, good! Now, let\'s talk about the tone of the message.\n<br>\nme: I would like the tone to be friendly and very competent\n<br>\nWriting Bot: Good! Ok, I have a few ideas on what I can say to them. I can tell them how happy I am that they have supported the server for so long, and how excited I am for the future of the server.\n<br>\nme: Yes please! So, what does the full paragraph look like?\n<br>\nWriting Bot: I am happy that you have supported the server for so long, and excited for the future of the server. I am looking forward to all of the new projects we are going to start, and the new ideas we are going to explore. I would like to thank you all for your support, and to give a special thanks to [name of mod], [name of mod], and [name of mod] for being the most helpful and most kind. I know that they are excited for everything to come, and I am excited to see what the future has in store for us all.\n<br>\nme: That\'s great!!! Thank you so much Writing Bot\n<br>\nWriting Bot: This is all I can think of right now. Let me know if I can think of anything else.\n<br>\nENDING SESSION\n<br>\n---\n<br>\nWriting Bot: Hello there. I\'m a writing bot here to assist you with writing... anything! I\'ll ask you a TWO, and only TWO, questions about what you\'re writing, and then I\'ll begin writing for you! Are you ready to go?\n<br>\nme: I\'m ready!\n    <br>\n    Writing Bot: Ok perfect. First, please describe what you\'re writing, and who you\'re writing it to.\n  </div>\n  <form style="width:100%;">\n    <div>\n      Prompt\n      <textarea name="prompt" style="width:100%;height:5rem;"></textarea>\n    </div>\n    <div>\n      Num Characters\n      <input name="numCharacters" style="width:100%;"></input>\n    </div>\n    <div>\n     Top P\n      <input name="topP" style="width:100%;"></input>\n    </div>\n    <input type="submit"></input>\n  </form>\n</div>',
          },
          inputs: {
            in0: { connections: [{ node: 1, output: "action", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 6, input: "in0", data: {} }] },
          },
          position: [-158.66649896643887, -835.6891409665859],
          name: "BigString",
        },
        6: {
          id: 6,
          data: {},
          inputs: {
            in0: { connections: [{ node: 5, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 3, input: "in0", data: {} },
                { node: 7, input: "in1", data: {} },
              ],
            },
          },
          position: [465.0252956753387, -850.7161646752967],
          name: "StringToHTML",
        },
        7: {
          id: 7,
          data: { in0: "100" },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 6, output: "out0", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 4, input: "in1", data: {} }] },
          },
          position: [757.1838420322575, -645.6841624645083],
          name: "Delay",
        },
        8: {
          id: 8,
          data: { in0: "on-form-submit" },
          inputs: { in0: { connections: [] } },
          outputs: {
            out0: { connections: [{ node: 14, input: "in1", data: {} }] },
          },
          position: [-442.70863773276335, 206.08205075781663],
          name: "OnEvent",
        },
        11: {
          id: 11,
          data: {
            in0: '(args) => {\n  let originalPrompt = args[0];\n  let result = args[1];\n  let displayArea = document.getElementById("display-area");\n  displayArea.innerHTML = originalPrompt+result;\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 18, output: "out0", data: {} }] },
          },
          outputs: { out0: { connections: [] } },
          position: [1975.083441394073, 227.93220733559048],
          name: "Code",
        },
        13: {
          id: 13,
          data: {
            module: "module-get-bloom-model-data",
            prompt: "prompt",
            numTokens: "32",
            topP: "0.9",
            terminator: "<br>",
          },
          inputs: {
            prompt: { connections: [{ node: 15, output: "out0", data: {} }] },
            numTokens: {
              connections: [{ node: 16, output: "out0", data: {} }],
            },
            topP: { connections: [{ node: 17, output: "out0", data: {} }] },
            terminator: { connections: [] },
          },
          outputs: {
            text: {
              connections: [
                { node: 18, input: "in1", data: {} },
                { node: 20, input: "in0", data: {} },
              ],
            },
          },
          position: [1049.0072501771797, 698.1741169265543],
          name: "Module",
        },
        14: {
          id: 14,
          data: {
            in0: '(formData) => {\n  return {\n    "prompt": formData.prompt,\n    "numCharacters": formData.numCharacters,\n    "topP": formData.topP,\n  };\n}',
          },
          inputs: {
            in0: { connections: [] },
            in1: { connections: [{ node: 8, output: "out0", data: {} }] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 15, input: "in0", data: {} },
                { node: 16, input: "in0", data: {} },
                { node: 17, input: "in0", data: {} },
              ],
            },
          },
          position: [-85.06148426527123, 202.18131183194754],
          name: "Code",
        },
        15: {
          id: 15,
          data: { in0: "JSON", in1: "prompt" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: {
              connections: [
                { node: 13, input: "prompt", data: {} },
                { node: 18, input: "in0", data: {} },
                { node: 19, input: "in0", data: {} },
              ],
            },
          },
          position: [582.1505274767597, 471.96462447349626],
          name: "GetJSONValueComponent",
        },
        16: {
          id: 16,
          data: { in0: "JSON", in1: "numCharacters" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "numTokens", data: {} }] },
          },
          position: [577.2094548254015, 701.829192356259],
          name: "GetJSONValueComponent",
        },
        17: {
          id: 17,
          data: { in0: "JSON", in1: "topP" },
          inputs: {
            in0: { connections: [{ node: 14, output: "out0", data: {} }] },
            in1: { connections: [] },
          },
          outputs: {
            out0: { connections: [{ node: 13, input: "topP", data: {} }] },
          },
          position: [580.8795329828195, 946.6346928532681],
          name: "GetJSONValueComponent",
        },
        18: {
          id: 18,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
            in1: { connections: [{ node: 13, output: "text", data: {} }] },
          },
          outputs: {
            out0: { connections: [{ node: 11, input: "in1", data: {} }] },
          },
          position: [1632.0404823865156, 519.5377576148572],
          name: "Array",
        },
        19: {
          id: 19,
          data: {},
          inputs: {
            in0: { connections: [{ node: 15, output: "out0", data: {} }] },
          },
          outputs: {},
          position: [1008.6391028720683, 366.6571984184834],
          name: "DebugLog",
        },
        20: {
          id: 20,
          data: {},
          inputs: {
            in0: { connections: [{ node: 13, output: "text", data: {} }] },
          },
          outputs: {},
          position: [1633.1425592062967, 340.04843602796734],
          name: "DebugLog",
        },
      },
      comments: [
        {
          text: "Base HTML",
          position: [219.61343485440582, -238.82589527239767],
          links: [5],
          type: "inline",
        },
        {
          text: "Run javascript to initialize and handle HTML interface",
          position: [1199.5215866000178, -67.84881480585852],
          links: [4],
          type: "inline",
        },
        {
          position: [-188.66649896643887, -865.6891409665859],
          links: [5],
          type: "frame",
          width: 626,
          height: 722,
        },
      ],
    },
    key: "writing-bot-gui",
    label: "writing-bot-gui",
  },
};

//{"id":"demo@0.1.0","nodes":{"2":{"id":2,"data":{"string":"dog,cat,lizard,duck,hippo,snail"},"inputs":{"in0":{"connections":[{"node":3,"output":"output","data":{}}]}},"outputs":{"out0":{"connections":[{"node":5,"input":"in0","data":{}}]}},"position":[3769.000060692922,668.0513324624026],"name":"BigString"},"3":{"id":3,"data":{},"inputs":{},"outputs":{"output":{"connections":[{"node":2,"input":"in0","data":{}}]}},"position":[3455.603417722431,670.6736345551301],"name":"Input"},"4":{"id":4,"data":{},"inputs":{"input":{"connections":[{"node":6,"output":"out0","data":{}}]}},"outputs":{},"position":[5519.678228230507,652.3506663820732],"name":"Output"},"5":{"id":5,"data":{"in0":"String","in1":","},"inputs":{"in0":{"connections":[{"node":2,"output":"out0","data":{}}]},"in1":{"connections":[]}},"outputs":{"out0":{"connections":[{"node":7,"input":"in0","data":{}},{"node":6,"input":"in0","data":{}}]}},"position":[4413.249302363193,665.9837739061942],"name":"StringSplit"},"6":{"id":6,"data":{"in1":"Index"},"inputs":{"in0":{"connections":[{"node":5,"output":"out0","data":{}}]},"in1":{"connections":[{"node":8,"output":"out0","data":{}}]}},"outputs":{"out0":{"connections":[{"node":4,"input":"input","data":{}}]}},"position":[5277.028593181067,653.6677981690929],"name":"GetArrayElement"},"7":{"id":7,"data":{},"inputs":{"in0":{"connections":[{"node":5,"output":"out0","data":{}}]}},"outputs":{"out0":{"connections":[{"node":8,"input":"in1","data":{}}]}},"position":[4726.408863054058,834.4947830960539],"name":"ArrayLength"},"8":{"id":8,"data":{"preview":"","in0":"0","in1":"Max"},"inputs":{"in0":{"connections":[]},"in1":{"connections":[{"node":7,"output":"out0","data":{}}]}},"outputs":{"out0":{"connections":[{"node":6,"input":"in1","data":{}}]}},"position":[4943.182592105467,829.9701798932251],"name":"RandInt"}}}

export default graphModules;
