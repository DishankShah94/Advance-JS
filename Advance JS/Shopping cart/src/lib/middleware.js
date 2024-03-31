import { isAuthenticated } from './auth.js';

export function requireAuth({ page }) {
    if (!isAuthenticated()) {
        return {
            status: 302,
            redirect: '/home'
        };
    }

    return page;
}
