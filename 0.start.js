(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./pkg/zkif-wasm-bulletproofs sync recursive":
/*!*****************************************!*\
  !*** ./pkg/zkif-wasm-bulletproofs sync ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./pkg/zkif-wasm-bulletproofs sync recursive\";\n\n//# sourceURL=webpack:///./pkg/zkif-wasm-bulletproofs_sync?");

/***/ }),

/***/ "./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs.js":
/*!**************************************************************!*\
  !*** ./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs.js ***!
  \**************************************************************/
/*! exports provided: start, prove, verify, __wbg_new_3a746f2619705add, __wbg_call_f54d3a6dadb199ca, __wbg_self_ac379e780a0d8b94, __wbg_crypto_1e4302b85d4f64a2, __wbg_getRandomValues_1b4ba144162a5c9e, __wbg_getRandomValues_1ef11e888e5228e9, __wbg_require_6461b1e9a0d7c34a, __wbg_randomFillSync_1b52c8482374c55b, __wbindgen_is_undefined, __wbindgen_jsval_eq, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prove\", function() { return prove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verify\", function() { return verify; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_3a746f2619705add\", function() { return __wbg_new_3a746f2619705add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_f54d3a6dadb199ca\", function() { return __wbg_call_f54d3a6dadb199ca; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_ac379e780a0d8b94\", function() { return __wbg_self_ac379e780a0d8b94; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_1e4302b85d4f64a2\", function() { return __wbg_crypto_1e4302b85d4f64a2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1b4ba144162a5c9e\", function() { return __wbg_getRandomValues_1b4ba144162a5c9e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_1ef11e888e5228e9\", function() { return __wbg_getRandomValues_1ef11e888e5228e9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_6461b1e9a0d7c34a\", function() { return __wbg_require_6461b1e9a0d7c34a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_1b52c8482374c55b\", function() { return __wbg_randomFillSync_1b52c8482374c55b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_jsval_eq\", function() { return __wbindgen_jsval_eq; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zkif_wasm_bulletproofs_bg */ \"./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs_bg.wasm\");\n\n\n/**\n* @returns {void}\n*/\nfunction start() {\n    return _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* Prove using the circuit and the witness.\n* @param {Uint8Array} circuit\n* @param {Uint8Array} witness\n* @returns {Uint8Array}\n*/\nfunction prove(circuit, witness) {\n    const ptr0 = passArray8ToWasm(circuit);\n    const len0 = WASM_VECTOR_LEN;\n    const ptr1 = passArray8ToWasm(witness);\n    const len1 = WASM_VECTOR_LEN;\n    const retptr = globalArgumentPtr();\n    try {\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"prove\"](retptr, ptr0, len0, ptr1, len1);\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr1, len1 * 1);\n\n    }\n\n}\n\n/**\n* Verify using the circuit and the proof.\n* @param {Uint8Array} circuit\n* @param {Uint8Array} inputs\n* @param {Uint8Array} proof_ser\n* @returns {boolean}\n*/\nfunction verify(circuit, inputs, proof_ser) {\n    const ptr0 = passArray8ToWasm(circuit);\n    const len0 = WASM_VECTOR_LEN;\n    const ptr1 = passArray8ToWasm(inputs);\n    const len1 = WASM_VECTOR_LEN;\n    const ptr2 = passArray8ToWasm(proof_ser);\n    const len2 = WASM_VECTOR_LEN;\n    try {\n        return (_zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"verify\"](ptr0, len0, ptr1, len1, ptr2, len2)) !== 0;\n\n    } finally {\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr1, len1 * 1);\n        _zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr2, len2 * 1);\n\n    }\n\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbg_new_3a746f2619705add(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __wbg_call_f54d3a6dadb199ca(arg0, arg1) {\n    return addHeapObject(getObject(arg0).call(getObject(arg1)));\n}\n\nfunction __wbg_self_ac379e780a0d8b94(arg0) {\n    return addHeapObject(getObject(arg0).self);\n}\n\nfunction __wbg_crypto_1e4302b85d4f64a2(arg0) {\n    return addHeapObject(getObject(arg0).crypto);\n}\n\nfunction __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {\n    return addHeapObject(getObject(arg0).getRandomValues);\n}\n\nfunction __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).getRandomValues(varg1);\n}\n\nfunction __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(__webpack_require__(\"./pkg/zkif-wasm-bulletproofs sync recursive\")(varg0));\n}\n\nfunction __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {\n    let varg1 = getArrayU8FromWasm(arg1, arg2);\n    getObject(arg0).randomFillSync(varg1);\n}\n\nfunction __wbindgen_is_undefined(i) { return getObject(i) === undefined ? 1 : 0; }\n\nfunction __wbindgen_jsval_eq(a, b) { return getObject(a) === getObject(b) ? 1 : 0; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_zkif_wasm_bulletproofs_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n\n//# sourceURL=webpack:///./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs.js?");

