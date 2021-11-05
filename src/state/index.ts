// centralizes where all info is coming from to make import/exports
// not such a mess
export * from './store'
export * as actionCreators from './action-creators'
// tells TS what the initial state is. Needed for passing in type on Line 8
// of RepositoriesList.tsx
export * from './reducers'