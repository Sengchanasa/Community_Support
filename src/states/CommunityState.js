module.exports = {
    CommunityIntent() {
        let input = this.$inputs.communityName.value;
        this.$session.$data.communityName = input;

        //If 
        let previousIntent = this.$session.$data.previousIntent;
        let previousState = this.$session.$data.previousState;
        if(previousIntent !=null && previousState != null){
            this.$session.$data.previousState = null;
            this.$session.$data.previousIntent = null;
            return this.toStateIntent(previousState, previousIntent)
        }

        let community = input == "blackCommunity" ? "African American" : "Asian"

        this.ask(`Would you like to donate or would you like to learn how to help the\
            ${community} community`)
    }
}