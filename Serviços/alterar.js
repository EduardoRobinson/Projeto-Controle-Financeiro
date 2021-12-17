document.getElementById("botao").onclick=function (){
	var tipo=document.getElementById("tipo").value ;
	var valor=document.getElementById("valor").value ;
	var data=document.getElementById("data").value ;
	var descricao=document.getElementById("descricao").value ;

	var alterar ={
			tipo: '',
			indice:''
		};

	let lista = [];
		lista= JSON.parse(localStorage.getItem('registros'));
		console.log(lista);
		var i=0;
		lista.forEach((item)=>{
			if(tipo==item.tipo){
				alterar ={
					tipo:item.tipo,
					indice:i
				}
			}
			i++;
			
		})

		if(tipo==alterar.tipo){
			console.log(alterar);
			lista[alterar.indice].valor=valor;
			lista[alterar.indice].data=data;
			lista[alterar.indice].descricao=descricao;
			localStorage.setItem('registros', JSON.stringify(lista));
			alert('Valores alterados');

		}else{
			alert('Registro não encontrado');
		}
		


}