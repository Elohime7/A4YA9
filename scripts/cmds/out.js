const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
	 const permission = ["61553647340193"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("bitch 3:) only my Master Elohime hatake can use it🖕🏾", event.threadID, event.messageID);
    }
    
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('bot leave the group', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
