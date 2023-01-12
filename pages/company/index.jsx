import Head from "next/head";
import AddVehicleCard from "../../components/addVehicleCard";
import EditVehicleCard from "../../components/editVehicleCard";
import styles from "../../styles/CompanyPage.module.css";

export default function CompanyPage() {
    return (
        <>
            <Head>
                <title>Add a vehicle </title>
                <meta name="description" content="Add or edit vehicle" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h3 style={{ fontWeight: "400", fontSize:"1.2em" }}>Hello, Company name! </h3>
                <h4 style={{ fontWeight: "400", fontSize: "1em" }}>Welcome to the personal cabinet.</h4>
                <div className={styles.topBtns}>
                    <button className={styles.btn}>Check vehicles</button>
                    <button className={styles.btn}>Check bookings</button>
                    <button className={styles.btn}>Edit account</button>
                </div>
                <div className={styles.cards}>
                    <AddVehicleCard />
                    <EditVehicleCard />
                </div>
            </main>
        </>

    )
}
