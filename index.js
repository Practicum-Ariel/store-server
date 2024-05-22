// להאזין לבקשות שישלחו אליי בכתובת+פורט
// שהקוד לא יפסק בסיום הריצה - אלא שימשיך להאזין
// וכשמגיעה בקשה להפנות אותה לראוטר שיפנה להמשך טיפול...

const
    express = require('express'),
    app = express(),
    PORT = 3000,
    cors = require('cors')

app.use(cors())
app.use(express.json())

const db = require('./DL/db')
db.connect()

const userRouter =  require('./router/user.router')
app.use('/user',userRouter)

// const itemRouter =  require('./router/item.router')
// app.use('/item',itemRouter)

app.listen(PORT, () => console.log("Server is up - port 3000"))


