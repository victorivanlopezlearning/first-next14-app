import { UsersList } from '@/components';

async function getUsers() {
  try {
    const res = await fetch('https://reqres.in/api/users');

    if (!res.ok) {
      throw new Error('Hubo un error.')
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div className="w-full max-w-md">
      <div className="mx-4 md:mx-0 p-4 sm:p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-4">
          <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-5">Usuarios registrados</h1>
        </div>
        {
          (!users || users.length === 0)
            ? <p>No hay usuarios registrados.</p>
            : <UsersList users={users} />
        }
      </div>
    </div>
  )
}
