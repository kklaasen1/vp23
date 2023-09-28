const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Karmen Klaasen, veebiprogrammeerimine 2023</title></head><body>');
		res.write('<img src="banner.png" alt="Kursuse bänner">');
		res.write('<h1>Karmen Klaasen</h1><p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudi informaatika eriala õppetöö raames.</p>');
		res.write('<hr></body></html>');
		console.log("Keegi vaatab");
	}
	else if (currentURL.pathname === "/banner.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});
	}
	//valmis, saada ära
	return res.end();
}).listen(5122);