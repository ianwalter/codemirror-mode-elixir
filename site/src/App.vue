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
    color: #C694E8;
    font-family: 'Montserrat', sans-serif;
    background: #9D50BB; /* fallback for old browsers */
    background: -webkit-linear-gradient(0, #9D50BB , #6E48AA); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(0deg, #9D50BB , #6E48AA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  a.link,
  a:visited.link {
    color: #C694E8;
    fill: currentColor;
    border-bottom: 2px solid currentColor;
    transition: all 500ms ease-in-out;
  }
  a:hover.link {
    color: #eee;
    fill: currentColor;
    border-color: currentColor;
  }
</style>
