function Home() {
  return (
    <div className="flex flex-col items-center justify-center pb-5">
      <img className="w-64 h-64 rounded-full mb-3" src="./public/assets/timothy.jpg" alt="timothy the egg"></img>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-base mb-3 font-medium">Web Developer</p>
      <pre class="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg">
        <p className="text-sm max-w-lg mb-6 font-semibold">
          As a web developer, I draw inspiration 
          from my love for reading, movies, and games. With a keen eye for design and a knack for coding, 
          I bring digital experiences to life, blending creativity with technical expertise. Whether it's 
          crafting captivating user interfaces or optimizing backend functionality, I thrive on the 
          challenge of transforming ideas into seamless online experiences.
        </p>
        <p className="text-sm max-w-lg mb-6 font-semibold">
          When I'm not immersed in lines of code, you'll often find me lost in the pages of a gripping novel, 
          exploring cinematic worlds on the big screen, or engaging in thrilling adventures in both board and 
          video games. These diverse interests fuel my creativity and drive, shaping my approach to web 
          development and ensuring that each project I undertake is infused with innovation and passion.
        </p>
      </pre>
    </div>
  )
}

export default Home;