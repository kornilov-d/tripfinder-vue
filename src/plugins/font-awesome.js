import { library } from '@fortawesome/fontawesome-svg-core'
import { faKey, faSearch, faSignInAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'

library.add(faUserSecret)
library.add(faSignInAlt)
library.add(faSearch)
library.add(faKey)

Vue.component('fa-icon', FontAwesomeIcon)
