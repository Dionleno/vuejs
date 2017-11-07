import axios from 'axios';
import {URI} from '@/api/const';
import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

export const HTTP = axios.create({
  baseURL: URI.local
})

export function setTokenApi (token) {
	Vue.localStorage.set('token',token)
}

export const AUTH = axios.create({
  baseURL: URI.local,
  headers: {
    Authorization: 'Bearer ' + Vue.localStorage.get('token')
  }
})

