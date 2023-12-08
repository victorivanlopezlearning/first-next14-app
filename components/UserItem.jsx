import Link from 'next/link';

export const UserItem = ({ user }) => {
  console.log(user)

  const { id, avatar, first_name, last_name, email } = user;

  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="w-8 h-8 rounded-full" src={avatar} alt={`${first_name} image`} />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {first_name} {last_name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
        <Link
          href={`users/${id}`}
          className="inline-flex items-center text-sm font-bold hover:underline text-gray-900 dark:text-white"
        >
          Ver más
        </Link>
      </div>
    </li>
  )
}