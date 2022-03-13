function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('erro')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebeMasc.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovemMasc.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosoMasc.png')
            }

        } else if (fsex[1].checked) { 
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeFem.png')

            } else if (idade < 21) {

                img.setAttribute('src', 'jovemFem.png')

            } else if (idade < 50) {

                img.setAttribute('src', 'mulher.png')
            }else {

                img.setAttribute('src', 'idosoFem.png')
            }


        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }



}