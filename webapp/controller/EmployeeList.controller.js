sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/core/Fragment"
], function (BaseController, Fragment) {
	"use strict";

	return BaseController.extend("sap.ui.core.mvc.controller.EmployeeList", {

		onListItemPressed: function (oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("employee", {
				employeeId: oCtx.getProperty("EmployeeID")
			});

		},

		onListItemPressedDialog: function (oEvent) {
			var oView = this.getView();

			if (!this.byId("EmployeeDialog")) {
				Fragment.load({
					id: oView.getId(),
					name: "sap.ui.demo.nav.view.dialogs.EmployeeDialog"
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("EmployeeDialog").open();
			}
		}
	});

});