#!/usr/bin/env ts-node

import { randomBytes, scryptSync } from 'crypto';

interface ParsedArgs {
  password: string | null;
  email: string | null;
}

function parseArgs(): ParsedArgs {
  const args = process.argv.slice(2);
  const parsed: ParsedArgs = { password: null, email: null };

  for (const arg of args) {
    if (arg.startsWith('--password=')) {
      parsed.password = arg.split('=')[1] ?? null;
    } else if (arg.startsWith('--email=')) {
      parsed.email = arg.split('=')[1] ?? null;
    } else if (!parsed.password) {
      parsed.password = arg;
    } else if (!parsed.email) {
      parsed.email = arg;
    }
  }

  return parsed;
}

function main() {
  const { password, email } = parseArgs();

  if (!password) {
    console.error('Usage: npm run admin:hash -- --password="your-strong-password" [--email="admin@example.com"]');
    process.exit(1);
  }

  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  const passwordHash = `${salt}:${hash}`;
  const resolvedEmail = email ?? 'tkkartikasari@gmail.com';

  console.log('Generated admin credentials\n');
  console.log(`ADMIN_EMAIL=${resolvedEmail}`);
  console.log(`ADMIN_PASSWORD_HASH=${passwordHash}`);
  console.log('\nAdd these lines to your .env.local file (or environment variables) to enable login.');
  console.log('You can also set ADMIN_PASSWORD with the plain password for local development if needed.');
}

main();
