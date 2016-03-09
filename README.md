# ember-cli-deploy-cdnify-purge-cache

Ember CLI addon to purge your CDNify cache on successul s3 deploys using
ember-cli-deploy. Without this plugin, CDNify will not immediately serve your
newly deployed code; instead, it will only be available after the configured cache time has
elapsed.

## Installation

```sh
$ ember install ember-cli-deploy-cdnify-purge-cache
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
