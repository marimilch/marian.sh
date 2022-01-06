<script setup lang="ts">
import 'normalize.css'

import MTitle   from './components/MTitle.vue'
import MFrame   from './components/MFrame.vue'
import MLink    from './components/MLink.vue'
import MProject from './components/MProject.vue'
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
      <h2>About Me</h2>

      <p>
        I'm a graduate in computer science and I really 
        enjoy programming and anything involving creativity. 
        I currently live in Mainz a little outside of the city.
        Other hobbies of mine are making music, participating 
        at Musical Inc. and meeting friends.
      </p>

      <br>

      <m-link 
        href="https://www.linkedin.com/in/marian-amiragov/" 
        external
      >
        LinkedIn↗
      </m-link> <m-link href="https://github.com/marimilch" external> GitHub↗ </m-link>

      <br>
      <br>

      <m-link href="https://github.com/marimilch/unity-xpbd-jakobsen-cable" external> Thesis↗ </m-link>
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

  color: $neutral;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.125);

}
h1, h2 {
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
h1 {
  font-size: 36px;
  line-height: 36px;
}
h2 {
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
