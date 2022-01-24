import Head from "next/head";
import { useState } from "react";
import { hours } from "../data";
import ReportTable from "../components/ReportTable";
import CreateForm from "../components/CreateForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookieStandAdmin() {

  const [stores, setStores] = useState([])

  function handleTable(location, min_cust, max_cust, avg_cookie) {
    
    const store = {
      location,
      min_cust,
      max_cust,
      avg_cookie,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      id: stores.length
    }

    setStores([...stores, store])
  }

  return (
    <div>
      <Head><title>Cookie Stand Admin</title></Head>
      <Header title="Cookie Stand Admin"/>

      <main>
        <CreateForm table={handleTable}/>
        <ReportTable hours={hours} stores={stores}/>
      </main>

      <Footer stores={stores}/>
    </div>
  );
}
