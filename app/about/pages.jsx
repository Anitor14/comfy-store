import React from 'react'
import PageHero from "../../components/PageHero";

const pages = () => {
  return (
    <div>
      <main>
        <PageHero title={'about'}/>
        <section className="w-full sm:px-[80px] px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full py-[5rem]">
                <img src='/hero/hero-bcg-2.jpeg' alt='nice desk' />
                <article>
                    <div className='title'>
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                    accusantium sapiente tempora sed dolore esse deserunt eaque
                    excepturi, delectus error accusamus vel eligendi, omnis beatae.
                    Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                    dolore, obcaecati incidunt sequi blanditiis est exercitationem
                    molestiae delectus saepe odio eligendi modi porro eaque in libero
                    minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                    ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                    similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                    iste.
          </p>
                </article>
            </div>
        </section>
      </main>
    </div>
  )
}

export default pages
