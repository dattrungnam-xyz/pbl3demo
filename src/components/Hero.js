import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({user}) => {
  return (
    <section
      class="h-[100vh] bg-cover bg-hero"
      
    >
      <div
        class="flex h-full w-full items-center container mx-auto px-8"
      >
        <div class="max-w-2xl text-center">
          <h1
            class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl"
          >
            BARBERSHOP
          </h1>

          <p class="mt-6 lg:text-lg text-white">
            Hãy đến và trải nghiệm dịch vụ của chúng tôi
          </p>

          {user?<></>:<><div
            class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
          >
            <Link to={"/Login"}>
            
            <button
              class="w-full h-full transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
            >
              Đăng nhập
            </button>
            </Link>
          </div></>}
        </div>
      </div>
    </section>
  )
}

export default Hero