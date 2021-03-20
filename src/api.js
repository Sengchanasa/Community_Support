const resources = require("./data/resources.json")
//console.log("hello world")

//console.log(getAllOrganizations("blackCommunity"))
   // module.exports = {getAllOrganizations}

    //Gets organization name in database app currently supports
    function getOrganization(community, organization) {
        for(i in resources[community].organizations) {
            if (resources[community].organizations[i].name==organization) {
                return resources[community].organizations[i];
            }
        }
        //console.log("Cannot find event")
        //console.log(community + "|"+ organizations)
    }
    
    //Gets all organizations in database app currently supports
    function getAllOrganizations(community) {
        console.log("inside get all org names: " + community)
        console.log(JSON.stringify(resources[community]))
        let ret = "";
        for(i in resources[community].organizations) {
            ret = ret + resources[community].organizations[i].name + " ";
        }
        return ret;
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

    //Gets events that organization[organization] is in
    function getOrganizationEvent(community, organization) { 
        //console.log(JSON.stringify(getOrganization(community, organization)))
        return getOrganization(community, organization).events;
    }

    //Gets all events that organization[organization] is in
    function getAllOrganizationEvents(community) {
        //console.log(community)
        let hash = {}
        let ret = []
        for (l in resources[community].organizations) {
            //console.log("here")
            //console.log(JSON.stringify(resources[community].organizations[l].events))
            for(i in resources[community].organizations[l].events) {
                
                //console.log(resources[community].organizations[l])
                let event = getOrganizationEvent(community, resources[community].organizations[l].name)
                ret.push(event)
                hash[event.name] = event
            }
        }
        return hash
    }

    //Gets community book Title
    function getTitle(community, title) {
        //console.log(JSON.stringify(title))
        for(i in resources[community].books) {
            if (resources[community].books[i].title==title) {
                return resources[community].books[i];
            }
        }
    }

    //Gets all books for community
    // function getAllCommunityBookTitles(community) {
        
    //     let ret = ""

    //     for(i in resources[community].books) {
    //         ret = ret + getTitle(community, resources[community].books[i].title) + " ";
    //     }
    //     return "[ " + ret + "]";
    // }
