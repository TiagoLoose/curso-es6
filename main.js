class List{
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
    }
}
class TodoList extends List {
    constructor(){
        super()
        this.usuario = 'Tiago'
    }

    add(data){
        super.add(data)
        console.log(this.data)
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

    static dataHoraAtual(){
        console.log(new Date())
    }
}

const MinhaLista = new TodoList()
MinhaLista.mostraUsuario()
TodoList.dataHoraAtual()

document.getElementById("addtodo").onclick = function(){
    MinhaLista.add('Novo item')
}

const arr = [{id: 1, nome: 'Tiago'}, {id: 2, nome: 'Joao'}, {id: 3, nome: 'Carlos'}]

const newArr = arr.map(function(item, index){
    return item.nome = item.nome+ ' '+ index
})

const sum = arr.reduce(function(total, next){
    return total + next.id
}, 0)

const filtered = arr.filter(function(item){
    return item.id % 2 === 0
})

const finded = arr.find(function(item){
    return item.id === 2
})

console.log(newArr)
console.log(sum)
console.log(filtered)
console.log(finded)