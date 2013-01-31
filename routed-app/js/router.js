

(function () {
    
    
    
    tt.Router = Backbone.Router.extend({
    
        // define the possible routes, most specific on top
        routes: {
            "issue/:number" : "showIssue",
            "*path"         : "showAll"
        },
        
        
        
        showIssue: function (number) {
            var model;
            this.issueView && this.issueView.off();
            
            
            model = new tt.Issue({
                number: number
            });
            model.fetch();
            
            
            this.issueView = new tt.View({
                model: model
            });
        },
        
        
        
        
        showAll: function () {
            this.issuesView && this.issuesView.off();
            
            
            this.issuesView = new tt.IssuesView({
                collection: new tt.Issues()
            });
            
            window["test"] = this.issuesView.collection;
            this.issuesView.collection.fetch();
        }
        
    });
    
    
    
})();
