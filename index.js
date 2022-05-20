const http = require('http')
const fs = require('fs')
const newRoommate = require('./roommates')
const enviar = require('./email')

const server = http.createServer(async (req, res)  => {
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html')
        res.end(fs.readFileSync('./index.html', 'utf-8'))
    }

    if (req.url.startsWith('/roommate') && req.method === 'POST') {
        const roommate = await newRoommate()
        roommate.push   
        console.log(roommate)

        res.setHeader('Content-Type', 'application/json')
        fs.readFileSync('roommates.json')
        fs.writeFileSync('roommates.json', JSON.stringify(roommate))
        res.end(JSON.stringify({ url: req.url, method: req.method }))

    }

    if (req.url.startsWith('/roommates') && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ url: req.url, method: req.method }))
    }

    if (req.url.startsWith('/gastos') && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ url: req.url, method: req.method }))
    }

    if (req.url.startsWith('/gasto') && req.method === 'PUT') {
        let body = ""
        req.on('data', (chunk) => {
            body = chunk.toString()
        })
        req.on('end', () => {
            console.log(body)
            const bodyJson = JSON.parse(body)
            console.log(bodyJson)
        })
    }

    if (req.url.startsWith('/gasto') && req.method == "DELETE") { // Preguntar por metodo delete
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ url: req.url, method: req.method }))
    }

    /* 
    if (req.url.startsWith("/gasto") && req.method == "DELETE") {
            const { id } = url.parse(req.url, true).query;

            const gasto = gastos.filter(gasto => gasto.id === id);
            // Paso 4           
            bicicletasJSON.bicicletas = bicicletas.filter((b) => b.id !== id);
            // Paso 5
            fs.writeFileSync("Bicicletas.json",
                JSON.stringify(bicicletasJSON));
            res.end();
    
    */




    /* MAILING 
    if (req.url.startsWith('/mailing')) {
            const {  } = await getData()
            const mensaje = contenido + `
            <p>El valor del dólar el día de hoy es: ${dolar}</p><br>
            `
            enviar(correos.split(','), asunto, mensaje).then(()=>{
                fs.writeFile(`${uuid.v4()}.txt`, `${correos.split(',')}\n ${asunto}\n ${mensaje}`, 'utf-8', () => {
                    res.end('Se han enviado los correos exitosamente. Para confirmar, revise su bandeja de entrada.')
                })
            }).catch(() => {
                res.end('No se han podido enviar los correos. Verifique los datos e inténtelo nuevamente.')
            })
    
    */





})

server.listen(3000, console.log('Server on at port 3000'))
