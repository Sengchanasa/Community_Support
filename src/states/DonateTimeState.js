const { getAllOrganizationEvents } = require("../api");

module.exports = {
  DonateTimeIntent(){
    let communityName;
    let input = this.$inputs.communityName.value;
    
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
      this.$session.$data.previousIntent = "DonateTimeIntent";
      //Prompt for community name

      return this.ask("What is the name of the community you want to support, black or asian?")

    }

    
    this.$speech.addText(`You can donate your time to the ${communityName} community by `);
    let events = getAllOrganizationEvents(communityName);
    let eventsList="";
    console.log("check " + events)
    for (i in events){

      eventsList += events[i].name + ", "
    }
    this.$speech.addText("Joining these upcoming events " + eventsList);


    this.followUpState("DonateTimeState.Confirmation");

    this.$speech.addText("Would you like me to send you the email of these events?")
    
    return this.ask(this.$speech)


  }, 
  Confirmation:{

    YesIntent(){
      this.toStateIntent("WelcomeState", "WelcomeIntent")
   
    },

    NoIntent(){
      this.ask("No problem!")
    }
  }


}