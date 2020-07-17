import React from 'react';
import { UserOrderContext } from './SelectionCard';
import iconsolo from "../../images/iconsolo.png";
import iconduo from "../../images/iconduo.png";

function QueueModel() {
    const context = React.useContext(UserOrderContext);

    const assignQueue = (event) => {
        context.queueModal.set("none"); 
        context.queueName.set(event.target.innerText)
    };

    return (
                <div className="modal" style={{display: context.queueModal.get}}>
                    <div className="server-modal" onClick={assignQueue}>
                        <div className="server grey-background">
                            <img src={iconsolo} className="queue-image" alt="icon" />
                            <p>Solo</p>
                        </div>
                        <div className="server grey-background" onClick={assignQueue} >
                            <img src={iconduo} className="queue-image" alt="icon" />
                            <p>Flex</p>
                        </div>
                    </div>
                </div>
    )
}

export default QueueModel;
