/* 
02 - Em javascript Crie uma classe de Carrinho de compras que contém uma lista de produtos, a quantidade
individual de cada um e o valor total da compra. O carrinho deve possuir os métodos de incluir,
excluir, aumentar a quantidade e diminuir a quantidade de cada produto. Se ao diminuir a
quantidade o produto ficar com o valor 0, o mesmo deve ser removido do carrinho. Estes
métodos devem funcionar com polimorfismo para atender as operações de um produto por
código ou pelo próprio objeto produto.
*/

class Product {
    static #list = []
    constructor(name, image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s', price = 1.0) {
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

class CarrinhoDeCompras {
    constructor() {
        this.listaProdutos = []
        this.total = 0
        // this.quantidade = 0
    }

    incluirProduto(produto, quantidade = 1) { // passo o objeto produto 
        // verificar se ja tem um produto igual no carriho 
        // produto == {id: 1, name: 'Produto 1', preco: 10.5, imagem: 'imagem_default.jpg'}
        const produtoIgualCarrinho = this.listaProdutos.find((p) => p.name === produto.name) // vai retornar o elemento carrinho

        if (produtoIgualCarrinho) {
            produtoIgualCarrinho.quantidade += quantidade;
        } else {
            produto.quantidade = quantidade;
            this.listaProdutos.push({ produto }) // aqui adiciona quantidade 
        }

        this.atualizarTotal()
    }

    atualizarTotal() {
        this.total = this.listaProdutos.reduce((acumuldor, produto) => acumuldor + produto.price * produto.quantidade, 0)
    }

}



