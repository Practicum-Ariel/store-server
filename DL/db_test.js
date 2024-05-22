
// קובץ ליצירת נתונים באופן חיצוני ישירות ל-DB

//  התחברות ל-DB
// ייבוא המודל
// נתונים קיימים
//  הפעלת פונקציה ליצירת הנתונים

let users = [
    {
        "email": "john.doe@example.com",
        "fullName": "John Doe",
        "password": "abc1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "jane.smith@example.com",
        "fullName": "Jane Smith",
        "password": "def5678",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "michael.johnson@example.com",
        "fullName": "Michael Johnson",
        "password": "ghi9012",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "emily.davis@example.com",
        "fullName": "Emily Davis",
        "password": "jkl3456",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "david.wilson@example.com",
        "fullName": "David Wilson",
        "password": "mno7890",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "sarah.moore@example.com",
        "fullName": "Sarah Moore",
        "password": "pqr1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "chris.taylor@example.com",
        "fullName": "Chris Taylor",
        "password": "stu5678",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "ashley.anderson@example.com",
        "fullName": "Ashley Anderson",
        "password": "vwx9012",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "james.thomas@example.com",
        "fullName": "James Thomas",
        "password": "yz12345",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "amanda.jackson@example.com",
        "fullName": "Amanda Jackson",
        "password": "67890ab",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "daniel.white@example.com",
        "fullName": "Daniel White",
        "password": "cde1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "jessica.harris@example.com",
        "fullName": "Jessica Harris",
        "password": "fgh5678",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "matthew.martin@example.com",
        "fullName": "Matthew Martin",
        "password": "ijk9012",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "olivia.lee@example.com",
        "fullName": "Olivia Lee",
        "password": "lmn3456",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "joshua.walker@example.com",
        "fullName": "Joshua Walker",
        "password": "opq7890",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    }
]
const go = async () => {
    console.log("@@@@@ start @@@@@");
    const db = require('./db')
    await db.connect()

    const userModel = require('./user.model')
    await userModel.create(users)
    console.log("@@@@@ Done @@@@@");
}
go()
