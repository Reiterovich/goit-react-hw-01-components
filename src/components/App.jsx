import { User } from './Profile/profile';
import user from './Profile/user.json';

export const App = props => {
  return (
    <User
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};
