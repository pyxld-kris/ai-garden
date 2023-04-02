import Grid from "@mui/material/Grid";
import React from "react";

import "./WelcomePage.css";

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
