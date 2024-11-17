import { createClient } from '@vercel/storage';

const client = createClient({ token: process.env.VERCEL_STORAGE_TOKEN });

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text } = req.body;
        await client.set('my-data', text);
        res.status(200).json({ message: 'Data saved successfully!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
