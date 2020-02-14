/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PurchaseOrderSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/App",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/Browser",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/Master",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/Detail",
	"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.uralhalil.org.ExampleMasterDetailApplication.view."
	});

	sap.ui.require([
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/MasterJourney",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/NavigationJourney",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/NotFoundJourney",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/BusyJourney",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});