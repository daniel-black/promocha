const jwt = require('jsonwebtoken');

export function createToken(id: number) {
  const payload = { id };
  const secret = process.env.JWT_SECRET || 'dang';
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
}