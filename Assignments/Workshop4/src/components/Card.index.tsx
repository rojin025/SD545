import { User } from "../types/types";

interface Props {
  user: User;
}

export default function Card({ user }: Props) {
  const { login, id, avatar_url } = user;
  return (
    <div className="row">
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank">
          <img src={avatar_url} style={{ width: "100px" }} />
        </a>
        <p className="card-text">{login}</p>
      </div>
    </div>
  );
}
