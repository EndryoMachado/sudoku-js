var tabuleiro = [[[],[],[]], [[],[],[]], [[],[],[]]]
tabuleiro[0][0] = [[8, 5, 0], [0, 0, 0], [4 , 0, 0]]
tabuleiro[0][1] = [[0, 0, 0], [1, 3, 0], [0 , 0, 0]]
tabuleiro[0][2] = [[0, 0, 0], [0, 0, 0], [0 , 9, 5]]
tabuleiro[1][0] = [[0, 2, 0], [5, 8, 1], [0 , 0, 0]]
tabuleiro[1][1] = [[9, 0, 8], [0, 0, 0], [0 , 0, 0]]
tabuleiro[1][2] = [[0, 0, 0], [0, 0, 0], [7 , 0, 6]]
tabuleiro[2][0] = [[0, 0, 7], [0, 0, 0], [0 , 0, 0]]
tabuleiro[2][1] = [[0, 0, 1], [8, 0, 9], [0 , 0, 0]]
tabuleiro[2][2] = [[8, 0, 0], [0, 0, 0], [2 , 1, 3]]

var vazios = []
var qtdeVazios;

function percorrerTabuleiro(tabuleiro){
    for(let ql = 0; ql < 3; ql++){
        for(let qc = 0; qc < 3; qc++){
            for(let l = 0; l < 3; l++){
                for(let c = 0; c < 3; c++){
                    if(tabuleiro[ql][qc][l][c] == 0){
                        vazios.push([0,[ql, qc, l, c]])
                    }
                }
            }
        }
    }
    //console.log(vazios)
    qtdeVazios = vazios.length
    analisarElementos(vazios, 0)
}

function analisarElementos(vazios){
    while(qtdeVazios > 0){
        for(let i = 0; i < vazios.length; i++){
            let possiveis = []
            for(let v = 1; v <= 9; v++){
                if(ehValido(v, vazios[i][1])){
                    possiveis.push(v);
                }
            }
            if(possiveis.length == 1){
                vazios[i][0] = possiveis;
                gravarElemento(possiveis, vazios[i][1]) 
                qtdeVazios--;
                escreverTabuleiro(tabuleiro)
            }
        }
    }
}

function ehValido(valor, coordenadas){
    let validade = true
    let ql = coordenadas[0]; let qc = coordenadas[1]
    let l = coordenadas[2]; c = coordenadas[3]
    
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if(tabuleiro[ql][i][l][j] == valor || tabuleiro[i][qc][j][c] == valor || tabuleiro[ql][qc][i][j] == valor){
                    validade = false
                }
            }
        }

    return validade;
}


function gravarElemento(valor, coordenadas){
    let ql = coordenadas[0]; let qc = coordenadas[1]
    let l = coordenadas[2]; c = coordenadas[3]
    tabuleiro[ql][qc][l][c] = valor;

}

function escreverTabuleiro(tabuleiro){
    let tabuleiroFormatado = "";
    for(let ql = 0; ql < 3; ql++){
        for(let l = 0; l < 3; l++){
            tabuleiroFormatado += "\n";
            for(let qc = 0; qc < 3; qc++){
                for(let c = 0; c < 3; c++){
                    tabuleiroFormatado += tabuleiro[ql][qc][l][c] + "  ";
                }
            }
        }
    }
    console.log(tabuleiroFormatado)
}

escreverTabuleiro(tabuleiro)
percorrerTabuleiro(tabuleiro)
escreverTabuleiro(tabuleiro)
