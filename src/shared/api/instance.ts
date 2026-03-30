import axios from "axios";

export const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/'
})

import { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios'

api.interceptors.request.use(async (config: InternalAxiosRequestConfig<any>) => {
  if (import.meta.env.SSR) {
    const { requestContext } = await import('@shared/contexts/requestContext')
    const ctx = requestContext.getStore()

    console.log('[interceptor] ctx:', ctx)

    if (ctx?.headers) {
      const headers  = new AxiosHeaders(ctx.headers)
      config.headers = new AxiosHeaders({
        ...headers,
        ...config.headers
      })
      console.log('[interceptor] headers set:', config.headers)
    }
  }

  return config
})