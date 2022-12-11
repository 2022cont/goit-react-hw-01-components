import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

export const FriendItem = ({ avatar, name, isOnline}) =>{
    return <li className={css.item}>
    <span className={!isOnline ? css.itemOnline : css.itemOffline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="130" />
    <p className={css.name}>{name}</p>
</li>
} 

FriendItem.propTypes ={
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}