/*
 *
 * This sample action package illustrates various rules and principles for action package creation
 *
 * An Action Package contains one or more Action Definitions
 *
 *
 */

const getGoogleJobsForCompany = require("./get-google-jobs-for-company.js")
const githubUserLookup = require("./github-user-lookup.js")
const exampleDataShapes = require("./example-data-shapes.js")

const myActionPackage = {
  name: "tannerwelsh-test-actions", //to uniquely identify an action pacakge for future updates
  description: "sample actions for development",
  actionDefinitions: [getGoogleJobsForCompany, githubUserLookup, exampleDataShapes],
}

module.exports = myActionPackage
