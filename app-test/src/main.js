import Vue from 'vue';
import axios from 'axios';
import store from '@/store';
import appConfig from '@/appConfig';

import Notifications from 'vue-notification';
Vue.use(Notifications);

import goTo from '@/mixins/goTo';
Vue.mixin(goTo);

import '@/set-public-path';

import vuetify from '@/plugins/vuetify';

import '@/set-public-path';
import singleSpaVue from 'single-spa-vue';

import { getCurrentPath, getCurrentRouteComputed, setData } from '@/router/functions';
let sotsRouteChangeCommand;
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    data: {
      currentPath: window.location.pathname
    },
    computed: {
      currentRouteComputed () {
        return getCurrentRouteComputed(this.currentPath);
      }
    },
    created () {
      sotsRouteChangeCommand = ev => {
        if (ev.detail) {
          setData(ev);
          this.currentPath = getCurrentPath(ev, this.name);
        }
      };
      window.addEventListener('sots:route-change-command', sotsRouteChangeCommand);
    },
    render(h) {
      return h(this.currentRouteComputed.component, {
        props: {
          ssNameProp: this.name,
          currentRouteProp: this.currentRouteComputed,
        },
      });
    },
    store,
    vuetify
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export async function mount(props) {
  let deployConfig;
  await axios.get('/apps/testApp1/deployConfig.json')
      .then(response => {
        deployConfig = response.data;
      }).catch(() => {
        deployConfig = null;
      }).finally(() => {
        Vue.use(appConfig, deployConfig);
        return vueLifecycles.mount(props);
      });
}

export async function unmount() {
  window.removeEventListener('sots:route-change-command', sotsRouteChangeCommand);
  return vueLifecycles.unmount;
}
