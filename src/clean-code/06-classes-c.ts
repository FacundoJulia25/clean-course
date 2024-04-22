(() => {

    // No aplicando el principio de responsabilidad única.
    // Priorizar la composicion frente a la herencia.
    //! es  decir --> Evitar "extends" dado que añade coplejidad. 

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
        //* Lo que realmente maneja el usuario:
        email: string;
        role: string;

        //! user no lo utiliza. 
        //gender: Gender;
        //name: string;
        //birthdate: Date;

    }
    class User {

        public email: string
        public lastAccess: Date;
        public role: string
        constructor({
            email,
            role
            //gender,
            //name,
            //birthdate,

        }: UserProps
        ) {
            //no necesitamos el super
            // super({ birthdate, gender, name });
            this.lastAccess = new Date();
            this.email = email,
                this.role = role
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }


    class Settings {
        public workingDirectory: string
        public lastOpenFolder: string
        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder
        }
    }

    //* Ahora veremos un ejemplo de priorizar la composicion y no la herencia.

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date
    }

    class UserSettings {

        //* Excelente práctica 

        public person: Person;
        public settings: SettingsProps;
        public user: User;

        constructor(
            {
                name, gender, birthdate, email, role, lastOpenFolder, workingDirectory
            }: UserSettingsProps
        ) {
            this.person = new Person({ name, gender, birthdate })
            this.user = new User({ email, role })
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
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

    console.log({ userSettings })
})();