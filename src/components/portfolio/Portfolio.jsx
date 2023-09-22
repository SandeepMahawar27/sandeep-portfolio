import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/final.mp4'
import IMG2 from '../../assets/final1.mp4'
import IMG3 from '../../assets/final2.mp4'
import IMG4 from '../../assets/final4.mp4'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// const data = [
//   { 
// id: 1,
// image: IMG1,
// title: 'Fitness Full Responsive Website',
// github: 'https://github.com/SandeepMahawar27/React-Fitness-Web',
// demo: 'https://sandeepmahawar27.github.io/React-Fitness-Web/'
// },
//   {
// id: 2,
// image: IMG2,
// title: 'Available for UI/UX & Front-End Project.',
// github: 'https://www.github.com/',
// demo: 'https://cdn.dribbble.com/userupload/4355865/file/original-100dbe1c1e8cb8657ef7b8d763eff717.png?compress=1&resize=1024x768'
// },
// {
// id: 3,
// image: IMG3,
// title: 'Figma dashboard UI kit for data design web apps',
// github: 'https://www.github.com/',
// demo: 'https://cdn.dribbble.com/userupload/4386143/file/original-269d498ae29bbd97ca514fcea8411dd7.png?compress=1&resize=1024x768'
// },
// {
// id: 4,
// image: IMG4,
// title: 'Charts templates & inforgaphics in Figma.',
// github: 'https://www.github.com/',
// demo: 'https://cdn.dribbble.com/userupload/4385999/file/original-4e2b61316ef18774eb20e41a9fbff543.jpg?compress=1&resize=1024x768'
// },
// {
// id: 5,
// image: IMG5,
// title: 'Maintaing tasks and tracking progress.',
// github: 'https://www.github.com/',
// demo: 'https://cdn.dribbble.com/users/4710151/screenshots/20460757/media/a51337202ca3824cac9a3b93666d1dd4.png'
// },
// {
// id: 6,
// image: IMG6,
// title: 'Available for UI/UX & Front-End Project.',
// github: 'https://www.github.com/',
// demo: 'https://cdn.dribbble.com/userupload/4387182/file/original-25f89723ead99c0f909f7bcc9dbfb04f.png?compress=1&resize=1024x768'
// },
// ]

// const Portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Projects</h2>
//     <div className="container project_container">
//       {
//         data.map(({id, image, title, github, demo}) => {
//           return(
//             <article key={id} className='project_item'>
//           <div className="project_item-image">
//            <img src={image} alt={title} />
//           </div>
//           <h3>{title}</h3>
//             <div className="project_item-cta">
//             <a href={github} className='btn' target="_blank">GitHub</a>
//             <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
//             </div>
//       </article>
//           )
//         })
//       }    
//     </div>  
//     </section>
//   )
// }


const Portfolio = () => {
  return (
  <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Projects</h2>
     <div className="container project_container">
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG1} alt="" autoPlay controls muted/>
           </div>
             <h3>Fitness Full Responsive Website.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/SandeepMahawar27/React-Fitness-Web" className='btn' target="__blank">GitHub</a>
             <a href="https://sandeepmahawar27.github.io/React-Fitness-Web" className='btn btn-primary' target="__blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
      <div className="project_item-image">
            <video src={IMG2} alt="" autoPlay controls muted/>
           </div>
             <h3>Create a Login and SignUp Page using React-Router-Dom.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/SandeepMahawar27/React-Fitness-Web" className='btn' target="__blank">GitHub</a>
             <a href="https://sandeepmahawar27.github.io/React-Fitness-Web" className='btn btn-primary' target="__blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
      <div className="project_item-image">
            <video src={IMG3} alt="" autoPlay controls muted/>
           </div>
             <h3>Create a Project for Parashara Academy fully Responsive.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/SandeepMahawar27/parashara" className='btn' target="__blank">GitHub</a>
             <a href="https://sandeepmahawar27.github.io/parashara/" className='btn btn-primary' target="__blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG4} alt="" autoPlay controls muted/>
           </div>
             <h3>design and develop of TOP Courses with like and unlike functionality.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/SandeepMahawar27/TopCourcesApp" className='btn' target="__blank">GitHub</a>
             <a href="https://sandeepmahawar27.github.io/TopCourcesApp/" className='btn btn-primary' target="__blank">Live Demo</a>
             </div>
      </article>
      {/* <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG5} alt="" />
           </div>
             <h3>Maintaing tasks and tracking progress.</h3>
             <div className="project_item-cta">
             <a href="https://www.github.com/" className='btn' target="_blank">GitHub</a>
             <a href="https://www.dribble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG6} alt="" />
           </div>
             <h3>Available for UI/UX & Front-End Project.</h3>
             <div className="project_item-cta">
             <a href="https://www.github.com/" className='btn' target="_blank">GitHub</a>
             <a href="https://www.dribble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article> */}
       </div> 
   </section>
  )
}

export default Portfolio

