import "../styles/ongoingshipments.css"
import { Link } from "react-router-dom"

const OSdeliverycontainer = ({ID_Data}) => {
    return (
        <Link to={`/confirmorder/${ID_Data}`} className="admin_osd_rectangleParent">
          <div className="admin_osd_frameChild" />
          <div className="admin_osd_shippingIdexample">Shipment ID: {ID_Data}</div>
          <div className="admin_osd_fRAME">
            <div className="admin_osd_shippingIDLabelParent">
              <div className="admin_osd_shippingIDLabel" />
              <div className="admin_osd_ongoingShipmentLabelParent">
                <div className="admin_osd_ongoingShipmentLabel">
                  <div className="admin_osd_sentOnDateLabelParent">
                    <div className="admin_osd_sentOnDateLabel">
                      <div className="admin_osd_sentOnDateLabelChild" />
                    </div>
                    <div className="admin_osd_frameItem" />
                  </div>
                </div>
                <i className="admin_osd_sentOnDate">{`Sent on: <Date>`}</i>
              </div>
            </div>
          </div>
          <div className="admin_osd_frameInner" />
        </Link>
      );
}

export default OSdeliverycontainer