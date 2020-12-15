import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email:'admin@example.com',
        password: bcrypt.hashSync('123456', 10), //Hashes the password 123456
        isAdmin: true,
    },
    {
        name: 'Jonah Ben',
        email:'jonah@example.com',
        password: bcrypt.hashSync('123456', 10),
        //isAdmin by default is false, so we did not add
    },
    {
        name: 'Matt',
        email:'matt@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;