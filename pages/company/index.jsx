import Head from "next/head";
import AddVehicleCard from "../../components/addVehicleCard"

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
                <h3 style={{ fontWeight: "400" }}>Hello, Company name! </h3>
                <h4 style={{ fontWeight: "400" }}>Welcome to the personal cabinet.</h4>
            <AddVehicleCard />
            </main>
        </>

    )
}
