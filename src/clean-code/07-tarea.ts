(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        //Instanciamos aqui las clases de las que queramos sacar provecho. 
        public value: string;
        public placeholder: string
        constructor(
            value: string,
            placeholder: string,
        ) {
            this.value = value
            this.placeholder = placeholder
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    class InputElement {
        public htmlElement: HtmlElement
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents
        constructor(value: string, placeholder: string, id: string) {
            this.inputAttributes = new InputAttributes(value, placeholder)
            this.inputEvents = new InputEvents()
            this.htmlElement = new HtmlElement(id, 'input')
        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });
})()