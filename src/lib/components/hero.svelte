
<script>
    export let authors
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col ">
      {#each authors as { name, intro, picture: { url } }}
      <div>
        <h1 class="text-5xl mb-4 font-bold tracking-wider">{name}</h1>
        <p class="text-2xl mb-4">{intro}</p>
      </div>
  
   
      <img class="mask mask-squircle h-48" src={url} alt={name} />
      <h2 class="font-bold text-center mb-20 text-xl">
        hey, this is the edndacomputer blog, a personal account of my journey through the world of technology and life in general.
      </h2>
      {/each}
    </div>
  </div>