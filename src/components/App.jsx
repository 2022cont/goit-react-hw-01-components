import { Profile } from './profile/Profile.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friends/FriendList.jsx';
import { TransactionHistory } from './transaction/TransactionHistory.jsx';
import styled from '@emotion/styled';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

const Container = styled.div
  ({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '40px',
    color: '#010101',
    padding: '20px'
  });

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </Container>
  );
};
