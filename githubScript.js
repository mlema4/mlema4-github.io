var GitHubApi = require('github')

var github = new GitHubApi({
    // optional
  timeout: 5000,
  host: 'api.github.com', // should be api.github.com for GitHub
  pathPrefix: '/api/v3', // for some GHEs; none for GitHub
  protocol: 'https',
  port: 9898,
  proxy: '<proxyUrl>',
  ca: 'whatever',
  headers: {
    'accept': 'application/vnd.github.something-custom',
    'cookie': 'something custom',
    'user-agent': 'something custom'
  },
  requestMedia: 'application/vnd.github.something-custom',
  rejectUnauthorized: false, // default: true
  family: 6
})

// TODO: optional authentication here depending on desired endpoints. See below in README.

github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
  username: 'defunkt'
}, function (err, res) {
  if (err) throw err
  console.log(JSON.stringify(res))
})