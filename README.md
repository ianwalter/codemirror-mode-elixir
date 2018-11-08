# codemirror-mode-elixir
> A CodeMirror mode for the Elixir language

## Installation

```console
npm install codemirror codemirror-mode-elixir --save
```

## Usage

1. Include `codemirror-mode-elixir` into your project.

```html
<!-- You can simply add elixir.js as a script tag: -->
<script src="js/codemirror.js"></script>
<script src="js/codemirror-mode-elixir/dist/elixir.js"></script>
```

or

```js
// If you're using frontend build tools like Webpack and Babel,
// you can simply import the module and register the mode:
import CodeMirror from 'codemirror'
import registerElixirMode from 'codemirror-mode-elixir'
```

1. Set 'elixir' as the mode when creating the CodeMirror editor.

```js
CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'elixir' })
```

<br>

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg">
</a>
