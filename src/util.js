
//adds and in between lists
module.export = {
    addAnd = (list) => {
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
    },
    
    //adds ors between lists
    addOr = (list) => {
        list = list.filter(Boolean);
        let numberOfItems = list.length;
    
        if (numberOfItems == 0) {
        return "";
        }
    
        let ret = "";
    
        for (var i = 0; i < numberOfItems; i++) {
        ret = ret + " ";
        if (i == numberOfItems - 2 && !(numberOfItems <= 1)) {
            ret = ret + list[i] + ", or";
        } else if (numberOfItems > 1 && i != numberOfItems - 1) {
            ret = ret + list[i] + ",";
        } else {
            ret = ret + list[i];
        }
        }
    
        return ret.trim();
    }
}