import "../styles/globals.css";
import { Inter , Crimson_Pro, Montserrat } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const crimson = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimson',
    display: 'swap',
});

const montseratt = Montserrat({
    subsets: ['latin'],
    variable: '--font-montseratt',
    display: 'swap',
});
export const metadata = {
    title: 'Lyrica Classic Entertainment Tickets',
    description: 'Tickets',
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className={` ${montseratt.variable} ${crimson.variable} ${inter.variable} font-sans antialiased`}>
        <body >
        {children}
        </body>
        </html>
    );
}
