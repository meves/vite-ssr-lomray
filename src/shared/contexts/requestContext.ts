import { AsyncLocalStorage } from 'async_hooks';

export const requestContext = new AsyncLocalStorage<{
  headers: Record<string, string>
}>()