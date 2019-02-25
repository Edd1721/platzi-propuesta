<template>
  <div class="progress-pie" :data-progress="progress"></div>
</template>
<script>
export default {
  name: 'ProgressPie',
  props: {
    progress: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
$theme-color: #7dc800;
$back-color :  #ddd;
$step       : 1;
$loops      : round(100 / $step);
$increment  : (360 / $loops);
$half       : round($loops / 2);

.progress-pie {
  border-radius: 50%;
  height: 100%;
  position: relative;
  width: 100%;

  &:after {
    background-color: $theme-color;
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }
}

@for $i from 0 through $loops {
  .progress-pie[data-progress=#{'"' + $i * $step + '"'}]:after {
    @if $i < $half {
      $next-deg: 90deg + ($increment * $i);
      background-image: linear-gradient(90deg, $back-color 50%, transparent 50%, transparent), linear-gradient($next-deg, $theme-color 50%, $back-color 50%, $back-color);
    } @else {
      $next-deg: -90deg + $increment * ($i - $half);
      background-image: linear-gradient($next-deg, $theme-color 50%, transparent 50%, transparent), linear-gradient(270deg, $theme-color 50%, $back-color 50%, $back-color);
    }
  }
}
</style>
