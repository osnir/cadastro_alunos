function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT32_69_OVLY_APP_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}