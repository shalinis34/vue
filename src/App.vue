<template>
  <div id="app">
    <div class="main-view-section">
      <div class="header-section">
        <img src="../src/assets/images/godfather-header.jpg"/>
      </div>
      <div class="overlay-view">
        <div class="row ml-0 mr-0">
          <div class="col-md-4  pr-0 pl-0">
            <div class="left-side-view">
              <div class="left-image-section">
                <img src="../src/assets/images/logo/the-godfather.svg"/>
              </div>
              <div>
                <div class="profile-name-view text-center">
                  <template v-for="(employee,index)  in getEmployees">
                    <a href="javascript:void(0);" v-on:click="changeEmployee(index)"
                       v-bind:style="{  fontSize: 30 +  parseInt(employee.popularity) + 'px' }"
                       :class="{ 'active employee-name': index === intCurrentIndex ,
                       'employee-name': currentObject.colleagues.includes(employee.name),
                       }"
                    >
                      <div class="profile-name-view " v-html="employee.name"></div>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 right-side-view">
            <div class="row right-view-item">
              <div class="col-sm-1"></div>
              <div class="col-sm-10">
                <div class="row">
                  <div class="col-sm-3 col-md-6 col-lg-3">
                    <div class="profile-image-section">
                      <img :src="'../src/assets/images/profiles/'+currentObject.image"/>
                    </div>
                  </div>
                  <div class="col-sm-9 col-md-12 col-lg-9">
                    <div class="right-profile-name">
                      <h1 v-html="currentObject.name"></h1>
                    </div>
                    <div class="row popularity-item mb-3 mt-5">
                      <div class="col-sm-2 col-md-4 col-lg-3">
                        <p class="popularity-heading">Popularity</p>
                      </div>
                      <div class="col-sm-10 col-md-8 col-lg-9">
                        <div class="slidecontainer">
                          <input
                              type="range"
                              min="1"
                              max="100"
                              v-model="currentObject.popularity"
                              class="slider"
                              id="myRange"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="biography-view">
                      <h4>Biography</h4>
                      <p v-html="currentObject.biography"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      'intCurrentIndex': 0,
      "employees": [
        {
          "name": "Vito Corleone",
          "popularity": 5,
          "biography": "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
          "image": "Vito Corleone.jpg",
          "colleagues": ["Carlo Rizzi", "Luci Mancini"]
        },
        {
          "name": "Carmelia Corleone",
          "popularity": 2,
          "biography": "Carmela was born in Sicily Italy in 1897, and emigrated to the United States shortly after the turn of the century. She married Vito Corleone in 1914; they were married for just over 40 years until Vito's death in 1955. They had four children – Sonny, Fredo, Michael and Connie. They also took in Sonny's friend Tom Hagen, who later served as the family consigliere. In the novel, Carmela Corleone is portrayed as a traditional Italian immigrant woman who speaks in very broken English. In the movies, however, she speaks fluent English as an adult, with a marked New York accent. In the novel, she develops a close relationship with Michael's girlfriend and future wife, Kay. She is given more expansive dialogue in The Godfather Part II, notably when she confronts her daughter Connie about her behavior early in the film, and when she discusses family life with Michael, who fears that his role as Don of the Corleone criminal empire will cost him his family. Carmela Corleone dies toward the end of the sequel.",
          "image": "Carmelia Corleone.jpg",
          "colleagues": []
        },
        {
          "name": "Carlo Rizzi",
          "popularity": 5,
          "biography": "A half northern Italian, half Sicilian native of Nevada and former labourer, Rizzi migrated to New York City following trouble with the law and became a friend of Sonny Corleone, through whom he met Sonny's sister Connie in 1941 at a surprise birthday party for Sonny's father Vito. They were married on the last Saturday of August 1945 in a traditional Italian wedding at the Corleone mall, a compromise made in order to appease Vito, who was disappointed with his daughter's choice in a husband.",
          "image": "Carlo Rizzi.jpg",
          "colleagues": ["Vito Corleone", "Carmelia Corleone"]
        },
        {
          "name": "Luci Mancini",
          "popularity": 5,
          "biography": "In the novel, Lucy is a fairly important supporting character, with several chapters dedicated to her story. After Sonny's death, Vito's consigliere, Tom Hagen sends Lucy to Las Vegas. She is given a small interest (five and later ten) in one of the family's hotels, primarily so that she can keep an eye on Vito's middle son, Fredo, who is learning the hotel and casino business. She also serves as a shareholder-of-record who has no criminal record: several such owners are necessary for a valid gaming license. On paper she is a millionaire, although she does not vote her shares in the casinos.",
          "image": "Luci Mancini.jpg",
          "colleagues": ["Carmelia Corleone"]
        }
      ]
    }
  },
  computed: {
    currentObject() {
      return this.getEmployees[this.intCurrentIndex];
    },
    getEmployees() {
      return this.employees;
    }
  },
  methods:{
    changeEmployee(index){
      this.intCurrentIndex = index;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header-section img {
  width: 100%;
  height: 380px;
}

.left-image-section {
  height: 420px;
  padding: 50px;
  width: 300px;
  margin: auto;
}

.left-side-view {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.left-side-view img {
  width: 100%;
  margin-top: 50px;
}

.profile-name-view a.active {
  background-color: #404146;
  display: block;
}

.profile-name-view a {
  text-decoration: none !important;
}

.profile-name-view {
  padding: 5px;
  margin-bottom: 0 !important;
  font-weight: 300;
  color: #ffffff;
  word-break: break-all;
}

.employee-name ,.employee-name .profile-name-view {
  color: #3da6c6;
}

.right-view-item {
  margin-top: 25%;
  color: #ffffff;
}

.profile-image-section {
  width: 150px;
  height: 150px;
  border: 1px solid #696969;
  border-radius: 5px;
  box-shadow: 0 0 26px 4px #252323;
  margin-top: 30px;
}

.profile-image-section img {
  width: 100%;
  border-radius: 5px;
}

.right-profile-name {
  margin-top: 24px;
}

.right-profile-name h1 {
  font-weight: 300;
}

.popularity-heading {
  font-size: 24px;
  font-weight: 300;
}

.slidecontainer {
  width: 100%;
  margin-top: 5px;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #000;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 15px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 25px;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 25px;
}

.biography-view {
  padding: 20px;
  background-color: #1a1d24;
  border-radius: 5px;
  font-weight: 300;
}

.biography-view h4 {
  font-weight: 400;
}

.overlay-view {
  position: absolute;
  top: 0px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .left-image-section {
    padding: 50px;
    margin: auto;
  }
}

@media (min-width: 1301px) and (max-width: 1800px) {
  .header-section img {
    height: 368px;
  }
}

@media (max-width: 1375px) and (min-width: 1301px) {
  .header-section img {
    height: 297px;
  }

  .left-image-section {
    height: 340px;
  }
}

@media (max-width: 1300px) and (min-width: 1280px) {
  .header-section img {
    height: 285px;
  }

  .left-image-section {
    height: 335px;
  }
}

</style>
