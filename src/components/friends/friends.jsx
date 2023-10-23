import css from './friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  // const status = isOnline ? 'online' : 'offline';
  return (
    <li className={css.item}>
      <span className={isOnline ? `${css.online}` : `${css.offline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
