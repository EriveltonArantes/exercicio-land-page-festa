AOS.init();

const dataDoEvento = new Date("May 08, 2024 23:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora= new Date ();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 *60 *60 *24;
    const horaEmMs = 1000 *60 *60;
    const minutoEmMs = 1000 *60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horaAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor ((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horaAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s` 

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Chegou tarde parça, Agora só ano que vem!'
    }

},1000);