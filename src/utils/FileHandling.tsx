export const sanitizeFileName = (fileName : string) => {
  return fileName.replace(/ /g, "%20" )
}
