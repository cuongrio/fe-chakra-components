import { Heading, Text, Link, Box } from '@chakra-ui/react';
import Image from 'next/image';
import styles from './Home.module.css';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);
const MotionLink = motion(Link);

export default function Home() {
  return (
    <Box maxW={'container.lg'} p={10} mx='auto'>
      <main className={styles.main}>
        <MotionHeading initial={'hidden'} animate={'visible'} className={styles.title} color='blue.900'>
          <a href='https://nextjs.org'>Next.js!</a>
        </MotionHeading>

        <div className={styles.grid}>
          <MotionLink initial={'hidden'} animate={'visible'} href='/components' className={styles.card}>
            <h2>Components &rarr;</h2>
          </MotionLink>

          <MotionLink initial={'hidden'} animate={'visibleExtraDelay'} href='/projects' className={styles.card}>
            <h2>Projects</h2>
          </MotionLink>

          <MotionLink
            initial={'hidden'}
            animate={'visibleExtraDelay2'}
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </MotionLink>

          <MotionLink
            initial={'hidden'}
            animate={'visibleExtraDelay3'}
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </MotionLink>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </Box>
  );
}
