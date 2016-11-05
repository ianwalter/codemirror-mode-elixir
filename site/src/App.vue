<template>
  <div class="bgElixir heightFull colorElixir paddingLeft20 paddingRight20">
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
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  .colorElixir {
    color: #33214A;
  }

  a.link,
  a:visited.link {
    color: #33214A;
    border-bottom: 2px solid #33214A;
    transition: all 0.2s ease-in;
  }
  a:hover.link {
    color: #111;
    border-bottom: 2px solid #111;
  }

  .bgElixir {
    background: #9D50BB; /* fallback for old browsers */
    background: -webkit-linear-gradient(0, #9D50BB , #6E48AA); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0, #9D50BB , #6E48AA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
