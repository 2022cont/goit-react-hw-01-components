import PropTypes from 'prop-types';
import css from './TitleStatistics.module.css';

export const TitleStatistics = ({title}) => {
    return <h2 className={css.title}>{title}</h2>
}

TitleStatistics.propTypes ={
    title: PropTypes.string
}