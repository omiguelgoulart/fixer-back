export function validaSenha(senha: string) {

    const mensa: string[] = []
  
    // .length: retorna o tamanho da string (da senha)
    if (senha.length < 8) {
      mensa.push("Erro... senha deve possuir, no mínimo, 8 caracteres")
    }
  
    // contadores
    let pequenas = 0
    let grandes = 0
    let numeros = 0
    let simbolos = 0
  
    // senha = "abc123"
    // letra = "a"
  
    // percorre as letras da variável senha
    for (const letra of senha) {
      // expressão regular
      if ((/[a-z]/).test(letra)) {
        pequenas++
      }
      else if ((/[A-Z]/).test(letra)) {
        grandes++
      }
      else if ((/[0-9]/).test(letra)) {
        numeros++
      } else {
        simbolos++
      }
    }
  
    if (pequenas == 0) {
      mensa.push("Erro... senha deve possuir letra(s) minúscula(s)")
    }
  
    if (grandes == 0) {
      mensa.push("Erro... senha deve possuir letra(s) maiúscula(s)")
    }
  
    if (numeros == 0) {
      mensa.push("Erro... senha deve possuir número(s)")
    }
  
    if (simbolos == 0) {
      mensa.push("Erro... senha deve possuir símbolo(s)")
    }
  
    return mensa
  }