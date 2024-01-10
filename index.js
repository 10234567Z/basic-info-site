const express = require('express')
const fs = require('node:fs')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

app.get('/about', (req, res) => {
    fs.readFile('about.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

app.get('/contact-me', (req, res) => {
    fs.readFile('contact-me.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})


app.all('*' , (req , res)=> {
    fs.readFile('404.html', 'utf-8', (err, edata) => {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(edata)
        return res.end()
    })
})

app.listen(port, function () {})