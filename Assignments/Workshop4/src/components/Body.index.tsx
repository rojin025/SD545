import Card from "./Card.index";

import { User } from "../types/types";

interface Props {
  users: User[];
}

export default function Cards({ users }: Props) {
  return (
    <>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </>
  );
}
