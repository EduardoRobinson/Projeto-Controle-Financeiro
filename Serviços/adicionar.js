document.getElementById("botao").onclick=function (){
	let registros=new Array();
	var tipo=document.getElementById("tipo").value;
	var valor=document.getElementById("valor").value ;
	var data=document.getElementById("data").value ;
	var descricao=document.getElementById("descricao").value ;

	if(localStorage.getItem('registros')==null){
		localStorage.setItem('registros','[]');
	}
	var registro={
		tipo:tipo,
		valor:valor,
		data:data,
		descricao:descricao
	};

	var tabela_registros=JSON.parse(localStorage.getItem('registros'));
	tabela_registros.push(registro);
	localStorage.setItem("registros",JSON.stringify(tabela_registros));
}
