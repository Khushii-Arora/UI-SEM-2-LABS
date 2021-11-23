//dont delete
//supports css js and img

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 8888;

    var formidable = require('formidable');
    const nodemailer = require('nodemailer');

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'extraaID379@gmail.com',
            pass: '12345_khushi'
        }
    });
      
    let mailDetails = {
        from: 'extraaID379@gmail.com',
      to: 'akhushi72@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'You have received a mail from Khushi Arora!!'
    };


http.createServer(function(req, res) {

  var uri = url.parse(req.url).pathname
    , filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }


    



    if (fs.statSync(filename).isDirectory()) filename += './index.html';

    fs.readFile(filename, "binary", function(err, data) {


        // if (request.url == '/fileupload') {
        //     var form = new formidable.IncomingForm();
        //     form.parse(request, function (err, fields, files) {
        //       var oldpath = files.filetoupload.filepath;
        //       var newpath = 'C:\Users\Khushi' + files.filetoupload.originalFilename;
        //       fs.rename(oldpath, newpath, function (err) {
        //         if (err) throw err;
        //         response.write('File Uploaded');
        //         response.end();
        //       });
        //  });} 


    //   if(err) {        
    //     res.writeHead(500, {"Content-Type": "text/plain"});
    //     res.write(err + "\n");
    //     res.end();
    //     return;
    //   }
      if(err){
        return console.error(err);
    }
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = files.filetoupload.filepath;
          var newpath = 'C:\Users\Khushi' + files.filetoupload.originalFilename;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File Uploaded');
            res.end();
          });
     });} 
     
     
     else{
         if(req.url=='/FORM.html'){
            fs.readFile('FORM.html',function(err2,data2){
                if(err){
                    return console.error(err2);
                }
                else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data2);            
                    return res.end();
                }

            });
        }
        else{
            if(req.url=='/casestudy.html'){
                fs.readFile('casestudy.html',function(err1,data1){
                    if(err){
                        return console.error(err1);
                    }
                    else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data1);            
                        return res.end();
                    }

                });
            }

            else{
                if(req.url=='/contact.html'){
                    mailTransporter.sendMail(mailDetails, function(err, data) {
                        if(err) {
                            console.log('Error Occurs',err);
                        } else {
                            console.log('Email sent successfully');
                            return res.end();
                        }
                    });
                }

                else{
                    if(req.url=='/Cal.html'){
                        fs.readFile('C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/LAB-3/Q6.html',function(err1,data1){
                            if(err){
                                return console.error(err1);
                            }
                            else {
                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(data1);            
                                return res.end();
                            }
    
                        });
                    }

                    else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data, "binary");            
                        return res.end();
                    }
                }

                
            }
        }
     }
     

    //   response.writeHead(200);
    //   response.write(data, "binary");
    //   response.end();
      
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");