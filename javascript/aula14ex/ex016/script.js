function contar() {
    var ini = document.getElementById('txti') //também posso usar o LET como variável
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:  <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerado PASSO 1')
            p = 1
        }

        if(i < f ){
            // Contagrem Crescente
          
           for(var c = i; c <= f; c += p) {
               res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
             // Contagem Regressiva
          for(var c = i; c >= f; c -= p) {
              res.innerHTML += ` ${c} \u{1F449}`
        }
    }
         
        res.innerHTML += `\u{1F3C1}`
        
    }

}