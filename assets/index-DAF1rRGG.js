var c=Object.defineProperty;var d=(i,o,r)=>o in i?c(i,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[o]=r;var a=(i,o,r)=>(d(i,typeof o!="symbol"?o+"":o,r),r);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Livello_1'%20data-name='Livello%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23dc281e;%20}%20.cls-1,%20.cls-2%20{%20stroke-width:%200px;%20}%20.cls-2%20{%20fill:%20%23fff;%20}%20%3c/style%3e%3c/defs%3e%3ccircle%20class='cls-1'%20cx='153.56'%20cy='411.42'%20r='44.58'/%3e%3cpath%20class='cls-2'%20d='m304.7,292.74c89.16-18.32,96.08-89.57,96.08-111.04-.1-84.58-53.84-125.7-164.48-125.7h-121.22l29.52,61.88h90.18c35.93,0,60.46,7.12,74.91,21.58,9.67,9.77,14.55,23,14.35,39.29-.31,25.45-14.25,42.75-41.53,51.6-22.39,7.23-49.47,7.02-63,6.92l-1.32,59.13,101.58,153.28h83.26l-101.17-156.34,2.85-.61h-.01Z'/%3e%3c/svg%3e";class p extends HTMLElement{constructor(){super();a(this,"shadowRoot");this.shadowRoot=this.attachShadow({mode:"closed"})}connectedCallback(){this.render(),this.setup()}render(){this.shadowRoot.innerHTML=`
            <div class="logo-wrapper">
                <img src="${u}" alt="Logo di RAISE" class="logo">
            </div>
            <div class="header">
                <h1>Welcome to RAISE</h1>
                <p class="desc">Do you have one or more of the following disabilities?</p>
            </div>
            <form>
                <div class="form-content">
                    <div class="checkbox">
                        <input type="checkbox" id="blind" name="a11y" value="blind">
                        <label for="blind" aria-label="Blindness">Blindness</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="vi" name="a11y" value="vi">
                        <label for="vi" aria-label="Low vision">Low vision</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="color-blindness" name="a11y" value="color-blindness">
                        <label for="color-blindness" aria-label="Color blindness">Color blindness</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="fine-motor" name="a11y" value="fine-motor">
                        <label for="fine-motor" aria-label="Fine motor difficulties">Fine motor difficulties</label>
                    </div>
                </div>
                <div class="buttons-section">
                    <button type="submit" class="secondary-btn">None</button>
                    <button type="submit" class="primary-btn">Continue</button>
                </div>
            </form>

            <style>
                :host {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    height: 100dvh;
                    padding: 4%;
                }

                .logo-wrapper {
                    text-align: center;
                }

                .logo {
                    width: 48px;
                    height: auto;
                }

                .header {
                    text-align: center;
                    margin: 0 0 24px 0;
                }

                h1 {
                    color: var(--on-surface);
                }

                .desc {
                    color: var(--on-surface-variant);
                }

                form {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: space-between;
                }

                .form-content {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                input[type="checkbox"] {
                    position: absolute;
                    height: 0;
                    width: 0;
                    opacity: 0;
                }

                input[type="checkbox"]:checked + label {
                    position: relative;
                    background-color: var(--surface-container-high); 
                    border-color: var(--primary);
                }

                input[type="checkbox"]:checked + label::after {
                    font-family: 'Material Symbols Outlined';
                    font-variation-settings: 'FILL' 1;
                    font-size: 1.4rem;
                    color: var(--primary);
                    content: 'check_circle';
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                label {
                    cursor: pointer;
                    display: block;
                    width: 100%;
                    padding: 12px;
                    text-align: center;
                    color: var(--on-surface);
                    background-color: var(--surface-container);
                    border: 1px solid var(--outline);
                    border-radius: var(--border-radius-circle);
                    box-sizing: border-box;
                }

                button[type="submit"] {
                    font-family: 'Inter', Arial, Helvetica, sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    width: 100%;
                    border-radius: var(--border-radius-circle);
                    padding: 12px;
                    border: 1px solid transparent;
                    box-sizing: border-box;

                    &:hover {
                        opacity: 0.8;
                    }
                }

                button.primary-btn {
                    color: var(--on-primary);
                    background-color: var(--primary);
                }

                button.secondary-btn {
                    color: var(--on-primary-container);
                    background-color: var(--primary-container);
                }

                .buttons-section {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            </style>
            `}setup(){this.onSubmit()}onSubmit(){const r=this.shadowRoot.querySelector("form");r&&r.addEventListener("submit",n=>{n.preventDefault();const e=new FormData(r);if(e.getAll("a11y").length===0)window.location.href="./webapp/";else{let l="?"+e.getAll("a11y").map(s=>`user=${s}`).join("&");window.location.href=`./webapp-vi/${l}`}})}}customElements.define("page-onboard",p);
