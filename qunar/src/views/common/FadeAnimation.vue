<!--  -->
<template>
  <div class="fade">
      <transition name="chen">
          <slot></slot>
      </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus'  scoped>
.chen-enter,chen-leave-to 
    opacity 0
.chen-enter-active,.chen-leave-active
    transition :opacity  1s    
</style>
