import { createClient } from '@vercel/storage';

const client = createClient({ token: process.env.VERCEL_STORAGE_TOKEN });

export default async function handler(req, res) {
    const result = await client.get('my-data');
    if (result) {
        res.status(200).json({ text: result.value });
    } else {
        res.status(404).json({ message: 'No data found' });
    }
}
