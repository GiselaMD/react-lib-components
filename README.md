# Front End Components Library using React
> React components using typescript

- [Rollup](https://github.com/rollup/rollup)
- [TypeScript](https://www.typescriptlang.org/)
- [StyledComponents](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [React Testing Library](https://github.com/testing-library/react-testing-library)

## Components

### Button

```js
// button related props
width: PropTypes.string,
height: PropTypes.string,
``` 

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

### Generating New Components

There is a file under `utils` called `create-component.js` to help creating new components. Instead of copy pasting components, you can instead run this command to generate all the files you need to start building out a new component. To use it, just run:

```
npm run generate ComponentName
```

This will generate:

```
/src
  /ComponentName
    ComponentName.tsx
    ComponentName.stories.tsx
    ComponentName.test.tsx
    ComponentName.types.ts
    ComponentName.styles.ts
```

## Publishing

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```
