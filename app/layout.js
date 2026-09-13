import './globals.css';

export const metadata = {
  title: 'Future Tax Consultancy | Hassle-Free Accounting & Tax Solutions',
  description:
    'Your trusted partner for GST, Income Tax, Bookkeeping & Business Registration — serving startups, SMEs, and freelancers across India.',
  keywords: 'GST filing, income tax, bookkeeping, business registration, Pvt Ltd, LLP, tax consultancy India',
  openGraph: {
    title: 'Future Tax Consultancy | Hassle-Free Accounting & Tax Solutions',
    description: 'Your trusted partner for GST, Income Tax, Bookkeeping & Business Registration.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} className="antialiased">
        {children}
      </body>
    </html>
  );
}
