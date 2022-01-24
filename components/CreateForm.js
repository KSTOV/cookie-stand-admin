export default function CreateForm(props) {
    function handleSubmit(event) {
      event.preventDefault();

      props.table(event.target.location.value, 
                  event.target.min_cust.value,
                  event.target.max_cust.value,
                  event.target.avg_cookie.value)
    }

    return ( 
      <form className="text-center mx-80 my-10 px-5 pb-5 bg-green-400 rounded-lg" onSubmit={handleSubmit}>
        <h1 className="pt-5 pb-2 text-3xl font-medium">Create Cookie Stand</h1>
  
        <div className="flex">
            <label className="p-5 pr-2 font-medium ">Location</label>
            <input id="location" type="text" className="w-full my-auto mr-10 h-1/2"/>
        </div>
  
        <div className="flex m-3">
            <div className="text-center inline-block w-1/4 mr-5 p-3 bg-green-200 rounded">
                <p className="block font-medium">Minimum Customers Per Hour</p>
                <input id="min_cust" type="text" className="w-full"/>
            </div>

            <div className="text-center inline-block w-1/4 mr-5 p-3 bg-green-200 rounded">
                <p className="block font-medium">Maximum Customers Per Hour</p>
                <input id="max_cust" type="text" className="w-full"/>
            </div>

            <div className="text-center inline-block w-1/4 mr-5 p-3 bg-green-200 rounded">
                <p className="block font-medium">Average Cookies Per Sale</p>
                <input id="avg_cookie" type="text" className="w-full"/>
            </div>

            <div className="inline-block">
                <button className="px-20 py-6 text-lg font-medium bg-green-600 rounded">Create</button>
            </div>
        </div>
      </form>
    );
}