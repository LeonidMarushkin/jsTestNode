import express from "express";
import fs from 'fs/promises';

const srv = express();
srv.get('/index.html', async (req, res) =>{
    const indexPage = await fs.readFile('./index.html');
    res.send(indexPage.toString());
})

srv.get('/goods', async (req, res) =>{
    const goods = await fs.readFile('./goods.json');
    res.send(goods.toString());
})

srv.listen(10001, ()=>{
    console.log('Server online');
})