(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{100:function(e,t,r){e.exports={Searchbar:"Searchbar_Searchbar__aTxF_",SearchForm:"Searchbar_SearchForm__29ASD",SearchFormButton:"Searchbar_SearchFormButton__1-91V",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__d72hy",SearchFormInput:"Searchbar_SearchFormInput__3wO4_"}},105:function(e,t,r){"use strict";r.r(t);var a=r(81),n=r(20),s=r(21),c=r(23),o=r(22),i=r(0),u=r(100),l=r.n(u),h=r(1),p=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.query),e.setState({query:""})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(h.jsx)("header",{className:l.a.Searchbar,children:Object(h.jsxs)("form",{className:l.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(h.jsx)("button",{type:"submit",className:l.a.SearchFormButton,onSubmit:this.handleSubmit,children:Object(h.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:l.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",onChange:this.handleChange,onKeyDown:this.handleKeyDown})]})})}}]),r}(i.Component),b=r(73),m=r(74),d=r(80),f=r(15),j=r.n(f),v=r(24),g=r(14),O=r.n(g);O.a.defaults.baseURL="https://api.themoviedb.org/3",O.a.defaults.params={api_key:"ffddee44025dd24685ea61d637d56d24",language:"en-US",include_adult:"false"};var y=function(){var e=Object(v.a)(j.a.mark((function e(t){var r,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,a=t.page,e.prev=1,e.next=4,O.a.get("/search/movie",{params:{query:r,page:a}});case 4:return n=e.sent,s=n.data,e.abrupt("return",s.results);case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",{error:e.t0}),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();var S=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(r){console.log("Get state error: ",r)}},_=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){var e;Object(n.a)(this,r);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],searchQuery:"",currentPage:1,isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,movies:[]})},e.searchMovies=function(){var t=e.state,r=t.currentPage,n={query:t.searchQuery,page:r};e.setState({isLoading:!0}),y(n).then((function(t){e.setState((function(e){return{movies:Object(a.a)(t),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=S("savedState");void 0!==e&&e!==this.state&&this.setState({searchQuery:e.searchQuery,currentPage:e.currentPage-1})}},{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.searchMovies(),localStorage.setItem("savedState",JSON.stringify(this.state))}},{key:"render",value:function(){var e=this.state,t=e.movies,r=e.isLoading,a=this.props.genresList;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{onSubmit:this.onChangeQuery}),Object(h.jsx)(d.a,{movies:t,genresList:a}),r&&Object(h.jsx)(b.a,{}),t.length>19&&!r&&Object(h.jsx)(m.a,{onClick:this.searchMovies})]})}}]),r}(i.Component);_.defaultProps={genresList:[]};t.default=_},71:function(e,t,r){e.exports={buttonLoad:"Button_buttonLoad__3AieG"}},72:function(e,t,r){"use strict";t.a=function(e){var t=e.map((function(e){return e.name})),r=[];return t.length<3?r=t:(r=t.slice(0,2)).push("Other"),r.join(", ")}},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(20),n=r(21),s=r(23),c=r(22),o=r(0),i=r(75),u=r.n(i),l=(r(76),r(1)),h=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){return Object(l.jsx)(u.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),r}(o.Component)},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(20),n=r(21),s=r(23),c=r(22),o=r(0),i=r(71),u=r.n(i),l=r(1),h=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var e=this.props.onClick;return Object(l.jsx)("button",{type:"button",className:u.a.buttonLoad,onClick:e,children:"Load more"})}}]),r}(o.Component)},77:function(e,t,r){e.exports={MovieList:"MovieList_MovieList__1FSgS"}},78:function(e,t,r){e.exports={MovieItem:"MovieItem_MovieItem__1dVZ3"}},79:function(e,t,r){},80:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var a=r(20),n=r(21),s=r(23),c=r(22),o=r(0),i=r(2),u=r(77),l=r.n(u),h=r(11),p=r(78),b=r.n(p),m=r(79),d=r.n(m),f=r(1),j=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this.props,t=e.poster,r=e.title,a=e.genres,n=e.release;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("img",{className:d.a.filmsGalleryItemPoster,src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r}),Object(f.jsxs)("p",{className:d.a.filmsGalleryItemTitle,children:[r.toUpperCase()," ",n&&"(".concat(n.split("-")[0],")")]}),Object(f.jsx)("p",{className:d.a.filmsGalleryItemGenres,children:a})]})}}]),r}(o.Component);j.defaultProps={title:"",release:"",poster:"",genres:""};var v=Object(i.f)(j),g=r(72);var O=function(e,t){var r=t.filter((function(t){return e.includes(t.id)}));return Object(g.a)(r)},y=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this.props,t=e.id,r=e.poster,a=e.title,n=e.genresIds,s=e.release,c=e.genresList,o=O(n,c);return Object(f.jsx)("li",{className:b.a.MovieItem,children:Object(f.jsx)(h.b,{to:{pathname:"/movies/".concat(t),state:{from:this.props.location}},children:Object(f.jsx)(v,{poster:r,title:a,genres:o,release:s})})},t)}}]),r}(o.Component);y.defaultProps={genresList:[],id:"",title:"",release:"",poster:"",genresIds:""};var S=Object(i.f)(y),_=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"render",value:function(){var e=this.props.movies,t=this.props.genresList;return Object(f.jsx)("ul",{className:l.a.MovieList,children:e.map((function(e){return Object(f.jsx)(S,{id:e.id,title:e.title,release:e.release_date,poster:e.poster_path,genresIds:e.genre_ids,genresList:t},e.id)}))})}}]),r}(o.Component);_.defaultProps={genresList:[],movies:[]};var x=Object(i.f)(_)}}]);
//# sourceMappingURL=movies-view.092afa1d.chunk.js.map