export default function Home() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

function Header() {
  return (
    <header>
      <h1 className="items-center p-4 text-4xl font-medium bg-green-500">Cookie Stand Admin</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <Form/>
      <Table/>
    </main>
  )
}

function Footer(){
  return (
    <footer className="p-4 mt-1 bg-green-500">
      <p className="font-medium">&copy;2022</p>
    </footer>
  )
}

function Form() {
  return (
    <form className="text-center mx-80 my-10 pb-2 bg-green-500 rounded-md">
      <h1 className="pt-5 pb-2 text-3xl font-medium">Create Cookie Stand</h1>
      
      <div className="flex px">
        <p className="p-5 pr-2 font-medium">Location</p>
        <input type="text" className="w-full my-auto mr-10 h-1/2"/>
      </div>

      <div className="m-3">
        <div className="text-center inline-block w-1/4 mr-5">
          <p className="block font-medium">Minimum Customers Per Hour</p>
          <input type="text" className="block w-full"/>
        </div>

        <div className="text-center inline-block w-1/4 mr-5">
          <p className="block font-medium">Maximum Customers Per Hour</p>
          <input type="text" className="block w-full"/>
        </div>

        <div className="text-center inline-block w-1/4 mr-5">
          <p className="block font-medium">Average Cookies Per Sale</p>
          <input type="text" className="block w-full"/>
        </div>

        <button className="px-16 py-5 text-lg font-medium bg-green-700">Create</button>
      </div>
    </form>
  )
}

function Table() {
  return (
    <div className="text-center">
      <h3 className="text-base mb-10">Report Table Coming Soon...</h3>
      <p className="text-lg mb-10">{'{\"location\":\"Barcelona\",\"minCustomers\":2,\"maxCustomers\":4,\"avgCookies\":2.5}'}</p>
    </div>
  )
}