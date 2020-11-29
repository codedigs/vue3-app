<template>
    <h1 class="page-header text-center">Markdown</h1>
    <div class="row">
        <div class="col full-height">
            <textarea class="form-control" placeholder="Type here..." @input="onType" v-text="text"></textarea>
        </div>
        <div class="col">
            <div class="card">
                <div class="output" v-html="markedText"></div>
            </div>
        </div>
    </div>
</template>
<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
    mixins: [debounce],
    data() {
        return {
            text: `# Markdown
**bold this text** <br />
*italic this text*`,
        }
    },

    computed: {
        markedText: function() {
            return marked(this.text);
        }
    },

    methods: {
        onType: function(e) {
            var _this = this;
            this.debounce(function() {
                _this.text = e.target.value;
            });
        }
    }
}
</script>
<style>
textarea,
.output {
    height: 600px !important;
    padding: 5px;
}

textarea {
    resize: none;
}
</style>