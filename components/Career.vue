<template>
  <div class="career-card" :class="{collapsed: makeCollapse}">
    <div class="career-card-top-header" :style="`--backColor:${color}; --img:url(${headerImg})`">
      <div class="hide-career" title="ocultar/mostrar carrera" @click="showHideCareer">
        <i class="far fa-eye-slash"></i>
      </div>
      <span class="label">Carrera de</span>
      <p class="career-title is-size-4">{{ name | uppercase }}</p>
      <span class="label is-size-7">{{ totalCourses }} cursos disponibles</span>
      <div class="minimize is-size-5" @click="minimizeCareer">
        <i v-if="!makeCollapse" class="fas fa-angle-up"></i>
        <i v-if="makeCollapse" class="fas fa-angle-down"></i>
      </div>
    </div>
    <div class="career-card-header is-size-6-5">
      <p>{{ description }}</p>
    </div>
    <div class="career-card-body">
      <Course v-for="(course, index) in courses" :key="index"
              :name="course.name"
              :badgeSrc="course.badgeSrc"
              :badgeAlt="course.badgeAlt"
              :favorite="course.favorite"
              :progress="course.progress"
              :completed="course.completed"
              :score="course.score">
      </Course>
    </div>
    <div class="career-card-footer">
      <button class="btn primary full-width">
        <i class="fas fa-user-graduate"></i>
        <span>Certifícate</span>
      </button>
    </div>
  </div>
</template>
<script>
import Course from '@/components/Course.vue'

export default {
  name: 'Career',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true,
      default: '#000'
    },
    headerImg: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: false,
      default: false
    },
    courses: {
      type: Array,
      required: true
    },
    onClickHideCareer: {
      type: Function,
      required: false
    },
    onClickShowCareer: {
      type: Function,
      required: false
    }
  },
  components: {
    Course
  },
  data () {
    return {
      makeCollapse: false
    }
  },
  computed: {
    totalCourses () {
      return this.courses.length
    }
  },
  methods: {
    minimizeCareer () {
      this.makeCollapse = !this.makeCollapse
    },
    showHideCareer () {
      if (this.onClickShowCareer) {
        this.onClickShowCareer()
      } else if (this.onClickHideCareer) {
        this.onClickHideCareer(this.index)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";

.career-card {
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1.2rem;

  & .career-card-top-header{
    background-color: var(--backColor);
    background-image: var(--img);
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 6px 6px 0 0;
    color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 1em 1em 0 1em;
    position: relative;

    & .hide-career {
      width: 25px;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
      font-size: 1.1em;
      color: #bdbdbd;
      transition: scale, color .5s;

      &:hover {
        transform: scale(1.1);
        color: #fff;
      }
    }

    & .label {
      color: #fff !important;
      margin-bottom: 0;
    }

    & .career-title {
      line-height: 1.2em;
      font-weight: 600;
    }

    & .minimize {
      background-color: var(--backColor);
      border-radius: 5px 5px 0 0;
      cursor: pointer;
      line-height: 1.2rem;
      opacity: .6;
      text-align: center;
    }
  }
  & .career-card-header,
  & .career-card-body,
  & .career-card-footer{
    border: 1px solid #d6d6d6;
    color: #686868;
    padding: 1em;
  }
  & .career-card-header{
    background: #fff;
    border-bottom: none;
  }
  & .career-card-footer{
    border-top: none;
    padding: 0;
  }

  &.collapsed {

    & .career-card-header,
    & .career-card-body,
    & .career-card-footer {
      overflow: hidden;
      animation: collapseIn .2s forwards;
      animation-timing-function: ease-out;
    }
  }
}

@media #{$laptop} {
  .career-card {
    width: 49%;
  }
}

@keyframes collapseIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    height: 0;
    padding: 0;
    margin: 0;
  }
}
</style>
