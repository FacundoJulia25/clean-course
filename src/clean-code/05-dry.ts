


type Size = '' | 'S' | 'M' | 'L'


class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is empty`)
                    break
                default:
                    throw new Error(`${typeof this[key]} is not supported`)
            }
        }
        return true
    }

    toString() {
        //No DRY 
        //Every time we add a new propperty We will
        //need to add more and more checks.
        /*!
        if (this.name.length <= 0) throw Error('name is empty')
        if (this.price <= 0) throw Error('price is zero')
        if (this.size.length <= 0) throw Error('zize is empty')
        return `${this.name} (${this.price}), ${this.size}`
        */
        if (!this.isProductReady) return
    }
}


(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'L')
    console.log(bluePants.toString());
})()