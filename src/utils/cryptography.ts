import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(plain: string) {
  return await bcrypt.hash(plain, SALT_ROUNDS);
}

export async function passwordsMatch(plain: string, hashed: string) {
  return await bcrypt.compare(plain, hashed);
}