

(function(){
    
    // tech talk namespace
    var tt = {};
    window["tt"] = tt;
    
    
    
    
    
    
    // setp application code
    tt.initialize = function () {
        var issue, view;
        
        // instanciate the model [with a number]
        issue = new tt.Issue({
            number: 600
        });
        issue.fetch();
        
        
        // instanciate the view providing the model as option
        view = new tt.View({
            model: issue
        });
    };
    
    
    $(tt.initialize);
})();
