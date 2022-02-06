<script setup lang="ts">
import './index.css'

import MTitle           from './components/MTitle.vue'
import MFrame           from './components/MFrame.vue'
import MLink            from './components/MLink.vue'
import MProject         from './components/MProject.vue'
import CodeAppear from './components/CodeAppear.vue'
import CodeAppearProject from './components/CodeAppearProject.vue'
import AnchoredHeader from './components/AnchoredHeader.vue'
</script>

<template>
  <m-title></m-title>

  <m-frame class="professional-projects">
    <div>
      <anchored-header id="professional-work">Professional <br>Work</anchored-header>

      <m-project 
        title="ERGO RISE" 
        link="https://kandidat.ergo.flynne.de" 
        :year="2021"
        :tags="['vue2', 'laravel8']"
        description="backend API, recruiter dashboard and the candidate dashboard."
      />

      <m-project 
        title="Brandmonks Media" 
        link="https://bm.media" 
        :year="2021"
        :tags="['anime.js']"
        description="frontend and effects."
      />

      <m-project 
        title="flynne" 
        link="https://flynne.de" 
        :year="2020"
        :tags="['vue2', 'wordpress', 'laravel5']"
        description="backend API, recruiter dashboard and landing page."
      />

      <m-project 
        title="TXT Performer" 
        link="https://txtperformer.com" 
        :tags="['js', 'php', 'vanilla']"
        :year="2018"
        description="backend and frontend."
      />
        
    </div>
  </m-frame>

  <m-frame>
    <div>
      <anchored-header id="personal-projects">Personal <br>Projects</anchored-header>

      <m-project 
        title="marian" 
        suffix="sh" 
        link="https://marian.sh" 
        github="marimilch/marian.sh"
        description="design, programming, effects."
        :tags="['vue3', 'animejs']"
        :year="2022"
      />

      <m-project 
        title="marimilch" 
        suffix="de" 
        link="https://marimilch.de" 
        github="marimilch/marimilch.de"
        :tags="['vue2', 'animejs']"
        description="design, programming, effects."
        :year="2021"
      />
      
    </div>
  </m-frame>

  <m-frame>
    <div>
      <anchored-header id="about-me">About Me</anchored-header>

      <p>
        <code-appear
          :char-delay="20"
          :char-step="4"
          text="I'm a graduate in computer science and I really 
            enjoy programming and anything involving creativity. 
            I currently live in Mainz a little outside of the city.
            Other hobbies of mine are making music, participating 
            at a musical and hanging out with friends."
        />
      </p>

      <br />

      <p>
        <m-link href="https://www.linkedin.com/in/marian-amiragov/" external>
          <code-appear-project text=" LINKEDIN↗ "/>
        </m-link> <m-link href="https://github.com/marimilch" external>
          <code-appear-project text=" GITHUB↗ "/>
        </m-link>
      </p>

      <br />

      <p>
        <m-link href="https://raw.githubusercontent.com/marimilch/unity-xpbd-jakobsen-cable/main/Bachelor_Thesis_Marian_Amiragov.pdf" external> 
          <code-appear-project text=" THESIS↗ "/>
        </m-link>
      </p>
    </div>

  </m-frame>

</template>

<style lang="scss">
@import './main.scss';

</style>