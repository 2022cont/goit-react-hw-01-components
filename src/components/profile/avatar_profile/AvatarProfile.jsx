import PropTypes from 'prop-types';
import css from './AvatarProfile.module.css';

export const AvatarProfileUser = ({ avatar, username, tag, location }) => {
    return <div className="description">
        <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}></img>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        
    </div>
};

AvatarProfileUser.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
}
