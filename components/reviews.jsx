import styles from '../styles/reviews.module.css';
import reviews from "../reviews.js";


const Reviews = (props) => {
    return (
        <>
            <h3 style={{ fontWeight: "400", fontSize:"1.2em" }}>Reviews</h3>
            <div className={styles.reviews}>
                {reviews.map(review => {
                    return (
                        <div key={review.id} className={styles.review}>
                            <div className={styles.reviewText}>"{review.post}"</div>
                            <div className={styles.reviewAuthor}> {review.name}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Reviews;