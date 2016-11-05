<template>
  <div>
    <section>
      <form class="editor maxWidth900">
        <textarea id="code">{{ code }}</textarea>
      </form>
    </section>

    <section class="textCenter paddingTop20 paddingBottom20">

      <a @click="toggleUsageInstructions" class="button bgPink">
        Show Usage Instructions
      </a>

      <div v-if="showUsageInstructions" class="usageInstructions">
        Hello
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
    padding: 1em;
    font-size: 1.25em;
    background-color: #263238;
    margin: 3em auto;
    border-radius: 3px;
    box-shadow: 0 0 5px 0;
  }

  .bgPink {
    border-radius: 20px;
    padding: 12px 16px;
    background-color: #27162C;
  }
</style>
