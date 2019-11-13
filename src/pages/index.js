import React from "react"
import { Link } from "gatsby"
import { observer } from "mobx-react"
import { useStores } from "../stores"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = observer(() => {
  const { counterStore, userStore, boardStore } = useStores()
  return (
    <Layout>
      <SEO title='Home' />
      {/* <div className="pageloader"></div> */}
      <div className='login-wrapper columns is-gapless'>
        {/* Form section */}
        <div className='column is-7'>
          <div className='hero is-fullheight'>
            <div className='hero-heading'>
              {/* Logo */}
              <div className='section has-text-centered'>
                <a href='landing-v3.html'>
                  <img
                    className='top-logo'
                    src='assets/images/logos/bulkit-logo-lemonade.png'
                    alt='Bulkit logo'
                  />
                </a>
              </div>
              {/* Don't have an account yet */}
              <div className='no-account-link has-text-centered'>
                <Link to='landing-v3-signup.html'>
                  <i className='sl sl-icon-question pr-10' /> I do not have an
                  account yet{" "}
                </Link>
              </div>
            </div>
            <div className='hero-body'>
              <div className='container'>
                <div className='columns'>
                  <div className='column' />
                  <div className='column is-5'>
                    {/* Login Form */}
                    <form>
                      <div
                        id='signin-form'
                        className='login-form animated preFadeInLeft fadeInLeft'
                      >
                        {/* Input */}
                        <div className='field pb-10'>
                          <div className='control'>
                            <input
                              className='input is-large'
                              type='text'
                              placeholder='Username'
                            />
                          </div>
                        </div>
                        {/* Input */}
                        <div className='field pb-10'>
                          <div className='control'>
                            <input
                              className='input is-large'
                              type='text'
                              placeholder='Password'
                            />
                          </div>
                        </div>
                        {/* Submit */}
                        <p className='control login'>
                          <button className='button button-cta primary-btn btn-align-lg btn-outlined is-bold is-fullwidth rounded raised no-lh'>
                            Log in
                          </button>
                        </p>
                      </div>
                    </form>
                    {/* /Login Form */}
                    {/* Reset Form */}
                    <form>
                      <div
                        id='recover-form'
                        className='login-form animated preFadeInLeft fadeInLeft is-hidden'
                      >
                        {/* Input */}
                        <div className='field pb-10'>
                          <div className='control'>
                            <input
                              className='input is-large'
                              type='text'
                              placeholder='Email address'
                            />
                          </div>
                        </div>
                        {/* Submit */}
                        <p className='control login'>
                          <button className='button button-cta secondary-btn btn-align-lg btn-outlined is-bold is-fullwidth rounded raised no-lh'>
                            Reset password
                          </button>
                        </p>
                      </div>
                    </form>
                    {/* /Reset Form */}
                    {/* Toggles */}
                    <div
                      id='recover'
                      className='section forgot-password animated preFadeInLeft fadeInLeft'
                    >
                      <p className='has-text-centered'>
                        <Link to='#'>Forgot password ?</Link>
                      </p>
                    </div>
                    <div
                      id='back-to-login'
                      className='section forgot-password animated preFadeInLeft fadeInLeft is-hidden'
                    >
                      <p className='has-text-centered'>
                        <Link to='#'>Back to Sign in</Link>
                      </p>
                    </div>
                    {/* /Toggles */}
                  </div>
                  <div className='column' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Form section */}
        {/* Image section (hidden on mobile) */}
        <div className='column login-column is-5 is-hidden-mobile hero-banner'>
          <div className='hero is-fullheight is-theme-primary is-relative'>
            <div className='columns has-text-centered'>
              <div className='column'>
                <h2 className='title is-2 light-text'>Start managing now</h2>
                <h3 className='subtitle is-5 light-text'>
                  Stop struggling with common tasks and focus on the real choke
                  points. Discover a full featured HR management platform.
                </h3>
                <div className='mt-30 has-text-centered'>
                  <a
                    href='landing-v3-signup.html'
                    className='button button-cta btn-outlined is-bold light-btn rounded'
                  >
                    Get started Free
                  </a>
                </div>
              </div>
            </div>
            <img
              className='login-city'
              src='assets/images/illustrations/drawings/city.svg'
            />
          </div>
        </div>
        {/* /Image section */}
      </div>
    </Layout>
  )
})

export default IndexPage
