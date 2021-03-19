'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');


//------------------Import external intents--------------------------
const DonateTimeState = require('./states/DonatetimeState');



//-------------------------------------------------------------------




// --------------------APP-INITIALIZATION----------------------------

const app = new App();

// ------------------------------------------------------------------



app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb()
);

// ----------------------------APP LOGIC-----------------------------
// test

app.setHandler({
  DonateTimeState,
  LAUNCH() {
    return this.toIntent('HelloWorldIntent');
  },

  DonateTimeIntent(){
    this.toStateIntent("DonateTimeState", "DonateTimeIntent")
  },

  HelloWorldIntent() {
    this.ask("Hello World! What's your name?", 'Please tell me your name.');
  },

  MyNameIsIntent() {
    this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
  },
});




// ------------------------------------------------------------------
module.exports = { app };
