// Hardcoded credentials for mock authentication
export const MOCK_CREDENTIALS = {
  email: "admin@itemhub.com",
  password: "password123",
}

export function validateCredentials(email: string, password: string): boolean {
  return email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password
}
