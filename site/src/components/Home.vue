<template>
  <div>
    <section>
      <form class="editor maxWidth900">
        <textarea id="code">{{ code }}</textarea>
      </form>
    </section>

    <section class="textCenter paddingTop20 paddingBottom20">

      <a @click="toggleUsageInstructions"
         class="button showUsageInstructionsButton">
        {{ usageInstructionsAction }} Usage Instructions
      </a>

      <div v-if="showUsageInstructions"
           class="textLeft paddingTop20">
        Include dist/elixir.js into your project.
        <br>
        Call the registerElixirMode function with the CodeMirror instance as
        and argument.
        <br>
        Set 'text/x-elixir' as the mode when creating the editor.
      </div>

    </section>
  </div>
</template>

<script>
  import CodeMirror from 'codemirror'
  import registerElixirMode from '../../../dist/elixir'
  import code from '../code'

  registerElixirMode(CodeMirror)

  export default {
    data: () => ({ showUsageInstructions: false, code }),
    mounted () {
      CodeMirror.fromTextArea(document.getElementById('code'), {
        mode: 'text/x-elixir',
        lineNumbers: true,
        indentUnit: 2,
        theme: 'material'
      })
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
    color: #1E0F24;
    height: auto;
    padding: 1em;
    font-size: 1.25em;
    background-color: #263238;
    margin: 3em auto;
    border-radius: 3px;
    box-shadow: 0 0 5px 0;
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
</style>
