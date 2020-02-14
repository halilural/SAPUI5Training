sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox",
	'sap/m/Button',
	'sap/m/Dialog',
	'sap/m/StandardListItem',
	'sap/m/List'
], function (Controller, JSONModel, MessageBox, Button, Dialog, StandardListItem, List) {
	"use strict";

	return Controller.extend("HelloWorld.controller.Anasayfa", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf HelloWorld.view.Anasayfa
		 */
		onInit: function () {

			var oJsonData = {
				WelcomeTitleTxt: "Hoşgeldiniz!",
				Products: [{
					MalzemeNo: "1000",
					MalzemeTxt: "Elma",
					MalzemeTur: "Meyve"
				}, {
					MalzemeNo: "2000",
					MalzemeTxt: "Patlıcan",
					MalzemeTur: "Sebze"
				}, {
					MalzemeNo: "3000",
					MalzemeTxt: "Kabak",
					MalzemeTur: "Sebze"
				}],
				Entry: ""
			};

			var oViewModel = new JSONModel(oJsonData);
			this.getView().setModel(oViewModel, "ViewModel");

			var oDataModel = this.getView().getModel();
			var oViewModel = this.getView().getModel("ViewModel");

			var oPanel = this.getView().byId("Panel1");
			oPanel.addStyleClass('sapUiResponsiveMargin');

		},

		onValidatePress: function () {

			debugger;

			var sEntry = this.getView().getModel("ViewModel").getProperty("/Entry");
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

			if (isNaN(sEntry)) {

				MessageBox.error(
					sEntry + " is not a number", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);

			} else {

				MessageBox.success(
					sEntry + " is a number", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			}

		},

		onDialogOpenPress: function () {

			debugger;

			if (!this.pressDialog) {
				this.pressDialog = new Dialog({
					title: 'Available Products',
					content: new List({
						items: {
							path: 'ViewModel>/Products',
							template: new StandardListItem({
								title: "{ViewModel>MalzemeNo}",
								counter: "{ViewModel>MalzemeTxt}"
							})
						}
					}),
					beginButton: new Button({
						text: 'Close',
						press: function () {
							this.pressDialog.close();
						}.bind(this)
					})
				});

				//to get access to the global model
				this.getView().addDependent(this.pressDialog);
			}

			this.pressDialog.open();

		},

		onFragmentOpenPress: function () {

			debugger;

			var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "HelloWorld.fragment.HelloDialog");
				oView.addDependent(oDialog);
			}

			oDialog.open();

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf HelloWorld.view.Anasayfa
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf HelloWorld.view.Anasayfa
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf HelloWorld.view.Anasayfa
		 */
		//	onExit: function() {
		//
		//	}

	});

});