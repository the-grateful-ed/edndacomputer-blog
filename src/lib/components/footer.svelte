<script>
  import FacebookIcon from './facebook-icon.svelte'
  import TwitterIcon from './twitter-icon.svelte'
  import Logo from './logo.svelte'
</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content max-w-4xl mx-auto">
  <div class="items-center">
    <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
    <p>Copyright © 2022 - All right reserved</p>
    </div>
    
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-end md:justify-self-end ">
    <TwitterIcon />

 
  </div>
</footer>

<!-- <footer
  class="p-10 footer bg-primary text-primary-content footer-center md:max-w-5xl w-full container"
>
  <div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/posts">Blog</a>
    <a class="link link-hover" href="/about">About</a>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="https://twitter.com">
        <TwitterIcon />
      </a>
      <a href="https://youtube.com">
        <YouTubeIcon />
      </a>
      <a href="https://facebook.com">
        <FacebookIcon />
      </a>
    </div>
  </div>
  <div>
    <p>
      Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
      by ME
    </p>
  </div>
</footer> -->