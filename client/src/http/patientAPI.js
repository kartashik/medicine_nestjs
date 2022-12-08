import {$host} from "./index";

export const fetchPatients = async () => {
    const {data} = await $host.get('patients')
    return data 
}