/**
 * Arquivo: geraCep.ts
 * Data: 26/06/2019
 * Author: Fernanda Ferreira
 */

const fs = require('fs');

class Gera_CEP {

    public geraCEPAleatorio() {
        var aleatorio = '0123456789';
        var cep;
        var sufixo = '';
        var tamanho = 5
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * aleatorio.length);
            sufixo += aleatorio.substring(rnum, rnum + 1);
        }
        cep = "780"+sufixo;
        
        return cep;
    }

    public formatar(d) {

        d=d.replace(/^(\d{5})(\d)/,"$1-$2")
        return d
    } 
  
}
const geraCep = new Gera_CEP();
export default geraCep