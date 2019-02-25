<template>
  <div class="career-column">
    <h2 class="is-size-4 has-text-centered">Estan son todas las carreras de <b>Platzi</b></h2>

    <a class="resume-course">
      <div class="logo">
        <img src="https://static.platzi.com/media/achievements/1230-b90f9a3e-a148-40d2-aabd-76c57bf3dd76.png" alt="Curso Básico de Photoshop">
      </div>
      <div class="summary">
        <span>Continua viendo:</span>
        <p class="course-title">Curso de Desarrollo Web Online</p>
      </div>
    </a>

    <div class="careers-dashboard">
      <div class="vivisible-careers">
        <Career v-for="(career, index) in careers" :key="index"
                :class="[index % 2 === 0 ? 'odd' : 'even']"
                :name="career.name"
                :description="career.description"
                :completed="career.completed"
                :courses="career.courses"
                :color="career.color"
                :header-img="career.img"
                :on-click-hide-career="onClickHideCareer"
                :id="`carrer-${index}`"
                :index="index">
        </Career>
      </div>
      <div class="hidden-careers">
        <divider-line text="Carreras Ocultas" classes="is-size-3" style="clear: both">
        </divider-line>
          <Career v-for="(career, index) in hiddenCareers" :key="index"
                  :class="[index % 2 === 0 ? 'odd' : 'even']"
                  :name="career.name"
                  :description="career.description"
                  :completed="career.completed"
                  :courses="career.courses"
                  :color="career.color"
                  :header-img="career.img"
                  :on-click-show-career="onClickShowCareer"
                  :id="`carrer-${index}`"
                  :index="index">
          </Career>
      </div>
    </div>
  </div>
</template>
<script>
import Career from '@/components/Career.vue'
import DividerLine from '@/components/DividerLine.vue'

export default {
  name: 'CareerColumn',
  components: {
    Career,
    DividerLine
  },
  data () {
    return {
      careers: [],
      hiddenCareers: []
    }
  },
  async created () {
    const stream = await fetch('/data.json')
    const data = await stream.json()
    this.careers = data.careers
  },
  methods: {
    onClickHideCareer (index) {
      const career = this.careers.splice(index, 1)
      if (career.length) {
        this.hiddenCareers.push(career[0])
      }
    },
    onClickShowCareer (index) {
      const career = this.hiddenCareers.splice(index, 1)
      if (career.length) {
        this.careers.push(career[0])
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
.career-column {
  padding: 0 13px;

  & .resume-course {
      background: #058ecd;
      border-radius: 5px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      color: #fff;
      display: flex;
      flex-flow: row;
      margin: 1.2em 0;
      padding: 24px 20px 24px 15px;
      justify-content: space-between;

      & .logo {
        width: 100px;
        margin-right: 10px;
      }

      & .summary {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 95%;
      }

      & .course-title {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.5rem;
      }
    }

  & .careers-dashboard {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
}

@media #{$laptop} {
  .career-column {
    width: 90%;
    margin: 0 auto;

    & .resume-course {
      height: 100px;
      padding: 10px 20px 10px 15px;

      & .logo {
        width: 80px;
      }
    }

    & .careers-dashboard {
      & .vivisible-careers,
      & .hidden-careers {
        position: relative;

        & .odd {
          float: left;
          clear: left;
        }
        & .even {
          float: right;
        }
      }
    }
  }
}
</style>