/***/ }),

/***/ "./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs_bg.wasm":
/*!*******************************************************************!*\
  !*** ./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs_bg.wasm ***!
  \*******************************************************************/
/*! exports provided: memory, start, __wbindgen_global_argument_ptr, prove, verify, __wbindgen_malloc, __wbindgen_free, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./zkif_wasm_bulletproofs */ \"./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs_bg.wasm?");

/***/ }),

/***/ "./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates.js":
/*!******************************************************!*\
  !*** ./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates.js ***!
  \******************************************************/
/*! exports provided: make_constraint_system, make_witness, parse_verifier_msg, pretty, start, __wbindgen_json_parse, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"make_constraint_system\", function() { return make_constraint_system; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"make_witness\", function() { return make_witness; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse_verifier_msg\", function() { return parse_verifier_msg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pretty\", function() { return pretty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zkif_wasm_zokrates_bg */ \"./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates_bg.wasm\");\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n        let size = arg.length;\n        let ptr = _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let writeOffset = 0;\n        while (true) {\n            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);\n            const { read, written } = cachedTextEncoder.encodeInto(arg, view);\n            writeOffset += written;\n            if (read === arg.length) {\n                break;\n            }\n            arg = arg.substring(read);\n            ptr = _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size += arg.length * 3);\n        }\n        WASM_VECTOR_LEN = writeOffset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n        getUint8Memory().set(buf, ptr);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    };\n}\n\nfunction getArrayU8FromWasm(ptr, len) {\n    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* Generate a constraint system.\n* @param {string} code\n* @returns {Uint8Array}\n*/\nfunction make_constraint_system(code) {\n    const ptr0 = passStringToWasm(code);\n    const len0 = WASM_VECTOR_LEN;\n    const retptr = globalArgumentPtr();\n    try {\n        _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"make_constraint_system\"](retptr, ptr0, len0);\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();\n        _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n        return realRet;\n\n\n    } finally {\n        _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n/**\n* Generate a witness.\n* Return (data for prover, data for verifier).\n* @param {string} code\n* @param {number} x\n* @param {number} y\n* @returns {any}\n*/\nfunction make_witness(code, x, y) {\n    const ptr0 = passStringToWasm(code);\n    const len0 = WASM_VECTOR_LEN;\n    try {\n        return takeObject(_zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"make_witness\"](ptr0, len0, x, y));\n\n    } finally {\n        _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n* @param {Uint8Array} verifier_msg\n* @returns {any}\n*/\nfunction parse_verifier_msg(verifier_msg) {\n    const ptr0 = passArray8ToWasm(verifier_msg);\n    const len0 = WASM_VECTOR_LEN;\n    try {\n        return takeObject(_zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"parse_verifier_msg\"](ptr0, len0));\n\n    } finally {\n        _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr0, len0 * 1);\n\n    }\n\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n* @param {Uint8Array} msg\n* @returns {string}\n*/\nfunction pretty(msg) {\n    const ptr0 = passArray8ToWasm(msg);\n    const len0 = WASM_VECTOR_LEN;\n    const retptr = globalArgumentPtr();\n    _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"pretty\"](retptr, ptr0, len0);\n    const mem = getUint32Memory();\n    const rustptr = mem[retptr / 4];\n    const rustlen = mem[retptr / 4 + 1];\n\n    const realRet = getStringFromWasm(rustptr, rustlen).slice();\n    _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n    return realRet;\n\n}\n\n/**\n* @returns {void}\n*/\nfunction start() {\n    return _zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbindgen_json_parse(ptr, len) { return addHeapObject(JSON.parse(getStringFromWasm(ptr, len))); }\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_zkif_wasm_zokrates_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n\n//# sourceURL=webpack:///./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates.js?");

