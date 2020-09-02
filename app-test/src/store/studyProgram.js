import { updateField } from 'vuex-map-fields';
import Vue from 'vue';
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export default {
    state: {
        studyProgramList: {
            totalCount: 0,
            limit: 10,
            offset: 0,
            pageCount: 0,
            items: [],
        },
        studyProgram: {}
    },
    getters: {
        getStudyProgramList: state => state.studyProgramList.items,
        getStudyProgramTotalPage: state => state.studyProgramList.pageCount,
        getStudyProgramTotalCount: state => state.studyProgramList.totalCount,
        getStudyProgramOffset: state => state.studyProgramList.offset,
        getStudyProgram: state => state.studyProgram,
    },
    mutations: {
        updateField,
        setStudyProgramList(state, studyProgramRequest) {
            state.studyProgramList.items = studyProgramRequest.items;
            state.studyProgramList.totalCount  = studyProgramRequest.totalCount;
            state.studyProgramList.limit = studyProgramRequest.limit;
            state.studyProgramList.offset = studyProgramRequest.offset;
            state.studyProgramList.pageCount = studyProgramRequest.pageCount;
        },
        setCurrentPage(state, payload) {
            state.studyProgram.offset = payload;
        },
        setStudyProgram(state, payload) {
            state.studyProgram = payload;
        }
    },
    actions: {
        async fetchStudyProgramList({ commit }, requestParams) {
            const client = applyCaseMiddleware(axios.create());
            await client.get(Vue.appConfig.urls.api + '/study-programs', {
                params: {
                    limit: requestParams.limit,
                    offset: requestParams.offset
                }
            }).then(response => {
            commit('setStudyProgramList', response.data);
                if (!response.data.items.length) {
                    Vue.notify({
                        group: 'standard',
                        title: 'Błąd pobierania',
                        text: 'Brak Programów studiów',
                        type: 'warn'
                    });
                }
            }).catch(() => {
                commit('setStudyProgramList', {
                    totalCount: 0,
                    limit: 0,
                    offset: 0,
                    items: [],
                });
                Vue.notify({
                    group: 'standard',
                    title: 'Błąd pobierania',
                    text: '',
                    type: 'error'
                });
            });
        },
        async fetchStudyProgramDetails({ commit }, studyProgramId) {
            const client = applyCaseMiddleware(axios.create());
            await client.get(Vue.appConfig.urls.api + '/study-program/' + studyProgramId)
                .then(response => {
                    commit('setStudyProgram', response.data);
                });
        },
        setCurrentPage({ commit }, currentPage) {
            commit('setCurrentPage', currentPage);
        }

    }
};
