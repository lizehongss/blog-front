import Vue from 'vue'
import * as filters from '~/filters'

// use filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))