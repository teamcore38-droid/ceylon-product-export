const jwt = require('jsonwebtoken');

module.exports = function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Admin authentication required.' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret_key_2026');
    if (payload.role !== 'Super Admin') {
      return res.status(403).json({ success: false, message: 'Admin access required.' });
    }
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired admin token.' });
  }
};
