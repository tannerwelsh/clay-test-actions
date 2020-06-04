const _ = require("lodash");

const DATA_SHAPES = {
  arrayOfObjects: require("./sample-data/array-of-objects.json"),
  objectWithScalarValues: require("./sample-data/object-with-scalar-values.json"),
  objectWithNestedObjects: require("./sample-data/object-with-nested-objects.json"),
  objectWithNestedArraysOfObjects: require("./sample-data/object-with-nested-arrays-of-objects.json"),
  objectWithNestedArraysOfScalars: require("./sample-data/object-with-nested-arrays-of-scalars.json"),
}

const exampleDataShapesDefinition = {
  name: "exampleDataShapes",
  function: exampleDataShapes,
  documentationUri: "http://github.com/clay-run/actions/myfirstactionguide.md",
  displayName: "Example Data Shapes",
  description: "Mock action for returning various data shapes",
  actionGroups: [],
  inputParameterSchema: [
    {
      name: "shape",
      type: "text",
      displayName: "Shape of data to return",
      description: `{${Object.keys(DATA_SHAPES).join('|')}}`,
    },
  ],
  outputParameterSchema: [
    {
      name: "tbd",
      type: "object",
    },
  ],
  inputSample: {
    shape: Object.keys(DATA_SHAPES)[0],
  },
  outputSample: DATA_SHAPES.arrayOfObjects.slice(0, 1),
  restrictionFlags: {
    isExportable: true,
  },
  isPublic: false,
};

function exampleDataShapes(actionInputs, context) {
  let { shape } = actionInputs
  if (shape.value) shape = shape.value // extract from select field

  if (!shape || !DATA_SHAPES[shape]) {
    return context.fail({ message: "Failed to run exampleDataShapes()" });
  }

  const data = DATA_SHAPES[shape]
  const textPreview = `Example data with shape ${shape}`;
  const imagePreview = null;

  return context.success({ data, textPreview, imagePreview });
}

module.exports = exampleDataShapesDefinition;
