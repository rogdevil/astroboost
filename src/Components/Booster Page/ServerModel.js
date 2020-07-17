import React from 'react';
import { UserOrderContext } from './SelectionCard';

function ServerModel() {
    const context = React.useContext(UserOrderContext);
    const assignServer = (event) => {
        context.showServerModal.set("none");
        context.server.set(event.target.innerText);
    };
    
    return (
                <div className="modal" style={{display: context.showServerModal.get}} >
                    <div className="server-modal">
                        < div className="server" onClick={assignServer}>
                            <img src={require("../../images/eunemap.png")} alt="maps" />
                            <p>EUNE</p>
                        </div>
                        < div className="server" onClick={assignServer}>
                            <img src={require("../../images/euwmap.png")} alt="maps" />
                            <p>EUW</p>
                        </div>
                        < div className="server" onClick={assignServer}>
                            <img src={require("../../images/namap.png")} alt="maps" />
                            <p>NA</p>
                        </div>
                        < div className="server" onClick={assignServer}>
                            <img src={require("../../images/ocemap.png")} alt="maps" />
                            <p>OCE</p>
                        </div>
                    </div>
                </div>
    )
}

export default ServerModel;
