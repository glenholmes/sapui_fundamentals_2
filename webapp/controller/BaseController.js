sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/routing/History",
		"sap/ui/core/UIComponent"
	],
	function (Controller, History, UIComponent) {

		return Controller.extend("sap.ui.demo.nav.controller.BaseController", {
			getRouter: function () {
				return UIComponent.getRouterFor(this);
			},

			onNavBack: function () {
				var oHistory, sPreviousHash;

				oHistory = History.getInstance();
				sPreviousHash = oHistory.getPreviousHash();

				if (sPreviousHash) {
					this.getRouter().navTo("appHome", {}, true);
				} else {
					window.history.go(-1);
				}
			}

		});

	});