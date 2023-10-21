import { User } from './Profile/profile';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friends/friends';
import { TransactionHistory } from './transactions/transactions';

// Task 1 ---------------

export const App = props => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <User
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

// Task 2 ---------------
