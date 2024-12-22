// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Files extends APIResource {
  /**
   * Access a shared file using a unique share token. The link may have an expiration
   * time.
   */
  retrieve(shareToken: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/share/${shareToken}`, { ...options, __binaryResponse: true });
  }

  /**
   * Retrieve a paginated list of files for the authenticated user with optional
   * filtering.
   */
  list(query?: FileListParams, options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse>;
  list(
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Delete a specific file by its ID.
   */
  delete(fileId: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${fileId}`, options);
  }

  /**
   * Create a shareable link for a specific file with an optional expiration time.
   */
  share(
    fileId: string,
    body: FileShareParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FileShareResponse> {
    return this._client.post(`/files/${fileId}/share`, { body, ...options });
  }

  /**
   * View a specific file in the browser if supported (e.g., images, PDFs) or
   * download it.
   */
  view(fileId: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/files/${fileId}/view`, { ...options, __binaryResponse: true });
  }
}

export interface FileListResponse {
  files?: Array<FileListResponse.File>;

  pagination?: FileListResponse.Pagination;
}

export namespace FileListResponse {
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

  export interface Pagination {
    /**
     * Current page number.
     */
    currentPage?: number;

    /**
     * Total number of pages.
     */
    pages?: number;

    /**
     * Number of files per page.
     */
    perPage?: number;

    /**
     * Total number of files.
     */
    total?: number;
  }
}

export interface FileDeleteResponse {
  message?: string;
}

export interface FileShareResponse {
  /**
   * Expiration date and time of the shareable link.
   */
  expiresAt?: string;

  /**
   * The generated shareable URL.
   */
  shareUrl?: string;
}

export interface FileListParams {
  /**
   * Filter files by folder name.
   */
  folder?: string;

  /**
   * Number of files per page.
   */
  limit?: number;

  /**
   * Page number for pagination.
   */
  page?: number;

  /**
   * Search term to filter files by name or type.
   */
  search?: string;

  /**
   * Filter files by MIME type.
   */
  type?: string;
}

export interface FileShareParams {
  /**
   * Expiration time in hours for the shareable link.
   */
  expiresIn?: number;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileShareResponse as FileShareResponse,
    type FileListParams as FileListParams,
    type FileShareParams as FileShareParams,
  };
}
