//**********************
// olá, mundo!
//let mensagem = "ola mundo"
//console.log(mensagem);
// const mensagem = "ola, tu!"

// {
//     const mensagem = "olá, mundo!"

//     console.log(mensagem);
// }

// console.log(mensagem);

//******************************
// arays, objetos
//  let metas = ["negredo", "alô"]

//  console.log(metas[1] + ", " + metas[0])

let meta = {
    value: 'Ler um livro por mês',
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}

meta.value = 'não é mais ler um livro'
meta.isChecked(meta.value)

//function      // arrow function
//const criarMeta = () => {}
//ou
//function criarMeta() {}