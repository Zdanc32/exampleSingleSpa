import TestAppView from '@/views/TestAppView';

export default [
    {
        path: '/not-found',
        name: 'NotFound'
    },
    {
        path: '/',
        name: 'testApp',
        component: TestAppView
    },
];
