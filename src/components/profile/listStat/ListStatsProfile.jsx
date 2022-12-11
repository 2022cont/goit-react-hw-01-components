import PropTypes from 'prop-types';
import css from './ListStatsProfile.module.css';

export const ListStatsProfile = ({ followers, views, likes }) => {
    return <ul className={css.list}>
        <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers.toString()}</span>
        </li>
        <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views.toString()}</span>
        </li>
        <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes.toString()}</span>
        </li>
    </ul>
};

ListStatsProfile.propTypes = {
    followers: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string
}
