(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';
    interface PersonProps {
        birthdate: Date
        gender: Gender,
        name: string,
    }

    class Person {
        public birthdate: Date
        public gender: Gender;
        public name: string

        constructor(
            { name, gender, birthdate }: PersonProps
        ) {
            this.name = name
            this.gender = gender
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;

    }
    class User extends Person {

        public email: string
        public lastAccess: Date;
        public role: string
        constructor({
            birthdate,
            email,
            gender,
            name,
            role

        }: UserProps
        ) {
            super({ birthdate, gender, name });
            this.lastAccess = new Date();
            this.email = email,
                this.role = role
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date
    }
    class UserSettings extends User {
        public workingDirectory: string
        public lastOpenFolder: string
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }: UserSettingsProps
        ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
    });

    console.log({ userSettings });


})();