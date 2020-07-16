/*
 *
 * This sample action package illustrates various rules and principles for action package creation
 *
 * An Action Package contains one or more Action Definitions
 *
 *
 */

const getGoogleJobsForCompany = require('./get-google-jobs-for-company.js');
const githubUserLookup = require('./github-user-lookup.js');
const exampleDataShapes = require('./example-data-shapes.js');
const exampleViewOptions = require('./example-view-options.js');
const exampleButtonAction = require('./example-button-action.js');

const myActionPackage = {
  name: 'tannerwelsh_test_actions', //to uniquely identify an action pacakge for future updates
  description: 'sample actions for development',
  actionDefinitions: [
    getGoogleJobsForCompany,
    githubUserLookup,
    exampleDataShapes,
    exampleViewOptions,
    exampleButtonAction,
  ],
};

module.exports = myActionPackage;
