

(function () {
    
    
    tt.Issue = Backbone.Model.extend({
        
        urlRoot: "https://api.github.com/repos/madrobby/zepto/issues",
        
        defaults: {
            number: 1,
            title: "Default Title",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            user: {
                login: "Nobody"
            }
        },
        
        idAttribute: "number"
        
    });
    
    
    
})();
