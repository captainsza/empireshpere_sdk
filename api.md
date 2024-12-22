# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">UploadUploadResponse</a></code>

Methods:

- <code title="post /upload">client.uploads.<a href="./src/resources/uploads.ts">upload</a>({ ...params }) -> UploadUploadResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileShareResponse</a></code>

Methods:

- <code title="get /share/{shareToken}">client.files.<a href="./src/resources/files.ts">retrieve</a>(shareToken) -> Response</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /files/{fileId}">client.files.<a href="./src/resources/files.ts">delete</a>(fileId) -> FileDeleteResponse</code>
- <code title="post /files/{fileId}/share">client.files.<a href="./src/resources/files.ts">share</a>(fileId, { ...params }) -> FileShareResponse</code>
- <code title="get /files/{fileId}/view">client.files.<a href="./src/resources/files.ts">view</a>(fileId) -> Response</code>

# Keys

Types:

- <code><a href="./src/resources/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /keys">client.keys.<a href="./src/resources/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /keys">client.keys.<a href="./src/resources/keys.ts">list</a>() -> KeyListResponse</code>
