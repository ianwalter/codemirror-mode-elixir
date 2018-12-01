<template>
  <div class="heightFull paddingLeft20 paddingRight20 maxWidth900
              marginLeftAuto marginRightAuto">

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



        </div>

      </section>
    </header>

    <home></home>

    <footer class="textCenter paddingBottom100">
      &copy; 2016
      <a class="link border" href="https://iankwalter.com">Ian Walter</a>.
      All rights reserved.
    </footer>

  </div>
</template>

<script>
  import Home from './components/Home'

  export default {
    name: 'app',
    components: { Home }
  }
</script>

<style lang="scss">
  html {
    overflow: hidden;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    overflow: auto;
    color: rgba(200, 200, 255, 1);
    font-family: 'Montserrat', sans-serif;
    background: #9D50BB; /* fallback for old browsers */
    background: -webkit-linear-gradient(0, #9D50BB , #6E48AA); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0deg, #9D50BB , #6E48AA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  a.link,
  a:visited.link {
    color: rgba(200, 200, 255, 1);
    fill: rgba(200, 200, 255, 1);
    transition: color 0.5s ease-in-out,
                fill 0.5s ease-in-out;
  }
  a:hover.link {
    color: rgba(238, 238, 238, 1);
    fill: rgba(238, 238, 238, 1);
  }
  a.link.border {
    border-bottom: 2px solid rgba(200, 200, 255, 0.5);
  }

  footer::selection,
  h1::selection,
  div::selection,
  a::selection,
  code::selection {
    color: #ddd;
    background: #482292;
  }
</style>
