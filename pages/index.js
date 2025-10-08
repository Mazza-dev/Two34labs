import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Two34 Labs</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Courier New', Courier, monospace;
            line-height: 1.8;
            color: #333;
            background: #fafafa;
          }
          
          .container {
            max-width: 650px;
            margin: 0 auto;
            padding: 80px 20px;
          }
          
          h1 {
            font-size: 1.2rem;
            font-weight: normal;
            margin-bottom: 1.5rem;
          }
          
          .tagline {
            font-size: 1rem;
            color: #666;
            margin-bottom: 3rem;
          }
          
          h2 {
            font-size: 1rem;
            font-weight: normal;
            margin-bottom: 1rem;
            margin-top: 3rem;
          }
          
          .project {
            margin-bottom: 1.2rem;
            font-size: 1rem;
          }
          
          .project-name {
            text-decoration: underline;
            color: #333;
            cursor: pointer;
          }
          
          .project-name:hover {
            color: #000;
          }
          
          .project-description {
            color: #666;
          }
          
          .contact {
            margin-top: 3rem;
          }
          
          .contact-item {
            margin-bottom: 0.5rem;
          }
          
          a {
            color: #333;
            text-decoration: underline;
          }
          
          a:hover {
            color: #000;
          }
          
          .footer {
            margin-top: 4rem;
            color: #666;
            font-size: 1rem;
          }
          
          .social-links {
            margin-top: 1rem;
          }
          
          .social-links a {
            margin-right: 1rem;
          }
        `}</style>
      </Head>

      <div className="container">
        <h1>Two34 Labs</h1>
        <p className="tagline">Building cool stuff,From the +234.</p>
        
        <h2>SaaS Projects</h2>
        
        <div className="project">
          <a href="https://zenigrid.com" target="_blank" rel="noopener noreferrer" className="project-name">Zenigrid</a>: Send AI personalized videos to customers.
        </div>
        
        <div className="project">
          <a href="https://propnant.com" target="_blank" rel="noopener noreferrer" className="project-name">Propnant</a>: Propnant is an app to generate property walkthrough videos, real estate marketing material, and general designs.
        </div>
        
        <div className="project">
          <a href="https://soramake.xyz" target="_blank" rel="noopener noreferrer" className="project-name">Soramake</a>: Generate videos with Sora2.
        </div>
        
        <div className="project">
          <span className="project-name">Hopeen</span>: An AI mental health companion.
        </div>
        
        <div className="project">
          <span className="project-name">Toketracker</span>: A quit smoking app.
        </div>
        
        <div className="project">
          <span className="project-name">Littefriends</span>: An app to track your dog's health and daily calories with AI.
        </div>
        
        <div className="contact">
          <h2>Contact</h2>
          <div className="contact-item">
            Email: <a href="mailto:hello@two34labs.com">hello@two34labs.com</a>
          </div>
          <div className="contact-item">
            For partnerships and inquiries: <a href="mailto:partnerships@two34labs.com">partnerships@two34labs.com</a>
          </div>
        </div>
        
        <div className="footer">
          <p>We're always building something new. Follow our journey and see what we're working on.</p>
          <div className="social-links">
            <a href="https://x.com/two34labs" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://github.com/two34labs" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      </div>
    </>
  )
}