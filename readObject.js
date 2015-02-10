/**
 * Created by alexfeng on 1/8/15.
 */

/*$http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22sunnyvale%2C%20ca%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').success(function(data){
 //readObject(data.query.results.channel.title);

 for(var prop in data.query.results.channel){
 if(typeof data.query.results.channel[prop] !== 'object') {
 console.log(prop + ' --> ' + data.query.results.channel[prop]);
 }
 else{
 console.log(prop + ' --> ');
 for(var attr in data.query.results.channel[prop]){
 console.log('    ' + attr + ' -----> ' + data.query.results.channel[prop][attr]);
 }
 }
 }
 $scope.data = data;
 });*/
function readObject(object,numOfSpaces){
    var space = '';

    numOfSpaces = numOfSpaces || 0;

    for(var i = 0; i < numOfSpaces;i++){
        space += '   ';
    }

    for(var prop in object){
        if(typeof object[prop] !== 'object') {
            console.log(space + prop + ' --> ' + object[prop]);
        }
        else{
            readObject(object[prop],numOfSpaces++);
        }
    }
}