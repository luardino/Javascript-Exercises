function returHour(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date')
    }
    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-Pt',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date()
    const hora = returHour()
    console.log(hora)
} catch (error) {
    //
}finally{
    console.log('Tenha um bom dia!')
}