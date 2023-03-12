/*
01 - Desenvolva uma classe Produto, contendo identificador, nome, imagem e preço. O
construtor da classe deve gerar o identificador automaticamente por meio do uso de uma lista
estática e privada contida na própria classe. A imagem não é obrigatória, de tal forma que uma
imagem default deve ser utilizada quando a mesma não for informada. Crie também um
método estático em produto para buscar um produto por ID.

*/


class Product {
    static list = []
    constructor(name, image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s', price) {
        this.id = Product.list.length + 1;
        this.name = name;
        this.image = image;
        this.price = price;
    }
}