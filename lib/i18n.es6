export default (key, metadata) => {
  try {
    return metadata && metadata.__notConfigured__ ? key : App.Text.get2(key)
  } catch {
    return key
  }
}
