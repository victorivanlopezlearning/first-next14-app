import { UserItem } from './';

export const UsersList = ({ users }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      {
        users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))
      }
    </ul>
  )
}