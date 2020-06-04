const _ = require("lodash");
const sampleData = require("./sample-data/view-options-array.json")

const exampleViewOptionsDefinition = {
  name: "exampleViewOptions",
  function: exampleViewOptions,
  documentationUri: "http://github.com/clay-run/actions/myfirstactionguide.md",
  displayName: "Example View Options",
  description: "Mock action for showing view options",
  actionGroups: [],
  inputParameterSchema: [],
  outputParameterSchema: [{
    type: "array"
  }],
  inputSample: {},
  outputSample: sampleData.slice(0, 2),
  viewOptions: {
    cards: {
      header: {
        title: "{{ alias.lastName }}, {{ alias.firstName }}",
        image: "{{ avatar.uri }}"
      }
    }
  },
  restrictionFlags: {
    isExportable: true,
  },
  isPublic: false,
};

function exampleViewOptions(actionInputs, context) {
  try {
    context.log('Received inputs: ' + JSON.stringify(actionInputs))
    const data = sampleData
    context.log("exampleViewOptions -> sampleData", sampleData)
    const textPreview = "Sample data"
    const imagePreview = null;  
    
    return context.success({
      data,
      textPreview,
      imagePreview
    })
  } catch (err){
    context.log(err.message)
    
    return context.fail({
      message: `Action failed with error: ${err.message}`
    })
  }
}

module.exports = exampleViewOptionsDefinition;