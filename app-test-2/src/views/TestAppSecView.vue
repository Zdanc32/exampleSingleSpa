<template>
  <v-app>
    <v-card
        class="mx-auto"
    >
      <div class="pl-5 pr-5">
        <test-app-sec />
      </div>
    </v-card>
  </v-app>
</template>

<script>
    import TestAppSec from '@/components/TestAppSec';

    export default {
        name: 'StudyProgram',
        components: {
            TestAppSec,
        },
        data() {
            return {
                windowWidth: 1400,
                windowHeight: 500
            };
        },
        created() {
            this.$store.dispatch('fetchStudyProgramList', {
                limit: 10,
                offset: 0
            });
        },
        methods: {
            fullWindowMode() {
                this.windowWidth = 2000;
            },
            minimizeWindow() {
                this.windowWidth = 550;
            }
        }
    };
</script>