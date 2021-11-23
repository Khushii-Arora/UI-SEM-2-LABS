//dont delete
//file upload works 
//hosts multi file
//doesnt support css js or pics

var app = require('http').createServer(createServer);var formidable = require('formidable');
const nodemailer = require('nodemailer');
var fs = require('fs');
var url = require('url');



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
  

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(err,data){

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
                if(req.url=='/CaseStudy.html'){
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
                        if(req.url=='/Calculator.html'){
                            fs.readFile('./Calculator.html',function(err1,data1){
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
                            if(req.url=='/Blog.html'){
                                fs.readFile('./Blog.html',function(err0,data0){
                                    if(err){
                                        return console.error(err0);
                                    }
                                    else {
                                        res.writeHead(200, {'Content-Type': 'text/html'});
                                        res.write(data0);            
                                        return res.end();
                                    }
            
                                });
                            }

                            else {
                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(data);            
                                return res.end();
                            }
                        }

                       
                    }

                    
                }
            }
         }
         

         

         

    };


    switch(path) {
        case '/Calculator.html':
            doc = fs.readFile(__dirname + '/Calculator.html', fsCallback);
        break;

        case '/CaseStudy.html':
            doc = fs.readFile(__dirname + '/CaseStudy.html', fsCallback);
        break;

        case '/Blog.html':
            doc = fs.readFile(__dirname + '/Blog.html', fsCallback);
        break;

        default:
            doc = fs.readFile(__dirname + '/index.html', fsCallback);
        break;
    }


    console.log(req.url);
  }
  app.listen(8080);