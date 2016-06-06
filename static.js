// module.exports = {

//   static_contents: function (request,response) {

//     response.writeHead(200, {'Content-type': 'text/html'});
//     console.log('Request', request.url);
//       if(request.url === '/') {

//         fs.readFile('views/index.html', 'utf8', function (errors, contents){
//           response.write(contents); 
//           response.end();

//         });
//       } 

//       else if(request.url === '/dojo.html')  {

//         fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
//           response.write(contents);
//           response.end();
        
//         });
//       } 

//       else if(request.url === '/stylesheet/style.css') {

//         fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents){
//           response.write(contents);
//           response.end();
        
//         });
//       } 

//       else {
        
//           response.end('File not found!!!');
      
//       };
//   };
// };

var fs = request('fs');
var path = request('path');

module.exports = function (request,response) {

    fs.exists('.' + request.url, function(exists) {

        if(exists) {

          if(request.url === '/') {

              fs.readFile('./views/index.html', 'utf8',  function(errors,contents) {

                response.write(contents);
                response.end();
              });
          }

          else {

              fs.readFile('.', + path.dirname(request.url) + '/' + path.basename(request.url), function(errors, contents)  {

                  response.write(contents);
                  response.end();
              });
          }

        }

        else {

          response.end('File not Found!!!');
        }

    });
}


