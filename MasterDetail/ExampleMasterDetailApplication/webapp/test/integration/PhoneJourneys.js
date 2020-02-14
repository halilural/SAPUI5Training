/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/NavigationJourneyPhone",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/NotFoundJourneyPhone",
		"com/uralhalil/org/ExampleMasterDetailApplication/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});