import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/general.scss'




/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { } from '@fortawesome/free-regular-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faTwitter, faPinterest, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add( faSquareFacebook, faTwitter, faPinterest, faLinkedinIn, faInstagram)

const app  = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
