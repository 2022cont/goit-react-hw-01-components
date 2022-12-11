import PropTypes from 'prop-types';
import { AvatarProfileUser } from './avatar_profile/AvatarProfile';
import { ListStatsProfile } from './listStat/ListStatsProfile';

import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <div className={css.profile}>

        <AvatarProfileUser username={username}
            tag={tag}
            location={location}
            avatar={avatar} />
        <ListStatsProfile followers={stats.followers} views={stats.views} likes={stats.likes} />

    </div>
}

ListStatsProfile.propTypes = {
    stats: PropTypes.objectOf(PropTypes.number)
}