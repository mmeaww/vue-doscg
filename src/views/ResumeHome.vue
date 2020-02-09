<template>
  <div>
    <div class="container-fluid row m-0">
      <div class="col-md-12" >
        <div class="box-detail" style="text-align: center;">
          <div class="box-name">
            <h1 align="center">Thanyalak Napanang</h1>
          </div>
          <p>Address: 428/5 Whizdom Avenue Ratchada - Ladprao Lat Phrao Road Chompon, Chatuchak, </p>
          <p>Bangkok 10900 Phone: 082-454-5935 | Email: mw.thanyalak@gmail.com</p>
          <p>Date of Birth: 9 December 1991</p>
        </div>
      </div>

      <div class="col-md-12" >
        <div class="box-desc">
          <span class="font-weight-bold text-uppercase">SUMMARY </span>
          <p>I am a Full stack developer with about 7 years of experience and currently i am developer on site at SCG and BBL. I have more experience about E-Commerce (Ascend Group and SCG) with a strong working by Agile and capable of working a variety of technology and software solution.  </p>
        </div>
      </div>

      <div class="col-md-5">
        <div class="box-desc">
          <span class="font-weight-bold text-uppercase">Education</span>
          <p class="font-weight-bold date-working">CHULALONGKORN UNIVERSITY</p>
          <p>Master of Science (2017-Present), Studying Master of Science degree, Business Software Development.</p>
          <br/>
          <p class="font-weight-bold date-working">KING MONGKUT’S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK </p>
          <p>Bachelor of Applied Science in Mathematics with Computer Science (20010-2013), Applied Mathematics (Applied Mathematics).</p>
        </div>
      </div>
      <div class="col-md-7">
        <div class="box-desc" style="line-height: 25px;">
          <span class="font-weight-bold text-uppercase">Skills</span><br>
          <span class="font-weight-bold">PHP Technology: </span>
          <span class="badge badge-light">Laravel</span>,
          <span class="badge badge-light">Yii</span>,
          <span class="badge badge-light">NGINX</span>,
          <span class="badge badge-light">MVC</span>,
          <span class="badge badge-light">OOP</span>
          <br/>
          <span class="font-weight-bold">NodeJS: </span>
          <span class="badge badge-light">ExpressJS</span>,
          <span class="badge badge-light">TypeScript</span>,
          <span class="badge badge-light">Mocha</span>
          <br/>
          <span class="font-weight-bold">Frontend Technology: </span>
          <span class="badge badge-light">Javascript</span>,
          <span class="badge badge-light">CSS</span>,
          <span class="badge badge-light">SCSS</span>,
          <span class="badge badge-light">HTML</span>,
          <span class="badge badge-light">React.js</span>
          <br/>
          <span class="font-weight-bold">Database: </span>
          <span class="badge badge-light">MySQL</span>,
          <span class="badge badge-light">MongoDb</span>
          <br/>
          <span class="font-weight-bold">Cloud: </span>
          <span class="badge badge-light">AWS(S3, Cloud9)</span>
          <br/>
          <span class="font-weight-bold">Software Development Tools: </span>
          <span class="badge badge-light">Docker</span>,
          <span class="badge badge-light">GIT</span>,
          <span class="badge badge-light">Jira</span>,
          <span class="badge badge-light">Gitlab</span>
          <br>
          <span class="font-weight-bold">Software Development methodology(SDLC): </span>
          <span class="badge badge-light">Agile</span>,
          <span class="badge badge-light">Waterfall</span>
          <br>
          <span class="font-weight-bold">Interesting: </span>
          <span class="badge badge-light">Cloud</span>,
          <span class="badge badge-light">Machine Learning</span>,
          <span class="badge badge-light">Big Data</span>
          <br>
        </div>
      </div>
    </div>

    <div class="container-fluid row m-0">
      <div class="col-md-12">
        <div class="box-desc">
          <span class="font-weight-bold text-uppercase">Work Experiences</span>
          <div class="row m-0 p-2">
            <div class="col-md-2">
              <span class="font-weight-bold date-working">August 2018 – Current</span>
            </div>
            <div class="col-md-10">
              <span class="font-weight-bold">Full Stack Developer at Emetworks (On-site SCG)</span>
              <p>- Develop a payment platform at SCG.</p>
              <p>- Developed by React.js, Node.js, Next.js, TypeScript, MobX, CSS, SCSS, MySql, MongoDb, etc.</p>
              <p>- Use programming to solve the routine job to reduce the time.</p>
              <p>- Working by Scrum Framework in Agile methodology.</p>
            </div>
          </div>
          <div class="row m-0 p-2">
            <div class="col-md-2">
              <span class="font-weight-bold date-working">August 2016 – July 2018</span>
            </div>
            <div class="col-md-10">
              <span class="font-weight-bold">Web Developer at PSSB co. Ltd, (On-site Ascend Group Co., Ltd.)</span>
              <p>- Develop and maintain online shopping website (front-end and back-end) of Ascend Commerce company (WeMall and WeLoveShopping).</p>
              <p>- Developed by Laravel Framework, Phalcon Framework, AngularJS, jQuery, CSS and MySql. </p>
              <p>-Working by Scrum Framework in Agile methodology.</p>
            </div>
          </div>
          <div class="row m-0 p-2">
            <div class="col-md-2">
              <span class="font-weight-bold date-working">August 2014 – July 2016</span>
            </div>
            <div class="col-md-10">
              <span class="font-weight-bold">Programmer at Bainisys co. Ltd</span>
              <p>- Develop and maintain Software Registration System.</p>
              <p>-Developed by Yii Framework, C#, jQuery, CSS and MySql.</p>
            </div>
          </div>
          <div class="row m-0 p-2">
            <div class="col-md-2">
              <span class="font-weight-bold date-working">April –May 2013 (2 months)</span>
            </div>
            <div class="col-md-10">
              <span class="font-weight-bold">Internship</span>
              <p>- Department of Special Investigation at Department of Digital Forensics Laboratary.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeHome'
}
</script>

<style scoped>
body {
  background-color: #97cbdc;
  font-family: sans-serif;
  font-size: 16px;
}

h1 {
  color: black;
  text-align: center;
  max-height: 80%;
  /* margin-left: 20px; */
}

p {
  margin: 0px;
}

ul {
  margin-bottom: 0px;
}

.box-detail {
  margin-top: 10px;
  background-color: white;
  padding: 10px;
}

.box-desc {
  margin-top: 10px;
  background-color: white;
  border-left: 6px solid #cfc1ab;
  padding: 10px;
}

.box-name {
  background-color: #efe9db;
  padding: 25px;
  box-shadow: 10px 10px #cfc1ab;
  text-align: center;
  max-width: 90%;
  margin: 45px;
}

.img-thumbnail {
  max-width: 100%;
}

.date-working {
  font-size: small;
}
</style>
