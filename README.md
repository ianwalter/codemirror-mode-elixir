# codemirror-mode-elixir
> A CodeMirror mode for the Elixir language

## Usage instructions

1. Install codemirror-mode elixir from NPM: `npm install
codemirror-mode-elixir`

2. Include codemirror-mode-elixir into your project.

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

3. Set 'elixir' as the mode when creating the CodeMirror editor.

  ```js
  CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'elixir' })
  ```
