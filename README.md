## Requirements to use this component
- ...

## Install
```
npm install sbc-component-boilerplate --save
```
or
```
yarn add sbc-component-boilerplate
```

## Usage
You can immediately use installed components schema with `sb-mig` `sync --ext` functionality.

You just need to edit your `storyblok.config.js` and add `'node_modules/'` which will tell `sb-mig` to look for schema files inside `node_modules` folder.
```
module.exports = {
    ...
    componentsDirectories: ['src', 'storyblok', 'node_modules/'],
    ...
};

```

then you can just run

```
sb-mig sync --ext example-component
```

which will sync sbc-components-boilerplate schema to your storyblok space.
You can also, import schema inside your other schema, and use only part of it:
```
const SimpleTextBlock = require("sbc-component-boilerplate/example-component.sb");
```

For React part of component
```
import ExampleComponent from 'sbc-component-boilerplate`
```


## FAQ
1) ?
