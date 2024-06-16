import "../styles/shippinghistory.css"
import { Link } from "react-router-dom"

const Shiphistorycontainer = ({Batch_ID}) => {
  return (
    <section className="admin_s_contain_rectangleParent">
      <div className="admin_s_contain_frameChild" />
      <div className="admin_s_contain_batchIdParent">
        <b className="admin_s_contain_batchId">Batch ID: {Batch_ID}</b>
        <div className="admin_s_contain_quickRelevantInfo">Quick relevant info</div>
      </div>
      <div className="admin_s_contain_frameWrapper">
        <div className="admin_s_contain_frameParent">
          <div className="admin_s_contain_frameContainer">
            <div className="admin_s_contain_ellipseParent">
              <div className="admin_s_contain_frameItem" />
              <div className="admin_s_contain_lineWrapper">
                <div className="admin_s_contain_frameInner" />
              </div>
              <div className="admin_s_contain_ellipseDiv" />
            </div>
          </div>
          <i className="admin_s_contain_finishOnDate">{`Finish on: <Date>`}</i>
        </div>
      </div>
      <div className="admin_s_contain_infoDot" />
    </section>
  );
};

export default Shiphistorycontainer;

