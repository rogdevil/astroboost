import React, {useState, createContext, useEffect} from 'react';
import firstrank from "../../images/firstrank.png";
import secondrank from "../../images/secondrank.png";
import thirdrank from "../../images/thirdrank.png";
import forthrank from "../../images/forthrank.png";
import fifthrank from "../../images/fifthrank.png";
import sixthrank from "../../images/sixthrank.png";
import seventhrank from "../../images/seventhrank.png";
import eightrank from "../../images/eightrank.png";
import FinalRankModal from './FinalRankModal';
import InitialRankModal from './InitialRankModal';
import QueueModel from './QueueModel';
import ServerModel from './ServerModel';
import LeaguePointModal from './LeaguePointModal';
import WarningModal from './WarningModal';
//import SoloNormal from './SoloNormal';
import SoloNetWins from './SoloNetWins';

export const UserOrderContext = createContext({});

export function SelectionCard() {

    const rankOrder = ["Iron 4", "Iron 3", "Iron 2", "Iron 1", "Bronze 4", "Bronze 3", "Bronze 2", "Bronze 1", "Silver 4", "Silver 3", "Silver 2", "Silver 1", "Gold 4", "Gold 3", "Gold 2", "Gold 1", "Platinum 4", "Platinum 3", "Platinum 2", "Platinum 1", "Diamond 4", "Diamond 3", "Diamond 2", "Diamond 1", "Master", "GrandMaster"];

    const [showModalone, setShowModalone] = useState("none");
    const [showModaltwo, setShowModaltwo]= useState("none");
    const [initialRank, setInitialRank] = useState("Iron 1");
    const [destinedRank, setdDestinedRank] = useState("Silver 1");
    const [queue, setQueue] = useState("solo");
    const [server, setServer] = useState("NA");
    const [showServerModal, setShowServerModal] = useState("none");
    const [showModalLeaguePoint, setShowModalLeaguePoint] = useState("none");
    const [queueModal, setQueueModal] = useState("none");
    const [queueName, setQueueName] = useState("Solo");
    const [initialImage, setInitialImage] = useState(firstrank)
    const [destinedImage, setDestinedImage] = useState(secondrank);
    const [leaguePoint, setLeaguePoint] = useState("0-20");
    const [tooglewarning, setTooglewarning] = useState("none");
    const [netWins, setNetWins] = useState("0");

    const UserOrderInfo = {
        showModalone: {get: showModalone, set: setShowModalone},
        showModaltwo: {get: showModaltwo, set: setShowModaltwo},
        initialRank: {get: initialRank, set: setInitialRank},
        destinedRank: {get: destinedRank, set: setdDestinedRank},
        queue: {get: queue, set: setQueue},
        server: {get: server, set: setServer},
        showServerModal: {get: showServerModal, set: setShowServerModal},
        showModalLeaguePoint: {get: showModalLeaguePoint, set: setShowModalLeaguePoint},
        queueModal: {get: queueModal, set: setQueueModal},
        queueName: {get: queueName, set: setQueueName},
        initialImage: {get: initialImage, set: setInitialImage},
        destinedImage: {get: destinedImage, set: setDestinedImage},
        leaguePoint: {get: leaguePoint, set: setLeaguePoint},
        tooglewarning: {get: tooglewarning, set: setTooglewarning},
        rankOrder: {get: rankOrder},
        netWins: {get: netWins, set: setNetWins}
    }

    useEffect(
        () => {
        assignRankIcon();
        checkRank();
        }, [UserOrderInfo.destinedRank.get, UserOrderInfo.initialRank.get]
    );

    const assignRankIcon = () => {
        if (UserOrderInfo.initialRank.get.search("Iron") !== -1) {
            UserOrderInfo.initialImage.set(firstrank);
        } else if (UserOrderInfo.initialRank.get.search("Bronze") !== -1) {
            UserOrderInfo.initialImage.set(secondrank);
        } else if (UserOrderInfo.initialRank.get.search("Silver") !== -1) {
            UserOrderInfo.initialImage.set(thirdrank);
        } else if (UserOrderInfo.initialRank.get.search("Gold") !== -1) {
            UserOrderInfo.initialImage.set(forthrank);
        } else if (UserOrderInfo.initialRank.get.search("Platinum") !== -1) {
            UserOrderInfo.initialImage.set(fifthrank);
        } else if (UserOrderInfo.initialRank.get.search("Diamond") !== -1) {
            UserOrderInfo.initialImage.set(sixthrank);
        } else if (UserOrderInfo.initialRank.get.search("Master") !== -1) {
            UserOrderInfo.initialImage.set(seventhrank);
        } else {
            console.log("not working");
        }
    
        if (UserOrderInfo.destinedRank.get.search("Iron") !== -1) {
            UserOrderInfo.destinedImage.set(firstrank); 
        } else if (UserOrderInfo.destinedRank.get.search("Bronze") !== -1) {
            UserOrderInfo.destinedImage.set(secondrank);
       } else if (UserOrderInfo.destinedRank.get.search("Silver") !== -1) {
            UserOrderInfo.destinedImage.set(thirdrank);
       } else if (UserOrderInfo.destinedRank.get.search("Gold") !== -1) {
            UserOrderInfo.destinedImage.set(forthrank);
       } else if (UserOrderInfo.destinedRank.get.search("Platinum") !== -1) {
            UserOrderInfo.destinedImage.set(fifthrank);
       } else if (UserOrderInfo.destinedRank.get.search("Diamond") !== -1) {
            UserOrderInfo.destinedImage.set(sixthrank);
       } else if (UserOrderInfo.destinedRank.get.search("Master") !== -1) {
            UserOrderInfo.destinedImage.set(seventhrank);
       } else if (UserOrderInfo.destinedRank.get.search("GrandMaster") !== -1) {
            UserOrderInfo.destinedImage.set(eightrank);
       } else {
            console.log("not working");
        }
    };


    const checkRank = () => {
        if (UserOrderInfo.rankOrder.get.indexOf(UserOrderInfo.initialRank.get) >= UserOrderInfo.rankOrder.get.indexOf(UserOrderInfo.destinedRank.get)) {
            UserOrderInfo.tooglewarning.set("block");
        } else {
            UserOrderInfo.tooglewarning.set("none");
        }
    };


    return (
        <UserOrderContext.Provider value={UserOrderInfo}>
            <React.Fragment>
                <div className='selection-card-container'>
                    

                    <SoloNetWins />
                    <InitialRankModal />
                    <FinalRankModal />
                    <QueueModel />
                    <ServerModel />
                    <LeaguePointModal />
                    <WarningModal />
                </div>
            </React.Fragment>
        </UserOrderContext.Provider>
    )

}

