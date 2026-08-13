export const dynamic = 'force-static'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        sitemap: 'https://my-portfolio-three-flame-40.vercel.app/sitemap.xml',
    }
}
