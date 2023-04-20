import { useSelector } from 'react-redux';
import styles from './RelatedQuestions.module.css';

export default function RelatedQuestions({category}) {

    const relatedQues = useSelector((storeData)=>{
        return storeData.questions.filter((el)=>{
            return el.category === category;
        })
    })

    return <div className={styles.RelatedQuestions}>
            <p>Related Questions</p>
            {
                relatedQues.map((el,i)=>{
                    return <p key={i}>{el.question}</p>
                })
            }
    </div>
}