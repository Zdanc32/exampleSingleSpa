const appConfig = {
    install(Vue, deployConfig) {
        Vue.appConfig = Vue.prototype.$appConfig = {
            appTitle: parse('VUE_APP_TITLE'),
        };

        function parse (value) {
            if (typeof process.env[value] === 'undefined') {
                return deployConfig[value];
            }
            return process.env[value];
        }
    }
};

export default appConfig;