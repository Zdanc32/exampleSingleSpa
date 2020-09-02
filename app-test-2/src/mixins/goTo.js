export default {
    methods: {
        goTo(
            project,
            path,
            data,
        ) {
            const event = new CustomEvent('sots:route-change-request', {
                detail : {
                    project: project ?? 'studyPrograms',
                    path: path,
                    data: data ?? null,
                }});
            window.dispatchEvent(event);
        }
    },
};