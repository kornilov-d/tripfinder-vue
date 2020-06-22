import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronDown,
  faChevronUp,
  faKey,
  faSearch,
  faSignInAlt, faSignOutAlt,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faVk } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue from 'vue'
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons'


library.add(faUserSecret)
library.add(faSignInAlt)
library.add(faSearch)
library.add(faKey)
library.add(faChevronDown)
library.add(faChevronUp)
library.add(faSignOutAlt)
library.add(faSignInAlt)
library.add(faFacebookSquare)
library.add(faVk)
library.add(faClock)
library.add(faBookmark)

Vue.component('fa-icon', FontAwesomeIcon)
