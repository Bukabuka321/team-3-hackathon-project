import Head from "next/head";
import styles from "../../styles/BookingsPage.module.css";
import BookingCard from "../../components/bookingCard";

export default function BookingsPage() {
    return (
        <>
            <Head>
                <title>My bookings </title>
                <meta name="description" content="My bookings" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <BookingCard />
            </main>
        </>

    )
}
