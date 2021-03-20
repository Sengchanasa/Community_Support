const resources = require("./data/resources.json")

module.exports = {
    getAllOrganizations() {
        let ret = "";
        for(i in resources.organizations) {
            ret = ret + resources.organizations[i].name + " Movement, or ";
        }
        return ret;
    }
}

