(this["webpackJsonpfinance-calc"]=this["webpackJsonpfinance-calc"]||[]).push([[0],{17:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(11),s=n.n(i),u=(n(17),n(3)),c=n(6),l=n(9),o=n.n(l),m=[{ttl:"Profit",alg:function(t,e){return t-e},mth:"\\text{Revenue} - \\text{Expenses}",args:["Revenue","Expenses"],unit:"$"},{ttl:"Total Assets",alg:function(t,e){return t+e},mth:"\\text{Liabilities} + \\text{Equity}",args:["Liabilities","Equity"],unit:"$"},{ttl:"Net Working Capital",alg:function(t,e){return t-e},mth:"\\text{Assets} - \\text{Liabilities}",args:["Assets","Liabilities"],unit:"$"},{ttl:"Change in Cash Balance",alg:function(t,e){return t-e},mth:"\\text{Ending Balance} - \\text{Beginning Balance}",args:["Ending","Beginning"],unit:"$"},{ttl:"Simple Interest for One Period",alg:function(t,e){return t*e},mth:"PV_0 \\times i",args:["Present Value","Interest Rate"],unit:"$"},{ttl:"Future Value using Simple Interest",alg:function(t,e,n){return t*(1+e*n)},mth:"PV\\left(1+in\\right)",args:["Present Value","Interest Rate","Periods"],unit:"$"},{ttl:"Present Value using Simple Interest",alg:function(t,e,n){return t*(1/(1+e*n))},mth:"FV_n \\times \\frac{1}{1+in}",args:["Future Value","Interest Rate","Periods"],unit:"$"},{ttl:"Future Value using Compound Interest",alg:function(t,e,n,r){return t*Math.pow(1+e/n,n*r)},mth:"PV \\left(1+\\frac{i}{m} \\right) ^{m \\times n}",args:["Present Value","Annual Interest Rate","Compounding Periods per Year","Years"],unit:"$"},{ttl:"Present Value using Compound Interest",alg:function(t,e,n,r){return t*(1/Math.pow(1+e/n,n))},mth:"FV_n \\times \\frac{1}{\\left(1+\\frac{i}{m}\\right)^{m\\times n}}",args:["Future Value","Annual Interest Rate","Compounding Periods per Year","Years"],unit:"$"}],f=n(12),g=n(5),j=n(7),b=n(0),d=new Intl.NumberFormat("en-AU"),h=new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD"}),O=function(t,e){switch(e){case"days":return d.format(t)+" days";case"$":default:return h.format(t)}},p=function(t){var e,n={},a=Object(c.a)(t.args);try{for(a.s();!(e=a.n()).done;){n[e.value]=0}}catch(v){a.e(v)}finally{a.f()}var i=Object(r.useReducer)((function(t,e){return Object(u.a)(Object(u.a)({},t),e)}),n),s=Object(j.a)(i,2),l=s[0],o=s[1],m=Object(r.useState)(0),d=Object(j.a)(m,2),h=d[0],p=d[1],x=function(t){o(Object(g.a)({},t.target.name,Number(t.target.value)))};return Object(r.useEffect)((function(){console.log(l),p(t.alg.apply(t,Object(f.a)(Object.values(l))))}),[l]),Object(b.jsxs)("div",{className:"formula-inputs",children:[Object.entries(l).map((function(t){var e=Object(j.a)(t,2),n=e[0],r=e[1];return Object(b.jsxs)("div",{className:"formula-inbox",children:[Object(b.jsx)("label",{htmlFor:n,children:n}),Object(b.jsx)("input",{type:"number",pattern:"[0-9]*",name:n,value:r,onChange:x,onFocus:function(t){return t.target.select()}})]},n)})),Object(b.jsx)("p",{className:"formula-result",children:O(h,t.unit)})]})},x=(n(23),function(t){return Object(b.jsxs)("div",{className:"Formula-Box",children:[Object(b.jsx)("h2",{className:"formula-content",children:t.ttl}),Object(b.jsx)(o.a.Provider,{children:Object(b.jsx)(o.a.Node,{formula:t.mth})}),Object(b.jsx)(p,{alg:t.alg,args:t.args,unit:t.unit})]})}),v=function(t){var e,n=[],r=Object(c.a)(t.frms);try{for(r.s();!(e=r.n()).done;){var a=e.value;n.push(Object(b.jsx)(x,Object(u.a)({},a),a.ttl))}}catch(i){r.e(i)}finally{r.f()}return Object(b.jsx)("div",{className:"Formula-Grid",children:n})};var P=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{frms:m})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),i(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),F()}},[[24,1,2]]]);
//# sourceMappingURL=main.6775b65d.chunk.js.map