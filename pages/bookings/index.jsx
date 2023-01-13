import Head from "next/head";
import styles from "../../styles/BookingsPage.module.css";
import BookingCard from "../../components/bookingCard";
import fakeBooking from "../../fakeBooking";

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
                <h3 style={{ fontWeight: "400", fontSize:"1.2em"}}>My bookings</h3>

                {fakeBooking.map(singleBooking => {
                    return (
                <div className={styles.singleBooking}>
                <div style={{justifySelf: "flex-start" }}>Date: {singleBooking.date} </div>
                <BookingCard 
                key={singleBooking.id}
                model={singleBooking.model}
                brand={singleBooking.brand}
                location={singleBooking.start_location}
                price={singleBooking.price}
                src={singleBooking.photo}
                />
                </div>
                    )
                })}

            </main>
        </>

    )
}
