<template>
  <div class="course-card">
    <div class="course-card-badge">
      <img :src="badgeSrc" :alt="badgeAlt">
    </div>
    <div class="course-card-title">
      <p>{{ name | capitalize }}</p>
    </div>
    <div class="course-card-options">
      <div class="course-completed" title="aprovado" v-if="completed">
        <img class="approved" src="/approved.svg" alt="approved">
        <span class="has-text-weight-semibold is-size-6-5"> {{ score }}</span>
      </div>
      <div class="course-progress" :title="`${progress}% completado`" v-if="!completed">
        <progress-pie :progress="progress"></progress-pie>
      </div>
      <div class="course-favorite" v-if="!completed">
        <i v-if="!favorite" class="far fa-star"></i>
        <i v-if="favorite" class="fas fa-star"></i>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressPie from '@/Components/ProgressPie'

export default {
  name: 'Course',
  components: {
    ProgressPie
  },
  props: {
    name: {
      type: String,
      required: true
    },
    badgeSrc: {
      type: String,
      required: true
    },
    badgeAlt: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    score: {
      type: String,
      required: false
    },
    progress: {
      type: Number,
      required: true
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.course-card {
  align-items: center;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  flex-flow: row nowrap;
  line-height: 3rem;
  justify-content: space-between;

  & .course-card-badge {
    display: flex;
    flex-direction: column;
    width: 44px;
    margin-right: 10px;
  }

  & .course-card-title {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2rem;
    width: 100%;
  }

  & .course-card-options {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin-left: 5px;
    justify-content: flex-end;
    width: 20%;

    & .course-completed,
    & .course-progress {
      display: flex;
    }
    & .course-completed {
      flex-flow: row nowrap;
      justify-content: flex-end;
      width: 100%;
      align-items: center;

      & .approved {
        width: 25px;
        height: 25px;
        margin-right: 3px;
      }
    }
    & .course-progress {
      flex-direction: column;
      margin-right: 5px;
      height: 18px;
      width: 18px;
    }
  }
}
</style>
