'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');


//------------------Import external intents--------------------------
const WelcomeState = require('./states/WelcomeState');
const DonateTimeState = require('./states/DonatetimeState');
const DonateMoneyState = require('./states/DonateMoneyState');
const LifestyleChangeState = require('./states/LifestyleChangeState');
const StoryState = require('./states/StoryState');


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
  WelcomeState,
  DonateTimeState,
  DonateMoneyState,
  LifestyleChangeState,
  StoryState,
  LAUNCH() {
    return this.toIntent('HelloWorldIntent');
  },

  WelcomeIntent(){
    this.toStateIntent("WelcomeState", "WelcomeIntent")
  },

  DonateTimeIntent(){
    this.toStateIntent("DonateTimeState", "DonateTimeIntent")
  },
  DonateMoneyIntent(){
    this.toStateIntent("DonateMoneyState", "DonateMoneyIntent")
  },
  LifestyleChangeIntent(){
    this.toStateIntent("LifestyleChangeState", "LifestyleChangeIntent")
  },

  StoryIntent(){
    this.toStateIntent("StoryState", "StoryIntent")
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
