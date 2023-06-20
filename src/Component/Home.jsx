/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { Component } from 'react'
// import AboutSchoolLists from './AboutSchoolLists';

// export class Home extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       aboutSchool:[
//         {
//           title: "A little history about the founder",
//           description: "The name of the founder of Inspired School is Joyce Kwadzokpoe. She is from Anfoega in the volta region and was born on the 24th of June",
//           author: "Written by Enam Kaka",
//           id: "1"
//         },

//         {
//           title: "Location of the school",
//           description: "Inspired School is located in Greater Accra, Ghana at Lapaz",
//           author: "Written by Amadeku Godfred",
//           id: "2"
//         },

//         {
//           title: "Courses offered in the School",
//           description: "We offer all kind of courses you can think of, like Business, IT, Science, Fashion, Media, Nursing, etc...",
//           author: "Written by Eric Agbo",
//           id: "3"
//         }
//     ]
//   }
//   }
//   render() {
//     return (
//       <div className="home">
//         <AboutSchoolLists aboutSchool = {this.state.aboutSchool} title = "About us"/>
//       </div>
//     )
//   }
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import AboutSchoolLists from './AboutSchoolLists'

// const Home = () => {
//   const [aboutSchool, setAboutSchool] = useState([
//     {
//       title: "A little history about the founder",
//       description: "The name of the founder of Inspired School is Joyce Kwadzokpoe. She is from Anfoega in the volta region and was born on the 24th of June",
//       author: "Written by Enam Kaka",
//       id: "1"
//     },
      
//     {
//       title: "Location of the school",
//       description: "Inspired School is located in Greater Accra, Ghana at Lapaz",
//       author: "Written by Amadeku Godfred",
//       id: "2"
//     },
      
//    {
//       title: "Courses offered in the School",
//       description: "We offer all kind of courses you can think of, like Business, IT, Science, Fashion, Media, Nursing, etc...",
//       author: "Written by Eric Agbo",
//       id: "3"
//     }
//   ], [])

//   useEffect(() => {
//     console.log("useEffect")
//   })
//   return (
//     <div className="home">
//       <AboutSchoolLists aboutSchool = {aboutSchool} title = "About us"/>
//     </div>
//   )
// }

// export default Home


import React from 'react'

const Home = () => {
  return (
    <div>
    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="https://img.freepik.com/premium-photo/high-school-lobby-with-blue-color-lockers-perspective-view-fitness-gym-sports-club-hallway-3d-illustration_738920-955.jpg?w=996" alt="Image of the school" width="100%"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="https://img.freepik.com/premium-photo/kuleli-military-high-school-istanbul-turkey_646314-2456.jpg?w=996" alt="..." width="100%"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="https://img.freepik.com/premium-photo/interior-traditional-japanese-school-classroom-made-wood-3d-render_103577-6998.jpg?w=900" alt="..." width="100%"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="https://img.freepik.com/premium-photo/abstract-bright-office-interior-with-work-places-blue-key-extreme-closeup-3d-rendering_476612-944.jpg?w=740" alt="..." width="100%"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    <div className="item">
      <img src="https://img.freepik.com/premium-photo/corridor-modern-industrial-building_155027-1467.jpg?w=740" alt="..." width="100%"/>
      <div className="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


    </div>
  )
}

export default Home



