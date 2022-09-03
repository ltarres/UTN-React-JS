import React from 'react'

const Olvido = () => {
  return (
<body>
<div class="container">
	<section id="content">
		<form action="">
			<h3>Has olvidado tu contraseña?</h3>
            <p>Introduce la direccion de correo electronico</p>
			<div>
				<input type="text" placeholder="test@example.com" required="" id="email" />
			</div>
			<div>
				<input type="submit" value="Enviar" /><br/>
				<a href="/login">Login</a>
				<a href="/register">Registrarte</a>
			</div>
		</form>	
	</section>
</div>
</body>
  )
}

export default Olvido;