// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Keys extends APIResource {
  /**
   * Create a new API key for authenticating requests to the backend services.
   */
  create(body: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<KeyCreateResponse> {
    return this._client.post('/keys', { body, ...options });
  }

  /**
   * Retrieve a list of all active API keys for the authenticated user. API keys are
   * masked for security.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return this._client.get('/keys', options);
  }
}

export interface KeyCreateResponse {
  /**
   * The generated API key.
   */
  apiKey?: string;

  message?: string;
}

export interface KeyListResponse {
  apiKeys?: Array<KeyListResponse.APIKey>;
}

export namespace KeyListResponse {
  export interface APIKey {
    /**
     * Timestamp when the API key was created.
     */
    createdAt?: string;

    /**
     * Expiration date and time of the API key.
     */
    expiresAt?: string;

    /**
     * Masked API key.
     */
    key?: string;

    /**
     * Timestamp when the API key was last used.
     */
    lastUsedAt?: string;

    /**
     * Name assigned to the API key.
     */
    name?: string;
  }
}

export interface KeyCreateParams {
  /**
   * Expiration time in days for the API key.
   */
  expiresIn?: number;

  /**
   * Name assigned to the API key.
   */
  name?: string;
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
  };
}
