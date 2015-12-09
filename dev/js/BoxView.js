define(["BoxModel"], function(BoxModel) {

	var BoxView = Backbone.View.extend({
		template: _.template($("#cta-box-tpl").html()),

		events: {
			"click .remove" : "removeItem"
		},

		removeItem : function() {
			this.remove();			// "this" points to the element clicked on?
		},

		render: function() {
			var box_tpl = this.template(this.model.toJSON());
			this.$el.html(box_tpl);
			return this;
		}
	});

	return BoxView;
});