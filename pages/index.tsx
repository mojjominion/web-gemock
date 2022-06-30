import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CopyBtnDemo } from "../components/copybutton";
import { appConfig } from "../env/config";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const curlCmd = `curl -X 'POST' https://gemock.com/api?count=3 -H "Content-Type: application/json" -d '{"config": {"user": "userCard", "email": "email"}}' | json_pp`;

  return (
    <div className={styles.container}>
      <Head>
        <title>Gemock (Generate everything mock)</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gemock.com">Gemock</a>
        </h1>
        <p className={styles.description}>
          Generate mock data using{" "}
          <code className={styles.code}>{appConfig.dev.baseUrl}?count=100</code>
        </p>
        <div className="flex flex-col text-center max-w-screen-lg">
          <code className={`${styles.code} text-start select-none`}>
            <p>{`curl -X 'POST' https://gemock.com/api\?count=3 `}</p>
            <p>{`-H "Content-Type: application/json" `}</p>
            <p>{`-d '{"config": {"user": "userCard", "email": "email"}}' | json_pp`}</p>
          </code>
          <div className="flex justify-center">
            <CopyBtnDemo textToCopy={curlCmd} />
            <Link href={"/playground"}>
              <div className="text-center my-5 ml-4">
                <button className="text-sm border w-36 bg-blue-500 hover:bg-blue-700 text-white p-2 transition rounded">
                  Playground
                </button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
