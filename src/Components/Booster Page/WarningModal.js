import React from 'react';
import { UserOrderContext } from './SelectionCard';

function WarningModal() {
    const context = React.useContext(UserOrderContext);
    
    const disableWarning = () => {
        context.tooglewarning.set("none");
    };
    return (
                <div className="modal" onClick={disableWarning} style={{display: context.tooglewarning.get}}>
                    <div className="warning">Please select a higher final rank</div>
                </div>
    )
}

export default WarningModal;
