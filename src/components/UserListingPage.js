import { useGlobalContext } from "../context";
import UserCard from "./UserCard";

const UserListingPage = () => {
  const { users } = useGlobalContext();
  return (
    <div className="usercard-container">
      {users?.map((user) => {
        return (
          <article key={user.id}>
            <UserCard user={user} />
          </article>
        );
      })}
    </div>
  );
};

export default UserListingPage;
