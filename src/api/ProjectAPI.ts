import {ProjectFormData} from '@/types/index'
import api from '@/lib/axios'

export async function createProject(formData: ProjectFormData){
    try { 
        const {data} = await api.post('/projects', formData)
        return data
    } catch (e) {
        console.log("Error:" + e);  
    }       
}