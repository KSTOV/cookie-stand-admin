export default function Header({title, user, logout}) {
    return (
      <header className="flex justify-evenly p-4 bg-green-400">
        <h1 className="inline-block text-4xl font-medium">{title}</h1>
        <div className="flex items-center">
          <h2 className="px-2 py-1 mr-2 bg-green-200 rounded-lg">{user.username}</h2>
          <button className="px-2 py-1 mr-2 bg-green-600 rounded-lg" onClick={logout}>Sign Out</button>
          <button className="px-2 py-0.5 bg-gray-100 rounded-lg">Overview</button>
        </div>
      </header>
    );
}