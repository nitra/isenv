/** @const {Boolean} if NODE_ENV equal "development" */
const isDev = process.env.NODE_ENV === "development"
/** @const {Boolean} if NODE_ENV equal "production" */
const isProd = process.env.NODE_ENV === "production"
/** @const {Boolean} if NODE_ENV equal "test" */
const isTest = process.env.NODE_ENV === "test"

export { isDev, isProd, isTest }