import type {AxiosRequestConfig} from "axios";
import axios from "axios";

export class ApiService {
  static async get(url: string, config: AxiosRequestConfig) {
    try {
      return await axios.get(url, config);
    } catch (error) {
      console.error(`GET request to ${url} failed:`, error);
      throw error;
    }
  }
  static async post(url: string, data: any, config: AxiosRequestConfig) {
    try {
      return await axios.post(url, data, config);
    } catch (error) {
      console.error(`POST request to ${url} failed:`, error);
      throw error;
    }
  }

  static async put(url: string, data: any, config: AxiosRequestConfig) {
    try {
      return await axios.put(url, data, config);
    } catch (error) {
      console.error(`PUT request to ${url} failed:`, error);
      throw error;
    }
  }

  static async delete(url: string, config: AxiosRequestConfig) {
    try {
      return await axios.delete(url, config);
    } catch (error) {
      console.error(`DELETE request to ${url} failed:`, error);
      throw error;
    }
  }
}
