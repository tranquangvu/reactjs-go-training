# VSCode extensions for React developer

Good extensions i have installed in VSCode for ReactJS development. Please read the extension document to know how to install and use it.

* [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
* [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
* [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)
* [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
* [Auto Add Brackets in String Interpolation](https://marketplace.visualstudio.com/items?itemName=aliariff.auto-add-brackets)

## VSCode Settings

```
  {
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
    "editor.renderIndentGuides": true,
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "emmet.triggerExpansionOnTab": true,
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
      "javascript": "jsx"
    },
    "files.trimTrailingWhitespace": true,
    "files.trimFinalNewlines": true,
    "files.insertFinalNewline": true,
    "files.exclude": {
      "**/.git": true,
      "**/.svn": true,
      "**/.DS_Store": true,
      "**/node_modules": true,
      "**/.idea": true,
      "**/.vscode": false,
      "**/yarn.lock": true,
      "**/tmp": true
    },
    "files.watcherExclude": {
      "**/.git/objects/**": true,
      "**/node_modules/**": true,
      "**/tmp": true
    },
    "guides.enabled": false,
    "javascript.validate.enable": false,
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "search.exclude": {
      "**/node_modules": true,
      "**/bower_components": true,
      "**/.git": true,
      "**/.DS_Store": true,
      "**/tmp": true,
      "**/coverage": true,
      "**/ios": true,
      "**/android": true
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
  }
```
