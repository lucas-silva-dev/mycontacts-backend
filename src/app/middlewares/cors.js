module.exports = (request, response, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3002',
  ]

  const origin = request.header('Origin');
  const isAllowed = allowedOrigins.includes(origin);

  if (isAllowed) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Max-Age', '86400');
  }

  next();
};
