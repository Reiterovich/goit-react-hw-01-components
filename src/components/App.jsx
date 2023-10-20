import { User } from './Profile/profile';
import user from 'data/user.json';
import data from 'data/data.json';
import { Statistics } from './statistics/statistics';

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
      {/* <Statistics stats={data} /> */}
    </>
  );
};

// Task 2 ---------------
