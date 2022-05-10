<script context="module">
  import ProjectCard from '$lib/components/project-card.svelte'
  import { client } from '$lib/graphql-client'
  import { authorsQuery, projectsQuery } from '$lib/graphql-queries'

  export const load = async () => {
    const [authorReq, projectsReq] = await Promise.all([
      client.request(authorsQuery),
      client.request(projectsQuery),
    ])
    const { authors } = authorReq
    const { projects } = projectsReq

    return {
      props: {
        projects,
        authors,
      },
    }
  }
</script>

<script>
  export let projects
  export let authors
</script>

<svelte:head>
  <title>edndacomputer | blog</title>
</svelte:head>



<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col ">
    {#each authors as { name, intro, picture: { url } }}
    <div>
      <h1 class="text-5xl mb-4 font-bold tracking-wider">{name}</h1>
      <p class="text-2xl mb-4">{intro}</p>
    </div>

 
    <img class="mask mask-squircle h-48" src={url} alt={name} />
    <h2 class="font-bold text-center mb-10 text-xl">
    </h2>
    {/each}
  </div>
</div>
<h1 class="text-center md:text-3xl text-2xl mb-6">my latest work</h1>
<div
  class="grid gap-2 md:grid-cols-2 md:px-10 lg:grid-cols-2"
>
  {#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>



