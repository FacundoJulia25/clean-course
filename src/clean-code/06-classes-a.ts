(() => {

    type Gender = 'M' | 'F'

    //! this is the large way to use the constructor

    // class Person {
    // public name: string
    // public gender: Gender
    // public birthdate: Date

    // constructor(name: string, gender: Gender, birthdate: Date) {
    // this.name = name,
    // this.gender = gender,
    // this.birthdate = birthdate
    // }
    // }

    ///* This is the shorter one:
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    const newPerson = new Person('Facundo', 'M', new Date('1999-10-25'))
    console.log('here');
    console.log(newPerson);

    class User extends Person {
        private lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            public name: string,
            public gender: Gender,
            public birthdate: Date

        ) {
            super(
                name, gender, birthdate
            )
            this.lastAccess = new Date()
        }

        checkCredentials(): Boolean {
            return true
        }
    }

    class UserSettinds extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }
    // const newUser = new User()


})()

