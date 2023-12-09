
export const CardUser = ({ user }) => {

  const { avatar, first_name, last_name, email } = user;

  return (
    <div className="mx-4 md:mx-0 p-4 sm:p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="w-32 h-32 rounded-full" src={avatar} alt={`${first_name} image`} />
        <h1 className="text-xl mt-5 mb-1 font-bold">{first_name} {last_name}</h1>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {email}
        </p>
      </div>
    </div>
  )
}