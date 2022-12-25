import { StatisticsList,StatisticsItem } from "./Statistics.styled";

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
    <StatisticsList>
    {statList.map(({statItem,title}) => (
        <StatisticsItem key ={title}>
            <p>{title} :
            <span>{statItem}</span>
            </p>
         
        </StatisticsItem>
        ))}
    </StatisticsList>

    )
};

export default Statistics;