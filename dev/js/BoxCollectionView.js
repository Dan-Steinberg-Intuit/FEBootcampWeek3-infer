define(["BoxModel", "BoxView"], function(BoxModel, BoxView) {

	var BoxCollectionView = Backbone.View.extend({
		el: ".cta-boxes-target",

		removeAllViews: function() {
			_.each(Backbone.subviews, function(subview) {
				subview.remove();
			});
		},

		render: function() {
			this.collection.each(function(modelItem) {
				var boxSubview = new BoxView({model: modelItem});
				Backbone.subviews.push(boxSubview);
				this.$el.append(boxSubview.render().el);
			}, this);
			return this;
		}

	});

	return BoxCollectionView;
});