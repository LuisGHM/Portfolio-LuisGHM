// Simplified API configuration to avoid OpenTelemetry conflicts
const token = process.env.TOKEN || process.env.GITHUB_TOKEN;

export const api = {
    get: async (url) => {
        const fullUrl = `https://api.github.com${url}`;
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Portfolio-App',
            ...(token && { 'Authorization': `Bearer ${token}` })
        };

        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers,
                next: { revalidate: 3600 } // Cache for 1 hour
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            return {
                status: response.status,
                data: data,
                ok: response.ok
            };
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
};