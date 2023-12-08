import Link from "next/link";

async function getUser(id) {
  try {
    const res = await fetch(`https://reqres.in/api/users/${id}`);

    if (!res.ok) {
      throw new Error('Hubo un error.')
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  if (!user) return;

  const { avatar, first_name, last_name, email } = user;

  return (
    <>
      <div className="w-full max-w-md">
        <div className="mx-4 md:mx-0 p-4 sm:p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full" src={avatar} alt={`${first_name} image`} />
            <h4 className="text-xl mt-5 mb-1 font-bold">{first_name} {last_name}</h4>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {email}
            </p>
          </div>
        </div>
        <Link
          href='/'
          className="inline-block mt-4 hover:underline mx-4 md:mx-0"
        >
          Ver todos los usuarios
        </Link>
      </div>
    </>
  )
}