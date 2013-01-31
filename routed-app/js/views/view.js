

(function () {
    
    tt.View = Backbone.View.extend({
        
        className: "issue",
        tagName: "div",
        
        
        
        
        
        initialize: function (options) {
            console.log("View:::", this.model)
            this.id = "issue/" + this.model.get("id");
            this.template = _.template(tt.singleItemTemplate);
            
            this.model.on("change", this.render, this);
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