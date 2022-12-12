import {LOGIN_ROUTE, PATIENTS_ROUTE} from './utils/consts';
import Check from './pages/Check';
import Patients from "./pages/Patients";

export const authRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Check
    },
    {
        path: PATIENTS_ROUTE,
        Component: Patients
    }
]