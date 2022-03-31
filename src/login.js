const Login = () => {
	return (
		<div className='login-page'>
			<img
				className='login-cover-img'
				src='./images/login-cover.jpg'
				alt='logo'
			/>
			<button id='login'>LOGIN</button>
			<button id='sign-up'>SIGN UP</button>
			<div className='line'>
				<span>OR</span>
			</div>
		</div>
	);
};

export default Login;
