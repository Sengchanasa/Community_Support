const { getAllOrganizationEvents } = require("../api");

module.exports = {
  DonateTimeIntent() {
    let communityName;
    let input = this.$inputs.communityName;

    // if (input != undefined){
    //   communityName = input.value;
    // }else if(this.$session.$data.communityName != null) {
    //   communityName = this.$session.$data.communityName;
    //   console.log( "check inside else if"+JSON.stringify( this.$session.$data))


    // }

    if (input == null) {
      console.log("in if")
      communityName = this.$session.$data.communityName;
      console.log("check inside else if" + JSON.stringify(this.$session.$data))
    } else if (input.value != null) {
      console.log("in else if")
      communityName = input.value;
    }

    //Get commuinities if there no session data or input
    else {
      console.log("in else")
      // create 2 session variables
      this.$session.$data.previousState = this.getState();
      this.$session.$data.previousIntent = "DonateTimeIntent";
      //Prompt for community name

      return this.ask("What is the name of the community you want to support, black community or asian community?")

    }

    console.log("comName " + communityName)

    let community = communityName == "blackCommunity" ? "Black" : "Asian"
    this.$speech.addText(`There are a lot of online events you can join to learn more about the ${community} community.`);
    let events = getAllOrganizationEvents(communityName);
    let eventsList = "";
    console.log("check " + events)
    for (i in events) {

      eventsList += events[i].name + ", "
    }
    // this.$speech.addText("Joining these upcoming events " + eventsList);


    this.followUpState("DonateTimeState.Confirmation");

    this.$speech.addText("Would you like me to send you the email of these events?")

    return this.ask(this.$speech)


  },
  Confirmation: {

    YesIntent() {
      this.$speech.addText("That's great! You will receive an email associated with your google account to get more information about volunteering information.")
      this.$speech.addBreak("300ms");
      this.$speech.addText("Would you like to hear how else you can help or donate your money?")
      this.ask(this.$speech)

    },

    NoIntent() {
      this.ask("No problem!")
    }
  }


}