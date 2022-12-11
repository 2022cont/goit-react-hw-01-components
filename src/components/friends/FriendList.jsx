import PropTypes from 'prop-types';
import { FriendItem } from './friendsItem/FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({ avatar, name, id, isOnline}) => (
            <FriendItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />))}
    </ul>
}

FriendList.propTypes ={
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
      }))
}