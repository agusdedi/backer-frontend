export async function apiFetchWithWakeRetry<T>(
  path: string,
  options: Record<string, any> = {},
  maxRetries = 10,
  delayMs = 8000,
): Promise<T> {
  const config = useRuntimeConfig()

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await $fetch.raw(path, {
        baseURL: config.public.apiBase,
        ignoreResponseError: true,
        ...options,
      })

      const contentType = response.headers.get('content-type') || ''
      if (contentType.includes('application/json')) {
        return response._data as T
      }
    } catch {
      // Request failed entirely (e.g. CORS or network error) — likely the
      // backend is still waking up. Fall through and retry below.
    }

    if (attempt < maxRetries - 1) {
      await new Promise((resolve) => setTimeout(resolve, delayMs))
    }
  }

  throw new Error('Backend did not respond after several attempts (it may still be waking up)')
}
