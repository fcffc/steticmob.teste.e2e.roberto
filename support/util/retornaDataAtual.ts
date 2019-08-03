/**
 * Arquivo: retornaDataAtual.ts
 * Data: 25/06/2019
 * Author: Fernanda Ferreira
 */

var data, dia, dia_sem, mes, ano2, ano4, str_data, str_dia, str_mes, tamanhoDia, tamanhoMes, dia_sem_format, str_data_dia, diaD, mesD

class RetornaDataAtual {

    public retornarDataAtualBackOffice() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        var tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        var tamanhoMes = m.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes = 1) {
            mes = ("0" + mes);
        }

        str_data = dia + '/' + mes + '/' + ano4;
        var str_dataSemFormat = str_data.replaceAll("[^\\d ]", "");

        return str_dataSemFormat;

    }

    public retornarDataHoje() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes == 1) {
            mes = ("0" + mes);
        }

        str_data = dia + '/' + mes + '/' + ano4;

        return str_data;
    }

    public retornarDataHojeDiaSemana() {
        data = new Date();
        dia = data.getDate();
        dia_sem = data.getDay();
        mes = data.getMonth();
        ano2 = data.getYear();
        ano4 = data.getFullYear();

        var d = dia.toString();
        tamanhoDia = d.length;

        var mes = mes + 1;
        var m = mes.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            dia = ("0" + dia);
        }

        if (tamanhoMes == 1) {
            mes = ("0" + mes);
        }

        switch (dia_sem) {
            case 1: {
                dia_sem_format = "Segunda-feira";
                break;
            }
            case 2: {
                dia_sem_format = "Terça-feira";
                break;
            }
            case 3: {
                dia_sem_format = "Quarta-feira";
                break;
            }
            case 4: {
                dia_sem_format = "Quinta-feira";
                break;
            }
            case 5: {
                dia_sem_format = "Sexta-feira";
                break;
            }
            case 6: {
                dia_sem_format = "Sábado";
                break;
            }
            case 7: {
                dia_sem_format = "Domingo";
                break;
            }
            default: {
                console.log("Incluir novo caso");
                break;
            }
        }

        str_data_dia = dia + '/' + mes + '/' + ano4 + ' - ' + dia_sem_format;

        return str_data_dia;
    }

    public adicionarDiaEmData(dias) {

        var hoje = new Date();
        var dataUltima = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
        console.log("Data Utima valor: "+dataUltima)
        var diaSem = dataUltima.getDay();

        diaD = (dataUltima.getDate());
        console.log("Só o dia: "+diaD)
        mesD = (dataUltima.getMonth() + 1);
        var d = diaD.toString();
        tamanhoDia = d.length;

        var m = mesD.toString();
        tamanhoMes = m.length;

        if (tamanhoDia == 1) {
            diaD = ("0" + diaD);
        }

        if (tamanhoMes == 1) {
            mesD = ("0" + mesD);
        }

        switch (diaSem) {
            case 0: {
                dia_sem_format = "Domingo";
                break;
            }
            case 1: {
                dia_sem_format = "Segunda-feira";
                break;
            }
            case 2: {
                dia_sem_format = "Terça-feira";
                break;
            }
            case 3: {
                dia_sem_format = "Quarta-feira";
                break;
            }
            case 4: {
                dia_sem_format = "Quinta-feira";
                break;
            }
            case 5: {
                dia_sem_format = "Sexta-feira";
                break;
            }
            case 6: {
                dia_sem_format = "Sábado";
                break;
            }
            default: {
                console.log("Incluir novo caso");
                break;
            }
        }

        var result = diaD + "/" + mesD + "/" + dataUltima.getFullYear() + " - "+dia_sem_format;

        return result;
    }

    public retornarDiaZeroAtualBackOffice() {
        data = new Date();
        dia = data.getDate();

        var d = dia.toString();
        var tamanhoDia = d.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        str_dia = dia;

        return str_dia;
    }

    public retornarDiaAtualBackOffice() {
        data = new Date();
        dia = data.getDate();

        var d = dia.toString();
        var tamanhoDia = d.length;

        if (tamanhoDia = 1) {
            dia = ("0" + dia);
        }

        str_dia = dia;

        return str_dia;
    }

    public retornarMesAtualBackOffice() {
        data = new Date();
        mes = data.getMonth();

        var mes = mes + 1;
        var m = mes.toString();
        var tamanhoMes = m.length;

        if (tamanhoMes = 1) {
            mes = ("0" + mes);
        }

        str_mes = mes;

        return str_mes;
    }
}
const retornaDataAtual = new RetornaDataAtual();
export default retornaDataAtual