export default function contactApiDevPlugin() {
	return {
		name: 'contact-api-dev',
		configureServer(server) {
			server.middlewares.use(async (req, res, next) => {
				const url = req.url?.split('?')[0];
				if (url !== '/api/contact') {
					return next();
				}

				if (req.method !== 'POST') {
					res.statusCode = 405;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify({ error: 'Method not allowed.' }));
					return;
				}

				const chunks = [];
				req.on('data', (chunk) => chunks.push(chunk));
				req.on('end', () => {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/json');
					res.end(JSON.stringify({ success: true }));
				});
			});
		},
	};
}
