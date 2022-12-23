

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    const isEmptyList = !(good + neutral + bad);
    if (isEmptyList) return;
    
    const statList = [
        { statItem: good, title: 'Good' },
        { statItem: neutral, title: 'Neutral' },
        { statItem: bad, title: 'Bad' },
        { statItem: total, title: 'Total feedbacks' },
        { statItem: positivePercentage, title: 'Positive feedbacks' },
    ]
    return (
    <ul>
    {statList.map(({statItem,title}) => (
        <li key ={title}>
        {title} : {statItem}
        </li>
        ))}
    </ul>

    )
};

export default Statistics;