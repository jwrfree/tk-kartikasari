import { createHmac, timingSafeEqual } from 'crypto';

const DEFAULT_SESSION_SECRET = 'change-me-in-production';

export interface LocalSessionPayload {
  email: string;
  role: 'admin';
  exp: number; // Unix epoch in milliseconds
}

function getSessionSecret(): string {
  return process.env.SESSION_SECRET?.trim() || DEFAULT_SESSION_SECRET;
}

export function createLocalSessionToken(payload: LocalSessionPayload): string {
  const secret = getSessionSecret();
  const data = JSON.stringify(payload);
  const signature = createHmac('sha256', secret).update(data).digest('hex');
  const token = `${data}.${signature}`;
  return Buffer.from(token).toString('base64url');
}

export function verifyLocalSessionToken(token: string): LocalSessionPayload | null {
  try {
    const secret = getSessionSecret();
    const decoded = Buffer.from(token, 'base64url').toString('utf-8');
    const separatorIndex = decoded.lastIndexOf('.');

    if (separatorIndex === -1) {
      return null;
    }

    const data = decoded.slice(0, separatorIndex);
    const signature = decoded.slice(separatorIndex + 1);
    const expectedSignature = createHmac('sha256', secret).update(data).digest('hex');

    const signatureBuffer = Buffer.from(signature, 'hex');
    const expectedBuffer = Buffer.from(expectedSignature, 'hex');

    if (signatureBuffer.length !== expectedBuffer.length) {
      return null;
    }

    if (!timingSafeEqual(signatureBuffer, expectedBuffer)) {
      return null;
    }

    const payload = JSON.parse(data) as LocalSessionPayload;

    if (typeof payload.exp !== 'number' || Date.now() > payload.exp) {
      return null;
    }

    return payload;
  } catch (error) {
    console.error('Failed to verify local session token', error);
    return null;
  }
}
