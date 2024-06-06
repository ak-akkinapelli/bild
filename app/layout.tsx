/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";
/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
     <html lang="en">
     <head>
      <link rel="icon" href='/ghost.ico' />
      </head>
        <body>
          <section className={styles.container}>
              <Nav />
            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </Providers>
  );
}
