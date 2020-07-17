
export const toogleModelQueue = (event, context) => {
    event.preventDefault();
    if (context.queueModal.get === "block") {
        context.queueModal.set("none");
    } else {
        context.queueModal.set("block");
    }
};


export const assignRankIcon = () => {
    if (context.initialRank.get.search("Iron") !== -1) {
        context.initialImage.set(firstrank);
    } else if (context.initialRank.get.search("Bronze") !== -1) {
        context.initialImage.set(secondrank);
    } else if (context.initialRank.get.search("Silver") !== -1) {
        context.initialImage.set(thirdrank);
    } else if (context.initialRank.get.search("Gold") !== -1) {
        context.initialImage.set(forthrank);
    } else if (context.initialRank.get.search("Platinum") !== -1) {
        context.initialImage.set(fifthrank);
    } else if (context.initialRank.get.search("Diamond") !== -1) {
        context.initialImage.set(sixthrank);
    } else if (context.initialRank.get.search("Master") !== -1) {
        context.initialImage.set(seventhrank);
    } else {
        console.log("not working");
    }

    if (context.destinedRank.get.search("Iron") !== -1) {
        context.destinedImage.set(firstrank); 
    } else if (context.destinedRank.get.search("Bronze") !== -1) {
        context.destinedImage.set(secondrank);
   } else if (context.destinedRank.get.search("Silver") !== -1) {
        context.destinedImage.set(thirdrank);
   } else if (context.destinedRank.get.search("Gold") !== -1) {
        context.destinedImage.set(forthrank);
   } else if (context.destinedRank.get.search("Platinum") !== -1) {
        context.destinedImage.set(fifthrank);
   } else if (context.destinedRank.get.search("Diamond") !== -1) {
        context.destinedImage.set(sixthrank);
   } else if (context.destinedRank.get.search("Master") !== -1) {
        context.destinedImage.set(seventhrank);
   } else if (context.destinedRank.get.search("GrandMaster") !== -1) {
        context.destinedImage.set(eightrank);
   } else {
        console.log("not working");
    }
};

export const assignQueue = (event, context) => {
    context.queueModal.set("none"); 
    context.queueName.set(event.target.innerText)
};

export const checkRank = () => {
    if (context.rankOrder.get.indexOf(context.initialRank.get) >= context.rankOrder.get.indexOf(context.destinedRank.get)) {
        context.tooglewarning.set("block");
    } else {
        context.tooglewarning.set("none");
    }
};


export const toogleModelone = (event, context) => {
    event.preventDefault();
    if (context.showModalone.get === "block") {
        context.showModalone.set("none");
    } else {
        context.showModalone.set("block");
    }
};

export const toogleServerModal = (event, context) => {
    event.preventDefault();
    if (context.showServerModal.get === "block") {
        context.showServerModal.set("none");
    } else {
        context.showServerModal.set("block");
    }
};

export const assignLeaguePoint = (event, context) => {
    context.showModalLeaguePoint.set("none");
    context.leaguePoint.set(event.target.innerText);
};

export const assigRankOne = (event) => {
    context.showModalone.set("none");
    context.initialRank.set(event.target.innerText);
};

export const assigRankTwo = (event, context) => {
    context.showModaltwo.set("none");
    context.destinedRank.set(event.target.innerText);
};

export const assignServer = (event, context) => {
    context.showServerModal.set("none");
    context.server.set(event.target.innerText);
};


export const toogleModeltwo = (event, context) => {
    event.preventDefault();
    if (context.showModaltwo.get === "block") {
        context.showModaltwo.set("none");
    } else {
        context.showModaltwo.set("block");
    }
};

export const toogleModelLeaguePoint = (event, context) => {
    event.preventDefault();
    if (context.showModalLeaguePoint.get === "block") {
        context.showModalLeaguePoint.set("none");
    } else {
        context.showModalLeaguePoint.set("block");
    }    
};

export const disableWarning = () => {
    context.tooglewarning.set("none");
};