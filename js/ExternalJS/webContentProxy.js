webContentProxyObject = function(){
	// obtain input payload as link param
    this.getInputJsPayload = function(){
    	var queryString = window.location.search;
		var urlParams = new URLSearchParams(queryString);
		var inputJsDataPayload = urlParams.get('payload');
		return inputJsDataPayload;
    }

	// end web content and pass result payload
    this.closeWebContent = function( payload ){
    	//JavaScriptInterface leads to android API
    	JavaScriptInterface.closeWebContent( payload );
    }
}