import Image from 'next/image';
import './globals.css'

export default function RootLayout({children}) {
  return (
    <>
      <html lang='zh'>
        <body>
          <header>
            <nav>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </>
  )
}