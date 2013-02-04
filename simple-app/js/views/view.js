

(function () {
    
    tt.View = Backbone.View.extend({
        
        tagName: "div",
        className: "issue",
        
        
        
        
        
        initialize: function (options) {
            
            this.template = _.template(tt.singleItemTemplate);
            
            this.model.on("change", this.render, this);
        },
        
        
        
        
        
        render: function () {
            var attributes, output;
            
            attributes = this.model.toJSON();
            output = this.template(attributes);
            
            this.$el.html(output);
            
            $("body").html(this.$el);
            
            return this;
        }
        
        
    });
    
    
})();