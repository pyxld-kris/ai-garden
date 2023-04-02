export const hasNodeType = (moduleData, nodeName) => {
  let hasNodeType = false;
  Object.values(moduleData.nodes).forEach((node) => {
    if (node.name == nodeName) {
      hasNodeType = true;
    }
  });
  return hasNodeType;
};

export const hasInput = (moduleData) => {
  return hasNodeType(moduleData, "Input");
};

export const hasOutput = (moduleData) => {
  return hasNodeType(moduleData, "Input");
};

export const hasIO = (moduleData) => {
  return hasInput(moduleData) && hasOutput(moduleData);
};

export const canBeRun = (moduleData) => {
  return (
    hasNodeType(moduleData, "OnInitialize") ||
    hasNodeType(moduleData, "OnInterval")
  );
};
