document.getElementById("botao").onclick=function(){
	var email=document.getElementById("email").value ;
	var senha=document.getElementById("senha").value ;
		var login ={
			email: '',
			senha:''
		};
		let lista = [];
		lista= JSON.parse(localStorage.getItem('usuarios'));
		lista.forEach((item)=>{
			if(email==item.email && senha==item.senha){
				login ={
					email:item.email,
					senha:item.senha
				}
			}
		})
		if(email==login.email && senha==login.senha){
			window.location.href='Registro.html'
			let tokenLogin=Math.random().toString(16).substr(2)
			localStorage.setItem('token',tokenLogin)
		}else{
			alert('Email ou senha invalido');
		}
		
	}
