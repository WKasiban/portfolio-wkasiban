import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Call me Oy</h2>
        <p>Hi! My name is W. Kasiban, an Eindhoven-based front-end developer and currently looking for a job. I am enthusiastic about front-end performance. I know React, JAMStack, PWA and still continue learning. Books and cats do inspire me.</p>
        <p><em>P.S. This site is powered by <a href="https://nextjs.org/">Next.js</a>, One of the JAMStack site Generators.</em></p>
        <div className={utilStyles.socialLink}>
          <a href="mailto:w@kasiban.com" className={utilStyles.mail}>
            <FontAwesomeIcon icon="envelope" size="xs"/>
          </a>
        
          <a href="https://twitter.com/wkasiban" className={utilStyles.twitter}>
            <FontAwesomeIcon icon={['fab', 'twitter']} size="xs" />
          </a>
          <a href="https://nl.linkedin.com/in/watcharee-kasiban-47689822" className={utilStyles.linkedin}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="xs" />
          </a>
          <a href="https://github.com/WKasiban" className={utilStyles.github}>
            <FontAwesomeIcon icon={['fab', 'github']} size="xs" />
          </a>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}