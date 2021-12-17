
	document.getElementById("botao").onclick=function (){
	let usuarios=new Array();
	var nome=document.getElementById("nome").value;
	var email=document.getElementById("email").value ;
	var senha=document.getElementById("senha").value ;

	if(localStorage.getItem('usuarios')==null){
		localStorage.setItem('usuarios','[]');
	}
	var usuario={
		nome:nome,
		email:email,
		senha:senha
	};
	var tabela_usuarios=JSON.parse(localStorage.getItem('usuarios'));
	tabela_usuarios.push(usuario);
	localStorage.setItem("usuarios",JSON.stringify(tabela_usuarios));
}
