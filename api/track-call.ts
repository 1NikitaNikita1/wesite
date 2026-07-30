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

    // Екрануємо спецсимволи, щоб не зламати HTML-теги в Rich Message
    const esc = (s: string) =>
        s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const rows: [string, string][] = [
        ['Час', `${kyivTime} (Kyiv)`],
        ['Місто', city],
        ['Регіон', region],
        ['Країна', country],
        ['IP', ip],
        ['User-Agent', userAgent]
    ];

    const tableRows = rows
        .map(
            ([key, value]) =>
                `<tr><th align="left">${esc(key)}</th><td>${esc(value)}</td></tr>`
        )
        .join('');

    const html =
        `<h3>📄 Book a Call</h3>` +
        `<table bordered striped><caption>Заявка з сайту</caption>${tableRows}</table>`;

    try {
        const res = await fetch(`https://api.telegram.org/bot${botToken}/sendRichMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                rich_message: {
                    html,
                    skip_entity_detection: true
                }
            })
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error('Telegram error:', errText);
            return new Response('Failed to send', { status: 500 });
        }
    } catch {
        return new Response('Failed to send', { status: 500 });
    }

    return new Response('ok', { status: 200 });
}