const recipes = [
	{
		id: 1,
		name: 'Cheeseburger',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80',
	},
	{
		id: 2,
		name: 'Fried Chicken',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
	},
	{
		id: 3,
		name: 'Mediterranean Salad',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
	},
	{
		id: 4,
		name: 'Hawaiian Chicken Pizza',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1681&q=80',
	},
	{
		id: 5,
		name: 'Buttermilk Pancake',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3360&q=80',
	},
	{
		id: 6,
		name: 'Avocado and Egg Toast',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1610&q=80',
	},
	{
		id: 7,
		name: 'Red Curry',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
	},
	{
		id: 8,
		name: 'Soft Shell Tacos',
		href: '#',
		imageSrc: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3360&q=80',
	},
];

export default function RecipePage() {
	return (
		<div className="bg-white">
			<div className="mx-5 px-4 py-16 sm:px-6 xl:max-w-full lg:px-5">
				<div className="flex justify-between">
					<h2 className="text-4xl font-bold tracking-tight text-gray-900">Latest Recipes</h2>
				</div>
				<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
					{recipes.map((recipe) => (
						<div key={recipe.id} className="group relative">
							<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
								<img src={recipe.imageSrc} alt="" className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
							</div>
							<div className="mt-4 flex justify-between">
								<div>
									<h3 className="text-lg font-bold text-gray-700">
										<a href={recipe.href}>
											<span aria-hidden="true" className="absolute inset-0" />
											{recipe.name}
										</a>
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
