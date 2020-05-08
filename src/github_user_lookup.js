const _ = require("lodash");

const mockResultData = require("./github_user_lookup__mock_data.json");

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
      description: "Username / handle of GitHub user",
    },
  ],
  // outputParameterSchema: [
  //   {
  //     name: "user",
  //     type: "object",
  //   },
  // ],
  inputSample: {
    username: "tannerwelsh",
  },
  outputSample: _.pick(mockResultData.user, [
    "url",
    "name",
    "gists",
    "login",
    "issues",
    "avatarUrl",
  ]),
  // views: [
  //   {
  //     name: "Profile Overview",
  //     type: "FieldSet",
  //     props: {
  //       object: {
  //         type: "object",
  //         map: {
  //           Name: "user.name",
  //           Username: "user.login",
  //           URL: "user.url",
  //           Gists: "user.gists.totalCount",
  //           Avatar: "user.avatarUrl",
  //           "Followers / Following": {
  //             template:
  //               "{{user.followers.totalCount}} / {{user.following.totalCount}}",
  //           },
  //         },
  //       },
  //       // isCustomizable: true,
  //     },
  //   },
  //   {
  //     name: "Contrib. Repos",
  //     type: "Table",
  //     props: {
  //       rows: {
  //         type: "array",
  //         iterate: "user.repositoriesContributedTo.nodes",
  //         orderBy: ["name", "ASC"],
  //         map: {
  //           Repo: {
  //             component: "Link",
  //             props: {
  //               href: "url",
  //               text: "name",
  //             },
  //           },
  //           Owner: {
  //             template: "@{{owner.login}}",
  //           },
  //           "Star Gazers": "stargazers.totalCount",
  //           Description: "description",
  //         },
  //         limit: 6,
  //       },
  //     },
  //   },
  // ],
  restrictionFlags: {
    isExportable: true,
  },
  isPublic: false,
};

function mockGithubUserLookup(actionInputs, context) {
  context.log("-- debug: in mockGithubUserLookup() --");
  context.log(" mockGithubUserLookup -> actionInputs", actionInputs);
  context.log(" mockGithubUserLookup -> context", context);

  if (actionInputs.username) {
    const textPreview = `GH Profile for ${actionInputs.username}`;
    const imagePreview = mockResultData.user.avatarUrl;

    return context.success({ data: mockResultData.user, textPreview, imagePreview });
  }

  return context.fail({ message: "Failed to run mockGithubUserLookup()" });
}

module.exports = mockGithubUserLookupDefinition;
