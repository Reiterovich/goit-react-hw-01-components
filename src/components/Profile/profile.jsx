// import { user } from './user.json';
import css from './profile.module.css';

export const User = props => {
  console.log(props);
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.title}>{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsli}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}> {props.followers}</span>
        </li>
        <li className={css.statsli}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {props.views}</span>
        </li>
        <li className={css.statsli}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {props.likes}</span>
        </li>
      </ul>
    </div>
  );
};
