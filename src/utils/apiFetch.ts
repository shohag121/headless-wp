export function apiFetch(url: string, config: RequestInit = {}) {
    return fetch(`${process.env.NEXT_PUBLIC_HEADLESS_WP_URL}/wp-json/${url}`, {
        ...config,
        headers: {
            Accept: 'application/json',
            Authorization: 'Basic ' + btoa(`${process.env.STIE_USERNAME}:${process.env.APPLICATION_PASSWORD}`),
            ...config.headers,
        },
    } );
}
