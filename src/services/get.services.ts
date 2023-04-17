import { AxiosError, AxiosResponse } from 'axios';
import { api } from './axios.services';

interface RequestOptions {
  params?: Record<string, any>;
}

export async function get<T>(url: string, options?: RequestOptions): Promise<AxiosResponse<T>> {
  try {
    const response = await api.get<T>(url, options);
    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response && error.response.status === 404) {
      throw new Error('Resource not found')
    } else {
      console.log(error)
      throw new Error('An error occurred while processing the request')
    }
  }
}