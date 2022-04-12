const Cart = () => {
	return (
		<div
			className="container mx-auto fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true">
			<div className="flex items-end justify-end min-h-screen">
				<div
					className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
					aria-hidden="true"></div>

				{/* <!-- This element is to trick the browser into centering the modal contents. --> */}
				<span className="hidden sm:inline-block sm:align-bottom sm:h-screen" aria-hidden="true">
					&#8203;
				</span>

				<div className="relative inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all sm:align-bottom sm:max-w-lg sm:w-full">
					<div className="bg-black">
						<div className="sm:flex sm:items-start">
							<div className="w-full text-center py-4 sm:pl-4 sm:text-left bg-black">
								<h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
									My Cart (1 item)
								</h3>
							</div>
							<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-black sm:mx-0 sm:h-10 sm:w-10 m-2">
								{/* <!-- Heroicon name: outline/exclamation --> */}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</div>
						</div>
					</div>
					<div className="bg-gray-300 py-3 sm:flex sm:flex-col gap-1">
						<div className="mt-3 w-full border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700">
							Cart Item List
						</div>
						<div className="mx-4 mt-3 px-4 py-2 bg-white text-base font-thin text-gray-700">
							You won't find it cheaper anywhere
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;