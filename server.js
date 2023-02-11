const express = require('express')
const app = express()
const PORT = 8000

const projects = {
    'portfolio': {
        'name': 'Portfolio Website',
        'description': 'A website to showcase my portfolio of completed projects',
        'link': 'https://arturmotin.netlify.app',
        'github': 'https://github.com/Krisalord/Portfolio'
    },
    'portfolioAPI': {
        'name': 'Portfolio API',
        'description': 'This is my first custom API that was created to host app projects for portfolio',
        'link': '',
        'github': ''
    },
    'ecommerce': {
        'name': 'E-commerce Website',
        'description': 'An online store template',
        'link': 'https://arturmotinecom.netlify.app',
        'github': 'https://github.com/Krisalord/EcommerceWebsite'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:projectName', (request, response)=>{
    const projectName = request.params.projectName.toLowerCase()
    if(projects[projectName]){
        response.json(projects[projectName])
    }
    else{
        response.json(projects['portfolio'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})