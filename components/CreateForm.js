import useResource from '../hooks/useResource';
import { useAuth } from '../contexts/auth';


export default function CreateForm() {
    const { user } = useAuth();
    const { createResource } = useResource();

    function handleSubmit(event) {
      event.preventDefault();
      const store = {
          location: event.target.location.value,
          min_cust: parseInt(event.target.min_cust.value),
          max_cust: parseInt(event.target.max_cust.value),
          avg_cookie: parseFloat(event.target.avg_cookie.value),
          owner: user.id
      };
      createResource(store)
    }

    return ( 
      <form className="text-center mx-80 my-5 px-5 pb-5 bg-green-200 rounded-lg border-2 border-green-400" onSubmit={handleSubmit}>
        
        <div className='flex justify-evenly p-3'>
            <div>
                <label className="p-5 pr-2 font-medium ">Add Location</label>
                <input placeholder="Cookie Stand Location" name="location" type="text" className="w-full my-auto mr-20 h-1/2"/>
            </div>
            
            <div className="inline-block">
                <button className="px-20 py-6 ml-10 text-lg font-medium bg-green-600 rounded">Create Stand</button>
            </div>
        </div>
  
        <div className="flex justify-evenly">
            <div className="text-center inline-block w-1/4 mr-5 p-3">
                <p className="block font-medium">Minimum Customers Per Hour</p>
                <input placeholder="0" name="min_cust" type="text" className="w-full"/>
            </div>

            <div className="text-center inline-block w-1/4 mr-5 p-3">
                <p className="block font-medium">Maximum Customers Per Hour</p>
                <input placeholder="0" name="max_cust" type="text" className="w-full"/>
            </div>

            <div className="text-center inline-block w-1/4 mr-5 p-3">
                <p className="block font-medium">Average Cookies Per Sale</p>
                <input placeholder="0" name="avg_cookie" type="text" className="w-full"/>
            </div>
        </div>
      </form>
    );
}