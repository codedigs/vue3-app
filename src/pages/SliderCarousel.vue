<template>
    <h1 class="page-header text-center">Slider Carousel</h1>

    <div class="row">
        <div class="slider-wrapper">
            <div v-for="(slider, index) in sliders" :key="slider">
                <transition name="fade">
                    <div v-if="currentActive === index" class="slider-item" :class="slider"></div>
                </transition>
            </div>

            <div class="slider-btn-wrapper">
                <span v-for="(btn, index) in sliders" :key="index" class="slider-btn" :class="activeClass(index)" @click="onSelectItem(index)"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        currentActive: 0,
        sliderChanger: null,
        sliders: ["background-blue", "background-red", "background-green"]
    }
  },

  methods: {
    onSelectItem: function(index) {
        this.currentActive = index;
        this.pauseSlider();
        this.startSlider();
    },

    startSlider: function() {
        var _this = this;

        this.sliderChanger = setInterval(function() {
            _this.currentActive = _this.currentActive === 2 ? 0 : _this.currentActive + 1;
        }, 1500);
    },

    pauseSlider: function() {
        clearInterval(this.sliderChanger);
    },

    activeClass: function(index) {
        return this.currentActive === index ? "slider-btn-active" : "";
    }
  },

  mounted: function() {
    this.startSlider();
  },

  beforeUnmount: function() {
    this.pauseSlider();
  }
}
</script>

<style>
.slider-wrapper {
    width: 100%;
    height: 350px;
    position: relative;
}

.slider-item {
    width: 100%;
    height: 100%;
    position: absolute;
}

.slider-btn-wrapper {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.slider-btn {
    background: #b4c1d2;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px #000000;
    display: inline-block;
    margin: 0 2px;
    cursor: pointer;
}

.slider-btn-active {
    background: green;
}

.background-blue {
    background: blue;
}

.background-red {
    background: red;
}

.background-green {
    background: green;
}

.fade-leave-active {
    transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>