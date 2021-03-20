//const resources = require("./data/resources.json")

module.exports = {

  LifestyleChangeIntent(){
    
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
      this.$session.$data.previousIntent = "LifestyleChangeIntent";
      //Prompt for community name


      return this.ask("What is the name of the community you want to support, black or asian?")

    }

   

    this.$speech.addText(`You can to help the ${communityName} by `);
    this.$speech.addText(["read more books", "teach your children", "talk to your asian friends"]);
      this.followUpState("LifestyleChangeState.Confirmation");
    this.$speech.addText("Would you like to donate to an organization?")

    
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