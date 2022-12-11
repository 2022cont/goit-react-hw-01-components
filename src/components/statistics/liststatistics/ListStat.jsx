import css from './ListStat.module.css';

export const ListStat = ({ stats }) => {
    return <ul className={css.list}>
        {stats.map(item => ( <li className={css.item} key={item.id}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>)
           
    )}
    </ul>

}