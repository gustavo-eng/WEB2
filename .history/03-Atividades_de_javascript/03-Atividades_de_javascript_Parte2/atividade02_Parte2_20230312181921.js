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
    } // ok

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
            this.listaProdutos.push({ produto, quantidade }) // aqui adiciona quantidade 
            //console.log(carrinho.listaProdutos)
            // 0:{produto: {nome: 'tv', price: 45}, quantidade: X}
        }

        this.atualizarTotal()
    }

    excluirProduto(produto) {
        const index = this.listaProdutos.findIndex((p) => p.produto === produto)
        if (index !== -1) {
            this.listaProdutos.splice(index, 1)
            this.atualizarTotal()
        }
    }
    // .find rertorna o elemento q satisfaz a condicao
    // .findIndex retorna o index q satisfaz a condicao, e retorna o index -1 caso n encontrar !! 
    aumentarQuantidade(produto, quantidade = 1) {
        const produtoNoCarrinho = this.listaProdutos.find((p) => p.produto === produto)
        if (produtoNoCarrinho) {
            produtoNoCarrinho.quantidade += quantidade
            this.atualizarTotal()
        } else {
            console.log('produto n encontrado')
        }
    }

    diminuirQuantidade(produto, quantidade = 1) {
        const produtoNoCarrinho = this.listaProdutos.find(p => p.produto === produto)
        if (produtoNoCarrinho) {
            produtoNoCarrinho.quantidade = produtoNoCarrinho.quantidade - 1
            if (produtoNoCarrinho <= 0) {
                this.excluirProduto(produto)
            } else {
                this.atualizarTotal()
            }
        }
    }

    atualizarTotal() {
        this.total = parseFloat(this.listaProdutos.reduce((acumuldor, { produto, quantidade }) => acumuldor + produto.price * quantidade, 0))
    }

}

// Exemplo de uso da classe:
const carrinho = new CarrinhoDeCompras();
const produto1 = new Product('Produto 1', 10.50);
const produto2 = new Product('Produto 2', 20.90);

carrinho.incluirProduto(produto1, 2);
carrinho.incluirProduto(produto2, 1);
console.log(carrinho);

carrinho.diminuirQuantidade(produto1);
console.log(carrinho);

carrinho.aumentarQuantidade(produto2);
console.log(carrinho);

carrinho.excluirProduto(produto1);
console.log(carrinho);






