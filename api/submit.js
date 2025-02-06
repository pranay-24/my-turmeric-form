// api/submit.js
module.exports = async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // For testing, we'll allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method === 'POST') {
      // Debug: Log the webhook URL and request body
      console.log('Webhook URL:', process.env.ZAPIER_WEBHOOK_URL);
      console.log('Request body:', req.body);
  
      if (!process.env.ZAPIER_WEBHOOK_URL) {
        return res.status(500).json({ error: 'Zapier webhook URL is not configured' });
      }
  
      try {
        const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        const responseData = await response.text();
        console.log('Zapier response:', response.status, responseData);
  
        if (!response.ok) {
          throw new Error(`Zapier webhook failed: ${response.status} ${responseData}`);
        }
  
        return res.status(200).json({ message: 'Success' });
      } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: error.message });
      }
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  };