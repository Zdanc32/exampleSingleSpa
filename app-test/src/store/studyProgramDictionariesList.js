import axios from 'axios';
import Vue from 'vue';

export default {
    state: {
        dictionariesList: [],
        countryTypes: [],
        facultyTypes: [],
        studyDirectionTypes: [],
        studySpecialityTypes: [],
        studySpecializationTypes: [],
        studyFormTypes: [],
        studyLevelTypes: [],
        studyTypes: [],
        collegeNameTypes: [],
        studyYearTypes: [],
        languageTypes: [],
        studyJobTitles: []
    },
    getters: {
        getCountryTypes: state => state.countryTypes,
        getFacultyTypes: state => state.facultyTypes,
        getLanguageTypes: state => state.languageTypes,
        getStudyDirectionTypes: state => state.studyDirectionTypes,
        getStudySpecialityTypes: state => state.studySpecialityTypes,
        getStudySpecializationTypes: state => state.studySpecializationTypes,
        getStudyFormTypes: state => state.studyFormTypes,
        getStudyLevelTypes: state => state.studyLevelTypes,
        getStudyTypes: state => state.studyTypes,
        getCollegeNameTypes: state => state.collegeNameTypes,
        getStudyYearTypes: state => state.studyYearTypes,
        getJobTitlesTypes: state => state.studyJobTitles,
    },
    mutations: {
        setFacultyTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.facultyTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setLanguageTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.languageTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudyDirectionTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyDirectionTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudySpecialityTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studySpecialityTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudySpecializationTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studySpecializationTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudyFormType(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyFormTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudyLevelType(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyLevelTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudyTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setCollegeNameTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.collegeNameTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setStudyYearTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyYearTypes = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setJobTitlesTypes(state, id) {
            function setPositions(element) {
                if(element.id === id) {
                    state.studyJobTitles = element.positions;
                }
            }
            state.dictionariesList.forEach(setPositions);
        },
        setDictionariesList(state, payload) {
            state.dictionariesList = payload;
        }
    },
    actions: {
        async fetchDictionariesList({ commit }) {
            let ids = Vue.appConfig.dictionariesIds;
            let idList = [];
            for (let id in ids) {
                idList.push(ids[id]);
            }
            const response = await axios.get(Vue.appConfig.urls.dictionariesApi + '/selected-dictionaries', {
                params: {
                    ids: idList
                }
            });
            if (response.status === 200) {
                await commit('setDictionariesList', response.data.data);
                commit('setFacultyTypes', Vue.appConfig.dictionariesIds.faculty);
                commit('setStudyDirectionTypes', Vue.appConfig.dictionariesIds.direction);
                commit('setStudyLevelType', Vue.appConfig.dictionariesIds.level);
                commit('setStudyFormType', Vue.appConfig.dictionariesIds.form);
                commit('setStudySpecialityTypes', Vue.appConfig.dictionariesIds.specialty);
                commit('setStudySpecializationTypes', Vue.appConfig.dictionariesIds.specialization);
                commit('setLanguageTypes', Vue.appConfig.dictionariesIds.language);
                commit('setStudyTypes', Vue.appConfig.dictionariesIds.studyType);
                commit('setCollegeNameTypes', Vue.appConfig.dictionariesIds.collegeName);
                commit('setStudyYearTypes', Vue.appConfig.dictionariesIds.studyYear);
                commit('setJobTitlesTypes', Vue.appConfig.dictionariesIds.jobTitles);
            }
        }
    },
};