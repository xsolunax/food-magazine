export default function Footer() {
	return (
		<>
			<footer className="max-h-60 bg-gray-800 bottom-0">
				<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center px-8 py-20">
					<div className="flex items-center">
						<div className="flex flex-shrink-0 items-center">
							<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Stock Logo" />
							<h1 className="mx-5 text-white font-bold">Food Magazine</h1>
						</div>
						<h2 className="text-white">© 2023 Food Magazine, Inc. All rights reserved.</h2>
					</div>
				</div>
			</footer>
		</>
	);
}
