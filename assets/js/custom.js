var productData;
var activeIndex;
function fnMouseOver(index){
	if(activeIndex == undefined){
		$(".hero-container").removeClass("hide");
	}
	if(activeIndex != index){
		$(".hero-container>.inner-tile").html("");
		console.log(productData.ProductsList[index]);
		activeIndex = index;
		var strHtml = "<div class='small-3'>";    				
    strHtml += "<img width='100%' src="+productData.ProductsList[index].imageURLs.lg+" alt='Icon' />";
    strHtml += "</div><div class='small-6 middle-container'>";    				
    strHtml += "<div class='space'>"+productData.ProductsList[index].ProductInfo.p_product_description+"</div><ul class='list'>";
    for(var j=0;j<productData.ProductsList[index].ProductInfo.p_product_bullets_json.Value.length;j++){
    	strHtml += "<li>"+productData.ProductsList[index].ProductInfo.p_product_bullets_json.Value[j]+"</li>";
    }				
    strHtml += "</ul></div><div class='small-3 text-center'><button class='button space-button' type='button'> Add to Cart</button>";
    strHtml += "<div class='price'>$"+productData.ProductsList[index].ProductInfo.p_product_price+".00</div></div>";
    $(".hero-container>.inner-tile").append(strHtml);
	}	
}
$.get( "http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703", function( data ) {
  productData = data;
  for(var i=0;i<productData.ProductsList.length;i++){
  	var strHtml = "<div class='tile'>";
  	strHtml += "<div class='inner-tile' onmouseover='fnMouseOver("+i+")'>";
  	strHtml += "<img class='space' src='"+productData.ProductsList[i].imageURLs.sm+"' alt='Icon' />";
    strHtml += "<div class='space'>"+productData.ProductsList[i].ProductInfo.p_product_description+"</div>";
    strHtml += "<div class='space price'>$"+productData.ProductsList[i].ProductInfo.p_product_price+".00</div>";
    strHtml += "<button type='button' class='button'> View More</button>";
    strHtml += "</div></div>";
    $(".tiles").append(strHtml);
  }
});