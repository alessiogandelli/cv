<div class="{darkTheme ? 'main dark' : 'main light'}">
  <Header />

  <div class="theme-switch themed-icon" on:click={changeTheme}>
    { #if darkTheme }<WeatherSunny color='#ffad6b' size='32' />{/if}
    { #if !darkTheme }<WeatherNight color='#ffad6b' size='32' />{/if}
  </div>


  <div id="about-me" class="section"> <About /> </div>
  <div id="experiences" class="section"> <Boxes type='Experience' /> </div>
  <div id="education" class="section"> <Boxes type='Education' /> </div>
  <div id="skills" class="section"> <Skills /> </div>
  <div id="other-experiences" class="section"> <Boxes type='Projects' /> </div>
  <div id="projects" class="section"> <Projects /> </div>
  <div id="else" class="section"> <Else /> </div>
  

  <footer>
    <p>Last updated September 2024</p>
  </footer>
</div>

<script lang="ts">
  import Header from "./components/Header.svelte";
  import About from "./components/About.svelte";
  import Boxes from "./components/Boxes.svelte";
  import Skills from "./components/Skills.svelte";
  import Else from "./components/Else.svelte";
  import Certificates from "./components/Certificates.svelte";
  import Projects from "./components/Projects.svelte";

  import WeatherNight from "svelte-material-icons/WeatherNight.svelte";
  import WeatherSunny from "svelte-material-icons/WeatherSunny.svelte";

  let darkTheme = !(localStorage.getItem("darkTheme") === "false");
  function changeTheme() {
    darkTheme = !darkTheme;
    localStorage.setItem("darkTheme", darkTheme ? "true" : "false");
  }

</script>

<style>

  :root {
    --theme: #5e4cd5;
    --theme-select: #FFAD6B;
    --theme-background: #FFDEAD;
    --color: #222;
    --color-bg: #e2e2e2;

    --white: #FFFDFA;
    --black: #222;
  }
  .dark {
    --theme: #22BFAC;
    --theme-select: #C04000;
    --theme-background: #A0522D;
    --color: #FFFDFA;
    --color-bg: #2A206C;
  }

  :global(.themed-icon path) {
    fill: var(--theme) !important;
  }
  :global(.themed-icon svg:hover path) {
    fill: var(--theme-select) !important;
  }


  :global(::selection) {
      background: var(--theme-select);
  }
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: monospace;

  }
  :global(h2) {
    padding: 0 2em;
    font-size: 2em;
    display: block;
    text-align: center;
    margin: auto;
    width: fit-content;
    box-shadow: inset 0 -8px 0px var(--theme);
    text-transform: uppercase;
    margin-bottom: 1em;
  }
  :global(.show-more) {
    color: var(--theme);
    cursor: pointer;
  }

  .theme-switch {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    user-select: none;
  }
  .main {
    width: 100%;
    display: inline-block;
    color: var(--color);
    background-color: var(--color-bg);
  }

  .section {
    width: 95%;
    max-width: 960px;
    margin: 7em auto 4em;
  }
  footer {
    margin-top: 10vh;
    display: flex;
    justify-content: space-between;
    color: #FFFDFA;
    background-color: #111;
    border-top: 1px solid #FFFDFA;
  }
  footer p {
    display: inline-block;
    margin: 0.5em 4em;
  }


</style>