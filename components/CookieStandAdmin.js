import Head from "next/head";
import CreateForm from "../components/CreateForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useResource from '../hooks/useResource';
import ReportTable from "./ReportTable";


export default function CookieStandAdmin({user, logout}) {
    const { resources, deleteResource } = useResource();
  
    return (
      <div>
        <Head><title>Cookie Stand Admin</title></Head>
        <Header user={user} logout={logout} title="Cookie Stand Admin"/>
  
        <main>
          <CreateForm/>
          <ReportTable stands={resources || []} deleteStand={deleteResource}/>
        </main>
  
        <Footer stores={resources}/>
      </div>
    );
}