<nav class="bg-green-300">
	<div class="flex items-center justify-between h-16 hidden sm:inline">
		<div class="absolute inset-y-0 left-0 flex items-center sm:hidden" />
		<div class="flex-1 flex items-center justify-center sm:items-stretch">
			<div class="hidden sm:block sm:ml-6 flex">
				<div class="flex space-x-8 self-center py-2">
					<a
						href="/login"
						class="text-gray-800 self-left hover:bg-white px-3 py-3 rounded-md text-2xl font-large focus:ring-1"
						>Login</a
					>
					<a
						href="/creaties"
						class="text-gray-800 hover:bg-white px-3 py-3 rounded-md text-2xl font-large"
						>Creaties</a
					>
					<a
						href="/"
						class="flex justify-center text-gray-800 hover:bg-white px-3 py-3 rounded-md text-2xl font-large"
					>
						<div class="h-8">
							<img
								class="object-cover relative max-w-full h-full self-center"
								src="./images/favicon.png"
								alt="logo"
							/>
						</div>
					</a>
					<a
						href="/about"
						class="text-gray-800 hover:bg-white px-3 py-3 rounded-md text-2xl font-large">About</a
					>
					<a
						href="/dashboard"
						class="text-gray-800 self-left hover:bg-white px-3 py-3 rounded-md text-2xl font-large"
						>dashboard</a
					>
				</div>
			</div>
		</div>
	</div>

	<div class="sm:hidden justify-center" id="mobile-menu">
		<div class="px-2 space-y-1 text-center pt-1 pb-4">
			<a
				href="/"
				class="flex justify-center text-gray-800 hover:bg-white px-3 py-1 rounded-md text-2xl font-large"
			>
				<div class="h-8">
					<img
						class="object-cover relative max-w-full h-full self-center"
						src="./images/favicon.png"
						alt="logo"
					/>
				</div>
			</a>
			<div class="px-2 text-center">
				<a href="/creaties">
					<div class="h-8 self-center">
						<p
							class="flex justify-center text-gray-800 hover:bg-white px-3 py-1 rounded-md text-2xl font-large align-middle"
						>
							Creaties
						</p>
					</div>
				</a>
			</div>
			<div class="px-2 text-center">
				<a href="/about">
					<div class="h-8 py-1 self-center">
						<p
							class="flex justify-center text-gray-800 hover:bg-white px-3 py-1 rounded-md text-2xl font-large align-middle"
						>
							About
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</nav>
