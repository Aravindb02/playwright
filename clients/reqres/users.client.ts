import type { APIRequestContext, APIResponse } from '@playwright/test';
import { environment } from '../../config/environment';

export class UsersClient {
  constructor(private readonly request: APIRequestContext) {}

  async getUsers(page: number): Promise<APIResponse> {
    return this.request.get(`${environment.apiBaseUrl}/api/users?page=${page}`);
  }

  async createUser(name: string, job: string): Promise<APIResponse> {
    return this.request.post(`${environment.apiBaseUrl}/api/users`, {
      data: { name, job },
    });
  }
}