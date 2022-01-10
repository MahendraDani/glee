import GleeMessage from '../lib/message'

export type Middleware = (message: GleeMessage, next: MiddlewareCallback) => void
export type ErrorMiddleware = (error: Error, message: GleeMessage, next: MiddlewareCallback) => void
export type MiddlewareCallback = (error?: Error, message?: GleeMessage) => void
