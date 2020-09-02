import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import studyProgram from '@/store/studyProgram';
import studyProgramDictionariesList from '@/store/studyProgramDictionariesList';

export default new Vuex.Store({
    state: {
        programId: null,
    },
    getters: {
        getStudyProgramId: state => state.programId,
    },
    mutations: {
        setData(state, { key, value }) {
            state[key] = value;
        },
        setStudyProgramId(state, programId) {
            state.programId = programId;
        },
    },
    actions: {
        setData({ commit }, payload) {
            commit('setData', payload);
        },
        setStudentId({ commit }, programId) {
            commit('setStudyProgramId', programId);
        },
    },
    modules: {
        studyProgram,
        studyProgramDictionariesList
    }
});