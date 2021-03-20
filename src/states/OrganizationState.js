
module.export = {
    OrganizationIntent() {
        console.log("at beginning org")
        let input = this.$inputs.organizationName.value;
        this.$session.$data.organizationName = input;
        console.log(input)
        let previousIntent = this.$session.$data.previousIntent;
        let previousState = this.$session.$data.previousState;
        console.log(previousIntent)
        console.log(previousState)
        if(previousIntent !=null && previousState != null){
            this.$session.$data.previousState = null;
            this.$session.$data.previousIntent = null;
            return this.toStateIntent(previousState, previousIntent)
        }

        this.ask(`Would you like to donate to donate your time or money to ${input}?`)
    }
}