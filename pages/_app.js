import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  )
}
