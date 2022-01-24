export default function Header({title}) {
    return (
      <header className="flex justify-between p-4 bg-green-400">
        <h1 className="inline-block text-4xl font-medium">{title}</h1>
        <button className="inline-block px-2 py-0 bg-gray-100 rounded">Overview</button>
      </header>
    );
}