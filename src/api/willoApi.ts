import { AxiosResponse } from 'axios'
import apiInstance from './base'

export const getBrushHistory = async (): Promise<AxiosResponse> => {
    return apiInstance.get('getData/brushHistory', {})
}

export const login = async(email: string, password: string): Promise<AxiosResponse> => {
  return apiInstance.post('users/login', {
    email, password
  })
}

export const signUp = async(email: string, password: string, name: string): Promise<AxiosResponse> => {
  return apiInstance.post('users/register', {
    email, password, name
  })
}