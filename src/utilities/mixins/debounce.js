export default {
    data () {
      return {
          timeout: null
      };
    },

    methods: {
        debounce: function(cb, delay = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(cb, delay);
        }
    }
};