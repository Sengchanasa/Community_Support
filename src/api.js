const resources = require("./data/resources.json")
console.log("hello world")

console.log(getOrganization("blackCommunity"))
    module.exports = {getOrganization}

    //Gets organization name in database app currently supports
    function getOrganization(community, organization) {
        for(i in resources[community].organizations) {
            if (resources[community].organizations[i].name==organization) {
                return resources[community].organizations[i];
            }
        }
    }
    
    //Gets all organizations in database app currently supports
    function getAllOrganizations(community) {
        //console.log("inside get all org names")
        let ret = "";
        for(i in resources[community].organizations) {
            ret = ret + resources[community].organizations[i].name + " ";
        }
        return "[ " + ret + "]";
    }

    //Gets the description for an organization.
    function getOrganizationDescription(community, organization) {
        let org = getOrganization(community, organization)

        //console.log(JSON.stringify(name))
        return  org.name + ": " + org.description;
    }

    //Gets all handles that organization[organization] is in
    function getOrganizationHandles(community, organization) {
        let org = getOrganization(community, organization)
        let ret = ""
        for(i in org.handle) {
            ret = ret + org.handle[i] + " ";
        }
        return "[ " + ret + "]";
    }

