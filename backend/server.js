require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();

// ─── Database ─────────────────────────────────────────────
connectDB();

// ─── Middleware ───────────────────────────────────────────
const allowedOrigins = ['http://localhost:5173'];
if (process.env.FRONTEND_URL) {
  // Split by comma, semicolon, whitespace, or newlines
  const rawOrigins = process.env.FRONTEND_URL.split(/[\s,;]+/);
  rawOrigins.forEach(rawUrl => {
    const url = rawUrl.trim().replace(/\/$/, "");
    if (!url) return;
    
    if (/^https?:\/\//i.test(url)) {
      allowedOrigins.push(url);
    } else {
      // If protocol is missing, add both http and https variants
      allowedOrigins.push(`http://${url}`);
      allowedOrigins.push(`https://${url}`);
    }
  });
}

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    // Normalize request origin for reliable matching
    const normalizedOrigin = origin.trim().toLowerCase().replace(/\/$/, "");
    
    const isAllowed = allowedOrigins.some(allowed => {
      return allowed.trim().toLowerCase().replace(/\/$/, "") === normalizedOrigin;
    });

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Blocked request from origin: ${origin}`);
      console.warn(`[CORS] Allowed origins: ${allowedOrigins.join(', ')}`);
      callback(new Error(`CORS: Origin '${origin}' not allowed`));
    }
  },
  credentials: true,
}));

// We do NOT use express.json() globally because the country routes
// receive multipart/form-data (handled by multer).
// We only parse JSON for the auth route.
app.use('/api/auth', express.json(), require('./src/routes/auth'));
app.use('/api/countries', require('./src/routes/countries'));

// ─── Health check ─────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ─── Error handler ────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// ─── Start ────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
