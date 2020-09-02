import Vue from 'vue';

export default {
    props: {
        ssNameProp: {
            type: String,
            required: false,
            default: '',
        },
        currentRouteProp: {
            type: Object,
            required: false,
            default: null,
        },
    },
    created() {
        if (this.ssNameProp && this.currentRouteProp) {
            Vue.prototype.ssName = this.ssNameProp;
            Vue.prototype.currentRoute = this.currentRouteProp;
        }
    },
};