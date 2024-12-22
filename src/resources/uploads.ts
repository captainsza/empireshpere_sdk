// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Uploads extends APIResource {
  /**
   * Upload multiple files to the server. Supports image optimization for image
   * files.
   */
  upload(body: UploadUploadParams, options?: Core.RequestOptions): Core.APIPromise<UploadUploadResponse> {
    return this._client.post('/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface UploadUploadResponse {
  files?: Array<UploadUploadResponse.File>;

  message?: string;
}

export namespace UploadUploadResponse {
  export interface File {
    /**
     * Unique identifier for the file.
     */
    id?: string;

    /**
     * Timestamp when the file was created.
     */
    createdAt?: string;

    /**
     * Name of the folder containing the file.
     */
    folder?: string;

    /**
     * Original name of the file.
     */
    name?: string;

    /**
     * Relative path to the file on the server.
     */
    path?: string;

    /**
     * MIME type of the file.
     */
    type?: string;

    /**
     * Timestamp when the file was last updated.
     */
    updatedAt?: string;

    /**
     * ID of the user who owns the file.
     */
    userId?: string;
  }
}

export interface UploadUploadParams {
  /**
   * Files to be uploaded.
   */
  files?: Array<Core.Uploadable>;

  /**
   * Folder name to upload files into.
   */
  'x-folder'?: string;
}

export declare namespace Uploads {
  export { type UploadUploadResponse as UploadUploadResponse, type UploadUploadParams as UploadUploadParams };
}
