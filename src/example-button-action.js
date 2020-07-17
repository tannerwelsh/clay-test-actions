const _ = require('lodash');

const exampleButtonActionDefinition = {
  name: 'exampleButtonAction',
  function: exampleButtonAction,
  documentationUri: 'http://github.com/clay-run/actions/myfirstactionguide.md',
  displayName: 'Example Button Action',
  description: 'Mock action for showing a button column type',
  actionGroups: [],
  inputParameterSchema: [
    {
      name: 'email',
      type: 'text',
      displayName: 'Input email',
      description: 'Email to send notification to',

      // !!This disables automatic recomputes
      skipRecomputeOnChange: true,
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
      showInCell: true,
      text: 'Custom button text'
    },
  },

  restrictionFlags: {
    isExportable: false,
  },
  isPublic: false,
};

async function exampleButtonAction(actionInputs, context) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!actionInputs.email) throw new Error('ERROR_MISSING_INPUT')
        const data = {
          message: `Notification sent to ${actionInputs.email}`,
        };
        const textPreview = 'Sent ✅';

        resolve(
          context.success({
            data,
            textPreview,
          })
        );
      } catch (err) {
        context.log(err.message);

        reject(
          context.fail({
            message: `Action failed with error: ${err.message}`,
          })
        );
      }
    }, 2000);
  });
}

module.exports = exampleButtonActionDefinition;
