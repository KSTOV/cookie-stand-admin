export default function ReportTable({ hours, stores }) {
    if (stores.length == 0) {
        return (
            <h2 className="w-8/12 mx-auto mt-5 text-center text-2xl font-medium">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className="w-8/12 px-3 pb-2 mx-auto my-5 text-sm rounded bg-green-400">
                <thead>
                    <tr>
                        <th className="text-center">Location</th>
                        {hours.map(hour => <th key={hour}>{hour}</th>)}
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map(store =>
                        <tr key={store.id}>
                            <td className="text-center border border-black font-medium">{store.location}</td>
                            {store.hourly_sales.map(sale => <td key={sale}className="text-center border border-black">{sale}</td>)}
                            <td className="text-center border border-black">{store.hourly_sales.reduce((a,b) => a + b)}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="text-center border border-black font-bold">Totals</td>
                        {hours.map(hour => <td key={hour} className="text-center border border-black font-bold">N/A</td>)}
                        <td className="text-center border border-black font-bold">N/A</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}


  

