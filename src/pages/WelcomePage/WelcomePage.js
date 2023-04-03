import Grid from "@mui/material/Grid";
import React from "react";

import "./WelcomePage.css";

import {openGlobalModal} from "../../components/modules/GlobalModal/GlobalModal.js";
import GraphEditor from "../../components/modules/GraphEditor";
import GraphLoaderButton from "../../components/modules/GraphLoaderButton";

import graphModules from "../../content/graphModules";

import {
  exportModules,
  listModules,
  loadSavedModule,
  saveCurrentModule,
  importGraphData,
  setModuleData
} from "../../utils/rete/editor";

import { Description } from "./StyledWelcomePage";

export default function WelcomePage() {

  React.useEffect(() => {
    let moduleName = "new-prompt";
    let graphData = graphModules[moduleName].data;

    //console.log(graphData);
    importGraphData(graphData);
  }, []);

  React.useEffect(() => {
    openGlobalModal(<div style={{width:"100%", display:"flex", flexDirection: "column", justifyContent:"center"}}>
    <h1>AI Garden 🌱</h1>
   <p style={{fontSize: "1.1rem"}}>
    NOTE FROM THE DEV: Hi there! This app is currently sending backend requests to a proxy that routes back to a local machine I have running, which, in turn, handles LLM interactions. That being said, there are no uptime guarantees. If you find things are offline it could be temporary, or, it might be permanent. Apologies if things aren't working as intended!
    <br /> 
    <br />
    You can view the source for this project at <a href="https://github.com/pyxld-kris/ai-garden" target="_blank">https://github.com/pyxld-kris/ai-garden</a>. 
  </p>
  <p>
    AI Garden is a node based visual programming tool, with the specific intention of connecting the inputs and outputs of LLMs (Large Language Models), such as those in the GPT and DALLE families. The Garden additionally allows for a module based organization and io scheme, enabling these specially crafted groups of prompts to be re-used and threaded together in order to create more complex operations out of multiple LLM calls.
  </p>
  <p>
    This tool is unfinished, unstable, and in general disarray as it's the result of intense real time exploration into what a tool like this <i>might look like</i>. There are some interesting modules that have resulted from my experimentation in the realm of connecting LLMs with APIs, integrating them with speech to text/text to speech, feeding the output of text generation models into image generation models, and at the most complex end of the spectrum a rudimentary AI assistant.
  </p>
  <p>
    During development, I've sprinkled in a path toward adding user sign ups, authentication, persistent storage of user modules, and the ability to fork/reuse modules of others. THIS IS NOT IMPLEMENTED FULLY! As of now you'll always be "logged in" as me, with any changes you make to modules not persisting across sessions.
  </p>
  <p>
    With all that being said, I hope you enjoy your stay!
  </p>
	 
  </div>);
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div id="welcomeWrapper">

            <div style={{ textAlign: "left", width: "100vw", height: "80vh" }}>
              <button
                style={{ marginLeft: "auto", marginRight: "auto" }}
                id="graph-execution-button"
                onClick={() => {
                  window.executeGraph();
                }}
              >
                EXECUTE
              </button>
              <button
                style={{ marginLeft: "auto", marginRight: "auto" }}
                id="graph-execution-button"
                onClick={() => {
                  saveCurrentModule();
                }}
              >
                SAVE MODULE
              </button>
              <button
                style={{ marginLeft: "auto", marginRight: "auto" }}
                id="graph-execution-button"
                onClick={() => {
                  exportModules();
                }}
              >
                EXPORT MODULES
              </button>

              <GraphEditor />
            </div>

          </div>
        </Grid>
      </Grid>
    </div>
  );
}
