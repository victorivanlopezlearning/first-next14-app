import Link from 'next/link';
import { CardUser } from '@/components';

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

  return (
    <>
      <div className="w-full max-w-md">

        <CardUser user={user} />

        <Link
          href="/"
          className="flex gap-2 items-center mt-4 hover:underline mx-4 md:mx-0 font-semibold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
          Todos los usuarios
        </Link>
      </div>
    </>
  )
}