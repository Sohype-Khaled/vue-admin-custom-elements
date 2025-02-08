export const extensions: Record<string, string[]> = {
  image: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'webp', 'svg'],
  audio: ['mp3', 'wav', 'aac', 'flac', 'ogg', 'm4a'],
  video: ['mp4', 'mov', 'avi', 'mkv', 'wmv', 'flv', 'webm'],
  document: ['doc', 'docx', 'pdf', 'txt'],
  presentation: ['ppt', 'pptx'],
  spreadsheet: ['xls', 'xlsx', 'csv'],
  archive: ['zip', 'rar', '7z', 'tar', 'gz'],
  data: ['json', 'xml'],
  code: ['html', 'css', 'scss', 'sass', 'js', 'ts', 'py', 'java', 'cpp', 'c', 'rb', 'php', 'go'],
  script: ['sh']
}

export const mimeTypes: Record<string, string[]> = {
  image: ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/tiff", "image/webp", "image/svg+xml"],
  audio: ["audio/mpeg", "audio/wav", "audio/aac", "audio/flac", "audio/ogg", "audio/mp4"],
  video: ["video/mp4", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/webm", "video/x-flv"],
  document: ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf", "text/plain"],
  presentation: ["application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  spreadsheet: ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv"],
  archive: ["application/zip", "application/x-rar-compressed", "application/x-7z-compressed", "application/x-tar", "application/gzip"],
  data: ["application/json", "application/xml"],
  code: ["text/html", "text/css", "application/javascript", "text/javascript", "application/typescript",
    "text/x-python", "text/x-java-source", "text/x-c++", "text/x-c", "text/x-ruby", "text/x-php", "text/x-go"],
  script: ["application/x-sh"],
};