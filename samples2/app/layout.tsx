import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'CloudSync - Cloud Storage Platform',
  description: 'Secure and fast cloud storage for teams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
