// Redux
// sebuah state manajemen yang mana ini adalah threatparty diluar dari react bahkan readux tidak exclusif hanya untuk react, bersifat global untuk javascript apps
// management state dengan redux
// create store
// reducer
//

// yarn add redux
const redux = require('redux');
const createStore = redux.createStore; //fungsion createStore
const initialState = {
	value: 0,
	age: 22,
};
// konsep
// reducer; suatu fungsi yang mana store diatas value nya atau statenya bisa diupdate hanya oleh reducer. jadi gaada yang bisa mengupdate store atau state selain reducer. sehingga ketika kita memiliki reducer kita dapat mengetrack fungsi mana yang merubah value di store. jadi lebih terpantau, ketika komponen dalam suatu aplikasi melakukan update pada store. karena setiap update yang dilakukan oleh komponen kita bisa memantaunya pada reducer. reducer: berupa fungtion yang bisa merubah store
//rootReducer: maksud membuat beberapa reducer pada satu tempat, state pada rootReducer yang di sebut global. sebagai wadah besar untuk menyimpan object object
const rootReducer = (state = initialState, action) => {
	// console.log(action)// agar tau action apa yang dimunculkan
	// if (action.type === 'ADD_AGE') {
	// 	return {
	// 		...state, // agar poperty value tidak terhapus
	// 		age: state.age + 1, // tidak boleh langsung seperti ini atau hal yang ingin dirubah, itu akan menggantikan initialState dengan object baru
	// 	};
	// }
	// if (action.type === 'CHANGE_VALUE') {
	// 	return {
	// 		...state,
	// 		value: state.value + action.newValue,
	// 	};
	// }
	// return state;
	switch (
		action.type // ini adalah statelist hasilnya sama seperti if
	) {
		case 'ADD_AGE':
			return {
				...state, // agar poperty value tidak terhapus
				age: state.age + 1, // tidak boleh langsung seperti ini atau hal yang ingin dirubah, itu akan menggantikan initialState dengan object baru
			};
		case 'CHANGE_VALUE':
			return {
				...state,
				value: state.value + action.newValue,
			};
		default:
			return state;
	}
};
// store; sebuah wadah besar untuk menyimpan state dan value secara global
const store = createStore(rootReducer);
console.log(store.getState()); // akan menampilan value: 0 dan age :22 dalam bentuk object, state awal. store change: {value: 0, age :22}
// Subcription: proses pemanggilan store yang kita perlukan. setiap ada perubahan pada store subcription akan terpanggil. sama halnya seperti subcription pada yt
store.subscribe(() => {
	console.log('store change: ', store.getState());
}); //lebih baik letak kan sebelum dispatch, akan menyetak store change: { berisikan hal hal yang ada di state}

// Dispatch (Dispatching action): proses pemanggilan sebuah instruksi yang disediakan oleh reducer, katakan reducer ini sebuah fungtion untuk menambah satu value di store.Proses pemanggilan reducer, reducer tidak bekerja kalo tidak ada pemanggilan, pemanggilan staslisth( berada di dalam reducer)
//type disini yang akan menentukan action apa yang dilakukan oleh reducer, naming convention.menggunakan capital
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
console.log(store.getState()); // store change: {value: 0, age :22}. akan menampilan value: 12 dan age :23 dalam bentuk object

// predictable
// centralized
// debuggable
// flexible

// Context
// state manajemen lain, context. dibuat exlusif untuk react
