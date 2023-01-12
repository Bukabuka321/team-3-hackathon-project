import Head from "next/head";
import styles from "../../styles/VehiclesPage.module.css";
import SearchFormShort from "../../components/searchFormShort";

export default function VehiclesPage() {
    return (
        <>
            <Head>
                <title>Choose the vehicle </title>
                <meta name="description" content="Choose the vehicle" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h4 style={{ fontWeight: "400", fontSize: "1.2em" }}>Hello, User name! </h4>
                <h4 style={{ fontWeight: "400", fontSize: "1em" }}>Choose your vehicle.</h4>
                <div className={styles.buttonHolder}>
                    <button className={styles.btn}>car</button>
                    <button className={styles.btn}>motorbike</button>
                    <button className={styles.btn}>truck</button>
                </div>
                <SearchFormShort />
                {/*
                 <ShortCarCard />
                */}
            </main>
        </>

    )
}
