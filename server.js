const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
app.get('/',(req,res) => {
    res.send(`<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>THis is my server</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate necessitatibus autem exercitationem possimus aperiam consectetur minus odit officia, eligendi, atque, dolore debitis blanditiis nihil odio dolor reprehenderit sequi. Dolor alias perferendis voluptates laborum est asperiores numquam minima amet, eveniet fugit ut facilis enim tempore aliquam rem incidunt doloremque harum quo quos. Totam ipsam inventore excepturi architecto expedita commodi in ullam repellat temporibus eos asperiores animi doloribus sapiente corporis reprehenderit consectetur, fugit cum laboriosam! Culpa natus autem quibusdam quaerat accusamus, cum veritatis! Maxime cupiditate impedit quidem iste adipisci. Cupiditate asperiores, amet accusantium quas odit velit quo rerum perspiciatis delectus? Animi?</p>
</body>
</html>`)
})
app.listen(port,() => {
    console.log("I am listening you request and response")
})