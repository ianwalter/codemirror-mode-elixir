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

    <!-- Usage instructions -->
    <transition name="slide-down">
      <section v-show="showUsageInstructions"
               class="textLeft usageInstructions">

        <!-- Step one -->
        <div class="displayFlex marginBottom40">

          <div class="fontWeight600 width30">1.</div>

          <div class="flex1">
            Install codemirror-mode elixir from NPM: <code class="padding4">npm install
            codemirror-mode-elixir</code>
          </div>

        </div>

        <!-- Step two -->
        <div class="displayFlex marginBottom40">

          <div class="fontWeight600 width30">2.</div>

          <div class="flex1">

            Include codemirror-mode-elixir into your project.

            <form class="editor borderRadius3 padding10 marginTop20">
              <textarea id="import">{{ jsImport }}</textarea>
            </form>

            <div class="marginTop20 marginBottom20">Or</div>

            <form class="editor borderRadius3 padding10">
              <textarea id="script">{{ htmlScript }}</textarea>
            </form>

          </div>

        </div>

        <!-- Step three -->
        <div class="displayFlex marginBottom40">

          <div class="fontWeight600 width30 fontSize18">3.</div>

          <div class="flex1">

            Call the registerElixirMode function with the CodeMirror instance as
            and argument.

            <form class="editor borderRadius3 padding10 marginTop20">
              <textarea id="register">{{ register }}</textarea>
            </form>

            <div class="marginTop20 marginBottom20">Or</div>

            <form class="editor borderRadius3 padding10">
              <textarea id="iif">{{ iif }}</textarea>
            </form>

          </div>

        </div>

        <!-- Step four -->
        <div class="displayFlex marginBottom40">

          <div class="fontWeight600 width30 fontSize18">4.</div>

          <div class="flex1">

            Set 'elixir' as the mode when creating the CodeMirror editor.

            <form class="editor borderRadius3 padding10 marginTop20">
              <textarea id="create">{{ create }}</textarea>
            </form>

          </div>

        </div>

      </section>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CodeMirror from 'codemirror'
  import '../../node_modules/codemirror/mode/javascript/javascript'
  import '../../node_modules/codemirror/mode/htmlmixed/htmlmixed'
  import registerElixirMode from '../../../dist/elixir'
  import { code, htmlScript, jsImport, register, iif, create } from '../code'

  registerElixirMode(CodeMirror)

  const htmlOpts = {
    mode: 'htmlmixed',
    lineNumbers: true,
    indentUnit: 2,
    theme: 'material'
  }
  const jsOpts = Object.assign({}, htmlOpts, { mode: 'javascript' })
  const elixirOpts = Object.assign({}, htmlOpts, { mode: 'elixir' })

  export default {
    data: () => ({
      showUsageInstructions: false,
      code,
      htmlScript,
      jsImport,
      register,
      iif,
      create
    }),
    mounted () {
      CodeMirror.fromTextArea(document.querySelector('#code'), elixirOpts)
      CodeMirror.fromTextArea(document.querySelector('#import'), jsOpts)
      CodeMirror.fromTextArea(document.querySelector('#script'), htmlOpts)
      CodeMirror.fromTextArea(document.querySelector('#register'), jsOpts)
      CodeMirror.fromTextArea(document.querySelector('#iif'), htmlOpts)
      CodeMirror.fromTextArea(document.querySelector('#create'), jsOpts)
    },
    computed: {
      usageInstructionsAction () {
        return this.showUsageInstructions ? 'Hide' : 'Show'
      }
    },
    methods: {
      toggleUsageInstructions () {
        this.showUsageInstructions = !this.showUsageInstructions
        if (this.showUsageInstructions) {
          Vue.nextTick(() => {
            for (let el of document.querySelectorAll('.CodeMirror')) {
              el.CodeMirror.refresh()
            }
          })
        }
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
