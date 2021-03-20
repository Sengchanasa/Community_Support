'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');


//------------------Import external intents--------------------------
const WelcomeState = require('./states/WelcomeState');
const CommunityState = require('./states/CommunityState');
const OrganizationState = require('./states/OrganizationState');
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
  CommunityState,
  OrganizationState,
  DonateTimeState,
  DonateMoneyState,
  LifestyleChangeState,
  StoryState,
  LAUNCH() {
    return this.toIntent('WelcomeIntent');
  },

  WelcomeIntent(){
    this.toStateIntent("WelcomeState", "WelcomeIntent")
  },

  CommunityIntent() {
    this.toStateIntent("CommunityState", "CommunityIntent")
  },

  OrganizationIntent() {
    //console.log("app.js")
    this.toStateIntent("OrganizationState", "OrganizationIntent")
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

  CurrentEventIntent() {
    this.$session.$data.communityName = 'asianCommunity';
    this.$speech.addText("This is what's going on recently in Asian community.")
    this.$speech.addText(['On this lunar new year, several Asian restaurants in Howard County were looted and  burglarized. This is a coward act of racism against the Asian community.', 'Hate crimes against Asians have surged during the pandemic. On March 17, there was six of the eight victims killed in recent shootings in Atlanta identified as of Asian descent.']);
    this.$speech.addBreak("500ms")

    this.$speech.addText("Would you like to donate help fight this issue or find out ways you can help to stop the hate?")

    return this.ask(this.$speech);
    
  },

});




// ------------------------------------------------------------------
module.exports = { app };
