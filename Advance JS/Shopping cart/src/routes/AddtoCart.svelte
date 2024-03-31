<script>
	// import { requireAuth } from '$lib/middleware.js';
	import myImage from '$lib/images/armchair.png';
	import myImage2 from '$lib/images/product-10.png';
	import { goto } from '$app/navigation';
	let addtocart = [
		{ id: 1, name: 'Chair', imageUrl: myImage, price: 8000, quantity: 12 },
		{ id: 2, name: 'Sleeping Sofa', imageUrl: myImage2, price: 5000, quantity: 12 }
	];
	let cart = [];
	function addcart(item, quantity) {
		if (quantity > 0 && quantity <= item.quantity) {
			item.quantity -= quantity;
			cart.push({ ...item, quantity });
			cart = [...cart];
		}
	}
	function handlelogout() {
		// logout();
		goto('/home');
	}
</script>

<div class="container mx-auto my-4">
	<div class="grid grid-cols-2 gap-4">
		{#each addtocart as item}
			<div class="card card-compact bg-base-100 shadow-xl">
				<figure><img src={item.imageUrl} alt="" class="aspect-video h-72" /></figure>
				<div class="card-body">
					<h2 class="card-title">{item.name}</h2>
					<p>Price: Rs {item.price}</p>
					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<label for="quantity">Quantity:</label>
							<input
								type="number"
								id="quantity"
								min="1"
								max={item.quantity}
								bind:value={item.quantityToAdd}
								class="ml-2 w-16 rounded bg-stone-500 text-zinc-50"
							/>
						</div>
						<div class="card-actions justify-center">
							<button
								class="btn btn-primary"
								on:click={() => addcart(item, item.quantityToAdd || 1)}>Add to Cart</button
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="container mx-auto my-4 overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>Product Name</th>
				<th>Image</th>
				<th>Quantity</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			{#each cart as item}
				<tr>
					<td>{item.name}</td>
					<td><img src={item.imageUrl} alt="" class="h-16" /></td>
					<td>{item.quantity}</td>
					<td>Rs {item.price * item.quantity}</td>
					<td><button class="btn btn-success">Buy Now</button> </td>
				</tr>
			{/each}
		</tbody>
	</table>
	<button class="btn btn-primary bg-red-700 block mx-auto my-4" on:click={handlelogout}
		>Logout</button
	>
</div>
