const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
        .classList
        .add('active')
    },
    close(){
        // fechar o modal
        // Remover a class active do modal
        document.querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
} 

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    }, 
    {
        id: 1,
        description: 'Luz',
        amount: 500000,
        date: '23/01/2021',
    }, 
    {
        id: 1,
        description: 'Luz',
        amount: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        // somar as entradas
    }, 
    expenses (){
        // somar as saidas
    },
    total() {
        // entradas - saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'), 
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction() {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"


        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        console.log(value)
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
