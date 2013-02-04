

(function () {
    
    tt.Issues = Backbone.Collection.extend({
        // model
        model: tt.Issue,
        
        url: "https://api.github.com/repos/madrobby/zepto/issues"
        
    });
    
})();
