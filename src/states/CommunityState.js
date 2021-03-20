module.exports = {
    CommunityIntent() {
        let input = this.$inputs.communityName.value;
        this.$session.$data.communityName = input;

        this.ask(`Would you like to donate or would you like to learn how to help the\
            ${input} community`)
    }
}