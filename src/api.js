const resources = require("./data/resources.json")
// const util = require("./util")
//console.log("hello world")

//console.log(getAllOrganizations("blackCommunity"))
   module.exports = {getAllOrganizations, getAllOrganizationEvents}

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
        let ret = [];
        for(i in resources[community].organizations) {
            ret.push(resources[community].organizations[i].name + " ");
        }
        console.log(ret)
        return addAnd(ret);
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
        console.log(" getAllOrganizationEvents" +community)
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




    function  addAnd (list) {
        list = list.filter(Boolean);
        var numberOfItems = list.length;
    
        if (numberOfItems == 0) {
        return "";
        }
    
        var ret = "";
    
        for (var i = 0; i < numberOfItems; i++) {
        ret = ret + " ";
        if (i == numberOfItems - 2 && !(numberOfItems <= 1)) {
            ret = ret + list[i] + ", and";
        } else if (numberOfItems > 1 && i != numberOfItems - 1) {
            ret = ret + list[i] + ",";
        } else {
            ret = ret + list[i];
        }
        }
    
        return ret.trim();
    }
    
