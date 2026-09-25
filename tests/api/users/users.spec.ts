import { test, expect } from '../../../fixtures/test';

test.describe('Users API', () => {
  test('GET /api/users?page=2 returns users', async ({ usersClient }) => {
    const response = await usersClient.getUsers(2);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data).toBeInstanceOf(Array);

    for (const user of body.data) {
      expect(user).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          first_name: expect.any(String),
          last_name: expect.any(String),
        }),
      );
    }
  });

  test('POST /api/users creates a user', async ({ usersClient }) => {
    const response = await usersClient.createUser('morpheus', 'leader');

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        name: 'morpheus',
        job: 'leader',
        id: expect.any(String),
        createdAt: expect.any(String),
      }),
    );
  });
});
