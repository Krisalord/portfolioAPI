const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const projects = {
    'portfolio': {
        'name': 'Portfolio Website',
        'description': 'A website to showcase my portfolio of completed projects',
        'languages': 'HTML, CSS, JavaScript',
        'link': 'https://arturmotin.netlify.app',
        'github': 'https://github.com/Krisalord/Portfolio'
    },
    'portfolioAPI': {
        'name': 'Portfolio API',
        'description': 'This is my first custom API that was created to host app projects for portfolio',
        'languages': 'JavaScript, nodeJS, Express',
        'link': 'https://github.com/Krisalord/portfolioAPI',
        'github': 'https://github.com/Krisalord/portfolioAPI'
    },
    'ecommerce': {
        'name': 'E-commerce Website',
        'description': 'An online store template',
        'languages': 'HTML, CSS, JavaScript',
        'link': 'https://arturmotinecom.netlify.app',
        'github': 'https://github.com/Krisalord/EcommerceWebsite'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(projects)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})