module.exports = {
  config: {
    name: "respect",
    aliases: ["rp"],
    version: "1.0",
    author: "ᎠᏒᎬᎲ ᏝᎬᎬ ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["61553647340193"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("bitch 3:) only my Master Elohime hatake can use it🖕🏾", event.threadID, event.messageID);
    }
    
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `I respect you my boss!🙇🏾‍♂️ You are now an admin in this thread.`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("Apologies, my king. An error occured when trying to make you admin😭.", event.threadID);
    }
  },
};
