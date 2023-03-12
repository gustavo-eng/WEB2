/*
01 - Desenvolva uma classe Produto, contendo identificador, nome, imagem e preço. O
construtor da classe deve gerar o identificador automaticamente por meio do uso de uma lista
estática e privada contida na própria classe. A imagem não é obrigatória, de tal forma que uma
imagem default deve ser utilizada quando a mesma não for informada. Crie também um
método estático em produto para buscar um produto por ID.

*/


export class Product {
    static #list = []
    constructor(name, image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s', price) {
        this.id = Product.#list.length + 1;
        this.name = name;
        this.image = image;
        this.price = price;
        Product.#list.push({ id: this.id, name: this.name, image: this.image, price: this.price })
    }

    static buscarProduto(id) {
        return this.#list.find(element => element.id == id)
    }

}

const produto1 = new Product('Produto 1', 'image.jpg', 10.50);
const produto2 = new Product('Produto 2', 'image.jpg', 20.50);

console.log(produto1)
console.log(produto2)
console.log('Buscando produto por ID')
console.log(Product.buscarProduto(1))






