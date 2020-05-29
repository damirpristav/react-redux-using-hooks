// Set loading
export const setLoading = type => {
  return {
    type
  }
}

// Set error
export const setError = (type, msg) => {
  return {
    type,
    payload: msg
  }
}