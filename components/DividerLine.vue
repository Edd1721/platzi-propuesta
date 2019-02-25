<template>
  <div class="divider">
    <span class="divider-text">
      <span v-if="text" :class="classes">{{ text }}</span>
      <template v-else>
        <slot/>
      </template>
    </span>
  </div>
</template>
<script>
export default {
  name: 'DividerLine',
  props: {
    text: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>
  %divider-before-after {
    content: "";
    position: absolute;
    top: 50%;
    width: 5000px;
    border-bottom: 1px solid #e4e4e4;
  }

  .divider {
    text-align: center;
    overflow: hidden;
    margin: 1rem auto;
    width: 94%;

    & .divider-text {
      position: relative;
      font-family: "cooper_hewittmedium";
      padding: 12px;
      font-weight: 600;
      color: #1c3643;
      font-size: 20px;

      &:before {
        @extend %divider-before-after;
        right: 100%;
      }
      &:after {
        @extend %divider-before-after;
        left: 100%;
      }
    }
  }
</style>
