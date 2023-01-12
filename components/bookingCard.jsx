import React from "react";
import Image from "next/image";
import styles from "../styles/bookingCard.module.css";


const BookingCard = (props) => {
    return (
        <>
                <div className={styles.bookingCard}>
                    <div className={styles.bookingPictire}>
                        <Image
                            src={props.src}
                            alt={props.model}
                            width={130}
                            height={100}
                            object-fit="contain"
                        />
                    </div>
                    <div className={styles.bookingInfo}>
                        <div className={styles.bookingItem}>Model: {props.brand}{props.model}</div>
                        <div>Location: {props.location}</div>
                        <div>Price: {props.price} Euro per km</div>
                    </div>
                </div>
        </>
    )
}

export default BookingCard;