/***/ }),

/***/ "./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates_bg.wasm":
/*!***********************************************************!*\
  !*** ./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates_bg.wasm ***!
  \***********************************************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, make_constraint_system, make_witness, parse_verifier_msg, pretty, start, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./zkif_wasm_zokrates */ \"./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates_bg.wasm?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pkg/zkif-wasm-zokrates */ \"./pkg/zkif-wasm-zokrates/zkif_wasm_zokrates.js\");\n/* harmony import */ var _pkg_zkif_wasm_bulletproofs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkg/zkif-wasm-bulletproofs */ \"./pkg/zkif-wasm-bulletproofs/zkif_wasm_bulletproofs.js\");\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror */ \"./node_modules/codemirror/lib/codemirror.js\");\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n// Common program.\nlet code = `\ndef main(field x, private field y) -> (field):\n    field xx = x * x\n    field yy = y * y\n    return xx + yy - 1\n`;\n\n// document.getElementById(\"program\").innerText = code.trim();\n\nconst textArea = document.getElementById(\"program\");\n\nfunction myFunction() {\n    alert(\"I am an alert box!\");\n};\n\nvar editor = codemirror__WEBPACK_IMPORTED_MODULE_2___default.a.fromTextArea(textArea, {\n    lineNumbers: true,\n    value: code,\n    theme: \"3024-day\"\n});\n\neditor.on('change', function () {\n    html = editor.getValue();\n    alert(html);\n});\n\n//editor.onkeyup =  function() {myFunction()};\n// editor.setValue(code);\n\n\n// Compile the code to ZkInterface constraints with the ZoKrates module.\nlet constraints = _pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"make_constraint_system\"](code);\ndocument.getElementById(\"cs\").innerText = _pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"pretty\"](constraints).trim();\n\n// Prover's View.\n\n// Compute the ZkInterface witness with the ZoKrates module.\nlet x = 3, y = 4;\nlet {prover_msg, verifier_msg} = _pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"make_witness\"](code, x, y);\n\n// Generate a proof with the Bulletproofs module.\nlet proof = _pkg_zkif_wasm_bulletproofs__WEBPACK_IMPORTED_MODULE_1__[\"prove\"](constraints, prover_msg);\n\n// Display.\ndocument.getElementById(\"prover\").innerText = `\nx = ${x}, y = ${y}\n${_pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"pretty\"](prover_msg)}\n`.trim();\n\n// Prover sends verifier_msg and proof to the verifier.\ndocument.getElementById(\"verifier\").innerText = `\n${_pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"pretty\"](verifier_msg)}\nVerifying proof (${proof.length} bytes)\n`.trim();\n\n// Verify the proof using the Bulletproofs module and the messages.\nlet verif = _pkg_zkif_wasm_bulletproofs__WEBPACK_IMPORTED_MODULE_1__[\"verify\"](constraints, verifier_msg, proof);\n\n// Display what we verified.\nfunction statement(msg) {\n    let public_inputs = _pkg_zkif_wasm_zokrates__WEBPACK_IMPORTED_MODULE_0__[\"parse_verifier_msg\"](msg);\n    let x = public_inputs[1][0];\n    let zz = public_inputs[2][0];\n    return `${x}^2 + y^2 = ${zz}`\n}\n\nlet status = `The statement is ${verif && \"proven\" || \"NOT proven\"}:  ${statement(verifier_msg)}`;\ndocument.getElementById(\"status\").innerText = status;\n\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ })

}]);