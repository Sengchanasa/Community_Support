const { Collection } = require("jovo-platform-googleassistant/dist/src/response/Collection");
const { getAllOrganizations } = require("../api");

module.exports = {

  DonateMoneyIntent(){

    let communityName;
    let input = this.$inputs.communityName;

    
    // if (input != null){
    //   console.log("in if")
    //   communityName = input;
    // }else if(this.$session.$data.communityName != null) {
    //   console.log("in if else")
    //   communityName = this.$session.$data.communityName;
    //   console.log( "check inside else if"+JSON.stringify( this.$session.$data))


    // }

    if (input == null) {
      communityName = this.$session.$data.communityName;
      console.log("check inside else if" + JSON.stringify(this.$session.$data))
    } else if (input != null) {
      communityName = input.value;
    }
    //Get commuinities if there no session data or input
    else{
      console.log("in else")
       // create 2 session variables
      this.$session.$data.previousState = this.getState();
      this.$session.$data.previousIntent = "DonateMoneyIntent";
      //Prompt for community name


      return this.ask("Which community do you wish to donate to, the Black or the Asian community?")

    }

    if(!communityName){
      console.log("error")
      console.log(JSON.stringify(this.$inputs))
      console.log(JSON.stringify(this.$session.$data.communityName))
    }
    console.log()
    let community = communityName == "blackCommunity" ? "Black" : "Asian"

    this.$speech.addText(`We can help the ${community} community by donating collectively to the following organizations`);
    this.$speech.addBreak("500ms")
    //console.log(getAllOrganizations("asianCommunity"))
    this.$speech.addText(getAllOrganizations(communityName));
    this.$speech.addText(". Would you like to donate to an organization?")
    this.followUpState("DonateMoneyState.Confirmation");
    this.$session.$data.previousState = this.getState();
    this.$session.$data.previousIntent = "DonateMoneyIntent";
    return this.ask(this.$speech);
  },
  Confirmation:{

    YesIntent(){

      this.$speech.addText("That's great! You will receive an email associated with your Google Account to complete the donation transaction using Clover.")
      this.$speech.addBreak("300ms");
      this.$speech.addText("Would you like to hear how else you can help or donate your time?")
      this.ask(this.$speech)

      // this.toStateIntent("WelcomeState", "WelcomeIntent")
   
    },

    NoIntent(){
      this.ask("Next time then!")
    }
  }

}