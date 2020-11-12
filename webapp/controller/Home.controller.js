sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.core.mvc.controller.Home", {

		onDisplayNotFound: function () {
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},

		onNavToEmployees: function () {
			this.getRouter().navTo("employeeList");
		}

	});

});