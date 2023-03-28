import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              flkdsjfskldjfsdkljfsdlk sdlkfjdslkfj sdlfkjsdfl ksdj
              sdlkfjsdlkfj dsflksdjfkl sdflk jsdflkjs

              sdlkfjsd flksdjflk ldskfjs dlkfjsdf lksj
            </p>
            <p>
              sdlkfjdskl sdlkfjsdlk sdlkfj ssdlkf jskl
            </p>
            <p>
              sdlkfjsd dslfkjsd dsflk jsdflkjsdslfkj lsdkfjlkjlkj
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
