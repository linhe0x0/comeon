# Contributing

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Found a bug?

If you find a bug in the source code, you can help us by [submitting an issue](#submitting-an-issue) to this repository. Even better, you can [submit a Pull Request](#submitting-a-pull-request) with a fix.

## Missing a feature?

You can request a new feature by [submitting an issue](#submitting-an-issue). If you would like to implement a new feature, please submit an issue for your work first, so that we can discuss it.

## Missing a document?

Your favourite document isn't covered? Just add it to [lib/database.json](https://github.com/sqrthree/comeon/blob/master/lib/database.json) to help us improve it together.

Before you submit your document consider the following guidelines:

- **run `node bin/comeon-add` to get an interactive environment.**
- Not recommended to edit `database.json` directly.

## Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. It would be very helpful if you would give us some information like:

- version of Node.js and npm.
- version of comeon used. (you can get it by run `comeon --version`)
- which platform are you using? Mac OS? Windows? or others?

## Submitting a Pull Request

Before you submit your Pull Request consider the following guidelines:

- Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort.
- Make your changes in a new git branch:

  ```
  git checkout -b my-fix-branch master
  ```
- Follow our coding rule - [JavaScript Standard Style](https://standardjs.com/). When you finished your work, please use `npm run lint` to check it.
- Make sure your work can be tested by `npm test`, and ensure that all tests pass.
