'use strict';
import request from "request";
import Error from "./error";
interface options {
  headers?: object;
}
/**
 * @class moonfetch
 */
export class moonfetch {
  /**
   * @param url string The url to get response from
   * @param options object The options
   * @returns res The response
   */
  static async get(url: string, options: options): Promise<object> {
    const uri = {
      url: url,
      method: "GET",
      headers: options.headers || { Module: "Moon-fetch" },
    };
    try {
      const res = request(uri, async (error, response, body) => {
        if (error) {
          const a: Promise<any> = new Promise((resolve) => {
            resolve(error);
          });
          return a;
        }
        if (response) {
          const a: Promise<object> = new Promise((resolve) => {
            (response as any).data = response.body;
            delete response.body;
            resolve(response);
          });
          return a;
        }
      });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  /**
   * @param url string The url to post response from
   * @param options object The options
   * @returns res The response
   */
  static async post(url: string, options: options): Promise<object> {
    const uri = {
      url: url,
      method: "POST",
      headers: options.headers || { Module: "Moon-fetch" },
    };
    try {
      const res = request(uri, async (error, response, body) => {
        if (error) {
          const a: Promise<any> = new Promise((resolve) => {
            resolve(error);
          });
          return a;
        }
        if (response) {
          const a: Promise<object> = new Promise((resolve) => {
            (response as any).data = response.body;
            delete response.body;
            resolve(response);
          });
          return a;
        }
      });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  /**
   * @param url string The url to get response from
   * @param options object The options
   * @returns res The response
   */
  static async put(url: string, options: options): Promise<object> {
    const uri = {
      url: url,
      method: "PUT",
      headers: options.headers || { Module: "Moon-fetch" },
    };
    try {
      const res = request(uri, async (error, response, body) => {
        if (error) {
          const a: Promise<any> = new Promise((resolve) => {
            resolve(error);
          });
          return a;
        }
        if (response) {
          const a: Promise<object> = new Promise((resolve) => {
            (response as any).data = response.body;
            delete response.body;
            resolve(response);
          });
          return a;
        }
      });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  /**
   * @param url string The url to patch response from
   * @param options object The options
   * @returns res The response
   */
  static async patch(url: string, options: options): Promise<object> {
    const uri = {
      url: url,
      method: "PATCH",
      headers: options.headers || { Module: "Moon-fetch" },
    };
    try {
      const res = request(uri, async (error, response, body) => {
        if (error) {
          const a: Promise<any> = new Promise((resolve) => {
            resolve(error);
          });
          return a;
        }
        if (response) {
          const a: Promise<object> = new Promise((resolve) => {
            (response as any).data = response.body;
            delete response.body;
            resolve(response);
          });
          return a;
        }
      });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  /**
   * @param url string The url to get response from
   * @param options object The options
   * @returns res The response
   */
  static async delete(url: string, options: options): Promise<object> {
    const uri = {
      url: url,
      method: "DELETE",
      headers: options.headers || { Module: "Moon-fetch" },
    };
    try {
      const res = request(uri, async (error, response, body) => {
        if (error) {
          const a: Promise<any> = new Promise((resolve) => {
            resolve(error);
          });
          return a;
        }
        if (response) {
          const a: Promise<object> = new Promise((resolve) => {
            (response as any).data = response.body;
            delete response.body;
            resolve(response);
          });
          return a;
        }
      });
      return res;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
