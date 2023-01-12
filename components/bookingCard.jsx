import React from "react";
import Image from "next/image";
import styles from "../styles/bookingCard.module.css";


const BookingCard = (props) => {
    return (
        <>
                <div className={styles.bookingCard}>
                    <div className={styles.bookingPictire}>
                        <Image
                            src={props.photo}
                            alt={props.model}
                            width={100}
                            height={100}
                            object-fit="contain"
                        />
                    </div>
                    <div className={styles.bookingInfo}>
                        <div className={styles.bookingItem}>Model: {props.brand}{props.model}</div>
                        <div>Location:{props.start_location}</div>
                        <div>Price:{props.price}</div>
                    </div>
                </div>
        </>
    )
}

export default BookingCard;