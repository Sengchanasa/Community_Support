const { getAllOrganizations } = require("../api");

module.exports = {

  DonateMoneyIntent(){

    let communityName;
    let input = this.$inputs.communityName.value;

    console.log("check first" +  JSON.stringify(this.$inputs))
    JSON.stringify(this.$inputs)
    if (input != null){
      communityName = input;
    }else if(this.$session.$data.communityName != null) {
      communityName = this.$session.$data.communityName;
      console.log( "check inside else if"+JSON.stringify( this.$session.$data))


    }
    //Get commuinities if there no session data or input
    else{
       // create 2 session variables
      this.$session.$data.previousState = this.getState();
      this.$session.$data.previousIntent = "DonateMoneyIntent";
      //Prompt for community name


      return this.ask("Which community do you wish to donate to, BLM community or Asian community?")

    }

    this.$speech.addText(`You can help the ${communityName} by donating to one of the following`);
    //console.log(getAllOrganizations("asianCommunity"))
    this.$speech.addText(getAllOrganizations(communityName));
    this.$speech.addText("Would you like to donate to an organization?")
    this.followUpState("DonateMoneyState.Confirmation");
    this.$session.$data.previousState = this.getState();
    this.$session.$data.previousIntent = "DonateMoneyIntent";
    return this.ask(this.$speech);
  },
  Confirmation:{

    YesIntent(){
      this.toStateIntent("WelcomeState", "WelcomeIntent")
   
    },

    NoIntent(){
      this.ask("Next time then!")
    }
  }

}