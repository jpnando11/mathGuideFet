/* eslint-disable prettier/prettier */

export const Integrales = () => {


    const definirFuncion = (operaciones:string[] = ['']):string =>{
        let a:string = '1';
        console.log('ope integrales ' + operaciones);
        for (let i = 0; i < operaciones.length; i++) {
            if (operaciones[i] === 'exponecial') {
                a = 'realizar exponecial';
            }
        }

        integralConstante('1');
        return a;
    };

    const integralConstante = (a:string)=>{
        return String(a) + 'x + C';
    };

    const integralElevadoX = (base:string, exponencial:string)=>{
        exponencial += 1;
        return base + ' ^ ' + exponencial + '/ ' + exponencial;
    };

    return {
        definirFuncion,
        integralConstante,
    };
};
