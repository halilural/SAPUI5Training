sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("HelloWorld.controller.View1", {

		// View oluşmadan önce tetiklenen metoddur.
		onInit: function () {
		//	alert('OnInit triggered!');
		},

		// View görüntüsü oluşmadan önce tetiklenen metoddur.
		onBeforeRendering: function () {
		//	alert('onBeforeRendering triggered!');
		},

		// View görüntüsü oluştuktan sonra tetiklenen metoddur.
		onAfterRendering: function () {
		//	alert('onAfterRendering triggered!');
		}

	});

});