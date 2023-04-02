/* eslint-disable no-use-before-define */

import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./StyledModuleNavigator";

import {
  canBeRun,
  hasInput,
  hasOutput,
} from "../../../utils/rete/utils/moduleClassifier";

export default function ModuleNavigator(props) {
  return (
    <Wrapper style={props.style}>
      <Link to={`/module/${props.moduleData.key}`}>
        <div style={{ width: "100%", height: "100%", paddingBottom: "2rem" }}>
          {props.moduleData.key}
          <br />
          <div style={{ fontSize: "1.5rem", color: "white" }}>
            {props.moduleData.label}
          </div>
          <div
            style={{
              width: "50%",
              float: "right",
              fontSize: "3rem",
              color: "white",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {canBeRun(props.moduleData.data) ? "▶️" : ""}
            {hasInput(props.moduleData.data) ? "📥" : ""}
            {hasOutput(props.moduleData.data) ? "📤" : ""}
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}
