

(function () {
    
    tt.IssueView = Backbone.View.extend({
        
        className: "issue state",
        tagName: "li",
        
        
        
        
        
        initialize: function (options) {
            this.template = _.template(tt.listItemTemplate);
        },
        
        
        
        
        
        render: function () {
            var attributes, output;
            
            attributes = this.model.toJSON();
            output = this.template(attributes);
            
            this.$el.html(output);
            this.$el.attr("id", this.id);
            $("body").html(this.$el);
            
            return this;
        }
        
        
    });
    
    
})();
