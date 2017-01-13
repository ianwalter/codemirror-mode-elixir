<template>
  <div class="heightFull paddingLeft20 paddingRight20 maxWidth900
              marginLeftAuto marginRightAuto">
    <site-header></site-header>
    <home></home>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteHeader from './components/SiteHeader'
  import Home from './components/Home'
  import SiteFooter from './components/SiteFooter'

  export default {
    name: 'app',
    components: { SiteHeader, Home, SiteFooter }
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
