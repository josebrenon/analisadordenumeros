let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n <= 100)) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        alert('Valor invalido ou já encontrado na lista.')
        
    }
    num.value = ''
    num.focus() // apaga e volta o cursor pra lá
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} Números cadastrados.</p>`
        res.innerHTML += `<p>O maior número foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número foi ${menor}.</p>`
        res.innerHTML += `<p>A soma entre os valores foi ${soma}.</p>`
        res.innerHTML += `<p>A média entre os valores foi ${media}.</p>`
    }
}