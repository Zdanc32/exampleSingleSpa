import store from '@/store';
import routes from '@/router/index';

export function getCurrentRouteComputed(currentPath) {
    const matchingRoutes = routes.filter(route => route.path === currentPath);
    return matchingRoutes.length ?
        matchingRoutes.shift() :
        routes.filter(route => route.name === 'NotFound').shift();
}

export function setData(ev) {
    if (ev.detail.data) {
        for (const el in ev.detail.data) {
            store.dispatch('setData', {
                key: el,
                value: ev.detail.data[el]
            });
        }
    }
}

export function getCurrentPath(ev, projectName) {
    let currentPath = '/not-found';
    if (ev.detail.project === projectName && ev.detail.nextRoute) {
        currentPath = ev.detail.nextRoute.path;
    } else if (ev.detail.nextRoute && ev.detail.nextRoute.customPaths && ev.detail.nextRoute.customPaths[projectName]) {
        currentPath = ev.detail.nextRoute.customPaths[projectName];
    }
    return currentPath;
}