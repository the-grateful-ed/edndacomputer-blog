<script>
  import FacebookIcon from './facebook-icon.svelte'
  import TwitterIcon from './twitter-icon.svelte'
  import Logo from './logo.svelte'
</script>

<footer class="footer items-center p-4 bg-neutral text-neutral-content max-w-4xl mx-auto">
  <div class="items-center">
    <div class="flex items-center inline-block">
      <a href="/" class="text-accent"><Logo /></a>
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