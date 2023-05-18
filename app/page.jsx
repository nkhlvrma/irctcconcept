import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full flex-left flex-col"> 
        <h1 className="head_text  text-left" >
          Your ticket booking just got a 
          <span className="orange_gradient text-center ml-2">whole lot better</span>
        </h1>
        <p className="desc text-left">
          Book tickets, flights, hotels, buses and so much more.
        </p>
        </div>

      <Feed />
    </section>
  )
}

export default Home;