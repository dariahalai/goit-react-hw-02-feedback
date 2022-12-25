import css from './FeedbackOptions.module.css';

const FeedbackOptions  = ({options,onLeaveFeedback}) =>{
        return (
            <ul className={css.options_list}>
          {options.map(option => (
           <li key ={option}>
             <button className={css.button} name={option} type="button" onClick={onLeaveFeedback}>{option[0].toUpperCase() + option.substring(1)}</button>
           </li>
          ))}
        </ul>   
        )
          
}

export default FeedbackOptions;