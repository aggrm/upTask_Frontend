import api from "@/lib/axios";
import { dashBoardProjectSchema, type ProjectFormData } from "../types";
import { isAxiosError } from "axios";


export async function createProject(formData : ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function getAllProjects() {
    try {
        const { data } = await api.get('/projects')
        const response = dashBoardProjectSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}