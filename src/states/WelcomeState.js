module.exports = {
 
    WelcomeIntent() {

    this.followUpState('WelcomeState.Confirmation')

    const organization = api.getAllOrganizations()

    this.ask(`We have several different communities in which you can support them as.
      You can support BLM communities
      You can support the Asian Communities
      Which community would you like to support?${organization}`);

  },

  Confirmation: {
    YesIntent() {

      this.ask(`We support a select number of different ${this.$inputs.community.value} organizations.\ 
        Here are the current different organizations we support.\
        ${organization}\
        What organization would you like to donate your time to?`);

    }
  }
}