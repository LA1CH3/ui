# @la1ch3/ui

Design system components for usage in `@la1ch3` projects. Built using the excellent `@stitches/react` package.

```
npm i @la1ch3/ui
# or
yarn add @la1ch3/ui
```

## Installation

Ensure you are using the appropriate version of Node for this project (>=16.6.1). If using `nvm`, you can run `nvm use` from the root of the project which will pick-up the version as defined in the `.nvmrc` file.

This project uses Yarn 3.x. To begin, ensure you have Yarn installed globally by running:

```
npm i -g yarn
```

With Yarn globally installed, run `yarn` on the repository to install. Please note that the repository uses the Yarn Plug-n-Play feature, therefore install should be almost immediate.

## Development

This repository uses Storybook for component development. Local storybook can be run by executing:

```
yarn storybook
```

The local instance of storybook should open in your default browser. New stories can be added/modified in the `src/stories` folder.

## Build

The project uses `rollup` as its bundler. Production builds can be executed by running:

```
yarn build
```
