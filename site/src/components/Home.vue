<template>
  <div>
    <section>
      <form class="editor borderRadius padding20 marginTop50 marginBottom50">
        <textarea id="code">{{ code }}</textarea>
      </form>
    </section>

    <section class="textCenter paddingTop20 paddingBottom20">
      <a @click="toggleUsageInstructions"
         class="button showUsageInstructionsButton">
        {{ usageInstructionsAction }} Usage Instructions
      </a>
    </section>

    <transition name="slide-down">
      <section v-show="showUsageInstructions || true"
               class="textLeft usageInstructions">

        <div class="displayFlex">
          <div class="fontWeight600 width30 fontSize18">
            1.
          </div>
          <div class="flex1">
            Include <code>codemirror-mode-elixir</code> into your project.
          </div>
        </div>

        <div class="displayFlex">
          <div class="width30"></div>
          <div class="flex1">
            <form class="editor borderRadius3 padding10">
              <textarea id="import">{{ jsImport }}</textarea>
            </form>
            <div class="marginTop15 marginBottom15">
              Or
            </div>
            <form class="editor borderRadius3 padding10">
              <textarea id="script">{{ htmlScript }}</textarea>
            </form>
          </div>
        </div>

        <br>
        Call the registerElixirMode function with the CodeMirror instance as
        and argument.
        <br>
        Set 'text/x-elixir' as the mode when creating the editor.

      </section>
    </transition>
  </div>
</template>

<script>
  import CodeMirror from 'codemirror'
  import '../../node_modules/codemirror/mode/javascript/javascript'
  import '../../node_modules/codemirror/mode/htmlmixed/htmlmixed'
  import registerElixirMode from '../../../dist/elixir'
  import { code, htmlScript, jsImport } from '../code'

  registerElixirMode(CodeMirror)

  const htmlOpts = {
    mode: 'htmlmixed',
    lineNumbers: true,
    indentUnit: 2,
    theme: 'material'
  }
  const jsOpts = Object.assign({}, htmlOpts, { mode: 'javascript' })
  const elixirOpts = Object.assign({}, htmlOpts, { mode: 'text/x-elixir' })

  export default {
    data: () => ({ showUsageInstructions: false, code, htmlScript, jsImport }),
    mounted () {
      CodeMirror.fromTextArea(document.getElementById('code'), elixirOpts)
      CodeMirror.fromTextArea(document.getElementById('import'), jsOpts)
      CodeMirror.fromTextArea(document.getElementById('script'), htmlOpts)
    },
    computed: {
      usageInstructionsAction () {
        return this.showUsageInstructions ? 'Hide' : 'Show'
      }
    },
    methods: {
      toggleUsageInstructions () {
        this.showUsageInstructions = !this.showUsageInstructions
      }
    }
  }
</script>

<style lang="scss">
  @import '~codemirror/lib/codemirror.css';
  @import '~codemirror/theme/material.css';

  .cm-s-material .CodeMirror-gutters {
    padding-right: 10px;
  }

  .CodeMirror {
    height: auto;
  }

  .editor {
    height: auto;
    font-size: 1.25em;
    background-color: #263238;
    box-shadow: 0 0 5px 0 #263238;
  }

  .showUsageInstructionsButton {
    border-radius: 20px;
    padding: 12px 16px;
    background-color: #a873d1;
    transition: all 500ms ease-in-out;
  }
  a:hover.showUsageInstructionsButton {
    background-color: #C694E8;
  }

  .usageInstructions {
      transition: all 500ms;
      height: auto;
      overflow: hidden;
      padding-top: 50px;
  }
  .usageInstructions.slide-down-enter, .usageInstructions.slide-down-leave {
      height: 0;
      padding-top: 0;
      opacity: 0;
  }

  code {
    background-color: rgba(168,115,209, .3);
    color: #D9A2FE;
    border: 1px solid rgba(168,115,209, .6);
  }
</style>
