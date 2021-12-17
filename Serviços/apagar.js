document.getElementById("botao").onclick=function (){
	var tipo=document.getElementById("tipo").value ;
	var valor=document.getElementById("valor").value ;
	var apagar ={
			tipo: '',
			valor:'',
			indice:''
		};
	let lista = [];
		lista= JSON.parse(localStorage.getItem('registros'));
		console.log(lista);
		var i=0;
		lista.forEach((item)=>{
			if(tipo==item.tipo && valor==item.valor){
				apagar ={
					tipo:item.tipo,
					valor:item.valor,
					indice:i
				}
			}
			i++;
			
		})
		console.log(apagar);
		if(tipo==apagar.tipo && valor==apagar.valor){
			lista.splice(apagar.indice,1);
			localStorage.setItem('registros', JSON.stringify(lista));
			alert('Registro apagado');
		}else{
			alert('Registro não encontrado');
		}
		


}