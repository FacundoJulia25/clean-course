(() => {

    interface Product {
        id: number;
        name: string;
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    // Product Business Logic Component - Agrupador de nuestra lógica de negocios para manejar productos.

    class ProductService {
        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }
        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailing {
        private masterEmail: string = ''

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template, emailList)
        }
    }

    class ProductBloc {

        private productService: ProductService;
        private mailing: Mailing

        constructor(productService: ProductService, mailing: Mailing) {
            this.productService = productService
            this.mailing = mailing
        }


        public loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            return this.productService.getProduct(id)
        }

        saveProduct(product: Product) {
            // Realiza una petición para s alvar en base de datos 
            return this.productService.saveProduct(product)
        }

        notifyClients() {
            return this.mailing.sendEmail(['eduardo@google.com'], "to-clients")
        }

    }


    class CartBloc {
        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }
    }
    //Para usar: 


    const productService = new ProductService()
    const mailer = new Mailing()

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc()

    //luego podemos llamar a nuestros métodos.
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();