var K=Object.defineProperty;var Q=(r,e,t)=>e in r?K(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var n=(r,e,t)=>(Q(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var k=(r=>(r.Default="default",r.Page="page",r.NotFound="not-found",r))(k||{});class I{constructor(e,t,s){n(this,"url");n(this,"type");n(this,"routing");this.url=e,this.type=t,this.routing=s}}class W{constructor(){n(this,"fontSize",14);n(this,"letterSpace",0);n(this,"lineHeight",1.15);n(this,"contrast","dark");n(this,"showSettings",!0)}}var m=(r=>(r.Light="light",r.Dark="dark",r.LightHigh="light-high",r.DarkHigh="dark-high",r))(m||{});const b=class b{constructor(){n(this,"_settings",new W);if(b._instance)return b._instance;b._instance=this}get settings(){return this._settings}set settings(e){this._settings=e,this.setFontSize(this.settings.fontSize),this.setLetterSpace(this.settings.letterSpace),this.setLineHeight(this.settings.lineHeight),this.setContrast(),this.setLocalStorageSettings()}static get instance(){return b._instance||(b._instance=new b),b._instance}getLocalStorageSettings(){const e=localStorage.getItem("settings-vi");if(!e)return;const t=JSON.parse(e),s=this.parseLocalStorageSettings(t);this.settings={...s}}setLocalStorageSettings(){localStorage.setItem("settings-vi",JSON.stringify(this.settings))}setLightContrast(){document.body.classList.remove("dark"),document.body.classList.remove("dark-high"),document.body.classList.remove("light-high"),document.body.classList.add("light")}setDarkContrast(){document.body.classList.remove("light"),document.body.classList.remove("light-high"),document.body.classList.remove("dark-high"),document.body.classList.add("dark")}setLightHighContrast(){document.body.classList.remove("light"),document.body.classList.remove("dark"),document.body.classList.remove("dark-high"),document.body.classList.add("light-high")}setDarkHighContrast(){document.body.classList.remove("light"),document.body.classList.remove("dark"),document.body.classList.remove("light-high"),document.body.classList.add("dark-high")}setFontSize(e){document.documentElement.style.setProperty("font-size",e.toString()+"px")}setContrast(){switch(this.settings.contrast){case m.Light:this.setLightContrast();break;case m.Dark:this.setDarkContrast();break;case m.LightHigh:this.setLightHighContrast();break;default:this.setDarkHighContrast();break}}setLetterSpace(e){document.documentElement.style.setProperty("letter-spacing",e.toString()+"rem")}setLineHeight(e){document.documentElement.style.setProperty("line-height",e.toString())}parseLocalStorageSettings(e){let t=new W;return t.contrast=e.contrast,t.fontSize=e.fontSize,t.lineHeight=e.lineHeight,t.letterSpace=e.letterSpace,t.showSettings=e.showSettings,t}};n(b,"_instance");let d=b;class T{constructor(e,t,s=2){n(this,"type");n(this,"message");n(this,"duration");this.type=e,this.message=t,this.duration=s}static createEmpty(){return new T("info","",2)}}var M=(r=>(r.Error="error",r.Info="info",r))(M||{});const y=class y{constructor(){n(this,"_snackbar",new T(M.Info,""));n(this,"_live",document.body.querySelector("app-snackbar"));if(y._instance)return y._instance;y._instance=this}static get instance(){return y._instance||(y._instance=new y),y._instance}get snackbar(){return this._snackbar}set snackbar(e){this._snackbar=e}get live(){return this._live}set live(e){this._live=e}updateSnackbar(e,t,s=5){this.live&&(this.live.snackbar=new T(e,t,s))}resetSnackbar(){this.live&&this.live.resetSnackbar()}};n(y,"_instance");let E=y;class Z extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"routes",[]);this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){window.addEventListener("hashchange",()=>{this.checkRoute()})}addRoutes(t){this.routes=[...t],this.checkRoute()}checkRoute(){const t=window.location.hash.slice(2);this.changeRoute(t)}changeRoute(t){if(E.instance.resetSnackbar(),t){const s=this.routes.findIndex(i=>i.url===t);this.shadowRoot.innerHTML=this.routes[s]?this.routes[s].routing():this.sendNotFound()}else{this.checkParams(window.location.search);const s=this.routes.filter(i=>i.type===k.Default);s?window.location.hash="#/"+s[0].url:this.sendNotFound()}}sendNotFound(){const t=this.routes.filter(s=>s.type===k.NotFound);return t.length===0||(window.location.hash="#/"+t[0].url,this.changeRoute(t[0].url)),"404: Not found"}checkParams(t){const s=new URLSearchParams(t),i=new W;let a=!1;if(s.forEach(o=>{switch(a=!0,o){case"blind":i.showSettings=!1;break;case"vi":i.fontSize=24,i.contrast=m.DarkHigh;break;case"fine-motor":i.fontSize=24;break;case"color-blindness":i.contrast=m.DarkHigh;break}}),a){const o=window.location.pathname+window.location.hash;history.replaceState(null,"",o)}d.instance.settings={...i}}}customElements.define("app-router",Z);class tt extends HTMLElement{constructor(){super();n(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
            <div class="loader">
                <div id="loader-spin"></div>
                <p class="loader-text">Loading...</p>
            </div>

            <style>
                .loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100dvh;
                    width: 100vw;
                    background-color: var(--surface-container);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #loader-spin {
                    position: absolute;
                    bottom: 24px;
                    width: 32px;
                    height: 32px;
                    margin: 16px;
                    border-radius: 50%;
                    animation: rotate 1s linear infinite
                }
                
                #loader-spin::before {
                    content: "";
                    box-sizing: border-box;
                    position: absolute;
                    inset: 0px;
                    border-radius: 50%;
                    border: 3px solid var(--on-surface);
                    animation: prixClipFix 2s linear infinite;
                }
                
                @keyframes rotate {
                    100% {
                        transform: rotate(360deg)
                    }
                }
                
                @keyframes prixClipFix {
                    0% {
                        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)
                    }
                
                    25% {
                        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)
                    }
                
                    50% {
                        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)
                    }
                
                    75% {
                        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)
                    }
                
                    100% {
                        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)
                    }
                }
            </style>
            `}}customElements.define("app-loader",tt);class F{constructor(e,t){n(this,"color");n(this,"opacity");this.color=e,this.opacity=t}static createEmpty(){return new F("#008000",1)}}class O{constructor(e,t,s){n(this,"propertyName");n(this,"displayName");n(this,"type");this.propertyName=e,this.displayName=t,this.type=s}static createEmpty(){return new O("","","string")}}var H=(r=>(r.String="string",r.Image="image",r.Number="number",r))(H||{});class D{constructor(e,t,s,i,a,o){n(this,"name");n(this,"layer");n(this,"url");n(this,"style");n(this,"tags");n(this,"relevantProperties");this.name=e,this.layer=t,this.url=s,this.style=i,this.tags=a,this.relevantProperties=o}static createEmpty(){return new D("","","",F.createEmpty(),[],[O.createEmpty()])}}const v=class v{constructor(){n(this,"CATEGORIES_URL","./json/categories.json");n(this,"_data",{categories:[]});if(v._instance)return v._instance;v._instance=this}static get instance(){return v._instance||(v._instance=new v),v._instance}get data(){return this._data}set data(e){this._data=e}async getData(){if(this.data.categories.length!==0)return this._data;{let e=await this.fetchAppData(this.CATEGORIES_URL);return e=this.parseData(e),this.data=e,e}}async fetchAppData(e){try{const t=await fetch(e).then(i=>i.json()),s=await Promise.all(t.categories.map(async i=>{const a=await Promise.all(i.groups.map(async o=>{if(typeof o=="string")try{const c=await fetch(o);if(c.ok)return c.json();throw new Error("Errore durante il recupero dei dati.")}catch(c){return console.error(c),null}else return o}));return i.groups=a,i}));return{...t,categories:s}}catch(t){throw console.error("Errore durante il recupero dei dati JSON.",t),t}}parseData(e){return{categories:e.categories.map(s=>({name:s.name,groups:s.groups.map(i=>this.parseGroup(i))}))}}parseGroup(e){return Array.isArray(e)?e:{name:e.name,layers:e.layers.map(t=>this.parseLayer(t))}}parseLayer(e){return new D(e.name,e.layer,e.layer_url_wfs,new F(e.style.color,parseFloat(e.style.opacity)),e.tags,e.relevant_properties.map(t=>{let s=O.createEmpty();switch(s.displayName=t.display_name,s.propertyName=t.property_name,t.type){case"image":s.type=H.Image;break;case"number":s.type=H.Number;break;default:s.type=H.String;break}return s}))}getAllTags(e){let t=[];return e.categories.map(i=>{i.groups.map(a=>{typeof a!="string"&&a.layers.map(o=>{o.tags.map(c=>{t.push(c)})})})}),[...new Set(t)]}filterLayersByTags(e){let t=[];return e.forEach(i=>{this.filterLayersByTag(i).forEach(o=>t.push(o))}),[...new Set(t)]}filterLayersByTag(e){let t=[];return t=this.data.categories.flatMap(s=>s.groups.flatMap(i=>typeof i=="string"?[D.createEmpty()]:i.layers.filter(a=>a.tags.some(o=>o.includes(e))))),t}};n(v,"_instance");let q=v;const w=class w{constructor(){n(this,"_activeLayers",[]);if(w._instance)return w._instance;w._instance=this}static get instance(){return w._instance||(w._instance=new w),w._instance}get activeLayers(){return this._activeLayers}set activeLayers(e){this._activeLayers=e,localStorage.setItem("layers-vi",JSON.stringify(this.activeLayers))}getSavedLayers(){const e=localStorage.getItem("layers-vi");if(!e)return;const t=JSON.parse(e);let s=[];s=t.map(i=>this.parseLayer(i)),this._activeLayers=s}parseLayer(e){return new D(e.name,e.layer,e.url=e.url,new F(e.style.color,e.style.opacity),e.tags,e.relevantProperties.map(t=>{let s=O.createEmpty();switch(s.displayName=t.displayName,s.propertyName=t.propertyName,t.type){case"image":s.type=H.Image;break;case"number":s.type=H.Number;break;default:s.type=H.String;break}return s}))}};n(w,"_instance");let A=w;class V extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_tag","");this.shadowRoot=this.attachShadow({mode:"closed"})}get tag(){return this._tag}set tag(t){this._tag=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <button type="button" class="tag-chip">${this.tag.charAt(0).toUpperCase()+this.tag.slice(1)}</button>

            <style>
                .tag-chip {
                    cursor: pointer;
                    width: 100%;
                    display: block;
                    color: var(--on-surface);
                    background-color: var(--surface-container);
                    border: 1px solid var(--outline);
                    padding: 8px 8px;
                    border-radius: var( --border-radius-s);
                    font-size: 1rem;
                    letter-spacing: inherit;
                    line-height: inherit;
                }

                .tag-chip:hover {
                    background-color:  var(--surface-container-highest); 
                    border-color: var(--primary);  
                }
            </style>
            `}setup(){this.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tag-selected",{detail:{tag:this.tag}}))})}}customElements.define("app-tag-chip",V);class et extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_tags",[]);n(this,"_currentPageTags",[]);n(this,"_currentPage",0);n(this,"_tagsPerPage",8);n(this,"handleCheckbox",t=>{const s=t.target;this.dispatchEvent(new CustomEvent("tag-selected",{detail:{tag:s.tag}}))});this.shadowRoot=this.attachShadow({mode:"closed"})}get tags(){return this._tags}set tags(t){this._tags=t,this.connectedCallback()}get currentPageTags(){return this._currentPageTags}set currentPageTags(t){this._currentPageTags=t}get currentPage(){return this._currentPage}set currentPage(t){this._currentPage=t}get tagsPerPage(){return this._tagsPerPage}set tagsPerPage(t){this._tagsPerPage=t}connectedCallback(){this.render(),this.tags.length!==0&&(this.paginateTags(),this.setup())}render(){this.shadowRoot.innerHTML=`
            <div class="pagination">                    
                <p class="desc">Choose a category to load the associated points of interest.</p>
                <p tabindex="-1" class="current-page">Page ${this.currentPage+1} of ${this.getPagesNumber()+1}</p>

                <div class="tags"></div>

                <div class="pagination-buttons">
                    <button type="button" class="pagination-btn prev-btn" aria-label="Previous page">
                        <span class="material-symbols-outlined" aria-hidden="true">chevron_left</span>
                    </button>
                    <button type="button" class="pagination-btn next-btn" aria-label="Next page">
                        <span class="material-symbols-outlined" aria-hidden="true">chevron_right</span>
                    </button>
                </div>
            </div>

            <style>
                p {
                    color: var(--on-surface-variant);
                }

                button {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    cursor: pointer;
                }

                button[disabled] {
                    cursor: not-allowed;
                    opacity: 0.5;
                }

                .desc {
                    text-align: center;
                }

                .current-page {
                    text-align: center;
                }

                .pagination-buttons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 8px 0 0 0;
                }

                .pagination-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    min-height: 40px;
                    min-width: 40px;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-s);
                    box-sizing: border-box;
                }

                .tags {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){const t=this.shadowRoot.querySelector(".prev-btn"),s=this.shadowRoot.querySelector(".next-btn");t&&s&&(t.addEventListener("click",()=>this.prevPage()),s.addEventListener("click",()=>this.nextPage()))}update(){const t=this.shadowRoot.querySelector(".current-page");if(!t)return;t.innerHTML=`Page ${this.currentPage+1} of ${this.getPagesNumber()+1}`;const s=this.shadowRoot.querySelector(".prev-btn"),i=this.shadowRoot.querySelector(".next-btn");if(!s||!i)return;this.currentPage===0?(s.setAttribute("disabled",""),s.style.visibility="hidden"):(s.removeAttribute("disabled"),s.style.visibility="visible"),this.currentPage===this.getPagesNumber()?(i.setAttribute("disabled",""),i.style.visibility="hidden"):(i.removeAttribute("disabled"),i.style.visibility="visible"),Array.from(this.shadowRoot.querySelectorAll("app-tag-chip")).forEach(o=>o.addEventListener("tag-selected",this.handleCheckbox))}paginateTags(){const t=this.currentPage*this.tagsPerPage;let s=t+this.tagsPerPage;s>this.tags.length&&(s=this.tags.length);const i=this.shadowRoot.querySelector(".tags");if(i){i.innerHTML="",this.currentPageTags=[];for(let a=t;a<s;a++){let o=this.tags[a];this.currentPageTags.push(o);let c=this.createChip(o);i.append(c)}this.update()}}createChip(t){let s=new V;return s.tag=t,s}getPagesNumber(){return Math.floor(this.tags.length/this.tagsPerPage)}prevPage(){if(this.currentPage>0){this.currentPage--,this.paginateTags();const t=this.shadowRoot.querySelector(".current-page");t&&t.focus()}}nextPage(){if(this.currentPage<this.getPagesNumber()){this.currentPage++,this.paginateTags();const t=this.shadowRoot.querySelector(".current-page");t&&t.focus()}}}customElements.define("app-tags-wall",et);class st extends HTMLElement{constructor(){super();n(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}async connectedCallback(){await q.instance.getData(),this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="categories-page">
                <div class="page-header">
                    <h1 tabindex="-1" class="categories-page-title">Explore categories</h1>
                </div>
                <app-tags-wall></app-tags-wall>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .categories-page {
                    position: relative;
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }

                .categories-page-title {
                    text-align: center;
                    font-size: 1rem;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus()}setup(){const t=this.shadowRoot.querySelector("app-tags-wall");if(!t)return;let s=q.instance.getAllTags(q.instance.data);t.tags=s,t.addEventListener("tag-selected",i=>{A.instance.activeLayers=q.instance.filterLayersByTag(i.detail.tag),window.location.hash="/around-you"})}}customElements.define("page-categories",st);const S=class S{constructor(){n(this,"listeners",{});if(S._instance)return S._instance;S._instance=this}static get instance(){return S._instance||(S._instance=new S),S._instance}subscribe(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}unsubscribe(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(s=>s!==t))}unsubscribeAll(e){delete this.listeners[e]}publish(e,t){this.listeners[e]&&this.listeners[e].forEach(s=>s(t))}};n(S,"_instance");let B=S;const x=class x{constructor(){n(this,"_position",null);n(this,"_watchId",null);if(x._instance)return x._instance;x._instance=this}static get instance(){return x._instance||(x._instance=new x),x._instance}get position(){return this._position}set position(e){this._position=e,B.instance.publish("position-update",this.position)}get watchId(){return this._watchId}set watchId(e){this._watchId=e}async getUserPosition(){try{return await new Promise((t,s)=>{navigator.geolocation.getCurrentPosition(i=>{t(i)},i=>{s(i)})})}catch(e){throw e}}async startWatchingPosition(){this.watchId=navigator.geolocation.watchPosition(e=>this.position=e,e=>{console.error(e),this.position=null},{enableHighAccuracy:!1,timeout:5e3,maximumAge:0})}stopWatchingPosition(){this.watchId&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null)}};n(x,"_instance");let j=x;var l=(r=>(r.Point="Point",r.LineString="LineString",r.Polygon="Polygon",r.MultiPoint="MultiPoint",r.MultiLineString="MultiLineString",r.MultiPolygon="MultiPolygon",r))(l||{});class G{constructor(e,t){n(this,"type");n(this,"coordinates");this.type=e,this.coordinates=t}static createEmpty(){return new G("Point",[])}}class X{constructor(e,t,s,i,a){n(this,"type");n(this,"geometry");n(this,"properties");n(this,"id");n(this,"geometry_name");this.type=e,this.geometry=t,this.properties=s,this.id=i,this.geometry_name=a}static createEmpty(){return new X("",G.createEmpty(),{prop:""},"","")}}class f{constructor(){n(this,"uuid","");n(this,"name","");n(this,"type","Point");n(this,"coordinates",[]);n(this,"layerName","");n(this,"props",[]);n(this,"distance")}static fromFeature(e){const t=new f;switch(t.uuid=e.properties.uuid,t.name=e.properties.name,e.geometry.type){case l.LineString:t.type="LineString";break;case l.Polygon:t.type="Polygon";break;case l.MultiPoint:t.type="MultiPoint";break;case l.MultiLineString:t.type="MultiLineString";break;case l.MultiPolygon:t.type="MultiPolygon";break;default:t.type="Point";break}t.coordinates=e.geometry.coordinates,t.layerName=e.properties.layerName;for(const s in e.properties){if(typeof e.properties[s]!="object")continue;let i=new $;switch(i.displayName=e.properties[s].displayName,i.value=e.properties[s].value,e.properties[s].type){case"number":i.type="number";break;case"image":i.type="image";break;default:i.type="string";break}t.props.push(i)}return t}}var p=(r=>(r.Point="Point",r.LineString="LineString",r.Polygon="Polygon",r.MultiPoint="MultiPoint",r.MultiLineString="MultiLineString",r.MultiPolygon="MultiPolygon",r))(p||{});class ${constructor(){n(this,"displayName","");n(this,"type","string");n(this,"value","")}}var z=(r=>(r.String="string",r.Image="image",r.Number="number",r))(z||{});const u=class u{constructor(){if(u._instance)return u._instance;u._instance=this}static get instance(){return u._instance||(u._instance=new u),u._instance}async createGeoJson(e){const t=e.url;let i=await(await fetch(t)).json(),a=this.substituteRelevantProperties(i,e),c={...this.createFeatureAdditionalProperties(a,e)};return c.features=c.features.slice(0,10),c.features=c.features.map(h=>this.parseFeature(h)),c}substituteRelevantProperties(e,t){return e.features.forEach(s=>{const i={};for(const a in s.properties){const o=t.relevantProperties.find(c=>c.propertyName===a);if(o){const c={displayName:o.displayName,type:o.type,value:s.properties[a]};i[a]=c}}s.properties=i}),e}createFeatureAdditionalProperties(e,t){return e.features=e.features.map((s,i)=>(s.properties.name=t.name+" "+i,s.properties.layerName=t.layer,s.properties.uuid=s.id,s)),e}parseFeature(e){let t=X.createEmpty();return t.type=e.type,t.properties=e.properties,t.geometry_name=e.geometry_name,t.id=e.id,e.geometry&&(t.geometry=this.parseFeatureGeometry(e.geometry)),t}parseFeatureGeometry(e){let t=G.createEmpty();return t.type=this.parseFeatureGeometryType(e.type),t.coordinates=e.coordinates,t}parseFeatureGeometryType(e){let t=l.Point;switch(e){case"LineString":t=l.LineString;break;case"Polygon":t=l.Polygon;break;case"MultiPoint":t=l.MultiPoint;break;case"MultiLineString":t=l.MultiLineString;break;case"MultiPolygon":t=l.MultiPolygon;break}return t}async getPoisFromLayers(e){let t=[];const s=e.map(async a=>u.instance.createGeoJson(a));return(await Promise.all(s)).forEach(a=>{a.features.forEach(o=>t.push(f.fromFeature(o)))}),t.filter(a=>!u.instance.isCoordinatesMultidimensional(a.coordinates))}isCoordinatesMultidimensional(e){if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(Array.isArray(e[t]))return!0;return!1}orderPoisByDistance(e,t){return t.forEach(s=>{if(!u.instance.isCoordinatesMultidimensional(s.coordinates)){const i=Array.isArray(s.coordinates)?s.coordinates[1]:s.coordinates,a=Array.isArray(s.coordinates)?s.coordinates[0]:s.coordinates,o=this.haversineDistance(i,a,e.coords.latitude,e.coords.longitude);s.distance=o}}),t.sort((s,i)=>s.distance&&i.distance?s.distance-i.distance:0),t}haversineDistance(e,t,s,i){const a=e*Math.PI/180,o=s*Math.PI/180,h=(i-t)*Math.PI/180;return Math.acos(Math.sin(a)*Math.sin(o)+Math.cos(a)*Math.cos(o)*Math.cos(h))*6371e3}};n(u,"_instance");let J=u;const P=class P{constructor(){n(this,"_selectedPoi",new f);if(P._instance)return P._instance;P._instance=this}static get instance(){return P._instance||(P._instance=new P),P._instance}get selectedPoi(){return this._selectedPoi}set selectedPoi(e){this._selectedPoi=e,localStorage.setItem("selected-poi-vi",JSON.stringify(this.selectedPoi))}getSelectedPoi(){const e=localStorage.getItem("selected-poi-vi");if(!e)return;const t=JSON.parse(e);this._selectedPoi=this.parsePoi(t)}parsePoi(e){let t=new f;switch(t.uuid=e.uuid,t.name=e.name,e.type){case l.LineString:e.type=p.LineString;break;case l.Polygon:e.type=p.Polygon;break;case l.MultiPoint:e.type=p.MultiPoint;break;case l.MultiLineString:e.type=p.MultiLineString;break;case l.MultiPolygon:e.type=p.MultiPolygon;break;default:e.type=p.Point;break}t.coordinates=e.coordinates,t.layerName=e.layerName;for(const s in e.props){if(typeof e.props[s]!="object")continue;let i=new $;switch(i.displayName=e.props[s].displayName,i.value=e.props[s].value,e.props[s].type){case"number":i.type=z.Number;break;case"image":i.type=z.Image;break;default:i.type=z.String;break}t.props.push(i)}return e.distance&&(t.distance=e.distance),t}};n(P,"_instance");let _=P;class it extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_poi",new f);n(this,"_position",0);this.shadowRoot=this.attachShadow({mode:"closed"})}get poi(){return this._poi}set poi(t){this._poi=t}get position(){return this._position}set position(t){this._position=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <article class="poi-card" aria-labelledby="poi-card-title-${this.position}" aria-posinset="${this.position}" tabindex="${this.position}" aria-setsize="-1">
                <div class="poi-card-info">
                    <p class="poi-card-title" id="poi-card-title-${this.position}">${this.poi.name}</p>
                    <p class="poi-card-distance" role="text" aria-label="Distance from you: ${Math.round(this.poi.distance)} metri">${Math.round(this.poi.distance)}<span aria-hidden="true">m</span></p>
                </div>
                <button type="button" class="info-btn" aria-label="View point of interest details">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </article>

            <style>
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .poi-card-title {
                    font-size: 1rem;
                    margin: 0 0 8px 0;
                }

                .poi-card-distance {
                    font-size: .9rem;
                    color: var(--on-surface-variant);
                }

                .info-btn {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 32px;
                    min-width: 32px;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-m);
                    box-sizing: border-box;
                }

                .info-btn:hover {
                    opacity: 0.75;
                }

                .poi-card {
                    background-color: var(--surface-container);
                    color: var(--on-surface);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-s);
                    padding: 24px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                button {
                    cursor: pointer;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){const t=this.shadowRoot.querySelector(".info-btn");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("poi-selected",{detail:{selectedPoi:this.poi}}))})}}customElements.define("app-poi-card",it);class at extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_pois",[]);n(this,"hasrenderedError",!1);this.shadowRoot=this.attachShadow({mode:"closed"})}get pois(){return this._pois}set pois(t){if(this._pois=t,this.pois.length===0&&!this.hasrenderedError){this.renderMsg("empty"),this.hasrenderedError=!0;return}this.update(),this.setupCards()}async connectedCallback(){E.instance.updateSnackbar(M.Info,"Caricamento..."),await j.instance.startWatchingPosition(),this.render(),this.setup(),E.instance.resetSnackbar()}disconnectedCallback(){this.hasrenderedError=!1,j.instance.stopWatchingPosition(),B.instance.unsubscribeAll("position-update")}render(){this.shadowRoot.innerHTML=`
            <div class="around-you-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1">Points of interest</h1>
                </div>
                <p class="page-desc">Points of interest around you</p>
                <section class="around-you-features" role="feed"></section>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .around-you-page {
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }
                
                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }
                
                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .page-desc {
                    text-align: center;
                    margin: 0 0 24px 0;
                    color: var(--on-surface-variant);
                }

                .around-you-features {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .message {
                    text-align: center;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus()}setup(){B.instance.subscribe("position-update",async t=>{if(!t){this.renderMsg("error");return}let s=[];s=[...await J.instance.getPoisFromLayers(A.instance.activeLayers)],this.pois=[...J.instance.orderPoisByDistance(t,s)]})}update(){if(this.pois.length===0)return;const t=this.shadowRoot.querySelector(".message");t&&t.remove();const s=this.shadowRoot.querySelector(".around-you-features");s&&(s.innerHTML="",this.pois.forEach((i,a)=>{const o=document.createElement("app-poi-card");o.poi=i,o.position=a+1,s.append(o)}))}setupCards(){this.shadowRoot.querySelectorAll("app-poi-card").forEach(s=>{s.addEventListener("poi-selected",i=>{_.instance.selectedPoi=i.detail.selectedPoi,window.location.hash="/poi"})})}renderMsg(t){const s=this.shadowRoot.querySelector(".around-you-page");if(!s)return;const i=document.createElement("p");switch(t){case"error":i.innerText=`Unable to find your location.

o display nearby points of interest, the app needs permission to access the device's location.`;break;default:i.innerText=`Unable to find nearby points of interest without selecting any category.

Go to the "Categories" section to select at least one.`;break}i.classList.add("message"),s.appendChild(i)}}customElements.define("page-around-you",at);class C{constructor(e,t){n(this,"name");n(this,"pois");this.name=e,this.pois=t}static createEmpty(){return new C("",[])}}const L=class L{constructor(){n(this,"_customPath",new C("Percorso personalizzato",[]));n(this,"_suggestedPaths",[]);n(this,"_selectedSuggestedPath",new C("",[]));if(L._instance)return L._instance;L._instance=this}static get instance(){return L._instance||(L._instance=new L),L._instance}get customPath(){return this._customPath}set customPath(e){this._customPath=e}get suggestedPaths(){return this._suggestedPaths}set suggestedPaths(e){this._suggestedPaths=e}get selectedSuggestedPath(){return this._selectedSuggestedPath}set selectedSuggestedPath(e){this._selectedSuggestedPath=e,localStorage.setItem("selected-suggested-path-vi",JSON.stringify(this.selectedSuggestedPath))}addPoiToCustomPath(e){if(this.isPoiInCustomPath(e))return;const t={...this.customPath};t.pois.unshift(e),this.customPath={...t}}isPoiInCustomPath(e){return this.customPath.pois.some(t=>t.uuid===e.uuid)}saveCustomPath(){localStorage.setItem("custom-path-vi",JSON.stringify(this.customPath))}getSavedCustomPath(){const e=localStorage.getItem("custom-path-vi");if(!e)return;const t=JSON.parse(e);this._customPath=this.parsePath(t)}parsePath(e){let t=new C(e.name,e.pois);return t.pois=t.pois.map(s=>this.parsePoi(s)),t}parsePoi(e){let t=new f;switch(t.uuid=e.uuid,t.name=e.name,e.type){case l.LineString:e.type=p.LineString;break;case l.Polygon:e.type=p.Polygon;break;case l.MultiPoint:e.type=p.MultiPoint;break;case l.MultiLineString:e.type=p.MultiLineString;break;case l.MultiPolygon:e.type=p.MultiPolygon;break;default:e.type=p.Point;break}t.coordinates=e.coordinates,t.layerName=e.layerName;for(const s in e.props){if(typeof e.props[s]!="object")continue;let i=new $;switch(i.displayName=e.props[s].displayName,i.value=e.props[s].value,e.props[s].type){case"number":i.type=z.Number;break;case"image":i.type=z.Image;break;default:i.type=z.String;break}t.props.push(i)}return e.distance&&(t.distance=e.distance),t}getCsvPaths(e){return new Promise((t,s)=>{let i=0;const a=[],o=[];for(;i<=e;){const c=fetch(`./suggested-paths/${i}.tsv`).then(h=>h.text()).then(h=>{const N=this.parseCsvFile(h);a.push(this.parseCsvPath(N))}).catch(h=>console.error("Errore durante il recupero dei percorsi suggeriti",h));o.push(c),i++}Promise.all(o).then(()=>{this.suggestedPaths=[...a],t()}).catch(c=>s(c))})}parseCsvFile(e){return e.split(`
`).map(i=>{const a=i.split("	");return{path:a[0],layerName:a[1],id:a[2],name:a[3],latitude:a[4],longitude:a[5],height:a[6],info:a[7]}})}parseCsvPath(e){let t=C.createEmpty();return t.name=e[1].path,e.forEach((s,i)=>{i!==0&&t.pois.push(this.parseCsvPoi(s))}),t}parseCsvPoi(e){let t=new f;return t.layerName=e.layerName,t.name=e.name,t.coordinates=[parseFloat(e.longitude),parseFloat(e.latitude),parseFloat(e.height)],t.type=p.Point,t.uuid=e.id,t.props=this.parseCsvPoiProperties(e.info),t}parseCsvPoiProperties(e){let t=[];return e.split("|").forEach(i=>{let a=new $;a.displayName=i.split(":")[0],a.value=i.split(":")[1].trim(),a.type=z.String,t.push(a)}),t}getSuggestedPaths(e){let t=[];return this.suggestedPaths.forEach(s=>{s.pois.forEach(i=>{e.forEach(a=>{i.layerName===a.layer&&t.push(s)})})}),[...new Set(t)]}getSelectedSuggestedPath(){const e=localStorage.getItem("selected-suggested-path-vi");if(!e)return;const t=JSON.parse(e);this._selectedSuggestedPath=this.parsePath(t)}};n(L,"_instance");let g=L;const R=class R{constructor(){R._instance||(R._instance=this)}static get instance(){return R._instance||(R._instance=new R),R._instance}calculateDistance(e,t){const s=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(s*s+i*i)}nearestInsertion(e,t){const s=[...e];let i=0,a=this.calculateDistance(t,s[0].coordinates);for(let c=1;c<s.length;c++){const h=this.calculateDistance(t,s[c].coordinates);h<a&&(a=h,i=c)}const o=[s.splice(i,1)[0]];for(;s.length>0;){a=Number.MAX_VALUE;let c=0;for(let h=0;h<s.length;h++){const N=this.calculateDistance(o[o.length-1].coordinates,s[h].coordinates);N<a&&(a=N,c=h)}o.push(s.splice(c,1)[0])}return o.reverse()}};n(R,"_instance");let U=R;class nt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_poi",new f);n(this,"_position",0);this.shadowRoot=this.attachShadow({mode:"closed"})}get poi(){return this._poi}set poi(t){this._poi=t}get position(){return this._position}set position(t){this._position=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <article class="custom-path-card" aria-labelledby="custom-path-card-title" aria-posinset="${this.position}" tabindex="${this.position}" aria-setsize="-1">
                <div class="custom-path-card-info">
                    <h3 class="custom-path-card-title" id="custom-path-card-title">${this.poi.name}</h3>
                </div>
                <div class="custom-path-card-buttons">
                    <button type="button" class="poi-delete-btn" aria-label="Delete waypoint">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                    <button type="button" class="poi-info-btn" aria-label="View point of interest details">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </article>

            <style>
                h3,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .custom-path-card {
                    background-color: var(--surface-container);
                    color: var(--on-surface);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-m);
                    padding: 24px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                button {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 32px;
                    min-width: 32px;
                    box-sizing: border-box;
                    border-radius: var( --border-radius-s);
                }

                button:hover {
                    opacity: .8;
                }

                .custom-path-card-buttons {
                    display: flex;
                    gap: .5rem;
                }

                .poi-info-btn {
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                }

                .poi-delete-btn {
                    color: var(--on-surface);
                    background-color: var(--surface-container);
                    border: 1px solid transparent;
                }

                .poi-delete-btn:hover {
                    background-color: var(--surface-container-high);
                    color: var(--on-surface-variant);
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){this.setupPoiInfoBtn(),this.setupPoiDeleteBtn()}setupPoiInfoBtn(){const t=this.shadowRoot.querySelector(".poi-info-btn");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("poi-selected",{detail:{selectedPoi:this.poi}}))})}setupPoiDeleteBtn(){const t=this.shadowRoot.querySelector(".poi-delete-btn");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("poi-deleted",{detail:{deletedPoi:this.poi}}))})}}customElements.define("app-custom-path-card",nt);class rt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_customPath",{...g.instance.customPath});this.shadowRoot=this.attachShadow({mode:"closed"})}get customPath(){return this._customPath}set customPath(t){this._customPath=t,this.update(),this.setupCardsBeahviour()}connectedCallback(){this.render(),this.update(),this.setup(),this.setupCardsBeahviour()}render(){this.shadowRoot.innerHTML=`
            <div class="custom-path-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1">Custom path</h1>
                </div>
                <section class="custom-path-list" role="feed"></section>
                <div class="custom-path-tools">
                    <button type="button" id="reorder-pois-btn" class="tool-btn" title="Optimize points of interest order">
                        <span class="material-symbols-outlined tool-icon" aria-hidden="true">sort</span>
                    </button>
                    <button type="button" id="save-custom-path-btn" class="tool-btn" title="Save custom path">
                        <span class="material-symbols-outlined tool-icon" aria-hidden="true">bookmark</span>
                    </button>
                </div>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 7rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .custom-path-page {
                    position: relative;
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }

                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }

                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .custom-path-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;                   
                }

                .empty-msg {
                    text-align: center;
                }

                .custom-path-tools {
                    position: fixed;
                    left: 50%;
                    bottom: calc(3rem + 2px);
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: space-between;
                    gap: 1px;
                    width: 100%;
                    max-width: 576px;
                    min-height: 3rem;
                }
                
                button {
                    cursor: pointer;
                }

                .tool-btn {
                    cursor: pointer;
                    font-family: Inter, sans-serif;
                    width: 100%;
                    border: none;
                    color: var(--on-surface);
                    background-color: var(--surface-container-high);
                    font-size: .8rem;
                    font-weight: 500;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: .5rem;
                    border-radius: var(--border-radius-s);
                }

                .tool-btn:hover {
                    color: var(--on-surface-variant);
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.6rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus()}setup(){this.setupSaveCustomPathBtn(),this.setupReorderPoisBtn()}update(){const t=this.shadowRoot.querySelector(".custom-path-list");t&&(t.innerHTML="",this.customPath.pois.length===0&&t.append(this.renderEmptyMsg()),this.customPath.pois.forEach((s,i)=>{let a=document.createElement("app-custom-path-card");a.poi=s,a.position=i+1,t.append(a)}))}setupSaveCustomPathBtn(){const t=this.shadowRoot.querySelector("#save-custom-path-btn");t&&t.addEventListener("click",()=>{g.instance.saveCustomPath(),E.instance.updateSnackbar(M.Info,"Custom path saved")})}setupReorderPoisBtn(){const t=this.shadowRoot.querySelector("#reorder-pois-btn");t&&t.addEventListener("click",async()=>{let s=await j.instance.getUserPosition();if(!s)return;const i=U.instance.nearestInsertion(this.customPath.pois,[s.coords.latitude,s.coords.longitude]);this.customPath={...this.customPath,pois:i},g.instance.customPath=this.customPath,E.instance.updateSnackbar(M.Info,`Waypoints rearranged according to the optimal route. Current order: ${this.customPath.pois.map(a=>a.name).join(", ")}.`)})}setupCardsBeahviour(){this.shadowRoot.querySelectorAll("app-custom-path-card").forEach(s=>{s.addEventListener("poi-selected",i=>{_.instance.selectedPoi=i.detail.selectedPoi,window.location.hash="/poi"}),s.addEventListener("poi-deleted",i=>{let a=this.customPath.pois.filter(o=>o.uuid!==i.detail.deletedPoi.uuid);this.customPath={...this.customPath,pois:a},g.instance.customPath=this.customPath,E.instance.updateSnackbar(M.Info,`Waypoint ${i.detail.deletedPoi.name} removed`)})})}renderEmptyMsg(){const t=document.createElement("p");return t.classList.add("empty-msg"),t.innerHTML="No waypoints currently present in the custom path.",t}}customElements.define("page-custom-path",rt);class ot extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_path",C.createEmpty());n(this,"_position",0);this.shadowRoot=this.attachShadow({mode:"closed"})}get path(){return this._path}set path(t){this._path=t}get position(){return this._position}set position(t){this._position=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <article class="suggested-path-card" aria-labelledby="suggested-path-card-title" aria-posinset="${this.position}" tabindex="${this.position}" aria-setsize="-1">
                <div class="poi-card-info">
                    <h3 class="suggested-path-card-title">${this.path.name}</h3>
                    <p class="suggested-path-card-length" aria-label="Waypoints in this path: ${this.path.pois.length}">${this.path.pois.length} waypoints</p>
                </div>
                <button type="button" class="path-info-btn" aria-label="Open suggested path: ${this.path.name}">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </article>

            <style>
                h3,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .suggested-path-card-title {
                    font-size: 1rem;
                    margin: 0 0 8px 0;
                }

                .suggested-path-card-lenght {
                    font-size: .9rem;
                    color: var(--on-surface-variant);
                }

                .path-info-btn {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 32px;
                    min-width: 32px;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-m);
                    box-sizing: border-box;
                }

                .path-info-btn:hover {
                    opacity: 0.75;
                }

                .suggested-path-card {
                    background-color: var(--surface-container);
                    color: var(--on-surface);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-m);
                    padding: 24px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .suggested-path-card-length {
                    color: var(--on-surface-variant);
                }

                button {
                    cursor: pointer;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){this.setupPoiInfoBtn()}setupPoiInfoBtn(){const t=this.shadowRoot.querySelector(".path-info-btn");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("suggested-path-selected",{detail:{selectedSuggestedPath:this.path}}))})}}customElements.define("app-suggested-path-card",ot);class ct extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_paths",[]);this.shadowRoot=this.attachShadow({mode:"closed"})}get paths(){return this._paths}set paths(t){this._paths=t,this.update(),this.setupCardsBehaviour()}async connectedCallback(){await g.instance.getCsvPaths(1),this.render(),this.paths=g.instance.getSuggestedPaths(A.instance.activeLayers)}render(){this.shadowRoot.innerHTML=`
            <div class="suggested-paths-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1" autofocus>Suggested paths</h1>
                </div>
                <p class="page-desc">List of suggested routes based on the selected layers.</p>
                <section class="suggested-paths-list" role="feed" aria-label="Suggested paths"></section>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .suggested-paths-page {
                    position: relative;
                    padding: 0 4%;
                }
                
                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }

                .page-desc {
                    text-align: center;
                    color: var(--on-surface-variant);
                }

                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }

                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .suggested-paths-list {
                    margin: 1.5rem 0;
                }

                .empty {
                    text-align: center;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}update(){const t=this.shadowRoot.querySelector(".suggested-paths-list");t&&(t.innerHTML="",this.paths.length===0&&t.append(this.renderEmptyMsg()),this.paths.forEach((s,i)=>{let a=document.createElement("app-suggested-path-card");a.path=s,a.position=i,t.append(a)}))}setupCardsBehaviour(){this.shadowRoot.querySelectorAll("app-suggested-path-card").forEach(s=>{s.addEventListener("suggested-path-selected",i=>{g.instance.selectedSuggestedPath=i.detail.selectedSuggestedPath,window.location.hash="/selected-suggested-path"})})}renderEmptyMsg(){const t=document.createElement("p");return t.innerHTML="No suggested routes for the currently activated category.",t.classList.add("empty"),t}}customElements.define("page-suggested-paths",ct);class lt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_poi",new f);n(this,"_position",0);this.shadowRoot=this.attachShadow({mode:"closed"})}get poi(){return this._poi}set poi(t){this._poi=t}get position(){return this._position}set position(t){this._position=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <article class="selected-suggested-path-card" aria-labelledby="selected-suggested-path-card-title" aria-posinset="${this.position}" tabindex="${this.position}" aria-setsize="-1">
                <div class="selected-suggested-path-card-info">
                    <h3 class="selected-suggested-path-card-title" id="selected-suggested-path-card-title">${this.poi.name}</h3>
                </div>
                <div class="selected-suggested-path-card-buttons">
                    <button type="button" class="poi-info-btn" aria-label="View point of interest detail">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </article>

            <style>
                h3,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .selected-suggested-path-card {
                    background-color: var(--surface-container);
                    color: var(--on-surface);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-m);
                    padding: 24px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                button {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 32px;
                    min-width: 32px;
                    box-sizing: border-box;
                    border-radius: var( --border-radius-s);
                }

                button:hover {
                    opacity: .8;
                }

                .selected-suggested-path-card-buttons {
                    display: flex;
                    gap: .5rem;
                }

                .poi-info-btn {
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){this.setupPoiInfoBtn()}setupPoiInfoBtn(){const t=this.shadowRoot.querySelector(".poi-info-btn");t&&t.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("poi-selected",{detail:{selectedPoi:this.poi}}))})}}customElements.define("app-selected-suggested-path-card",lt);class dt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_path",new C("",[]));this.shadowRoot=this.attachShadow({mode:"closed"})}get path(){return this._path}set path(t){this._path=t,this.update(),this.setupCardsBeahviour()}connectedCallback(){g.instance.getSelectedSuggestedPath(),this.path=g.instance.selectedSuggestedPath,this.render(),this.update(),this.setupCardsBeahviour()}render(){this.shadowRoot.innerHTML=`
            <div class="suggested-path-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1">${this.path.name}</h1>
                </div>
                <section class="suggested-path-list" role="feed"></section>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .suggested-path-page {
                    position: relative;
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }

                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }

                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .suggested-path-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;                   
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus()}update(){const t=this.shadowRoot.querySelector(".suggested-path-list");t&&(t.innerHTML="",this.path.pois.forEach((s,i)=>{let a=document.createElement("app-selected-suggested-path-card");a.poi=s,a.position=i+1,t.append(a)}))}setupCardsBeahviour(){this.shadowRoot.querySelectorAll("app-selected-suggested-path-card").forEach(s=>{s.addEventListener("poi-selected",i=>{_.instance.selectedPoi=i.detail.selectedPoi,window.location.hash="/poi"})})}}customElements.define("page-selected-suggested-path",dt);class ht extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_poi",new f);this.shadowRoot=this.attachShadow({mode:"closed"})}get poi(){return this._poi}set poi(t){this._poi=t}connectedCallback(){_.instance.getSelectedPoi(),this.poi=_.instance.selectedPoi,this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="poi-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1">Point of interest detail</h1>
                </div>
                <h2 class="poi-name">${this.poi.name}</h2>
                <p class="poi-category">${this.poi.name}</p>
                <div class="poi-page-buttons">
                    <button type="button" id="directions-btn" aria-label="View directions">Directions</button>
                    <button type="button" id="add-to-custom-path-btn" aria-label="Add waypoint to custom path">Add to custom path</button>
                </div>
                <div class="poi-page-infos"></div>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                h2,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .poi-page {
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }

                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }

                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .poi-name {
                    margin: 0 0 8px 0;
                }

                .poi-category {
                    color: var(--on-surface-variant);
                }

                .poi-page-buttons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                    margin: 1.25rem 0 2rem 0;
                }

                #directions-btn {
                    background-color: var(--primary);
                    color: var(--on-primary);
                    border: 1px solid transparent;
                    border-radius: var(--border-radius-circle);
                    letter-spacing: inherit;
                    line-height: inherit;
                }

                #add-to-custom-path-btn {
                    color: var(--on-surface);
                    background-color: var(--surface-container-high);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-circle);
                    letter-spacing: inherit;
                    line-height: inherit;
                }

                button {
                    cursor: pointer;
                    font-family: Inter, sans-serif;
                    font-size: .8rem;
                    font-weight: 500;
                    padding: 8px 0;
                    width: 100%;
                }

                button:hover {
                    opacity: .8;
                }

                .property {
                    margin: 0px 0px 1rem;
                }

                .property-label {
                    display: block;
                    color: var(--on-surface-variant);
                    margin: 0px 0px 4px;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus(),this.renderInfo()}renderInfo(){const t=this.shadowRoot.querySelector(".poi-page-infos");t&&this.poi.props.forEach(s=>{const i=this.renderTopic(s);t.appendChild(i)})}renderTopic(t){const s=document.createElement("div");s.classList.add("property");const i=document.createElement("label");i.classList.add("property-label"),i.innerHTML=t.displayName;const a=document.createElement("p");return a.classList.add("property-value"),t.value!==""?a.innerHTML=t.value:a.innerHTML="-",s.appendChild(i),s.appendChild(a),s}setup(){this.setupDirectionsBtn(),this.setupAddToCustomPathBtn()}setupDirectionsBtn(){const t=this.shadowRoot.querySelector("#directions-btn");t&&t.addEventListener("click",()=>{const s=`https://www.google.it/maps/dir/?api=1&destination=${this.poi.coordinates[1]},${this.poi.coordinates[0]}`;window.open(s,"_blank")})}setupAddToCustomPathBtn(){const t=this.shadowRoot.querySelector("#add-to-custom-path-btn");t&&t.addEventListener("click",()=>{E.instance.updateSnackbar(M.Info,"Waypoint added to custom path"),g.instance.addPoiToCustomPath(this.poi)})}}customElements.define("page-poi",ht);class pt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_contrast",m.LightHigh);this.shadowRoot=this.attachShadow({mode:"closed"})}get contrast(){return this._contrast}set contrast(t){this._contrast=t,this.update(),this.dispatchEvent(new CustomEvent("contrast-updated",{detail:{contrast:this.contrast}}))}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="settings-contrast">
                <h2 class="settings-title">Contrast</h2>
                <div class="contrast-option-list">
                    <div class="contrast-option">
                        <input type="radio" id="light-contrast" name="contrast" value="light">
                        <label for="light-contrast" aria-label="Light theme">Light</label>
                    </div>
                    <div class="contrast-option">
                        <input type="radio" id="dark-contrast" name="contrast" value="dark">
                        <label for="dark-contrast" aria-label="Dark theme">Dark</label>
                    </div>
                    <div class="contrast-option">
                        <input type="radio" id="light-high-contrast" name="contrast" value="light-high">
                        <label for="light-high-contrast" aria-label="High contrast light theme">High contrast light theme</label>
                    </div>
                    <div class="contrast-option">
                        <input type="radio" id="dark-high-contrast" name="contrast" value="dark-high">
                        <label for="dark-high-contrast" aria-label="High contrast dark theme">High contrast dark theme</label>
                    </div>
                </div>
            </div>

            <style>
                h2,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .settings-title {
                    text-align: center;
                    font-size: 1.7rem;
                    margin: 0 0 16px 0;
                }

                .contrast-option-list {
                    display: flex;
                    flex-wrap: wrap;
                }

                .contrast-option {
                    cursor: pointer;
                    width: calc(50% - 16px);
                    min-height: 80px;
                    margin: 8px;
                    position: relative;
                }

                .contrast-option label {
                    cursor: inherit;
                    height: 100%;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-s);
                    box-sizing: border-box;
                }

                input[type="radio"] {
                    opacity: 0;
                    width: 0;
                    height: 0;
                    position: absolute;
                }

                input[type="radio"]:checked + label {
                    color: var(--inverse-on-surface);
                    background-color: var(--inverse-surface);
                }
            </style>
            `}setup(){this.handleRadioChange()}handleRadioChange(){const t=this.shadowRoot.querySelector("#light-contrast"),s=this.shadowRoot.querySelector("#dark-contrast"),i=this.shadowRoot.querySelector("#light-high-contrast"),a=this.shadowRoot.querySelector("#dark-high-contrast");!t||!s||!i||!a||(t.addEventListener("change",()=>this.contrast=m.Light),s.addEventListener("change",()=>this.contrast=m.Dark),i.addEventListener("change",()=>this.contrast=m.LightHigh),a.addEventListener("change",()=>this.contrast=m.DarkHigh))}update(){Array.from(this.shadowRoot.querySelectorAll('input[name="contrast"]')).forEach(s=>{s.value===this.contrast&&(s.checked=!0)})}}customElements.define("app-settings-contrast",pt);class ut extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_fontSize",16);this.shadowRoot=this.attachShadow({mode:"closed"})}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.update(),this.dispatchEvent(new CustomEvent("font-size-updated",{detail:{fontSize:this.fontSize}}))}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="settings-font-size">
                <h2 class="settings-title">Text size</h2>
                <div class="font-size-option-list">
                    <div class="font-size-option">
                        <input type="radio" id="font-size-s" name="font-size" value="14">
                        <label for="font-size-s" aria-label="Text size: S">S</label>
                    </div>
                    <div class="font-size-option">
                        <input type="radio" id="font-size-m" name="font-size" value="20">
                        <label for="font-size-m" aria-label="Text size: M">M</label>
                    </div>
                    <div class="font-size-option">
                        <input type="radio" id="font-size-l" name="font-size" value="24">
                        <label for="font-size-l" aria-label="Text size: L">L</label>
                    </div>
                    <div class="font-size-option">
                        <input type="radio" id="font-size-xl" name="font-size" value="32">
                        <label for="font-size-xl" aria-label="Text size: XL">XL</label>
                    </div>
                </div>
            </div>

            <style>
                h2,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .settings-title {
                    text-align: center;
                    font-size: 1.7rem;
                    margin: 0 0 16px 0;
                }

                .font-size-option-list {
                    display: flex;
                    flex-wrap: wrap;
                }

                .font-size-option {
                    cursor: pointer;
                    width: calc(50% - 16px);
                    min-height: 80px;
                    margin: 8px;
                    position: relative;
                }

                .font-size-option label {
                    cursor: inherit;
                    height: 100%;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-s);
                    box-sizing: border-box;
                }

                input[type="radio"] {
                    opacity: 0;
                    width: 0;
                    height: 0;
                    position: absolute;
                }
                
                input[type="radio"]:checked + label {
                    color: var(--inverse-on-surface);
                    background-color: var(--inverse-surface);
                }
            </style>
            `}setup(){this.handleRadioChange()}handleRadioChange(){const t=this.shadowRoot.querySelector("#font-size-s"),s=this.shadowRoot.querySelector("#font-size-m"),i=this.shadowRoot.querySelector("#font-size-l"),a=this.shadowRoot.querySelector("#font-size-xl");!t||!s||!i||!a||(t.addEventListener("change",()=>this.fontSize=parseInt(t.value)),s.addEventListener("change",()=>this.fontSize=parseInt(s.value)),i.addEventListener("change",()=>this.fontSize=parseInt(i.value)),a.addEventListener("change",()=>this.fontSize=parseInt(a.value)))}update(){Array.from(this.shadowRoot.querySelectorAll('input[name="font-size"]')).forEach(s=>{s.value===this.fontSize.toString()&&(s.checked=!0)})}}customElements.define("app-settings-font-size",ut);class gt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_letterSpace",0);this.shadowRoot=this.attachShadow({mode:"closed"})}get letterSpace(){return this._letterSpace}set letterSpace(t){this._letterSpace=t,this.update(),this.dispatchEvent(new CustomEvent("letter-space-updated",{detail:{letterSpace:this.letterSpace}}))}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="settings-letter-space">
                <h2 class="settings-title">Letters spacing</h2>
                <div class="letter-space-option-list">
                    <div class="letter-space-option">
                        <input type="radio" id="letter-space-s" name="letter-spacing" value="0">
                        <label for="letter-space-s" aria-label="Letters spacing: S">S</label>
                    </div>
                    <div class="letter-space-option">
                        <input type="radio" id="letter-space-m" name="letter-spacing" value="25">
                        <label for="letter-space-m" aria-label="Letters spacing: M">M</label>
                    </div>
                    <div class="letter-space-option">
                        <input type="radio" id="letter-space-l" name="letter-spacing" value="50">
                        <label for="letter-space-l" aria-label="Letters spacing: L">L</label>
                    </div>
                    <div class="letter-space-option">
                        <input type="radio" id="letter-space-xl" name="letter-spacing" value="75">
                        <label for="letter-space-xl" aria-label="Letters spacing: XL">XL</label>
                    </div>
                </div>
            </div>

            <style>
                h2,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .settings-title {
                    text-align: center;
                    font-size: 1.7rem;
                    margin: 0 0 16px 0;
                }

                .letter-space-option-list {
                    display: flex;
                    flex-wrap: wrap;
                }

                .letter-space-option {
                    cursor: pointer;
                    width: calc(50% - 16px);
                    min-height: 80px;
                    margin: 8px;
                    position: relative;
                }

                .letter-space-option label {
                    cursor: inherit;
                    height: 100%;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-s);
                    box-sizing: border-box;
                }

                input[type="radio"] {
                    opacity: 0;
                    width: 0;
                    height: 0;
                    position: absolute;
                }
                
                input[type="radio"]:checked + label {
                    color: var(--inverse-on-surface);
                    background-color: var(--inverse-surface);
                }
            </style>
            `}setup(){this.handleRadioChange()}handleRadioChange(){const t=this.shadowRoot.querySelector("#letter-space-s"),s=this.shadowRoot.querySelector("#letter-space-m"),i=this.shadowRoot.querySelector("#letter-space-l"),a=this.shadowRoot.querySelector("#letter-space-xl");!t||!s||!i||!a||(t.addEventListener("change",()=>this.letterSpace=parseInt(t.value)/100),s.addEventListener("change",()=>this.letterSpace=parseInt(s.value)/100),i.addEventListener("change",()=>this.letterSpace=parseInt(i.value)/100),a.addEventListener("change",()=>this.letterSpace=parseInt(a.value)/100))}update(){Array.from(this.shadowRoot.querySelectorAll('input[name="letter-spacing"]')).forEach(s=>{s.value===(this.letterSpace*100).toString()&&(s.checked=!0)})}}customElements.define("app-settings-letter-space",gt);class mt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_lineHeight",1.15);this.shadowRoot=this.attachShadow({mode:"closed"})}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update(),this.dispatchEvent(new CustomEvent("line-height-updated",{detail:{lineHeight:this.lineHeight}}))}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="settings-line-height">
                <h2 class="settings-title">Line height</h2>
                <div class="line-height-option-list">
                    <div class="line-height-option">
                        <input type="radio" id="line-height-s" name="line-height" value="115">
                        <label for="line-height-s" aria-label="Line height: S">S</label>
                    </div>
                    <div class="line-height-option">
                        <input type="radio" id="line-height-m" name="line-height" value="150">
                        <label for="line-height-m" aria-label="Line height: M">M</label>
                    </div>
                    <div class="line-height-option">
                        <input type="radio" id="line-height-l" name="line-height" value="175">
                        <label for="line-height-l" aria-label="Line height: L">L</label>
                    </div>
                    <div class="line-height-option">
                        <input type="radio" id="line-height-xl" name="line-height" value="200">
                        <label for="line-height-xl" aria-label="Line height: XL">XL</label>
                    </div>
                </div>
            </div>

            <style>
                h2,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .settings-title {
                    text-align: center;
                    font-size: 1.7rem;
                    margin: 0 0 16px 0;
                }

                .line-height-option-list {
                    display: flex;
                    flex-wrap: wrap;
                }

                .line-height-option {
                    cursor: pointer;
                    width: calc(50% - 16px);
                    min-height: 80px;
                    margin: 8px;
                    position: relative;
                }

                .line-height-option label {
                    cursor: inherit;
                    height: 100%;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                    border: 1px solid transparent;
                    border-radius: var( --border-radius-s);
                    box-sizing: border-box;
                }

                input[type="radio"] {
                    opacity: 0;
                    width: 0;
                    height: 0;
                    position: absolute;
                }
                
                input[type="radio"]:checked + label {
                    color: var(--inverse-on-surface);
                    background-color: var(--inverse-surface);
                }
            </style>
            `}setup(){this.handleRadioChange()}handleRadioChange(){const t=this.shadowRoot.querySelector("#line-height-s"),s=this.shadowRoot.querySelector("#line-height-m"),i=this.shadowRoot.querySelector("#line-height-l"),a=this.shadowRoot.querySelector("#line-height-xl");!t||!s||!i||!a||(t.addEventListener("change",()=>this.lineHeight=parseInt(t.value)/100),s.addEventListener("change",()=>this.lineHeight=parseInt(s.value)/100),i.addEventListener("change",()=>this.lineHeight=parseInt(i.value)/100),a.addEventListener("change",()=>this.lineHeight=parseInt(a.value)/100))}update(){Array.from(this.shadowRoot.querySelectorAll('input[name="line-height"]')).forEach(s=>{s.value===Math.round(this.lineHeight*100).toString()&&(s.checked=!0)})}}customElements.define("app-settings-line-height",mt);class ft extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_settings",{...d.instance.settings});this.shadowRoot=this.attachShadow({mode:"closed"})}get settings(){return this._settings}set settings(t){this._settings=t}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="settings-page">
                <div class="page-header">
                    <h1 class="page-title" tabindex="-1">Settings</h1>
                </div>
                <app-settings-contrast class="settings-option"></app-settings-contrast>
                <app-settings-font-size class="settings-option"></app-settings-font-size>
                <app-settings-letter-space class="settings-option"></app-settings-letter-space>
                <app-settings-line-height class="settings-option"></app-settings-line-height>
            </div>

            <style>
                :host {
                    display: block;
                    padding:  0 0 5rem 0;
                }
                
                h1,
                p {
                    font-weight: 400;
                    margin: 0;
                }

                .settings-page {
                    padding: 0 4%;
                }

                .page-header {
                    position: relative;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 0 24px 0;
                }
                
                button[is="app-menu-btn"] {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: var(--on-surface);
                    background-color: transparent;
                    border: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    height: 40px;
                    width: 40px;
                }

                .page-title {
                    text-align: center;
                    font-size: 1rem;
                }

                .page-desc {
                    text-align: center;
                    margin: 0 0 24px 0;
                    color: var(--on-surface-variant);
                }

                .settings-option {
                    display: block;
                    margin: 0 0 40px 0;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.2rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `;const t=this.shadowRoot.querySelector("h1");t&&t.focus()}setup(){const t=this.shadowRoot.querySelector("app-settings-contrast"),s=this.shadowRoot.querySelector("app-settings-font-size"),i=this.shadowRoot.querySelector("app-settings-letter-space"),a=this.shadowRoot.querySelector("app-settings-line-height");t&&s&&i&&a&&(t.contrast=this.settings.contrast,s.fontSize=this.settings.fontSize,a.lineHeight=this.settings.lineHeight,i.letterSpace=this.settings.letterSpace,t.addEventListener("contrast-updated",o=>{this.settings.contrast=o.detail.contrast,d.instance.settings.contrast=this.settings.contrast,d.instance.setContrast(),d.instance.settings=this.settings}),s.addEventListener("font-size-updated",o=>{this.settings.fontSize=o.detail.fontSize,d.instance.settings.fontSize=this.settings.fontSize,d.instance.setFontSize(this.settings.fontSize),d.instance.settings=this.settings}),i.addEventListener("letter-space-updated",o=>{this.settings.letterSpace=o.detail.letterSpace,d.instance.settings.letterSpace=this.settings.letterSpace,d.instance.setLetterSpace(this.settings.letterSpace),d.instance.settings=this.settings}),a.addEventListener("line-height-updated",o=>{this.settings.lineHeight=o.detail.lineHeight,d.instance.settings.lineHeight=this.settings.lineHeight,d.instance.setLineHeight(this.settings.lineHeight),d.instance.settings=this.settings}))}}customElements.define("page-settings",ft);class bt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_snackbar",T.createEmpty());this.shadowRoot=this.attachShadow({mode:"closed"})}get snackbar(){return this._snackbar}set snackbar(t){this._snackbar=t,this.update()}connectedCallback(){this.render(),this.update()}render(){this.shadowRoot.innerHTML=`
            <div class="snackbar">
                <p class="snackbar-message"></p>
            </div>

            <style>
                .snackbar {
                    position: sticky;
                    top: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: var(--primary);
                    color: var(--on-primary);
                }
                
                .empty-snackbar {
                    height: 0;
                }
                
                .info-snackbar {
                    padding: 8px 4%;                    
                }
                
                .error-snackbar {
                    padding: 8px 4%;                   

                }
            </style>
            `}update(){if(this.snackbar.message.length===0){const s=this.shadowRoot.querySelector(".snackbar");if(!s)return;s.classList.add("empty-snackbar");return}const t=this.shadowRoot.querySelector(".snackbar-message");if(t)switch(t.innerHTML=this.snackbar.message,this.snackbar.type){case M.Error:this.renderErrorSnackbar();break;default:this.renderInfoSnackbar();break}}renderInfoSnackbar(){const t=this.shadowRoot.querySelector(".snackbar");t&&(t.classList.remove("empty-snackbar"),t.classList.add("info-snackbar"))}renderErrorSnackbar(){const t=this.shadowRoot.querySelector(".snackbar");t&&(t.classList.remove("empty-snackbar"),t.classList.add("error-snackbar"))}resetSnackbar(){const t=this.shadowRoot.querySelector(".snackbar-message"),s=this.shadowRoot.querySelector(".snackbar");t&&s&&(t.innerHTML="",s.classList.remove("info-snackbar"),s.classList.remove("error-snackbar"),s.classList.add("empty-snackbar"))}}customElements.define("app-snackbar",bt);class yt extends HTMLElement{constructor(){super();n(this,"shadowRoot");n(this,"_showSettings",!0);this.shadowRoot=this.attachShadow({mode:"closed"})}get showSettings(){return this._showSettings}set showSettings(t){this._showSettings=t,this.configBar(this.showSettings)}connectedCallback(){this.render(),this.setup(),this.checkCurrentPage()}render(){this.shadowRoot.innerHTML=`
            <nav class="menu" role="tablist">
                <a class="bar-el-link categories-link" href="/categories" title="Categories" role="tab" aria-selected="false" aria-controls="categories-panel">
                    <span class="material-symbols-outlined icon" aria-label="Categories">stacks</span>
                </a>

                <a class="bar-el-link around-you-link" href="/around-you" title="Around you" role="tab" aria-selected="false" aria-controls="around-you-panel">
                    <span class="material-symbols-outlined icon" aria-label="Around you">explore</span>
                </a>

                <a class="bar-el-link suggested-paths-link" href="/suggested-paths" title="Suggested paths" role="tab" aria-selected="false" aria-controls="suggested-paths-panel">
                    <span class="material-symbols-outlined icon" aria-label="Suggested paths">directions</span>
                </a>

                <a class="bar-el-link custom-path-link" href="/custom-path" title="Custom path" role="tab" aria-selected="false" aria-controls="custom-path-panel">
                    <span class="material-symbols-outlined icon" aria-label="Custom path">favorite</span>
                </a>

                <a class="bar-el-link settings-link" href="/settings" title="Settings" role="tab" aria-selected="false" aria-controls="settings-panel">
                    <span class="bg"></span>
                    <span class="material-symbols-outlined icon" aria-label="Settings">more_vert</span>
                </a>
            </nav>

            <style>
                .menu {
                    display: flex;
                    justify-content: space-between;
                    align-items: stretch;
                    padding: 0;
                    margin: 0;
                    list-style-type: none;
                    min-height: 3rem;
                    background-color: var(--surface-container-high);
                    border-radius: var(--border-radius-s) var(--border-radius-s) 0 0;
                    max-width: 576px;
                    margin: auto;
                }

                .bar-el-link {
                    position: relative;
                    cursor: pointer;
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--on-surface);
                    font-size: .8rem;
                    width: 100%;
                    flex-grow: 1;
                    text-align: center;
                }

                .icon {
                    width: 88%;
                    height: 72%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100px;
                    z-index: 1;
                }

                .current .icon {
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                }

                .current .material-symbols-outlined {
                    font-variation-settings:
                        'FILL' 1,
                        'opsz' 20;
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.6rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){this.onLinkClick(),window.addEventListener("hashchange",()=>this.checkCurrentPage())}onLinkClick(){Array.from(this.shadowRoot.querySelectorAll(".bar-el-link")).forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const a=s.getAttribute("href");a&&(window.location.hash=a)})})}checkCurrentPage(){const t=window.location.hash.slice(2);Array.from(this.shadowRoot.querySelectorAll(".bar-el-link")).forEach(i=>{var a;((a=i.getAttribute("href"))==null?void 0:a.slice(1))===t?(i.classList.add("current"),i.setAttribute("aria-selected","true")):(i.classList.remove("current"),i.setAttribute("aria-selected","false"))})}configBar(t){const s=this.shadowRoot.querySelector(".settings-link");s&&(t||(s.style.display="none"))}}customElements.define("app-bar",yt);class vt extends HTMLElement{constructor(){super();n(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <button type="button" aria-label="Back to profilation">
                <span class="material-symbols-outlined">home</span>
            </button>

            <style>
                button {
                    cursor: pointer;
                    min-height: 40px;
                    min-width: 40px;
                    background-color: transparent;
                    border: none;
                    color: var(--on-surface);
                    background-color: var(--surface-container);
                    border-radius: var(--border-radius-m);

                    &:hover {
                        color: var(--on-surface-variant);
                    }
                }

                .material-symbols-outlined {
                    font-family: 'Material Symbols Outlined';
                    font-size: 1.6rem;
                    font-variation-settings:
                        'FILL' 0,
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24;
                }
            </style>
            `}setup(){const t=this.shadowRoot.querySelector("button");t&&t.addEventListener("click",()=>window.location.href="../path/index.html")}}customElements.define("app-home",vt);g.instance.getSavedCustomPath();A.instance.getSavedLayers();const wt=document.querySelector("app-router"),St=new I("categories",k.Default,()=>"<page-categories />"),xt=new I("around-you",k.Page,()=>"<page-around-you />"),Pt=new I("settings",k.Page,()=>"<page-settings />"),Lt=new I("poi",k.Page,()=>"<page-poi />"),kt=new I("custom-path",k.Page,()=>"<page-custom-path />"),Rt=new I("suggested-paths",k.Page,()=>"<page-suggested-paths />"),Et=new I("selected-suggested-path",k.Page,()=>"<page-selected-suggested-path />"),zt=[St,xt,Pt,Lt,kt,Rt,Et];wt.addRoutes(zt);d.instance.getLocalStorageSettings();const Y=document.querySelector("app-bar");Y&&(Y.showSettings=d.instance.settings.showSettings);
