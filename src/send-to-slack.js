const _ = require('lodash');

const sendToSlackDefinition = {
  name: 'send-to-slack',
  // type: 'create-update', // default is 'search'
  function: sendToSlack,
  documentationUri: 'http://github.com/clay-run/actions/myfirstactionguide.md',
  iconUri: 'https://clay-base-prod-static.s3.amazonaws.com/icons/32x32/Slack.png',
  displayName: 'Send to Slack',
  description: 'Mock "Send to Slack" action with custom button text',
  actionGroups: [],
  inputParameterSchema: [
    {
      name: 'channel',
      type: 'text',
      displayName: 'Input channel',
      description: 'Slack channel to send notification to',
    },
  ],
  outputParameterSchema: [
    {
      name: 'message',
      type: 'text',
    },
  ],
  inputSample: {
    channel: '#general',
  },
  outputSample: {
    message: 'it worked!',
  },

  viewOptions: {
    button: {
      text: 'Send notification',
    },
  },

  restrictionFlags: {
    isExportable: false,
  },
  isPublic: false,
};

function sendToSlack(actionInputs, context) {
  try {
    if (!actionInputs.channel) throw new Error('ERROR_MISSING_INPUT');
    const data = {
      message: `Notification sent to ${actionInputs.channel}`,
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

module.exports = sendToSlackDefinition;
