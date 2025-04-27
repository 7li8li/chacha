const express = require('express');
const app = express();

// Proxy endpoint for /dl1.m3u8
app.use('/dl1.m3u8', (req, res) => {
    const targetUrl = 'https://zekonew.newkso.ru/zeko/premium62/mono.m3u8';

    // Forward the request with modified headers
    res.set({
        'Referer': 'https://xextreamplay.xyz/',
        'Origin': 'https://xextreamplay.xyz',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
    });

    res.redirect(307, targetUrl);
});

// Additional proxy endpoints
app.use('/dl2.m3u8', (req, res) => {
    const targetUrl = 'https://zekonew.newkso.ru/zeko/premium63/mono.m3u8';
    res.set({
        'Referer': 'https://xextreamplay.xyz/',
        'Origin': 'https://xextreamplay.xyz',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
    });
    res.redirect(307, targetUrl);
});

// Example for /dl3.m3u8
app.use('/dl3.m3u8', (req, res) => {
    const targetUrl = 'https://zekonew.newkso.ru/zeko/premium64/mono.m3u8';
    res.set({
        'Referer': 'https://xextreamplay.xyz/',
        'Origin': 'https://xextreamplay.xyz',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
    });
    res.redirect(307, targetUrl);
});

// Proxy endpoint for /dl4.m3u8
app.use('/dl4.m3u8', (req, res) => {
    const targetUrl = 'https://zekonew.newkso.ru/zeko/premium67/mono.m3u8';
    res.set({
        'Referer': 'https://xextreamplay.xyz/',
        'Origin': 'https://xextreamplay.xyz',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
    });
    res.redirect(307, targetUrl);
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Proxy server is running');
});