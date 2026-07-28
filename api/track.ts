export const config = {
    runtime: 'edge'
};

export default async function handler(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
    }

    const botToken = '8668997786:AAF9R32LKj-nzp-p1Q1HJ5n749tXtqrEAVc';
    const chatId = '-1004032538555';

    if (!botToken || !chatId) {
        return new Response('Server not configured', { status: 500 });
    }

    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';

    const userAgent = req.headers.get('user-agent') || 'unknown';

    let caseName: string | undefined;

    try {
        const body = await req.json();
        caseName = body?.case;
    } catch {}

    let city = 'unknown';
    let country = 'unknown';
    let region = 'unknown';

    try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);

        if (geoRes.ok) {
            const geo = await geoRes.json();

            city = geo.city || 'unknown';
            region = geo.region || 'unknown';
            country = geo.country_name || 'unknown';
        }
    } catch {}

    const now = new Date();

    const kyivTime = now.toLocaleString('uk-UA', {
        timeZone: 'Europe/Kyiv',
        dateStyle: 'medium',
        timeStyle: 'medium'
    });

    const text =
        `📄 CV переглянуто\n\n` +
        (caseName ? `🎯 ЦА: ${caseName}\n` : '') +
        `🕐 Час: ${kyivTime} (Kyiv)\n` +
        `🌍 Місто: ${city}, ${region}, ${country}\n` +
        `📡 IP: ${ip}\n` +
        `💻 UA: ${userAgent}`;

    try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text
            })
        });
    } catch {
        return new Response('Failed to send', { status: 500 });
    }

    return new Response('ok', { status: 200 });
}
