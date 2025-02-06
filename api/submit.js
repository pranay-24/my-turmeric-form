export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', process.env.WEBFLOW_DOMAIN);
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method === 'POST') {
      try {
        // Forward to Zapier
        const response = await fetch(process.env.ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
        const responseText = await response.text();
        console.log('Zapier response:', response.status, responseText);

        if (!response.ok) throw new Error(`Zapier webhook failed: ${response.status} ${responseText}`);
  
        return res.status(200).json({ message: 'Success' });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  }