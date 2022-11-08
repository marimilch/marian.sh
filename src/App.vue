<script setup lang="ts">
import './index.css'

import MTitle            from './components/MTitle.vue'
import MFrame            from './components/MFrame.vue'
import MLink             from './components/MLink.vue'
import MProject          from './components/MProject.vue'
import CodeAppear        from './components/CodeAppear.vue'
import CodeAppearProject from './components/CodeAppearProject.vue'
import AnchoredHeader    from './components/AnchoredHeader.vue'
</script>

<template>
  <m-title></m-title>

  <m-frame class="professional-projects">
    <div>
      <anchored-header id="professional-work">Professional <br>Work</anchored-header>

      <m-project 
        title="digiLift" 
        link="https://digilift.de" 
        :year="2022"
        :tags="['vue3', 'laravel8', 'tailwind']"
        description="Platform for educational institutes 
        to request digital devices. Government funded."
      />

      <m-project 
        title="ERGO RISE" 
        link="https://kandidat.ergo.flynne.de" 
        :year="2021"
        :tags="['vue2', 'laravel8']"
        description="Trainee application platform."
      />

      <m-project 
        title="Brandmonks Media" 
        link="https://bm.media" 
        :year="2020"
        :tags="['vue3', 'php']"
        description="Agency website."
      />

      <m-project 
        title="flynne" 
        link="https://flynne.de" 
        :year="2020"
        :tags="['vue2', 'laravel5']"
        description="Applicant tracking system."
      />

      <m-project 
        title="TXT Performer" 
        link="https://txtperformer.com" 
        :tags="['vue', 'php', 'typescript']"
        :year="2018"
        description="Text tool."
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
        description="CV/portfolio as a website."
        :tags="['vue3', 'typescript']"
        :year="2022"
      />

      <!-- <m-project 
        title="marimilch" 
        suffix="de" 
        link="https://marimilch.de" 
        github="marimilch/marimilch.de-new"
        :tags="['vue2', 'animejs', 'threejs']"
        description="Website for personal games."
        :year="2021"
      /> -->

      <m-project 
        title="Cable simulation in Unity" 
        link="/unity/unity-xpbd-jakobsen-cable" 
        github="marimilch/unity-xpbd-jakobsen-cable"
        :tags="['csharp', 'unity', 'simulation']"
        description="An implementation of the XPBD, PBD and Jakobsen algorithm in C# for Unity. My bachelor thesis."
        :year="2021"
      />

      <m-project 
        title="ASCIIRay" 
        github="marimilch/asciiray"
        :tags="['c']"
        description="A three dimensional cube rotating in your console."
        :year="2019"
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
          text="I graduated with a bachelor in computer science at the University of Mainz. 
            I really enjoy programming and anything involving creativity. 
            Currently I live in Mainz a little outside of the city.
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
    </div>
  </m-frame>

</template>

<style lang="scss">
@import './main.scss';

</style>