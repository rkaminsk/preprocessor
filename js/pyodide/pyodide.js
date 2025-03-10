"use strict";var loadPyodide=(()=>{var ne=Object.create;var I=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var a=(e,t)=>I(e,"name",{value:t,configurable:!0}),f=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var se=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})},$=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of oe(t))!ae.call(e,s)&&s!==r&&I(e,s,{get:()=>t[s],enumerable:!(o=re(t,s))||o.enumerable});return e};var b=(e,t,r)=>(r=e!=null?ne(ie(e)):{},$(t||!e||!e.__esModule?I(r,"default",{value:e,enumerable:!0}):r,e)),ce=e=>$(I({},"__esModule",{value:!0}),e);var xe={};se(xe,{loadPyodide:()=>B,version:()=>O});function le(e){return!isNaN(parseFloat(e))&&isFinite(e)}a(le,"_isNumber");function w(e){return e.charAt(0).toUpperCase()+e.substring(1)}a(w,"_capitalize");function L(e){return function(){return this[e]}}a(L,"_getter");var _=["isConstructor","isEval","isNative","isToplevel"],R=["columnNumber","lineNumber"],F=["fileName","functionName","source"],de=["args"],ue=["evalOrigin"],k=_.concat(R,F,de,ue);function p(e){if(e)for(var t=0;t<k.length;t++)e[k[t]]!==void 0&&this["set"+w(k[t])](e[k[t]])}a(p,"StackFrame");p.prototype={getArgs:a(function(){return this.args},"getArgs"),setArgs:a(function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},"setArgs"),getEvalOrigin:a(function(){return this.evalOrigin},"getEvalOrigin"),setEvalOrigin:a(function(e){if(e instanceof p)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new p(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},"setEvalOrigin"),toString:a(function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",r=this.getColumnNumber()||"",o=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+r+")":"[eval]:"+t+":"+r:o?o+" ("+e+":"+t+":"+r+")":e+":"+t+":"+r},"toString")};p.fromString=a(function(t){var r=t.indexOf("("),o=t.lastIndexOf(")"),s=t.substring(0,r),n=t.substring(r+1,o).split(","),i=t.substring(o+1);if(i.indexOf("@")===0)var c=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),l=c[1],d=c[2],u=c[3];return new p({functionName:s,args:n||void 0,fileName:l,lineNumber:d||void 0,columnNumber:u||void 0})},"StackFrame$$fromString");for(h=0;h<_.length;h++)p.prototype["get"+w(_[h])]=L(_[h]),p.prototype["set"+w(_[h])]=function(e){return function(t){this[e]=!!t}}(_[h]);var h;for(E=0;E<R.length;E++)p.prototype["get"+w(R[E])]=L(R[E]),p.prototype["set"+w(R[E])]=function(e){return function(t){if(!le(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(R[E]);var E;for(S=0;S<F.length;S++)p.prototype["get"+w(F[S])]=L(F[S]),p.prototype["set"+w(F[S])]=function(e){return function(t){this[e]=String(t)}}(F[S]);var S,A=p;function fe(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:a(function(o){if(o.stack&&o.stack.match(e))return this.parseV8OrIE(o);if(o.stack)return this.parseFFOrSafari(o);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:a(function(o){if(o.indexOf(":")===-1)return[o];var s=/(.+?)(?::(\d+))?(?::(\d+))?$/,n=s.exec(o.replace(/[()]/g,""));return[n[1],n[2]||void 0,n[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:a(function(o){var s=o.stack.split(`
`).filter(function(n){return!!n.match(e)},this);return s.map(function(n){n.indexOf("(eval ")>-1&&(n=n.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=n.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),c=i.match(/ (\(.+\)$)/);i=c?i.replace(c[0],""):i;var l=this.extractLocation(c?c[1]:i),d=c&&i||void 0,u=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new A({functionName:d,fileName:u,lineNumber:l[1],columnNumber:l[2],source:n})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:a(function(o){var s=o.stack.split(`
`).filter(function(n){return!n.match(t)},this);return s.map(function(n){if(n.indexOf(" > eval")>-1&&(n=n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),n.indexOf("@")===-1&&n.indexOf(":")===-1)return new A({functionName:n});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,c=n.match(i),l=c&&c[1]?c[1]:void 0,d=this.extractLocation(n.replace(i,""));return new A({functionName:l,fileName:d[0],lineNumber:d[1],columnNumber:d[2],source:n})},this)},"ErrorStackParser$$parseFFOrSafari")}}a(fe,"ErrorStackParser");var me=new fe;var j=me;var y=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&!process.browser,T=y&&typeof module<"u"&&typeof module.exports<"u"&&typeof f<"u"&&typeof __dirname<"u",H=y&&!T,Te=typeof globalThis.Bun<"u",pe=typeof Deno<"u",V=!y&&!pe,z=V&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&"sessionStorage"in window&&typeof importScripts!="function",q=V&&typeof importScripts=="function"&&typeof self=="object",Ue=typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var K,U,Y,J,M;async function C(){if(!y||(K=(await import(/* webpackIgnore */"node:url")).default,J=await import(/* webpackIgnore */"node:fs"),M=await import(/* webpackIgnore */"node:fs/promises"),Y=(await import(/* webpackIgnore */"node:vm")).default,U=await import(/* webpackIgnore */"node:path"),W=U.sep,typeof f<"u"))return;let e=J,t=await import(/* webpackIgnore */"node:crypto"),r=await import(/* webpackIgnore */"ws"),o=await import(/* webpackIgnore */"node:child_process"),s={fs:e,crypto:t,ws:r,child_process:o};globalThis.require=function(n){return s[n]}}a(C,"initNodeModules");function ge(e,t){return U.resolve(t||".",e)}a(ge,"node_resolvePath");function ye(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}a(ye,"browser_resolvePath");var D;y?D=ge:D=ye;var W;y||(W="/");function be(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:M.readFile(e).then(r=>new Uint8Array(r.buffer,r.byteOffset,r.byteLength))}}a(be,"node_getBinaryResponse");function ve(e,t){let r=new URL(e,location);return{response:fetch(r,t?{integrity:t}:{})}}a(ve,"browser_getBinaryResponse");var P;y?P=be:P=ve;async function G(e,t){let{response:r,binary:o}=P(e,t);if(o)return o;let s=await r;if(!s.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await s.arrayBuffer())}a(G,"loadBinaryFile");var x;if(z)x=a(async e=>await import(/* webpackIgnore */e),"loadScript");else if(q)x=a(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(/* webpackIgnore */e);else throw t}},"loadScript");else if(y)x=he;else throw new Error("Cannot determine runtime environment");async function he(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?Y.runInThisContext(await(await fetch(e)).text()):await import(/* webpackIgnore */K.pathToFileURL(e).href)}a(he,"nodeLoadScript");async function X(e){if(y){await C();let t=await M.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}a(X,"loadLockFile");async function Q(){if(T)return __dirname;let e;try{throw new Error}catch(o){e=o}let t=j.parse(e)[0].fileName;if(y&&!t.startsWith("file://")&&(t=`file://${t}`),H){let o=await import(/* webpackIgnore */"node:path");return(await import(/* webpackIgnore */"node:url")).fileURLToPath(o.dirname(t))}let r=t.lastIndexOf(W);if(r===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,r)}a(Q,"calculateDirname");function Z(e){let t=e.FS,r=e.FS.filesystems.MEMFS,o=e.PATH,s={DIR_MODE:16895,FILE_MODE:33279,mount:a(function(n){if(!n.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return r.mount.apply(null,arguments)},"mount"),syncfs:a(async(n,i,c)=>{try{let l=s.getLocalSet(n),d=await s.getRemoteSet(n),u=i?d:l,g=i?l:d;await s.reconcile(n,u,g),c(null)}catch(l){c(l)}},"syncfs"),getLocalSet:a(n=>{let i=Object.create(null);function c(u){return u!=="."&&u!==".."}a(c,"isRealDir");function l(u){return g=>o.join2(u,g)}a(l,"toAbsolute");let d=t.readdir(n.mountpoint).filter(c).map(l(n.mountpoint));for(;d.length;){let u=d.pop(),g=t.stat(u);t.isDir(g.mode)&&d.push.apply(d,t.readdir(u).filter(c).map(l(u))),i[u]={timestamp:g.mtime,mode:g.mode}}return{type:"local",entries:i}},"getLocalSet"),getRemoteSet:a(async n=>{let i=Object.create(null),c=await Ee(n.opts.fileSystemHandle);for(let[l,d]of c)l!=="."&&(i[o.join2(n.mountpoint,l)]={timestamp:d.kind==="file"?(await d.getFile()).lastModifiedDate:new Date,mode:d.kind==="file"?s.FILE_MODE:s.DIR_MODE});return{type:"remote",entries:i,handles:c}},"getRemoteSet"),loadLocalEntry:a(n=>{let c=t.lookupPath(n).node,l=t.stat(n);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return c.contents=r.getFileDataAsTypedArray(c),{timestamp:l.mtime,mode:l.mode,contents:c.contents};throw new Error("node type not supported")},"loadLocalEntry"),storeLocalEntry:a((n,i)=>{if(t.isDir(i.mode))t.mkdirTree(n,i.mode);else if(t.isFile(i.mode))t.writeFile(n,i.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(n,i.mode),t.utime(n,i.timestamp,i.timestamp)},"storeLocalEntry"),removeLocalEntry:a(n=>{var i=t.stat(n);t.isDir(i.mode)?t.rmdir(n):t.isFile(i.mode)&&t.unlink(n)},"removeLocalEntry"),loadRemoteEntry:a(async n=>{if(n.kind==="file"){let i=await n.getFile();return{contents:new Uint8Array(await i.arrayBuffer()),mode:s.FILE_MODE,timestamp:i.lastModifiedDate}}else{if(n.kind==="directory")return{mode:s.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+n.kind)}},"loadRemoteEntry"),storeRemoteEntry:a(async(n,i,c)=>{let l=n.get(o.dirname(i)),d=t.isFile(c.mode)?await l.getFileHandle(o.basename(i),{create:!0}):await l.getDirectoryHandle(o.basename(i),{create:!0});if(d.kind==="file"){let u=await d.createWritable();await u.write(c.contents),await u.close()}n.set(i,d)},"storeRemoteEntry"),removeRemoteEntry:a(async(n,i)=>{await n.get(o.dirname(i)).removeEntry(o.basename(i)),n.delete(i)},"removeRemoteEntry"),reconcile:a(async(n,i,c)=>{let l=0,d=[];Object.keys(i.entries).forEach(function(m){let v=i.entries[m],N=c.entries[m];(!N||t.isFile(v.mode)&&v.timestamp.getTime()>N.timestamp.getTime())&&(d.push(m),l++)}),d.sort();let u=[];if(Object.keys(c.entries).forEach(function(m){i.entries[m]||(u.push(m),l++)}),u.sort().reverse(),!l)return;let g=i.type==="remote"?i.handles:c.handles;for(let m of d){let v=o.normalize(m.replace(n.mountpoint,"/")).substring(1);if(c.type==="local"){let N=g.get(v),te=await s.loadRemoteEntry(N);s.storeLocalEntry(m,te)}else{let N=s.loadLocalEntry(m);await s.storeRemoteEntry(g,v,N)}}for(let m of u)if(c.type==="local")s.removeLocalEntry(m);else{let v=o.normalize(m.replace(n.mountpoint,"/")).substring(1);await s.removeRemoteEntry(g,v)}},"reconcile")};e.FS.filesystems.NATIVEFS_ASYNC=s}a(Z,"initializeNativeFS");var Ee=a(async e=>{let t=[];async function r(s){for await(let n of s.values())t.push(n),n.kind==="directory"&&await r(n)}a(r,"collect"),await r(e);let o=new Map;o.set(".",e);for(let s of t){let n=(await e.resolve(s)).join("/");o.set(n,s)}return o},"getFsHandles");function ee(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:Fe(e),print:e.stdout,printErr:e.stderr,onExit(r){t.exitCode=r},thisProgram:e._sysExecutable,arguments:e.args,API:{config:e},locateFile:a(r=>e.indexURL+r,"locateFile"),instantiateWasm:Ie(e.indexURL)};return t}a(ee,"createSettings");function Se(e){return function(t){let r="/";try{t.FS.mkdirTree(e)}catch(o){console.error(`Error occurred while making a home directory '${e}':`),console.error(o),console.error(`Using '${r}' for a home directory instead`),e=r}t.FS.chdir(e)}}a(Se,"createHomeDirectory");function we(e){return function(t){Object.assign(t.ENV,e)}}a(we,"setEnvironment");function Ne(e){return t=>{for(let r of e)t.FS.mkdirTree(r),t.FS.mount(t.FS.filesystems.NODEFS,{root:r},r)}}a(Ne,"mountLocalDirectories");function _e(e){let t=e.HEAPU32[e._Py_Version>>>2],r=t>>>24&255,o=t>>>16&255,s=t>>>8&255;return[r,o,s]}a(_e,"computeVersionTuple");function Re(e){let t=G(e);return r=>{r.API.pyVersionTuple=_e(r);let[o,s]=r.API.pyVersionTuple;r.FS.mkdirTree("/lib"),r.FS.mkdirTree(`/lib/python${o}.${s}/site-packages`),r.addRunDependency("install-stdlib"),t.then(n=>{r.FS.writeFile(`/lib/python${o}${s}.zip`,n)}).catch(n=>{console.error("Error occurred while installing the standard library:"),console.error(n)}).finally(()=>{r.removeRunDependency("install-stdlib")})}}a(Re,"installStdlib");function Fe(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[Re(t),Se(e.env.HOME),we(e.env),Ne(e._node_mounts),Z]}a(Fe,"getFileSystemInitializationFuncs");function Ie(e){if(typeof WasmOffsetConverter<"u")return;let{binary:t,response:r}=P(e+"pyodide.asm.wasm");return function(o,s){return async function(){try{let n;r?n=await WebAssembly.instantiateStreaming(r,o):n=await WebAssembly.instantiate(await t,o);let{instance:i,module:c}=n;s(i,c)}catch(n){console.warn("wasm instantiation failed!"),console.warn(n)}}(),{}}}a(Ie,"getInstantiateWasmFunc");var O="0.28.0.dev0";async function B(e={}){await C();let t=e.indexURL||await Q();t=D(t),t.endsWith("/")||(t+="/"),e.indexURL=t;let r={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:t+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:t,packages:[],enableRunUntilComplete:!1,checkAPIVersion:!0,BUILD_ID:"fafb2dc7ba763397e5e53fdcac4536ac6cab84bc589f81727908efb55def1207"},o=Object.assign(r,e);o.env.HOME??="/home/pyodide",o.env.PYTHONINSPECT??="1";let s=ee(o),n=s.API;if(n.lockFilePromise=X(o.lockFileURL),typeof _createPyodideModule!="function"){let u=`${o.indexURL}pyodide.asm.js`;await x(u)}let i;if(e._loadSnapshot){let u=await e._loadSnapshot;ArrayBuffer.isView(u)?i=u:i=new Uint8Array(u),s.noInitialRun=!0,s.INITIAL_MEMORY=i.length}let c=await _createPyodideModule(s);if(s.exitCode!==void 0)throw new c.ExitStatus(s.exitCode);if(e.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),n.version!==O&&o.checkAPIVersion)throw new Error(`Pyodide version does not match: '${O}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);c.locateFile=u=>{throw new Error("Didn't expect to load any more file_packager files!")};let l;i&&(l=n.restoreSnapshot(i));let d=n.finalizeBootstrap(l,e._snapshotDeserializer);return n.sys.path.insert(0,n.config.env.HOME),d.version.includes("dev")||n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d.version}/full/`),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(o.stdin,o.stdout,o.stderr),d}a(B,"loadPyodide");globalThis.loadPyodide=B;return ce(xe);})();
try{Object.assign(exports,loadPyodide)}catch(_){}
globalThis.loadPyodide=loadPyodide.loadPyodide;
//# sourceMappingURL=pyodide.js.map
