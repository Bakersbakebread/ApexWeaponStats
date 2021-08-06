<script>
	import "./styles/skeleton.css";
	export let name;
	import WeaponCard from "./components/WeaponCard.svelte";
	import * as jsonData from './data/weapons.json';

	let weapons = JSON.stringify(jsonData.default);
	weapons = JSON.parse(weapons);

	let data = JSON.stringify(jsonData.default)
	data = JSON.parse(data)

	let selectedType = "";
	let searchTerm = "";
	function handleSelectedType(type) {
		selectedType = type;
		if (type === "ALL") {
			weapons = data;
		} else {
			weapons = data.filter((item) => item.type === type);
		}
	}

	function resetData() {
		weapons = data;
		selectedType = "";
	}

	$: filteredList = weapons.filter((item) =>
		item.weapon
			.replace(/-/g, "")
			.toUpperCase()
			.includes(searchTerm.toUpperCase())
	);
</script>

<header class="container">
	<h1>Apex Legends <br />weapon stats</h1>
	<input
		bind:value={searchTerm}
		on:input={() => resetData()}
		type="text"
		placeholder="Search for weapon"
		class="twelve columns"
	/>
	<div class="row buttons">
		<button
			on:click={() => handleSelectedType("ALL")}
			class:button-primary={selectedType === "ALL"}>ALL</button
		>
		<button
			on:click={() => handleSelectedType("Pistol")}
			class:button-primary={selectedType === "Pistol"}>Pistol</button
		>
		<button
			on:click={() => handleSelectedType("SMG")}
			class:button-primary={selectedType === "SMG"}>SMG</button
		>
		<button
			on:click={() => handleSelectedType("Assault rifle")}
			class:button-primary={selectedType === "Assault rifle"}
			>Assault Rifle</button
		>
		<button
			on:click={() => handleSelectedType("Sniper rifle")}
			class:button-primary={selectedType === "Sniper rifle"}
			>Sniper</button
		>
		<button
			on:click={() => handleSelectedType("Shotgun")}
			class:button-primary={selectedType === "Shotgun"}>Shotgun</button
		>
		<button
			on:click={() => handleSelectedType("LMG")}
			class:button-primary={selectedType === "LMG"}>LMG</button
		>
	</div>
</header>
<main class="container">
	<div class="cards">
		{#each filteredList as { ...weapon }}
			<WeaponCard {weapon} />
		{/each}
	</div>
</main>

<div class="container" style="padding-bottom: 5rem;">
	<img
		alt="divider"
		src="https://media.contentapi.ea.com/content/dam/apex-legends/common/embed-images/apex-embed-divider.svg"
		width="100%"
	/>
</div>
<style>
	.mirage{
		position: relative;
		bottom: 0px;
		left: 0px;
		/* height: 100%; */
		width: 100px;
	}
	h1 {
		font-size: 62px;
		font-weight: 800;
		line-height: 72px;
		margin: 0 0 24px;
		text-align: center;
		text-transform: uppercase;
	}
	:global(p) {
		font-family: "Raleway", sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 32px;
		margin: 0 0 24px;
	}

	header {
		margin: 4rem auto;
		text-align: center;
	}
	.cards {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 4rem;
		margin: 4rem 0;
	}
	@media only screen and (max-width: 768px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}
</style>
