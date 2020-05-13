import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
import createLogger from 'vuex/dist/logger';
// import actions from './actions';
// import getters from './getters';
import home from './modules/home';
import app from './modules/app';
import detail from './modules/detail';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	// actions,
	// getters,
  	modules: {
        app,
	      home,
        detail,
        user,
  	},
  	strict: debug,
  	plugins: debug ? [createLogger({})] : [],
});

export interface ActionContextBasic {
  	commit: Commit;
  	dispatch: Dispatch;
}
