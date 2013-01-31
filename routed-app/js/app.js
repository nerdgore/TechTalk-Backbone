

(function(){
    
    
    // tech talk namespace
    var tt = {};
    window["tt"] = tt;
    
    
    
    
    // setp application code
    tt.initialize = function () {
        tt.appRouter = new tt.Router();
        Backbone.history.start({root: "/"});
        
        
        // var issues, view;
        // 
        // // init issues collection
        // issues = new tt.Issues();
        // issues.fetch();
        // 
        // 
        // // init collection view
        // view = new tt.IssuesView({
        //     collection: issues
        // });
        
        
    };
    
    
    $(tt.initialize);
    
    
})();










