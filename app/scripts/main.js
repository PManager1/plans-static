console.log('\'Allo \'Allo!');




function selectedPlan () {
  console.log(' calling fun Selected Plan');
}



$('.bg-primary-green').click(function() {
  
  var couponCode = "a"; 
  var promoCode = "b";   

  selectedPlan(couponCode, promoCode); 

  alert( "Handler for .click() called." );
});