<template>
  <header>
    <section class="paddingTop40">

      <div class="displayTable marginLeftAuto marginRightAuto">

        <div class="displayTableCell widthTwelve verticalMiddle">
          <h1 class="marginBottom10 marginTop0">
            codemirror-mode-elixir
          </h1>
          <div class="fontSize18 weight500 lineHeight22">
            A CodeMirror mode for the Elixir language from
            <a href="https://optick.io/" class="link border">Optick</a>
          </div>
        </div>

        <div class="displayTableCell width100 verticalMiddle textCenter">
          <a class="link"
             href="https://github.com/optick/codemirror-mode-elixir">
            <github-icon class="width80 height80 fillElixir" />
          </a>
        </div>

      </div>

    </section>
  </header>
</template>

<script>
  import GithubIcon from '@/components/GithubIcon'

  export default {
    components: { GithubIcon }
  }
</script>
