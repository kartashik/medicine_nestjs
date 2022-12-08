import {LOGIN_ROUTE,  REGISTRATION_ROUTE, PATIENTS_ROUTE} from './utils/consts';
import Auth from "./pages/Auth";
import Patients from './pages/Patients';

export const authRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PATIENTS_ROUTE,
        Component: Patients
    }
]