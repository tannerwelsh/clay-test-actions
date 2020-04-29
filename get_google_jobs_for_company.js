const Clay = require('./clay_helper.js')

const getGoogleJobsForCompanyDefinition = {
  name: "mockgetgooglejobsforcompany",
  function: mockGetGoogleJobsForCompany,
  documentationUri: "http://github.com/clay-run/actions/myfirstactionguide.md",
  displayName: "Get Google Jobs for Company",
  description: "Mock action for finding jobs for a company using Google",
  actionGroups: ["BI", "Jobs"],
  inputParameterSchema: [
    {
      name: "companyName",
      type: "text",
      displayName: "Company Name",
      description: "Name of company"
    },
    {
      name: "companyURL",
      type: "url",
      displayName: "Company URL",
      optional: true,
      description: "URL of company (optional). Used instead of companyName"
    },
    {
      name: "keywords",
      displayName: "Keywords",
      optional: true,
      type: "text",
      description: "Comma separated list of keywords"
    }
  ],
  outputParameterSchema: [
    {
      type: "array"
    }
  ],
  inputSample: {
    companyName: "Slack",
    companyURL: "http://slack.com/",
    keywords: "Data,Software",
  },
  outputSample: [
    {
      type: "Full-time",
      title: "Data Engineer",
      labels: {
        location: "San Francisco, CA"
      },
      company: "Slack",
      lastUpdated: "Over 1 month ago"
    }, {
      type: "Full-time",
      title: "Staff Data Scientist",
      labels: {
        location: "San Francisco, CA"
      },
      company: "Slack",
      lastUpdated: "Over 1 month ago"
    }
  ],
  restrictionFlags: {
    isExportable: true
  },
  isPublic: false,
}

const mockResults = [{
  "type": "Full-time",
  "title": "Data Engineer",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Staff Data Scientist",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Software Engineer, Data Infrastructure",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Sr. Data Scientist, Foundations",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Staff Data Scientist",
  "labels": {
    "location": "California"
  },
  "company": "Slack",
  "lastUpdated": "6 days ago"
}, {
  "type": "Full-time",
  "title": "Sr. Data Scientist, Enterprise",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "28 days ago"
}, {
  "type": "Full-time",
  "title": "Sr. Data Engineer, Marketing",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "8 days ago"
}, {
  "type": "Full-time",
  "title": "Sr. Data Scientist, Sales Analytics",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Sr. Product Manager, Data",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "Over 1 month ago"
}, {
  "type": "Full-time",
  "title": "Sr. Data Engineer",
  "labels": {
    "location": "San Francisco, CA"
  },
  "company": "Slack",
  "lastUpdated": "8 hours ago"
}]

function mockGetGoogleJobsForCompany(actionInputs, context) {
  console.log("-- debug: in mockGetGoogleJobsForCompany() --")
  console.log(" mockGetGoogleJobsForCompany -> actionInputs", actionInputs)
  console.log(" mockGetGoogleJobsForCompany -> context", context)

  if (actionInputs.companyName || actionInputs.companyURL) {
    const textPreview = "10 matching jobs for Slack"
    const imagePreview = "https://banner2.cleanpng.com/20180728/tju/kisspng-google-logo-business-microsoft-windows-operating-system-5b5cb99e99ca38.3321008115328034866299.jpg"

    return Clay.success(
      mockResults,
      // {
      //   "jobs": mockResults,
      //   "count": 10,
      //   "hasMatches": true,
      // },
      textPreview,
      imagePreview,
    )
  }

  return Clay.fail('Failed to run mockGetGoogleJobsForCompany()')
}

module.exports = getGoogleJobsForCompanyDefinition