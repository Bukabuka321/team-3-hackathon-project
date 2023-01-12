import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/AboutUsPage.module.css";
import CarLanding from "../../public/images/carLanding.png";

export default function AboutUsPage() {
    return (
        <>
            <Head>
                <title>About us </title>
                <meta name="description" content="About our app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h3 style={{ fontWeight: "400" }}>About RentGo App</h3>
                <div className={styles.about}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className={styles.features}>
                    <h3 style={{ fontWeight: "400" }}> Our features</h3>
                    <ul>
                        <Link className={styles.link} href="/vehicles">
                        <li>Wide range of vehicles</li>
                        </Link>
                        <li>Fair prices</li>
                        <Link className={styles.link} href="/bookings">
                        <li>Personal user cabinet</li>
                        </Link>
                        <li>Big amount of companies</li>
                        <Link className={styles.link} href="/vehicles">
                        <li>Best quality services</li>
                        </Link>
                        <Link className={styles.link} href="/company">
                        <li>Reliable business model</li>
                        </Link>
                    </ul>
                </div>
                <Image
                    src={CarLanding}
                    alt="Picture of the car"
                    height={400}
                    responsive={true}
                 />
                <div className={styles.contactUs}>
                    <h3 style={{ fontWeight: "400" }}>Contact Us</h3>
                    <div className={styles.contacts}>
                        <div>📞 +49 111 1111111</div>
                        <div>📧 rentcar@email.com</div>
                        <div>📍Alexanderplatz, 1, Berlin</div>
                    </div>
                </div>
            </main>
        </>
    )
}

