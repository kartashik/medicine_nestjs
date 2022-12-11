import {LOGIN_ROUTE} from './utils/consts';
import Check from './pages/Check';

export const authRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Check
    },

]