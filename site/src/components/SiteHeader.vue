<template>
  <header>
    <section class="paddingTop50">

      <div class="displayTable marginLeftAuto marginRightAuto">

        <div class="displayTableCell widthTwelve verticalMiddle">
          <h1 class="marginBottom10 marginTop0">
            codemirror-mode-elixir
          </h1>
          <div class="fontSize18 weight500">
            A CodeMirror mode for the Elixir language from
            <a href="https://optick.io/" class="link colorAlto">Optick</a>
          </div>
        </div>

        <div class="displayTableCell width100 verticalMiddle textCenter">
          <a class="link"
             href="https://github.com/optick/codemirror-mode-elixir">
            <div class="width80 height80 fillElixir" v-html="githubSvg"></div>
          </a>
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
