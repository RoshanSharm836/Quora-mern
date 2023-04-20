import styles from './Question.module.css';
import {Link} from 'react-router-dom';

export default function Question({id, question, no_of_answers, last_followed, followed_by }) {
   return <div className={styles.Question}>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-arrow-down"></i>
        <i class="fa-solid fa-ellipsis"></i>
        <h3><Link to={`${id}`}>{question}</Link></h3>
        <span>{no_of_answers === 0 ? "No answers yet" : `Answers ${no_of_answers}`}</span>
        <span>Last followed {last_followed}</span>
        <div className={styles.buttonsDiv}>
            <button><Link to={`${id}`}>Answer</Link></button>
            <button>Follow</button>
            <button>Pass</button>
        </div>
    </div>
}