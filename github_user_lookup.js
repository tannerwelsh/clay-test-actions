const _ = require('lodash')

const mockResultData = require('./github_user_lookup__mock_data.json')
const Clay = require('./clay_helper.js')

const mockGithubUserLookupDefinition = {
  name: "mockgithubuserlookup",
  function: mockGithubUserLookup,
  documentationUri: "http://github.com/clay-run/actions/myfirstactionguide.md",
  displayName: "Lookup GitHub Profile",
  description: "Mock action for finding GitHub user profile",
  actionGroups: [],
  inputParameterSchema: [
    {
      name: "username",
      type: "text",
      displayName: "GitHub Username",
      description: "Username / handle of GitHub user"
    }
  ],
  outputParameterSchema: [
    {
      name: "user",
      type: "object"
    }
  ],
  inputSample: {
    username: "tannerwelsh",
  },
  outputSample: _.pick(mockResultData, [
    'user.url',
    'user.name',
    'user.gists',
    'user.login',
    'user.issues',
    'user.avatarUrl'
  ]),
  restrictionFlags: {
    isExportable: true
  },
  isPublic: false,
}

function mockGithubUserLookup(actionInputs, context) {
  console.log("-- debug: in mockGithubUserLookup() --")
  console.log(" mockGithubUserLookup -> actionInputs", actionInputs)
  console.log(" mockGithubUserLookup -> context", context)

  if (actionInputs.username) {
    const textPreview = `GH Profile for ${username}`
    const imagePreview = mockResultData.user.avatarUrl

    return Clay.success(
      mockResultData,
      textPreview,
      imagePreview,
    )
  }

  return Clay.fail('Failed to run mockGithubUserLookup()')
}

module.exportsDefinition = mockGithubUserLookupDefinition