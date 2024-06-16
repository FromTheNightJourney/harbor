import ShippingHistoryHeader from "../components/shiphisthead.jsx";
import Shiphistorycontainer from "../components/shdeliverycontainer.jsx";
/* import ShippingHistoryBody from "../components/ShippingHistoryBody"; */
import "../styles/shippinghistory.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShippingHistory = () => {
    const batch = [{batch_id: 21021380132}, {batch_id: 2999830913}, {batch_id: 23123131231}, {batch_id: 5235235235}]
    const [shiphistpageinfo, setshiphistpageinfo] = useState(0);
    const handlepageclick = (newpage) => {setshiphistpageinfo(newpage)};
    const currentshiphistinfo = batch.slice(shiphistpageinfo);
  return (
    <div className="admin_shiphist_mharborShippingHistory">
      <section className="admin_shiphist_frameParent">
        <div className="admin_shiphist_parent">
          <Link to="/" className="admin_shiphist_backButton">{`<-`}</Link>
          <div className="admin_shiphist_shippingHistory">Shipping History</div>
        </div>
        <input className="admin_shiphist_frameChild" placeholder="Search" type="text" />
        Filter By
        {currentshiphistinfo.map((item,index) => (<Shiphistorycontainer key={item.batch_id} Batch_ID={item.batch_id}/>))}
      </section>
    </div>
  );
};

export default ShippingHistory;
