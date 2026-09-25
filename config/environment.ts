import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const uiBaseUrl = process.env.UI_BASE_URL ?? 'https://www.saucedemo.com';
const apiBaseUrl = process.env.API_BASE_URL ?? 'https://reqres.in';

export const environment = {
  uiBaseUrl,
  apiBaseUrl,
} as const;
