import { ListStat } from './liststatistics/ListStat';
import { TitleStatistics } from './title/TitleStatistics';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <TitleStatistics title={title} />
        <ListStat stats={stats} />
    </section>
}
