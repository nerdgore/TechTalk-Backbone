

(function () {
    
    tt.IssuesView = Backbone.View.extend({
        
        className: "issues",
        tagName: "ul",
        
        
        
        
        
        initialize: function (options) {
            this.collection.on("sync", this.render, this);
        },
        
        
        
        
        
        render: function () {
            var output, that;
            that = this;
            
            
            this.collection.each(function (model) {
                var view = that.viewForItem(model);
                view.render();
                that.$el.append(view.$el);
            });
            
            
            
            $("body").html(this.$el);
            
            return this;
        },
        
        
        
        // ===========
        // = Helpers =
        // ===========
        
        viewForItem: function (model) {
            return new tt.IssueView({
                model: model
            });
        }
        
        
    });
    
    
})();
