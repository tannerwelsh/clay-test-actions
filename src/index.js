/*
 *
 * This sample action package illustrates various rules and principles for action package creation
 *
 * An Action Package contains one or more Action Definitions
 *
 *
 */

const getGoogleJobsForCompany = require("../get_google_jobs_for_company.js")
const githubUserLookup = require("./github_user_lookup.js")

const myActionPackage = {
  name: "tannerwelsh-test-actions", //to uniquely identify an action pacakge for future updates
  description: "sample actions for development",
  actionDefinitions: [getGoogleJobsForCompany, githubUserLookup],
}

module.exports = myActionPackage
