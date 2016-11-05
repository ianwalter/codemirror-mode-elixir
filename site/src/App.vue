<template>
  <div class="heightFull colorElixir paddingLeft20 paddingRight20">
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
    font-family: 'Montserrat', sans-serif;
    background: #9D50BB; /* fallback for old browsers */
    background: -webkit-linear-gradient(0, #9D50BB , #6E48AA); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0, #9D50BB , #6E48AA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .colorElixir {
    color: #27162C;
  }
  .fillElixir {
    fill: #27162C;
  }

  a:hover .fillElixir {
    fill: #000;
    transition: all 0.2s ease-in;
  }

  a.link,
  a:visited.link {
    color: #27162C;
    border-bottom: 2px solid #27162C;
    transition: all 0.2s ease-in;
  }
  a:hover.link {
    color: #000;
    border-bottom: 2px solid #000;
  }
</style>
