<img src="https://icecreamliker.github.io/uskin/images/logo.png" width="200" height="200">

# USkin

[![Build Status](https://travis-ci.org/icecreamliker/uskin.svg?branch=master)](https://travis-ci.org/icecreamliker/uskin) 
[![Coverage Status](https://coveralls.io/repos/github/icecreamliker/uskin/badge.svg?branch=master)](https://coveralls.io/github/icecreamliker/uskin?branch=master)
[![bitHound Score](https://www.bithound.io/github/icecreamliker/uskin/badges/score.svg)](https://www.bithound.io/github/icecreamliker/uskin) 
[![Join the chat at https://gitter.im/icecreamliker/uskin](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/icecreamliker/uskin?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) 


USkin is a front-end framework which provides stunning web components based on CSS3 and ReactJS.

## Quick start

- [Download the latest release](http://git.ustack.com/ustack/uskin/repository/archive.zip), or clone the repo `git clone http://git.ustack.com/ustack/uskin.git`.

- Install all the denpendecies by `npm install`, and your first compile will also be completed by this command.

- You can compile your code via [Grunt](http://gruntjs.com/) using `grunt build` or `make build` at any time you need.

- You can find demos in folder `docs`, showing the basic usage of the components. Congratulations, an overview-introduction page is coming soon.

## Available commands

Before using the commands, please make sure all the dependencies are well installed.

Compile all the files:
```
grunt build
```
In most of the situations, you can use make command instead. In this case, `make build`.

Clean all generated files:
```
grunt clean
```
Equivalent command, `make clean`.

When test is needed:
```
npm run test
```
Use ESLint for code parsing:
```
npm run eslint
```

Watch changes of your code real time while developing, you can run the dev mode:
```
npm run dev
```

Customize the theme of uskin:
```
npm run dev --theme=default
```
or
```
npm run build --theme=default
```
Currently, we only provide two themes: `default` and `premium`.

## Note

Details for each release are documented in the [release notes](https://github.com/icecreamliker/uskin/releases).

Any questions to the releases are welcome, feel free to [create issues](https://github.com/icecreamliker/uskin/issues).

## License

USkin is available under the terms of [the MIT license](LICENSE).
