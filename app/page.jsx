import Feed from "@components/Feed";
import Booking from "@components/Booking";

const Home = () => {
  return (
    <section className="flex-center flex-col w-auto">
      <div className="w-full flex-left flex-col"> 
        <h1 className="head_text  text-left" >
          Your ticket booking just got a 
          <span className="orange_gradient text-center ml-2">whole lot better</span>
        </h1>
        <p className="desc text-left">
          Book tickets, flights, hotels, buses and so much more.
        </p>
        </div>
      <Booking />
      <Feed />
    </section>
  )
}

export default Home;