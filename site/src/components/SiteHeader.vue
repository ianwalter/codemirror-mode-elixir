<template>
  <header>
    <section class="textCenter paddingTop50">

      <div class="displayTable maxWidth900 marginLeftAuto marginRightAuto">

        <div class="displayTableCell width100 verticalMiddle textCenter">
          <a href="https://github.com/optick/codemirror-mode-elixir">
            <div class="width80 height80 fillElixir" v-html="githubSvg"></div>
          </a>
        </div>

        <div class="displayTableCell widthTwelve paddingRight100
                    verticalMiddle">
          <h1 class="marginBottom10 marginTop0">
            codemirror-mode-elixir
          </h1>
          <div class="fontSize22 weight500">
            A CodeMirror mode for the Elixir language by
            <a href="https://optick.io/" class="link">Optick</a>
          </div>
        </div>

    </section>
  </header>
</template>

<script>
  import githubSvg from '../assets/github.svg'

  export default {
    data () {
      return { githubSvg }
    }
  }
</script>
