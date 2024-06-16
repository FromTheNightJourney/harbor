import "../styles/ongoingshipments.css";
import OngoingShipmentHeader from "../components/osh.jsx";
import OSdeliverycontainer from "../components/osdeliverycontainer";
import { useEffect, useState } from "react";

const ongoingshipments = () => {
    const data = [{data_id: 21021380132}]
    const [harborpageinfo, setharborpageinfo] = useState(0);
    const handlepageclick = (newpage) => {setharborpageinfo(newpage)};
    const currentharborinfo = data.slice(harborpageinfo);
    return(
    <div className="admin_mainOngoingShipment">
        <OngoingShipmentHeader />
        {currentharborinfo.map((item,index) => (<OSdeliverycontainer key={item.data_id} ID_Data={item.data_id}/>))}
    </div>
    )
};

export default ongoingshipments 