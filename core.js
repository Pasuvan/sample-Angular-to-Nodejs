app.controller('two_way_control',function($scope,$http,$interval){
//load_pictures();
/*$interval(function(){
load_pictures();
},1000*50);
*/


$http({
  method: 'POST',
  url: 'http://localhost:8084/load',
//url:'http://128.199.101.112/securitysystem/index.php/v1/getdeviceinfo',
headers: {
   'Content-Type':'application/json'
 }
// data: { id: '1' }

}).then(function successCallback(response) {console.log(response);
    // this callback will be called asynchronously
    // when the response is available
$scope.profile_pictures=response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

/*function load_pictures(){
$http.post('http://localhost:8084/load').success(function(data){
//data.profile_pictures	= 'b9412b267b322753ecc8bf0419625b20_1457180112.gif'
$scope.profile_pictures=data;

});
};*/

/*$scope.myFunction = function( requestData ) {
	console.log('1'+requestData);
        $('#number').html('<input type="text" id="'+requestData+'" value="'+requestData+'" ng-dblclick="myFunction('+requestData+');">');
    };
$scope.myFunction1 = function( requestData ) {
	$('#number').html('<p style="padding:10px;" ng-model="confirmed" id="'+requestData+'" ng-dblclick="myFunction(data.phone);">');
	console.log('');
    };*/

});
