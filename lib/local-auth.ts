import { scryptSync, timingSafeEqual } from 'crypto';

const DEFAULT_ADMIN_EMAIL = 'tkkartikasari@gmail.com';
const DEFAULT_ADMIN_PASSWORD_HASH =
  'b0451a92f2075260ddc0090d47162f40:2692c72af71a3a37ffa090da1d8af232410b1f27a56e3f7a68d7c5f8ab85f231497965be399a2da86f8a09159e66db20319500cb895a4291cb52c392df5ae936';

const HASH_DELIMITER = ':';
const DERIVED_KEY_LENGTH = 64;

export interface LocalAdminCredentialConfig {
  email: string;
  passwordHash: string;
}

export function getLocalAdminCredentials(): LocalAdminCredentialConfig {
  return {
    email: process.env.ADMIN_EMAIL?.trim() || DEFAULT_ADMIN_EMAIL,
    passwordHash: process.env.ADMIN_PASSWORD_HASH?.trim() || DEFAULT_ADMIN_PASSWORD_HASH,
  };
}

export function isLocalAuthConfigured(): boolean {
  const { email, passwordHash } = getLocalAdminCredentials();
  return Boolean(email && passwordHash && passwordHash.includes(HASH_DELIMITER));
}

export function verifyLocalAdminCredentials(email: string, password: string): boolean {
  if (!isLocalAuthConfigured()) {
    return false;
  }

  const { email: expectedEmail, passwordHash } = getLocalAdminCredentials();

  if (email.trim().toLowerCase() !== expectedEmail.toLowerCase()) {
    return false;
  }

  const [salt, storedHash] = passwordHash.split(HASH_DELIMITER);

  if (!salt || !storedHash) {
    return false;
  }

  const derived = scryptSync(password, salt, DERIVED_KEY_LENGTH).toString('hex');

  const storedHashBuffer = Buffer.from(storedHash, 'hex');
  const derivedBuffer = Buffer.from(derived, 'hex');

  if (storedHashBuffer.length !== derivedBuffer.length) {
    return false;
  }

  return timingSafeEqual(storedHashBuffer, derivedBuffer);
}
