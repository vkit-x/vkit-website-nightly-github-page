"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[390],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={},s="MLS Based Distortion",c={unversionedId:"feature/geometric-distortion/mls",id:"feature/geometric-distortion/mls",title:"MLS Based Distortion",description:"similarity_mls",source:"@site/docs/feature/geometric-distortion/mls.md",sourceDirName:"feature/geometric-distortion",slug:"/feature/geometric-distortion/mls",permalink:"/feature/geometric-distortion/mls",editUrl:"https://github.com/vkit-x/vkit/edit/master/website/docs/feature/geometric-distortion/mls.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Camera-model Based Distortion",permalink:"/feature/geometric-distortion/camera"},next:{title:"Affine Transformation Based Distortion",permalink:"/feature/geometric-distortion/affine"}},u=[{value:"<code>similarity_mls</code>",id:"similarity_mls",children:[],level:2}],m={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mls-based-distortion"},"MLS Based Distortion"),(0,o.kt)("h2",{id:"similarity_mls"},(0,o.kt)("inlineCode",{parentName:"h2"},"similarity_mls")),(0,o.kt)("p",null,"Description: Similarity transformation as described in ",(0,o.kt)("a",{parentName:"p",href:"https://people.engr.tamu.edu/schaefer/research/mls.pdf"},"Image Deformation Using Moving Least Squares")),(0,o.kt)("p",null,"Effect:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("video",{width:"75%",height:"75%",autoplay:"true",muted:"true",playsinline:"true",loop:"true",controls:"ture"},(0,o.kt)("source",{src:"/geo/similarity_mls.mp4",type:"video/mp4"}))),(0,o.kt)("p",null,"Import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from vkit.augmentation.geometric_distortion import (\n    SimilarityMlsConfig,\n    similarity_mls,\n)\n")),(0,o.kt)("p",null,"Configuration type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@attr.define\nclass SimilarityMlsConfig:\n    src_handle_points: Sequence[Point]\n    dst_handle_points: Sequence[Point]\n    grid_size: int\n    resize_as_src: bool = False\n")),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"src_handle_points"),":  The control points"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dst_handle_points"),": The deformed points"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resize_as_src"),": If set ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),", will reshape the distorted image as the original shape")))}p.isMDXComponent=!0}}]);