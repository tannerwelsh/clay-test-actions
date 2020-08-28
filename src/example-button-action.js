const _ = require('lodash');

const exampleButtonActionDefinition = {
  name: 'exampleButtonAction',
  // type: 'create-update', // default is 'search'
  function: exampleButtonAction,
  documentationUri: 'http://github.com/clay-run/actions/myfirstactionguide.md',
  displayName: 'Example Button Action',
  description: 'Mock action for showing a button column type',
  actionGroups: [],
// runSettings: {
//   triggers: {
//     onInputChange: {
//       allowed: true,
//     },
//     onManualRun: {
//       allowed: true,
//       default: true
//     },
//   },
//   conditions: {
//     allowReRun: {
//       allowedOptions: [
//         'never',
//         'neverExceptWithManualOverride',
//       ],
//       default: 'never',
//     },
//   }
// },
  inputParameterSchema: [
    {
      name: 'email',
      type: 'text',
      displayName: 'Input email',
      description: 'Email to send notification to',
    },
  ],
  outputParameterSchema: [
    {
      name: 'message',
      type: 'text',
    },
  ],
  inputSample: {
    email: 'foo@example.com',
  },
  outputSample: {
    message: 'it worked!',
  },

  // !!This is the key setting
  viewOptions: {
    button: {
      // showInCell: true,
      text: 'Custom button text',
    },
  },

  restrictionFlags: {
    isExportable: false,
  },
  isPublic: false,
};

function exampleButtonAction(actionInputs, context) {
  try {
    if (!actionInputs.email) throw new Error('ERROR_MISSING_INPUT');
    const data = {
      message: `Notification sent to ${actionInputs.email}`,
    };
    const textPreview = 'Sent ✅';

    return context.success({
      data,
      textPreview,
    });
  } catch (err) {
    context.log(err.message);

    return context.fail({
      message: `Action failed with error: ${err.message}`,
    });
  }
}

module.exports = exampleButtonActionDefinition;
