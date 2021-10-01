import { Container, Row, Col, Button, Table, Footer } from "bootstrap"
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
/* import twitter from '../assets/twitter.png' */
import youtube from '../assets/youtube.png'


const HomeFooter = () => {
    return (

<>
<footer className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <a href="#"><img src={facebook} height={50} /></a>
              <a href="#"><img src={instagram} height={50} /></a>
              {/* <a href="#"><img src={twitter} height={50} /></a> */}
              <a href="#"><img src={youtube} height={50} /></a>
            </div>
          </div>
          <table style={{textAlign: 'left'}} className="table main-color table-borderless">
            <thead>
              <tr>
                <td>Audio and Subtitles</td>
                <td>Audio Descriptions</td>
                <td>Help Center</td>
                <td>Gift Cards</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Media Center</td>
                <td>Investor Relations</td>
                <td>Jobs</td>
                <td>Terma of Use</td>
              </tr>
              <tr>
                <td>Privacy</td>
                <td>Legal Notices</td>
                <td>Cookie Preferences</td>
                <td>Corporate Information</td>
              </tr>
              <tr>
                <td>Contact Us</td>
              </tr>
              <tr>
                <td>
                  <button type="button" className="btn btn-outline-light">Service Code</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{textAlign: 'left'}}>© 1997-2019 Netflix, Inc. </div>
        </div>
      </footer>
</>
)
}

export default HomeFooter