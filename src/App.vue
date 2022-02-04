<script setup lang="ts">
import 'normalize.css'
import './index.css'

import MTitle           from './components/MTitle.vue'
import MFrame           from './components/MFrame.vue'
import MLink            from './components/MLink.vue'
import MProject         from './components/MProject.vue'
import Lerpy            from './components/Lerpy.vue'
</script>

<template>
  <m-title></m-title>

  <m-frame>
    <div>
      <h2>Professional <br>Work</h2>

      <m-project title="ERGO RISE" link="https://kandidat.ergo.flynne.de" :year="2021">
        backend API, recruiter dashboard and the candidate dashboard
      </m-project>

      <m-project title="Brandmonks Media" link="https://bm.media" :year="2021">
        frontend and effects
      </m-project>

      <m-project title="flynne" link="https://flynne.de" :year="2020">
        backend API, recruiter dashboard and landing page
      </m-project>

      <m-project title="TXT Performer" link="https://txtperformer.com" :year="2018">
        backend and frontend from scratch 
      </m-project>
    </div>
  </m-frame>

  <m-frame>
    <div>
      <h2>Personal <br>Projects</h2>

      <m-project 
        title="marian" 
        suffix="sh" 
        link="https://marian.sh" 
        github="marimilch/marian.sh"
        :year="2022"
      >
        design, programming, effects
      </m-project>

      <m-project 
        title="marimilch" 
        suffix="de" 
        link="https://marimilch.de" 
        github="marimilch/marimilch.de"
        :year="2021"
      >
        design, programming, effects
      </m-project>
      
    </div>
  </m-frame>

  <m-frame>
    <div>
      <lerpy style="display:inline-block" childStyle="display:inline-block">
        <h2>About Me</h2>
      </lerpy>

      <lerpy style="display:inline-block" childStyle="display:inline-block" :lerp-speed="4">
        <p>
          I'm a graduate in computer science and I really 
          enjoy programming and anything involving creativity. 
          I currently live in Mainz a little outside of the city.
          Other hobbies of mine are making music, participating 
          at Musical Inc. and meeting friends.
        </p>
      </lerpy>

      <br>

      <lerpy style="display:inline-block" childStyle="display:inline-block" :lerp-speed="3.5">
        <m-link 
          href="https://www.linkedin.com/in/marian-amiragov/" 
          external
        >
          LinkedIn↗
          
        </m-link>
      </lerpy> <lerpy style="display:inline-block" childStyle="display:inline-block" :lerp-speed="3">
        <m-link href="https://github.com/marimilch" external> GitHub↗ </m-link>
      </lerpy>

      <br>
      <br>

      <m-link href="https://raw.githubusercontent.com/marimilch/unity-xpbd-jakobsen-cable/main/Bachelor_Thesis_Marian_Amiragov.pdf" external> Thesis↗ </m-link>
    </div>
  </m-frame>
</template>

<style lang="scss">
@import './vars.scss';
@font-face {
  font-family: Major Mono Display;
  src: url(./assets/fonts/Major_Mono_Display/MajorMonoDisplay-Regular.ttf) format('truetype');
}
@font-face {
  font-family: Source Code Pro;
  src: url(./assets/fonts/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf) format('truetype');
}
@font-face {
  font-family: Source Code Pro;
  src: url(./assets/fonts/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf) format('truetype');
  font-style: italic;
}
body {
  font-family: Source Code Pro, monospace;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  background: $background;

  display: flex;
  justify-content: center;

  color: $neutral;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.125);
}
#app {
  max-width: 800px;
  background: repeating-linear-gradient(180deg, $highlight1 0, $highlight1 1px, transparent 1px, transparent 100px) 100% / 40px 100px repeat-y,
    repeating-linear-gradient(180deg, $neutral 0, $neutral 1px, transparent 1px, transparent 20px) 100% / 20px 100px repeat-y,
}
h1, h2, .h1, .h2 {
  font-family: Major Mono Display, monospace;
  font-style: normal;
  font-weight: normal;
  color: #454545;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 46px;

  &::after {
    content: '.';
    color: $highlight1;
  }
}
h1, .h1 {
  font-size: 36px;
  line-height: 36px;
}
h2, .h2 {
  font-size: 24px;
  line-height: 24px;
}
h3, h4, h5, h6 {
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  margin: 0;
}
p {
  margin: 0;
}
div {
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
